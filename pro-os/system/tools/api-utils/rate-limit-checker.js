#!/usr/bin/env node

/**
 * Rate Limit Checker
 * 
 * Monitors API usage and prevents rate limit errors
 */

import fs from 'fs-extra';
import chalk from 'chalk';

const RATE_LIMIT_FILE = '.fwdpro/api-rate-limits.json';

async function loadRateLimits() {
  return await fs.readJson(RATE_LIMIT_FILE, { throws: false }) || {};
}

async function saveRateLimits(data) {
  await fs.ensureDir('.fwdpro');
  await fs.writeJson(RATE_LIMIT_FILE, data, { spaces: 2 });
}

function checkRateLimit(service, limits) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour

  if (!limits[service]) {
    limits[service] = { count: 0, resetAt: now + windowMs };
  }

  const limit = limits[service];

  if (now > limit.resetAt) {
    limit.count = 0;
    limit.resetAt = now + windowMs;
  }

  return {
    current: limit.count,
    remaining: limit.max - limit.count,
    resetAt: new Date(limit.resetAt),
    canMakeRequest: limit.count < limit.max
  };
}

async function main() {
  console.log(chalk.cyan.bold('\n⏱️  Rate Limit Checker\n'));

  const limits = await loadRateLimits();

  if (Object.keys(limits).length === 0) {
    console.log(chalk.yellow('⚠️  No rate limit data found\n'));
    console.log(chalk.white('Example configuration (.fwdpro/api-rate-limits.json):\n'));
    console.log(chalk.gray(JSON.stringify({
      stripe: { max: 100, count: 0, resetAt: Date.now() + 3600000 },
      openai: { max: 60, count: 0, resetAt: Date.now() + 3600000 }
    }, null, 2)));
    console.log();
    process.exit(0);
  }

  console.log(chalk.white('API Rate Limits:\n'));

  Object.entries(limits).forEach(([service, data]) => {
    const status = checkRateLimit(service, limits);
    const percentage = (status.current / data.max) * 100;
    
    let color = 'green';
    if (percentage > 80) color = 'red';
    else if (percentage > 60) color = 'yellow';

    console.log(chalk[color](`${service}:`));
    console.log(chalk.white(`  Used: ${status.current}/${data.max}`));
    console.log(chalk.white(`  Remaining: ${status.remaining}`));
    console.log(chalk.white(`  Resets: ${status.resetAt.toLocaleTimeString()}\n`));
  });

  await saveRateLimits(limits);
}

main().catch(console.error);

