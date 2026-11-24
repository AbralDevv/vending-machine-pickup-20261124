// One-liner entry: One Line, One Minute — The Vending Machine Pickup Line Contest.
// Writes Neon's FINAL line verbatim to entry.txt in the grader's output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `Hey, forget exact change—feed me a crumpled dollar and I'll spit it back four times just to buy a minute of you flattening it on my corner and whispering "come on, sweetheart."`;

// Grader sets $MAKEFUN_OUTPUT_DIR; fall back to /output, then ./output.
// Never write under the (read-only) repo dir; never rm the grader's /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
