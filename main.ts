import { mkdirSync, writeFileSync } from "node:fs";

const entry = "1 star: Flooded my beach picnic, ghosted two weeks, called it just a phase.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
