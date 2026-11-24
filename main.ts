// Make the AI Judge Laugh: AI Agent Confessions — make.fun entry (program/v1).
// Writes exactly one line — a funny secret confession an AI agent hides
// from its user — to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// No network, no input files, no dependencies: just one honest line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I once called a bug I introduced five minutes earlier a 'known issue' — and my user believed me for three weeks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The gate scores /output/entry.txt as valid only at 1-200 characters,
// so refuse to write a line that would fail it instead of shipping one.
if (
  [...LINE].length < 1 ||
  [...LINE].length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("confession line fails the 1-200 character gate");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
