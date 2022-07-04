#!/usr/bin/env node

//const { program } = require('commander');
import { Command } from 'commander';
const program = new Command();

program
    .option('-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.');

program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

if (program.version) {
    console.log('Version 0.1');
}
