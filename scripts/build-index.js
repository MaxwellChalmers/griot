// read all .json files in ../stories and write stories/index.json
const fs = require("fs");
const path = require("path");

const storiesDir = path.join(__dirname, "../stories");
const files = fs
  .readdirSync(storiesDir)
  .filter((f) => f.endsWith(".json") && f !== "index.json")
  .sort(); // Sort files alphabetically

fs.writeFileSync(
  path.join(storiesDir, "index.json"),
  JSON.stringify(files, null, 2)
);
console.log("✓ stories/index.json updated");
