#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const fsP = require('pify')(fs);
const minimist = require('minimist');
const globby = require('globby');
const getStdin = require('get-stdin');
const markdownHeadings = require('.');

const getVersion = () => Promise.resolve(require('./package').version);

const getHelp = () => fsP.readFile(`${__dirname}/usage.txt`).then(b => b.toString());

const getFiles = args => globby(args, {nodir: true})
  .then(files => files.map(file => path.resolve(process.cwd(), file)));

const getResults = files => Promise.all(files.map(file => fsP.readFile(file)))
  .then(texts => Promise.all(texts.map(text => markdownHeadings(text))))
  .then(results => Array.prototype.concat.apply([], results));

const argv = minimist(process.argv.slice(2), {
  alias: {
    h: 'help',
    s: 'stdin',
    v: 'version'
  },
  boolean: [
    'help',
    'stdin',
    'version'
  ]
});

if (argv.v || argv.version) {
  getVersion().then(version => console.log(version));
} else if (argv.h || argv.help) {
  getHelp().then(help => console.log(help));
} else if (argv.stdin) {
  getStdin().then(string => markdownHeadings(string)).then(headings => {
    console.log(headings.join('\n'));
    process.exit(0);
  });
} else {
  getFiles(argv._).then(files => getResults(files)).then(headings => {
    console.log(headings.join('\n'));
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}
