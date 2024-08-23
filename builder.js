import { readdir } from "node:fs/promises";
import path from "node:path";

const publicDir = "./public/js";

async function minifyScripts() {
  const jsFiles = (await readdir(publicDir))
    .filter((file) => file.endsWith(".js") && !file.endsWith(".min.js"))
    .map((file) => path.join(publicDir, file));

  if (jsFiles.length === 0) {
    console.log("No non-minified JavaScript files found to process.");
    return;
  }

  const result = await Bun.build({
    entrypoints: jsFiles,
    outdir: "./",
    minify: {
      whitespace: true, // Remove unnecessary whitespace
      identifiers: false, // Don't rename identifiers (variables, functions, etc.)
      syntax: false, // Perform safe syntax-level optimizations
    },
    naming: "[dir]/[name].min.[ext]",
  });

  if (!result.success) {
    console.error("Build failed:", result.logs);
    return;
  }

  console.log("Minification complete.");
}

minifyScripts();
