// Entry for make.fun bounty u-kreutzx-the-funniest-out-of-office-054815cf
// Writes one single-line out-of-office auto-reply to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of office. Your email has been forwarded to Future Me, who is also ignoring it. Back Monday.";

// Gate check (RULES.txt): entry must be UTF-8 text, 1-140 characters, one line.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`Entry fails the gate: ${entry.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
