import { test } from 'node:test';
import assert from 'node:assert/strict';

import { preset } from './preset.js';

test('preset exists', async () => {
  assert(typeof preset === 'object' && preset !== null);
});
