// main.ts — "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709)
//
// The entry is the X post itself: a short video of an AI coding agent
// building the tiny browser game in game.html from one prompt, ending on
// make.fun's referral end card. The post's address lives in POST.json.
//
// This program's only job is the harness contract: copy POST.json from
// the repository root to /output (the directory the harness names in
// MAKEFUN_OUTPUT_DIR). It reads nothing else, writes nothing else, and
// needs no network. Node 22, standard library only.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoRoot, "POST.json");
const target = join(outDir, "POST.json");

// Read first so a missing or malformed POST.json fails loudly here,
// before anything is written: the house reads the post from this file.
const raw = readFileSync(source, "utf8");
const post = JSON.parse(raw) as unknown;
if (typeof post !== "object" || post === null || Array.isArray(post)) {
  throw new Error("POST.json must be a JSON object naming the X post");
}
const url = (post as { url?: unknown }).url;
if (typeof url !== "string") {
  throw new Error("POST.json must carry a string url for the X post");
}
// The house only accepts an X post address: https://x.com/<handle>/status/<id>
// (or the same on twitter.com). Refuse anything else now, while it is cheap
// to fix, rather than after the entry is submitted.
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  throw new Error(`POST.json url is not an X post address: ${url}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`copied POST.json -> ${target}`);
