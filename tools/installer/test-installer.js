/**
 * Installer Test Suite
 * 
 * Run manual tests for the onboarding and installation flow
 * Usage: node test-installer.js
 */

import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { scanExistingProject } from './scanner.js';
import { 
  generateGlobalProfile, 
  generateProjectKB, 
  generateFounderProfile,
  generateConfig 
} from './generators.js';

const TEST_DIR = path.join(os.tmpdir(), 'fwdpro-test-' + Date.now());

console.log(chalk.bold.cyan('\n🧪 FWD PRO Installer Test Suite\n'));

/**
 * Test 1: Scanner functionality
 */
async function testScanner() {
  console.log(chalk.bold('Test 1: Project Scanner'));
  
  try {
    // Create a mock project
    await fs.ensureDir(path.join(TEST_DIR, 'src'));
    await fs.writeJson(path.join(TEST_DIR, 'package.json'), {
      name: 'test-project',
      description: 'A test project for FWD PRO',
      dependencies: {
        react: '^18.0.0',
        typescript: '^5.0.0',
        '@supabase/supabase-js': '^2.0.0'
      }
    });
    
    await fs.writeFile(path.join(TEST_DIR, 'README.md'), 
      '# Test Project\n\nThis is a test project for FWD PRO installer.');
    
    const findings = await scanExistingProject(TEST_DIR);
    
    console.log(chalk.gray('  Scanner findings:'));
    console.log(chalk.gray(`  - Project Name: ${findings.projectName}`));
    console.log(chalk.gray(`  - Description: ${findings.description?.substring(0, 50)}...`));
    console.log(chalk.gray(`  - Tech Stack: ${findings.techStack.join(', ')}`));
    console.log(chalk.gray(`  - Stage: ${findings.stage}`));
    console.log(chalk.gray(`  - Work Types: ${findings.workTypes.join(', ')}`));
    
    // Assertions
    const assertions = [
      { name: 'Project name detected from README', pass: findings.projectName === 'Test Project' },
      { name: 'Description extracted', pass: findings.description && findings.description.length > 0 },
      { name: 'Tech stack detected React', pass: findings.techStack.includes('React') },
      { name: 'Tech stack detected TypeScript', pass: findings.techStack.includes('TypeScript') },
      { name: 'Tech stack detected Supabase', pass: findings.techStack.includes('Supabase') },
      { name: 'Work type "building" suggested', pass: findings.workTypes.includes('building') }
    ];
    
    let passed = 0;
    assertions.forEach(a => {
      if (a.pass) {
        console.log(chalk.green(`  ✓ ${a.name}`));
        passed++;
      } else {
        console.log(chalk.red(`  ✗ ${a.name}`));
      }
    });
    
    console.log(chalk.bold(`\n  Result: ${passed}/${assertions.length} passed\n`));
    
    return passed === assertions.length;
    
  } catch (error) {
    console.log(chalk.red(`  ✗ Error: ${error.message}\n`));
    return false;
  }
}

/**
 * Test 2: Communication style array handling
 */
async function testCommStyleArray() {
  console.log(chalk.bold('Test 2: Communication Style Array Handling'));
  
  try {
    const aboutYou = {
      name: 'Test User',
      preferredName: '',
      location: 'Test City, TS',
      roles: ['founder', 'developer'],
      techLevel: 'technical',
      commStyle: ['casual', 'direct', 'supportive'], // Array of styles
      detailLevel: 'concise',
      collabStyle: 'delegator',
      workingStyle: []
    };
    
    const aboutProject = {
      projectName: 'Test Project',
      projectType: 'existing',
      aiTool: 'cursor',
      workTypes: ['building'],
      goal: 'Test goal',
      description: 'Test description',
      techStack: 'React, TypeScript'
    };
    
    // Generate profile with array of comm styles
    const profile = await generateGlobalProfile(aboutYou);
    
    // Check that it handled the array
    const hasMultipleStyles = profile.includes('Casual/enthusiastic') && 
                              profile.includes('Direct/no-fluff') && 
                              profile.includes('Supportive/encouraging');
    
    console.log(chalk.gray('  Generated profile comm styles:'));
    const commStyleSection = profile.split('Communication Style:')[1]?.split('\n\n')[0];
    console.log(chalk.gray(`  ${commStyleSection?.trim()}`));
    
    // Generate config with array
    const config = await generateConfig(aboutYou, aboutProject);
    const hasArrayInConfig = config.includes('casual') && 
                             config.includes('direct') && 
                             config.includes('supportive');
    
    console.log(chalk.gray('\n  Config communication_style:'));
    const configCommStyle = config.split('communication_style:')[1]?.split('\n')[0];
    console.log(chalk.gray(`  ${configCommStyle?.trim()}`));
    
    const assertions = [
      { name: 'Profile handles multiple comm styles', pass: hasMultipleStyles },
      { name: 'Config preserves comm style array', pass: hasArrayInConfig }
    ];
    
    let passed = 0;
    assertions.forEach(a => {
      if (a.pass) {
        console.log(chalk.green(`  ✓ ${a.name}`));
        passed++;
      } else {
        console.log(chalk.red(`  ✗ ${a.name}`));
      }
    });
    
    console.log(chalk.bold(`\n  Result: ${passed}/${assertions.length} passed\n`));
    
    return passed === assertions.length;
    
  } catch (error) {
    console.log(chalk.red(`  ✗ Error: ${error.message}\n`));
    console.error(error);
    return false;
  }
}

/**
 * Test 3: File generation
 */
