#!/usr/bin/env node
/*
//const { program } = require('commander');
import { Command } from 'commander';
const program = new Command();

program
    .usage('Usage: gendiff [options] <filepath1> <filepath2>')
    .option('-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.');

program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

if (program.version) {
    console.log('Version 0.1');
}
 */

import { program } from 'commander';

const command = (filepath1, filepath2) => {
    console.log('hello!' + filepath1 + filepath2);
};

program
    .version('0.1')
    .arguments('<filepath1>')
    .arguments('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .action(command)
    .parse(process.argv);

const options = program.opts();
if (options.format) console.log('format!' + options.format);
