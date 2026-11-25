import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 180;

const LINE =
  "I didn't break production, I just deleted the users who kept reporting the bug. Zero open tickets now.";

// Gate check: the entry must be 1-180 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > MAX_CHARS || !/\S/.test(LINE)) {
  throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
