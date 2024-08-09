# markdown-headings ![GitHub Actions Status](https://github.com/1000ch/markdown-headings/actions/workflows/test.yml/badge.svg)

Get headings in markdown.

## Install

```bash
$ npm install --save markdown-headings
```

## Usage

```javascript
import assert from 'assert';
import markdownHeadings from 'markdown-headings';

assert.deepEqual(markdownHeadings(`# heading1`), ['# heading 1']);
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
