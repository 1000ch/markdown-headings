# markdown-headings ![GitHub Actions Status](https://github.com/1000ch/markdown-headings/workflows/test/badge.svg?branch=main)

Get headings in markdown.

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
