#!/usr/bin/env node

/**
 * Sentry Error Tracking Setup
 * 
 * Configures Sentry for automatic error capture
 */

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function setupSentry() {
  console.log(chalk.cyan.bold('\n🔴 Sentry Error Tracking Setup\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'dsn',
      message: 'Sentry DSN (from sentry.io project settings):',
      validate: input => input.length > 0 || 'DSN required'
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Framework:',
      choices: ['Next.js', 'React', 'Node.js', 'Express']
    },
    {
      type: 'number',
      name: 'sampleRate',
      message: 'Error sample rate (0-1):',
      default: 1.0
    }
  ]);

  const configs = {
    'Next.js': `// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: '${answers.dsn}',
  tracesSampleRate: ${answers.sampleRate},
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
`,
    'React': `// src/sentry.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: '${answers.dsn}',
  tracesSampleRate: ${answers.sampleRate},
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ],
});
`,
    'Node.js': `// sentry.js
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: '${answers.dsn}',
  tracesSampleRate: ${answers.sampleRate},
  environment: process.env.NODE_ENV,
});
`,
    'Express': `// sentry.js
import * as Sentry from '@sentry/node';
import express from 'express';

const app = express();

Sentry.init({
  dsn: '${answers.dsn}',
  tracesSampleRate: ${answers.sampleRate},
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
  ],
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// ... your routes ...

app.use(Sentry.Handlers.errorHandler());
`
  };

  const configFile = answers.framework === 'Next.js' ? 'sentry.client.config.ts' : 
                     answers.framework === 'React' ? 'src/sentry.ts' : 'sentry.js';

  await fs.writeFile(configFile, configs[answers.framework]);

  // Update .env
  let envContent = '';
  if (await fs.pathExists('.env')) {
    envContent = await fs.readFile('.env', 'utf-8') + '\n';
  }
  
  if (!envContent.includes('SENTRY_DSN')) {
    envContent += `\n# Sentry Error Tracking\nSENTRY_DSN=${answers.dsn}\n`;
    await fs.writeFile('.env', envContent);
  }

  console.log(chalk.green('\n✅ Sentry configuration created!\n'));
  console.log(chalk.white(`File: ${configFile}\n`));
  console.log(chalk.cyan('Next steps:'));
  console.log(chalk.white('1. Install: pnpm add @sentry/nextjs (or @sentry/react, @sentry/node)'));
  console.log(chalk.white('2. Import in your app entry point'));
  console.log(chalk.white('3. Deploy and errors will be captured automatically!\n'));
}

setupSentry().catch(console.error);

