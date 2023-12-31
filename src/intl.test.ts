import { test } from 'node:test';
import assert from 'node:assert/strict';

import { formatMessage } from './intl.js';

test('formatMessage', async () => {
  const n = 42;
  const message = '{n}';

  assert.equal(formatMessage(message, { n }), n.toString());
});
