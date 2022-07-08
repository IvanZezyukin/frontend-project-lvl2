#!/usr/bin/env node

import { program } from 'commander';
import index from '../src/index.js';

program
  .version('0.1')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action(index)
  .parse(process.argv);

const options = program.opts();
if (options.format) console.log(`format!${options.format}`);
