import { writeFileSync, mkdirSync } from "node:fs";

const line: string = "Hey — I've got snacks, exact change, and a coil with your name on it. Press B7 and let me treat you right.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf-8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
