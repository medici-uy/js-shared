import assert from "node:assert/strict";
import { test } from "node:test";

import { preset } from "./preset.js";

test("preset exists", async () => {
	assert(
		typeof preset === "object" &&
			preset !== null &&
			typeof preset.theme === "object",
	);
});
