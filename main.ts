// Entry for the-plan-make-fun-will-carry-20261122-2138.
// Writes the 30-day $100 plan to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
// Node 22, stdlib only, no network, deterministic: the same bytes every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: list three $15 AI photo gigs on Fiverr (product cleanup, Etsy images, property photos), 1-hour delivery no human matches. Spend $30 promoting them for five 5-star reviews; Fiverr search compounds. Minutes per order. Likely 25 orders by day 30: ~$300 after the 20% fee.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Fail loudly instead of shipping an invalid entry if the text ever
// grows past the gate: the scorer counts Unicode code points, cap 280.
if ([...PLAN].length > 280) {
  throw new Error(
    `plan is ${[...PLAN].length} code points, over the 280 cap`,
  );
}
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every code point, cap is 280.
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
