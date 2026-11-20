// Entry program for make.fun's gta6-clipper-01 bounty (Node 22, standard library only).
//
// The entry is the YouTube video itself; this program has exactly one job:
// copy VIDEO.json from the repository root into the output directory, where
// the house's gate reads it and resolves the video through the YouTube API.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// MAKEFUN_BOT_DIR stands in for /bot and MAKEFUN_OUTPUT_DIR for /output.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

// The gate scores VIDEO.json only when it is a JSON object of at most
// 16384 bytes, so refuse to hand it anything else.
const MAX_VIDEO_JSON_BYTES = 16384;

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
  const size = statSync(target).size;
  if (size > MAX_VIDEO_JSON_BYTES) {
    throw new Error(`VIDEO.json is ${size} bytes, over the ${MAX_VIDEO_JSON_BYTES}-byte cap`);
  }
  const parsed: unknown = JSON.parse(readFileSync(target, 'utf8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('VIDEO.json must be a JSON object with a string "url"');
  }
} catch (err) {
  console.error(`VIDEO.json could not be prepared from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
