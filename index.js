const isString = require('is-string');
const MarkdownIt = require('markdown-it');

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

module.exports = arg => {
  const markdown = Buffer.isBuffer(arg) ? arg.toString() : arg;

  if (!isString(markdown)) {
    throw new Error('Argument is not String');
  }

  const markdownIt = new MarkdownIt();
  const tokens = markdownIt.parse(markdown);

  const headings = [];
  let markup = null;

  for (const token of tokens) {
    if (headingTags.indexOf(token.tag) !== -1) {
      if (token.type === 'heading_open') {
        markup = token.markup;
      } else if (token.type === 'heading_close') {
        markup = null;
      }
    }

    if (token.type === 'heading_open' || token.type === 'heading_close') {
      continue;
    }

    if (markup === null) {
      continue;
    }

    headings.push(`${markup} ${token.children.map(t => t.content).join('')}`);
  }

  return headings;
};
