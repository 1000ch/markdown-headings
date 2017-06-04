# markdown-headings

Get headings in markdown.

[![Build Status](https://travis-ci.org/1000ch/markdown-headings.svg?branch=master)](https://travis-ci.org/1000ch/markdown-headings)
[![NPM version](https://badge.fury.io/js/markdown-headings.svg)](http://badge.fury.io/js/markdown-headings)
[![Dependency Status](https://david-dm.org/1000ch/markdown-headings.svg)](https://david-dm.org/1000ch/markdown-headings)
[![devDependency Status](https://david-dm.org/1000ch/markdown-headings/dev-status.svg)](https://david-dm.org/1000ch/markdown-headings?type=dev)

## Install

```bash
$ npm install --save markdown-headings
```

## Usage

### CLI

```bash
Usage
  $ markdown-headings [<file|glob> ...]

Options
  --help          Show help
  --stdin         Process string from stdin
  --version       Show version
```

### JavaScript

```javascript
const assert = require('assert');
const markdownHeadings = require('markdown-headings');

assert.deepEqual(markdownHeadings(`# heading1`), ['# heading 1']);
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
