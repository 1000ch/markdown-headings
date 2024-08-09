import {Buffer} from 'node:buffer';
import MarkdownIt from 'markdown-it';

const headingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
const ignoredTokens = new Set(['heading_open', 'heading_close']);

export default function markdownHeadings(object) {
  const markdown = Buffer.isBuffer(object) ? object.toString() : object;

  if (typeof markdown !== 'string') {
    throw new TypeError('Argument is not String');
  }

  const markdownIt = new MarkdownIt();
  const tokens = markdownIt.parse(markdown, {});

  const headings = [];
  let headingToken = null;

  for (const token of tokens) {
    if (headingTags.has(token.tag)) {
      if (token.type === 'heading_open') {
        headingToken = token.markup;
      } else if (token.type === 'heading_close') {
        headingToken = null;
      }
    }

    if (ignoredTokens.has(token.type)) {
      continue;
    }

    if (headingToken === null) {
      continue;
    }

    headings.push(`${headingToken} ${token.children.map(t => t.content).join('')}`);
  }

  return headings;
}
