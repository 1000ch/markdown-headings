# markdown-headings

Get headings in markdown.

![GitHub Actions Status](https://github.com/1000ch/markdown-headings/workflows/test/badge.svg?branch=master)
[![NPM version](https://badge.fury.io/js/markdown-headings.svg)](http://badge.fury.io/js/markdown-headings)
[![Dependency Status](https://david-dm.org/1000ch/markdown-headings.svg)](https://david-dm.org/1000ch/markdown-headings)
[![devDependency Status](https://david-dm.org/1000ch/markdown-headings/dev-status.svg)](https://david-dm.org/1000ch/markdown-headings?type=dev)

## Install

```bash
$ npm install --save markdown-headings
```

## Usage

```javascript
const assert = require('assert');
const markdownHeadings = require('markdown-headings');

assert.deepEqual(markdownHeadings(`# heading1`), ['# heading 1']);
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
