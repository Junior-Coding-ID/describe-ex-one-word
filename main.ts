import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Unsubscribe";

function validate(text: string): void {
  if (text.length < 1 || text.length > 111) {
    throw new Error(`Text must be 1-111 characters, got ${text.length}`);
  }
  if (text.trim() !== text || text.split(/\s+/).length !== 1) {
    throw new Error("Text must be exactly one word with no surrounding or inner whitespace");
  }
  if (!/^[A-Za-z]+$/.test(text)) {
    throw new Error("Text must be exactly one word without spaces or punctuation");
  }
}

validate(TEXT);

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
