/**
 * Replace legacy palette hex with brand guideline colors.
 */
const fs = require("fs");
const path = require("path");

const map = [
  ["#1C2541", "#1A2138"],
  ["#1c2541", "#1A2138"],
  ["#7C6C4F", "#716148"],
  ["#7c6c4f", "#716148"],
  ["#3D5A80", "#1A2138"],
  ["#3d5a80", "#1A2138"],
  ["#F7F5F0", "#F6F4EE"],
  ["#f7f5f0", "#F6F4EE"],
  ["#EBE6DC", "#E8E2D8"],
  ["#ebe6dc", "#E8E2D8"],
  ["#D8D4CC", "#D4CDC2"],
  ["#d8d4cc", "#D4CDC2"],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts|css)$/.test(ent.name)) out.push(p);
  }
  return out;
}

let n = 0;
for (const f of walk(".")) {
  if (f.includes("scripts" + path.sep)) continue;
  let t = fs.readFileSync(f, "utf8");
  const orig = t;
  for (const [a, b] of map) t = t.split(a).join(b);
  if (t !== orig) {
    fs.writeFileSync(f, t);
    n++;
    console.log(f);
  }
}
console.log("updated", n);
