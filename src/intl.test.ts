import { test } from 'node:test';
import assert from 'node:assert/strict';

import { formatMessage, formatUyu } from './intl.js';

test('formatMessage', async () => {
  const n = 42;
  const message = '{n}';

  assert.equal(formatMessage(message, { n }), n.toString());
});

test('formatUyu', async () => {
  const n = 33;
  const outputRegex = new RegExp(n.toString());

  assert.match(formatUyu(n.toString()), outputRegex);
  assert.match(formatUyu(n), outputRegex);
});
