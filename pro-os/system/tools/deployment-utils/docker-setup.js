#!/usr/bin/env node

/**
 * Docker Setup Generator
 * 
 * Creates Dockerfile and docker-compose.yml
 */

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function generateDockerFiles() {
  console.log(chalk.cyan.bold('\n🐳 Docker Setup Generator\n'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'runtime',
      message: 'Runtime:',
      choices: ['Node.js', 'Python', 'Go', 'Rust']
    },
    {
      type: 'number',
      name: 'port',
      message: 'Application port:',
      default: 3000
    },
    {
      type: 'confirm',
      name: 'database',
      message: 'Include database service?',
      default: false
    },
    {
      type: 'list',
      name: 'dbType',
      message: 'Database type:',
      choices: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      when: (answers) => answers.database
    }
  ]);

  // Generate Dockerfile
  const dockerfiles = {
    'Node.js': `FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application
COPY . .

# Build
RUN npm run build

EXPOSE ${answers.port}

CMD ["npm", "start"]
`,
    'Python': `FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE ${answers.port}

CMD ["python", "app.py"]
`,
    'Go': `FROM golang:1.21 AS builder

WORKDIR /app
COPY . .
RUN go build -o main .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .

EXPOSE ${answers.port}

CMD ["./main"]
`,
    'Rust': `FROM rust:1.74 AS builder

WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
COPY --from=builder /app/target/release/app /usr/local/bin/app

EXPOSE ${answers.port}

CMD ["app"]
`
  };

  await fs.writeFile('Dockerfile', dockerfiles[answers.runtime]);

  // Generate docker-compose.yml
  const composeConfig = {
    version: '3.8',
    services: {
      app: {
        build: '.',
        ports: [`${answers.port}:${answers.port}`],
        environment: {
          NODE_ENV: 'production'
        }
      }
    }
  };

  if (answers.database) {
    const dbConfigs = {
      'PostgreSQL': {
        image: 'postgres:16-alpine',
        environment: {
          POSTGRES_PASSWORD: 'password',
          POSTGRES_DB: 'app'
        },
        ports: ['5432:5432'],
        volumes: ['postgres_data:/var/lib/postgresql/data']
      },
      'MySQL': {
        image: 'mysql:8',
        environment: {
          MYSQL_ROOT_PASSWORD: 'password',
          MYSQL_DATABASE: 'app'
        },
        ports: ['3306:3306'],
        volumes: ['mysql_data:/var/lib/mysql']
      },
      'MongoDB': {
        image: 'mongo:7',
        ports: ['27017:27017'],
        volumes: ['mongo_data:/data/db']
      },
      'Redis': {
        image: 'redis:7-alpine',
        ports: ['6379:6379'],
        volumes: ['redis_data:/data']
      }
    };

    composeConfig.services.db = dbConfigs[answers.dbType];
    composeConfig.volumes = {};
    composeConfig.volumes[`${answers.dbType.toLowerCase()}_data`] = {};
  }

  await fs.writeFile('docker-compose.yml', 
    '# Docker Compose Configuration\n' + 
    JSON.stringify(composeConfig, null, 2).replace(/"([^"]+)":/g, '$1:')
  );

  // Generate .dockerignore
  const dockerignore = `node_modules
npm-debug.log
.git
.env
.DS_Store
dist
build
coverage
`;
  await fs.writeFile('.dockerignore', dockerignore);

  console.log(chalk.green('\n✅ Docker files created!\n'));
  console.log(chalk.white('Created:'));
  console.log(chalk.white('  - Dockerfile'));
  console.log(chalk.white('  - docker-compose.yml'));
  console.log(chalk.white('  - .dockerignore\n'));
  console.log(chalk.cyan('To run:'));
  console.log(chalk.white('  docker-compose up --build\n'));
}

generateDockerFiles().catch(console.error);

