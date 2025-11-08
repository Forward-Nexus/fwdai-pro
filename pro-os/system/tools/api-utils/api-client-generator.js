#!/usr/bin/env node

/**
 * API Client Generator
 * 
 * Generates type-safe API clients from OpenAPI/Swagger specifications
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function generateClient() {
  console.log(chalk.cyan.bold('\n🔌 API Client Generator\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'specUrl',
      message: 'OpenAPI spec URL or file path:',
      validate: input => input.length > 0 || 'Spec URL/path required'
    },
    {
      type: 'input',
      name: 'outputDir',
      message: 'Output directory:',
      default: 'src/api/generated'
    },
    {
      type: 'list',
      name: 'generator',
      message: 'Generator tool:',
      choices: [
        { name: 'openapi-typescript', value: 'openapi-typescript' },
        { name: 'swagger-codegen', value: 'swagger-codegen' },
        { name: 'openapi-generator', value: 'openapi-generator' }
      ]
    }
  ]);

  await fs.ensureDir(answers.outputDir);

  console.log(chalk.cyan('\n📥 Generating client...\n'));

  try {
    if (answers.generator === 'openapi-typescript') {
      execSync(`npx openapi-typescript ${answers.specUrl} -o ${answers.outputDir}/types.ts`, {
        stdio: 'inherit'
      });
    } else if (answers.generator === 'openapi-generator') {
      execSync(
        `npx @openapitools/openapi-generator-cli generate -i ${answers.specUrl} -g typescript-fetch -o ${answers.outputDir}`,
        { stdio: 'inherit' }
      );
    }

    console.log(chalk.green(`\n✅ API client generated in ${answers.outputDir}!\n`));
  } catch (error) {
    console.error(chalk.red('\n❌ Generation failed\n'));
    process.exit(1);
  }
}

generateClient().catch(console.error);