async function testFileGeneration() {
  console.log(chalk.bold('Test 3: File Generation'));
  
  try {
    const aboutYou = {
      name: 'Ward Prejean',
      preferredName: 'Ward',
      location: 'Austin, TX',
      roles: ['founder', 'developer'],
      techLevel: 'technical',
      commStyle: ['casual', 'direct'],
      detailLevel: 'concise',
      collabStyle: 'delegator',
      workingStyle: ['dictation']
    };
    
    const aboutProject = {
      projectName: 'Test App',
      projectType: 'new',
      aiTool: 'cursor',
      workTypes: ['building', 'marketing'],
      goal: 'Build a test application',
      description: 'A test mobile app',
      techStack: 'React Native, Supabase',
      constraints: 'None'
    };
    
    // Test all generators
    const profile = await generateGlobalProfile(aboutYou);
    const projectKB = await generateProjectKB(aboutYou, aboutProject);
    const founderProfile = await generateFounderProfile(aboutYou, aboutProject);
    const config = await generateConfig(aboutYou, aboutProject);
    
    const assertions = [
      { name: 'Global profile generated', pass: profile.includes('Ward Prejean') },
      { name: 'Project KB generated', pass: projectKB.includes('Test App') },
      { name: 'Founder profile generated', pass: founderProfile.includes('ward-prejean-profile.md') },
      { name: 'Config generated', pass: config.includes('Test App') },
      { name: 'Genna always active', pass: config.includes('genna: true') },
      { name: 'Denny active for building', pass: config.includes('denny: true') },
      { name: 'Ada active for building', pass: config.includes('ada: true') },
      { name: 'Benji active for marketing', pass: config.includes('benji: true') },
      { name: 'Tech stack in config', pass: config.includes('React Native') }
    ];
    
    let passed = 0;
    assertions.forEach(a => {
      if (a.pass) {
        console.log(chalk.green(`  ✓ ${a.name}`));
        passed++;
      } else {
        console.log(chalk.red(`  ✗ ${a.name}`));
      }
    });
    
    console.log(chalk.bold(`\n  Result: ${passed}/${assertions.length} passed\n`));
    
    return passed === assertions.length;
    
  } catch (error) {
    console.log(chalk.red(`  ✗ Error: ${error.message}\n`));
    console.error(error);
    return false;
  }
}

/**
 * Test 4: Expert activation logic
 */
async function testExpertActivation() {
  console.log(chalk.bold('Test 4: Expert Activation Logic'));
  
  try {
    const baseYou = {
      name: 'Test',
      commStyle: ['casual']
    };
    
    const scenarios = [
      {
        name: 'Building only',
        project: { workTypes: ['building'], constraints: '' },
        expected: { genna: true, denny: true, ada: true, lyna: false, benji: false, elle: false }
      },
      {
        name: 'Building + Marketing',
        project: { workTypes: ['building', 'marketing'], constraints: '' },
        expected: { genna: true, denny: true, ada: true, lyna: false, benji: true, elle: false }
      },
      {
        name: 'Investor materials',
        project: { workTypes: ['investor'], constraints: '' },
        expected: { genna: true, denny: false, ada: false, lyna: true, benji: false, elle: false }
      },
      {
        name: 'HIPAA compliance',
        project: { workTypes: ['building'], constraints: 'Must be HIPAA compliant' },
        expected: { genna: true, denny: true, ada: true, lyna: false, benji: false, elle: true }
      },
      {
        name: 'Legal work',
        project: { workTypes: ['legal'], constraints: '' },
        expected: { genna: true, denny: false, ada: false, lyna: false, benji: false, elle: true }
      }
    ];
    
    let passed = 0;
    let total = 0;
    
    for (const scenario of scenarios) {
      const config = await generateConfig(baseYou, scenario.project);
      
      console.log(chalk.gray(`\n  Scenario: ${scenario.name}`));
      
      for (const [expert, shouldBeActive] of Object.entries(scenario.expected)) {
        total++;
        const pattern = new RegExp(`${expert}:\\s*${shouldBeActive}`);
        const isActive = pattern.test(config);
        
        if (isActive) {
          console.log(chalk.green(`    ✓ ${expert}: ${shouldBeActive}`));
          passed++;
        } else {
          console.log(chalk.red(`    ✗ ${expert}: expected ${shouldBeActive}`));
        }
      }
    }
    
    console.log(chalk.bold(`\n  Result: ${passed}/${total} passed\n`));
    
    return passed === total;
    
  } catch (error) {
    console.log(chalk.red(`  ✗ Error: ${error.message}\n`));
    console.error(error);
    return false;
  }
}

/**
 * Run all tests
 */
async function runTests() {
  console.log(chalk.gray(`Test directory: ${TEST_DIR}\n`));
  
  const results = [];
  
  results.push(await testScanner());
  results.push(await testCommStyleArray());
  results.push(await testFileGeneration());
  results.push(await testExpertActivation());
  
  // Cleanup
  await fs.remove(TEST_DIR);
  
  // Summary
  const passed = results.filter(r => r).length;
  const total = results.length;
  
  console.log(chalk.bold.cyan('\n' + '='.repeat(50)));
  console.log(chalk.bold.cyan(`Final Results: ${passed}/${total} test suites passed`));
  console.log(chalk.bold.cyan('='.repeat(50) + '\n'));
  
  if (passed === total) {
    console.log(chalk.bold.green('✓ All tests passed! Installer is ready.'));
    process.exit(0);
  } else {
    console.log(chalk.bold.red('✗ Some tests failed. Review issues above.'));
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error(chalk.red('\n✗ Test suite crashed:'), error);
  process.exit(1);
});

