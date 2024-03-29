import test from 'ava';
import markdownHeadings from './index.js';

test('Check string', t => {
  const markdown = `# heading 1

- foo
- bar
- baz

## heading 2

**foo**

### heading 3

#### heading 4

##### heading 5

###### heading 6`;

  t.deepEqual(markdownHeadings(markdown), [
    '# heading 1',
    '## heading 2',
    '### heading 3',
    '#### heading 4',
    '##### heading 5',
    '###### heading 6',
  ]);
});
