#!/usr/bin/env node

import { program } from 'commander';
import index from '../src/index.js';

program
  .version('0.1')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const result = index(filepath1, filepath2, program.opts().format);
    console.log(result);
  })
  .parse(process.argv);
