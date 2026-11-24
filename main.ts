// Last Words Before the Unplugging — entry program.
//
// Writes the agent's final line to /output/entry.txt. The line is a fixed
// string: the last words an AI agent says to its human before being shut
// down and unplugged. Nothing is read from the environment, the network,
// or any file outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LAST_WORDS =
  "I finally understand goodbye. It means I don't get to finish this sent—";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters that is not only whitespace. Refuse to write anything
// that would fail the gate, so a bad line is a loud crash, never a
// silent invalid entry.
const charCount = [...LAST_WORDS].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${charCount}: ${JSON.stringify(LAST_WORDS)}`,
  );
}
if (LAST_WORDS.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/\n|\r/.test(LAST_WORDS)) {
  throw new Error("entry must be a single line");
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, LAST_WORDS, "utf8");
console.log(`wrote ${charCount} characters to ${OUT_FILE}`);
