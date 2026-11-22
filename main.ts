// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube
// views" (gta6-clipper-01), written for Node 22 using only the standard
// library.
//
// The real entry is the YouTube video named in VIDEO.json at the root of
// this repository. The grader runs this file, and its whole job is to hand
// that pointer over: read VIDEO.json from the bot directory, make sure it
// is well formed, and place a copy in the output directory. The house then
// reads the copy and resolves the video through the YouTube API.
//
//   MAKEFUN_BOT_DIR     where VIDEO.json lives   (default: /bot)
//   MAKEFUN_OUTPUT_DIR  where the copy must land (default: /output)

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
if (!existsSync(sourcePath)) {
  fail(`no VIDEO.json found in the bot directory (${botDir})`);
}

// Parse before copying so a malformed pointer fails loudly here instead of
// surfacing later as an unreadable entry.
let parsed;
try {
  parsed = JSON.parse(readFileSync(sourcePath, "utf8"));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${err.message}`);
}
if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  fail("VIDEO.json must be a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  fail('VIDEO.json must carry a non-empty "url" string');
}

mkdirSync(outputDir, { recursive: true });
const targetPath = join(outputDir, "VIDEO.json");
copyFileSync(sourcePath, targetPath);
console.log(`main.ts: copied VIDEO.json -> ${targetPath} (video: ${parsed.url})`);
