#!/usr/bin/env node

/**
 * PostHog Analytics Setup
 * 
 * Configures privacy-first product analytics
 */

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function setupPostHog() {
  console.log(chalk.cyan.bold('\n📊 PostHog Analytics Setup\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'apiKey',
      message: 'PostHog API Key (from posthog.com):',
      validate: input => input.length > 0 || 'API Key required'
    },
    {
      type: 'input',
      name: 'host',
      message: 'PostHog host:',
      default: 'https://app.posthog.com'
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Framework:',
      choices: ['Next.js', 'React', 'Node.js']
    }
  ]);

  const configs = {
    'Next.js': `// lib/posthog.ts
import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init('${answers.apiKey}', {
    api_host: '${answers.host}',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

export default posthog;
`,
    'React': `// src/posthog.ts
import posthog from 'posthog-js';

posthog.init('${answers.apiKey}', {
  api_host: '${answers.host}',
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') posthog.debug();
  },
});

export default posthog;
`,
    'Node.js': `// posthog.js
import { PostHog } from 'posthog-node';

export const posthog = new PostHog('${answers.apiKey}', {
  host: '${answers.host}',
});
`
  };

  const configFile = answers.framework === 'Next.js' ? 'lib/posthog.ts' :
                     answers.framework === 'React' ? 'src/posthog.ts' : 'posthog.js';

  await fs.ensureDir(answers.framework === 'Next.js' ? 'lib' : 'src');
  await fs.writeFile(configFile, configs[answers.framework]);

  // Create example usage file
  const exampleUsage = `// Example: Track events

import posthog from './${configFile.replace(/\.(ts|js)$/, '')}';

// Track page views
posthog.capture('page_view', {
  page: window.location.pathname
});

// Track custom events
posthog.capture('button_clicked', {
  button_name: 'signup',
  location: 'homepage'
});

// Identify users
posthog.identify('user_123', {
  email: 'user@example.com',
  name: 'John Doe'
});

// Feature flags
if (posthog.isFeatureEnabled('new-feature')) {
  // Show new feature
}
`;

  await fs.writeFile('posthog-example.ts', exampleUsage);

  console.log(chalk.green('\n✅ PostHog configuration created!\n'));
  console.log(chalk.white(`Config: ${configFile}`));
  console.log(chalk.white('Example: posthog-example.ts\n'));
  console.log(chalk.cyan('Next steps:'));
  console.log(chalk.white('1. Install: pnpm add posthog-js (or posthog-node)'));
  console.log(chalk.white('2. Import in your app'));
  console.log(chalk.white('3. Start tracking events!\n'));
}

setupPostHog().catch(console.error);

