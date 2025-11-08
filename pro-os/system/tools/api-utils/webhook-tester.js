#!/usr/bin/env node

/**
 * Webhook Tester
 * 
 * Local webhook testing and payload validation
 */

import http from 'http';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function startWebhookServer() {
  console.log(chalk.cyan.bold('\n🪝 Webhook Tester\n'));

  const { port } = await inquirer.prompt([
    {
      type: 'number',
      name: 'port',
      message: 'Local port:',
      default: 3001
    }
  ]);

  const server = http.createServer((req, res) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log(chalk.cyan('\n📨 Webhook received:\n'));
      console.log(chalk.white('─'.repeat(60)));
      console.log(chalk.white(`Method: ${req.method}`));
      console.log(chalk.white(`URL: ${req.url}`));
      console.log(chalk.white('Headers:'));
      Object.entries(req.headers).forEach(([key, value]) => {
        console.log(chalk.gray(`  ${key}: ${value}`));
      });
      console.log(chalk.white('\nBody:'));
      
      try {
        const parsed = JSON.parse(body);
        console.log(chalk.white(JSON.stringify(parsed, null, 2)));
      } catch {
        console.log(chalk.white(body));
      }
      
      console.log(chalk.white('─'.repeat(60) + '\n'));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
  });

  server.listen(port, () => {
    console.log(chalk.green(`✅ Webhook server listening on http://localhost:${port}\n`));
    console.log(chalk.white('Waiting for webhooks...\n'));
    console.log(chalk.gray('Press Ctrl+C to stop\n'));
  });
}

startWebhookServer().catch(console.error);

