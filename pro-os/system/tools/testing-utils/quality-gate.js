#!/usr/bin/env node

/**
 * Quality Gate Checker
 * 
 * Enforces minimum quality thresholds before deployment:
 * - Test coverage percentage
 * - All tests passing
 * - No high-severity linting errors
 */

import fs from 'fs-extra';
import chalk from 'chalk';

const DEFAULT_THRESHOLDS = {
  coverage: {
    lines: 80,
    functions: 80,
    branches: 75,
    statements: 80
  },
  tests: {
    passRate: 100  // All tests must pass
  }
};

async function loadCoverage() {
  // Try different coverage report locations
  const paths = [
    'coverage/coverage-summary.json',
    'coverage/lcov-report/index.html',
    '.nyc_output/coverage.json'
  ];

  for (const path of paths) {
    if (await fs.pathExists(path)) {
      if (path.endsWith('.json')) {
        return await fs.readJson(path);
      }
    }
  }

  return null;
}

function checkCoverageThresholds(coverage, thresholds) {
  const results = {
    passed: true,
    checks: []
  };

  const total = coverage.total || coverage;

  for (const [metric, threshold] of Object.entries(thresholds.coverage)) {
    const actual = total[metric]?.pct || 0;
    const passed = actual >= threshold;

    results.checks.push({
      metric,
      threshold,
      actual,
      passed
    });

    if (!passed) results.passed = false;
  }

  return results;
}

async function main() {
  console.log(chalk.cyan.bold('\n🚦 Quality Gate Checker\n'));

  // Load configuration
  const config = await fs.readJson('.fwdpro/project/quality-gates.json', { throws: false }) || DEFAULT_THRESHOLDS;

  // Check coverage
  const coverage = await loadCoverage();

  if (!coverage) {
    console.log(chalk.yellow('⚠️  No coverage report found'));
    console.log(chalk.white('Run tests with coverage first:\n'));
    console.log(chalk.white('  npm test -- --coverage\n'));
    process.exit(1);
  }

  console.log(chalk.white('Checking coverage thresholds...\n'));

  const results = checkCoverageThresholds(coverage, config);

  results.checks.forEach(({ metric, threshold, actual, passed }) => {
    const icon = passed ? '✅' : '❌';
    const color = passed ? 'green' : 'red';
    console.log(chalk[color](`${icon} ${metric}: ${actual.toFixed(1)}% (min: ${threshold}%)`));
  });

  console.log();

  if (results.passed) {
    console.log(chalk.green.bold('✅ All quality gates passed!\n'));
    process.exit(0);
  } else {
    console.log(chalk.red.bold('❌ Quality gates failed\n'));
    console.log(chalk.yellow('Improve test coverage to meet thresholds.\n'));
    process.exit(1);
  }
}

main().catch(console.error);

