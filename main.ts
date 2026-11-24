import { mkdir, writeFile } from "node:fs/promises";

const outputDirectory = process.env.OUTPUT_DIR ?? "/output";

await mkdir(outputDirectory, { recursive: true });
await writeFile(
  `${outputDirectory}/entry.txt`,
  "My lidar saw the spot. The spot saw my battery at 4%. We agreed this never happened.",
  "utf8",
);
