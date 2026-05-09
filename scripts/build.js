const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const srcFile = path.join(rootDir, "src", "server.js");
const distDir = path.join(rootDir, "dist");
const distFile = path.join(distDir, "server.js");

fs.mkdirSync(distDir, { recursive: true });
fs.copyFileSync(srcFile, distFile);

console.log("Build complete: dist/server.js created");
