/**
 * Project Setup
 * 
 * Generates all project files based on onboarding answers
 * See: /onboarding/ONBOARDING-FLOW.md (File Generation Logic section)
 */

import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import ora from 'ora';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { 
  generateGlobalProfile, 
  generateProjectKB, 
  generateFounderProfile,
  generateConfig,
  generateTechStackGuide,
  generateDomainExpert,
  generateWelcomeDocument
} from './generators.js';
import { initializeRoundtable } from './roundtable.js';
import { setupIDE } from './ide-setup.js';
import { createFavorites } from './favorites.js';
import { generateWelcomeMessage } from './welcome.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GLOBAL_PROFILE_DIR = path.join(os.homedir(), '.fwdpro-global');
const FWD_PRO_SOURCE = path.join(__dirname, '..', '..', 'pro-os');

/**
 * Main setup function
 */
export async function setupProject(answers) {
  const { aboutYou, aboutProject } = answers;
  const projectPath = process.cwd();

  // Step 1: Create/update global profile
  let spinner = ora('Creating your global profile...').start();
  
  try {
    await fs.ensureDir(GLOBAL_PROFILE_DIR);
    
    if (!aboutYou.existingProfile) {
      const profileContent = await generateGlobalProfile(aboutYou);
      const profileName = aboutYou.name.toLowerCase().replace(/\s+/g, '-');
      const profilePath = path.join(GLOBAL_PROFILE_DIR, `${profileName}-profile.md`);
      await fs.writeFile(profilePath, profileContent);
      spinner.succeed(chalk.green(`✓ Global profile created: ${profilePath}`));
    } else {
      spinner.succeed(chalk.green('✓ Using existing global profile'));
    }
  } catch (error) {
    spinner.fail(chalk.red('Failed to create global profile'));
    throw error;
  }

  // Step 2: Create project structure
  spinner = ora('Setting up project structure...').start();
  
  try {
    // Create .fwdpro directory structure
    const fwdproDir = path.join(projectPath, '.fwdpro');
    await fs.ensureDir(path.join(fwdproDir, 'config'));
    
    // Copy pro-os system INTO .fwdpro
    const proOsTarget = path.join(fwdproDir, 'pro-os');
    await fs.copy(FWD_PRO_SOURCE, proOsTarget);
    
    spinner.succeed(chalk.green('✓ Project structure created'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to setup project structure'));
    throw error;
  }

  // Step 3: Generate project files
  spinner = ora('Generating project files...').start();
  
  try {
    const fwdproDir = path.join(projectPath, '.fwdpro');
    
    // Generate 00-welcome.md in root .fwdpro folder (sorts to top!)
    const welcomeDoc = await generateWelcomeDocument(aboutYou, aboutProject);
    await fs.writeFile(path.join(fwdproDir, '00-welcome.md'), welcomeDoc);
    
    // Generate config.yaml in config subfolder
    const config = await generateConfig(aboutYou, aboutProject);
    await fs.writeFile(path.join(fwdproDir, 'config', 'config.yaml'), config);
    
    // Generate project-kb.md in config subfolder
    const projectKB = await generateProjectKB(aboutYou, aboutProject);
    await fs.writeFile(path.join(fwdproDir, 'config', 'project-kb.md'), projectKB);
    
    // Generate founder-profile.md in config subfolder
    const founderProfile = await generateFounderProfile(aboutYou, aboutProject);
    await fs.writeFile(path.join(fwdproDir, 'config', 'founder-profile.md'), founderProfile);
    
    // Generate tech-stack-guide.md in documents/tech/ (always created)
    const techDir = path.join(fwdproDir, 'documents', 'tech');
    await fs.ensureDir(techDir);
    const techGuide = await generateTechStackGuide();
    await fs.writeFile(path.join(techDir, 'tech-stack-guide.md'), techGuide);
    
    // Generate domain expert if requested
    if (aboutProject.domainExpert) {
      const domainExpertResult = await generateDomainExpert(aboutProject.domainExpert, projectPath);
      const expertsDir = path.join(fwdproDir, 'pro-os', 'experts');
      await fs.writeFile(path.join(expertsDir, domainExpertResult.filename), domainExpertResult.content);
    }
    
    spinner.succeed(chalk.green('✓ Project files generated'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to generate project files'));
    throw error;
  }

  // Step 4: Initialize roundtable
  spinner = ora('Initializing roundtable...').start();
  
  try {
    await initializeRoundtable(projectPath, aboutYou, aboutProject);
    spinner.succeed(chalk.green('✓ Roundtable initialized'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to initialize roundtable'));
    throw error;
  }

  // Step 5: Setup IDE command shortcuts
  spinner = ora('Setting up IDE command shortcuts...').start();
  
  try {
    await setupIDE(projectPath, aboutProject.aiTool, aboutProject.workTypes);
    spinner.succeed(chalk.green('✓ IDE command shortcuts created'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to setup IDE'));
    throw error;
  }

  // Step 6: Create favorites (symlinks)
  spinner = ora('Creating shortcuts to experts and commands...').start();
  
  try {
    const favoritesResult = await createFavorites(projectPath, aboutProject.workTypes, aboutProject.domainExpert);
    spinner.succeed(chalk.green(`✓ Created ${favoritesResult.expertsLinked} expert shortcuts, ${favoritesResult.commandsLinked} command shortcuts`));
  } catch (error) {
    spinner.fail(chalk.red('Failed to create shortcuts'));
    throw error;
  }

  // Step 7: Install dependencies if package.json exists
  const packageJsonPath = path.join(projectPath, 'package.json');
  const hasPackageJson = await fs.pathExists(packageJsonPath);
  
  if (hasPackageJson) {
    spinner = ora('Installing dependencies with pnpm...').start();
    
    try {
      const { exec } = await import('child_process');
      const { promisify } = await import('util');
      const execAsync = promisify(exec);
      
      await execAsync('pnpm install', { cwd: projectPath });
      spinner.succeed(chalk.green('✓ Dependencies installed'));
    } catch (error) {
      spinner.warn(chalk.yellow('⚠ Could not install dependencies. Run "pnpm install" manually.'));
      console.log(chalk.gray(`   Error: ${error.message}`));
    }
  }

  // Step 8: Generate welcome message
  console.log(generateWelcomeMessage(aboutYou, aboutProject));
}

