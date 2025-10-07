/**
 * ESLint Configuration for FWD PRO Build Repo
 * 
 * Linting rules for development/build tools
 */

import js from '@eslint/js';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'fwdai-pro/**', // Don't lint the distribution folder
      'BMAD-METHOD/**', // Don't lint reference systems
      'agent-os-main/**',
    ],
  },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },

    rules: {
      // Allow console in CLI tools
      'no-console': 'off',
      
      // Prefer const/let
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Code quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      
      // Style
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },

  {
    files: ['tools/**/*.js'],
    rules: {
      // Tool scripts can be less strict
      'no-unused-vars': 'off',
    },
  },
];

