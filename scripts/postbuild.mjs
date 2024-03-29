import { writeFile, readFile } from "fs/promises";

console.info("\nRunning postbuild script");

const packageJson = await readFile("./package.json", "utf-8");

const { homepage } = JSON.parse(packageJson);

const indexHtml = await readFile("./dist/index.html", "utf-8");

const nextIndexHtml = indexHtml.replace(/\/assets/g, `${homepage}assets`);

await writeFile("./dist/index.html", nextIndexHtml);

console.info("\nPost build script finished");
