const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(projectRoot, "theme-overrides", "category");
const targetRoot = path.join(
  projectRoot,
  "node_modules",
  "hexo-theme-redefine",
  "layout",
  "pages",
  "category",
);

const files = [
  "categories.ejs",
  "category-detail.ejs",
  "category-branches.ejs",
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyOverride(fileName) {
  const sourcePath = path.join(sourceRoot, fileName);
  const targetPath = path.join(targetRoot, fileName);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing override source: ${sourcePath}`);
  }

  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`[theme-overrides] Applied ${fileName}`);
}

function main() {
  if (!fs.existsSync(targetRoot)) {
    console.warn(
      `[theme-overrides] Target theme path not found, skipped: ${targetRoot}`,
    );
    return;
  }

  files.forEach(copyOverride);
}

main();
