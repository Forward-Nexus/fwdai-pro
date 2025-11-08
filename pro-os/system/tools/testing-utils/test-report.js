#!/usr/bin/env node

/**
 * Test Report Generator
 * 
 * Creates human-readable test reports with coverage breakdown.
 */

import fs from 'fs-extra';
import chalk from 'chalk';

async function loadCoverage() {
  const paths = ['coverage/coverage-summary.json'];
  
  for (const path of paths) {
    if (await fs.pathExists(path)) {
      return await fs.readJson(path);
    }
  }
  
  return null;
}

function generateReport(coverage) {
  const total = coverage.total || coverage;
  
  let report = '\n' + '='.repeat(60) + '\n';
  report += '📊 TEST COVERAGE REPORT\n';
  report += '='.repeat(60) + '\n\n';
  
  report += `Lines:       ${total.lines.pct.toFixed(2)}% (${total.lines.covered}/${total.lines.total})\n`;
  report += `Functions:   ${total.functions.pct.toFixed(2)}% (${total.functions.covered}/${total.functions.total})\n`;
  report += `Branches:    ${total.branches.pct.toFixed(2)}% (${total.branches.covered}/${total.branches.total})\n`;
  report += `Statements:  ${total.statements.pct.toFixed(2)}% (${total.statements.covered}/${total.statements.total})\n`;
  
  report += '\n' + '='.repeat(60) + '\n';
  
  const avgCoverage = (
    total.lines.pct +
    total.functions.pct +
    total.branches.pct +
    total.statements.pct
  ) / 4;
  
  report += `\nAverage Coverage: ${avgCoverage.toFixed(2)}%\n`;
  
  if (avgCoverage >= 90) {
    report += chalk.green('\n✅ Excellent coverage!\n');
  } else if (avgCoverage >= 80) {
    report += chalk.green('\n✅ Good coverage\n');
  } else if (avgCoverage >= 70) {
    report += chalk.yellow('\n⚠️  Coverage could be improved\n');
  } else {
    report += chalk.red('\n❌ Low coverage - add more tests\n');
  }
  
  return report;
}

async function main() {
  console.log(chalk.cyan.bold('\n📊 Test Report Generator\n'));
  
  const coverage = await loadCoverage();
  
  if (!coverage) {
    console.log(chalk.yellow('⚠️  No coverage data found\n'));
    process.exit(1);
  }
  
  const report = generateReport(coverage);
  console.log(report);
  
  // Save report (strip ANSI color codes)
  // eslint-disable-next-line no-control-regex
  await fs.writeFile('coverage-report.txt', report.replace(/\x1B\[[0-9;]*m/g, ''));
  console.log(chalk.white('Report saved to coverage-report.txt\n'));
}

main().catch(console.error);

