/**
 * Soften UK/US framing without touching regex literals in code.
 */
const fs = require("fs");
const path = require("path");

const pairs = [
  [/ Expert Witness UK/g, " Expert"],
  [/South Asia Expert Witness UK/g, "South Asia Expert"],
  [/SouthAsiaExpert/g, "South Asia Expert"],
  [/UK South Asia/g, "South Asia"],
  [/UK tribunal matching/g, "Expert matching"],
  [/UK solicitors/g, "counsel"],
  [/Matching UK solicitors/g, "Matching counsel"],
  [/for UK asylum/g, "for asylum"],
  [/UK asylum/g, "asylum"],
  [/UK immigration/g, "immigration"],
  [/UK tribunal/g, "tribunal"],
  [/UK tribunals/g, "tribunals"],
  [/UK courts/g, "courts"],
  [/UK proceedings/g, "proceedings"],
  [/UK country guidance/g, "country guidance"],
  [/UK guidance/g, "guidance"],
  [/UK CPIN/g, "CPIN"],
  [/UK Legal Aid/g, "legal aid"],
  [/UK law/g, "applicable law"],
  [/UK practice/g, "practice"],
  [/UK forum/g, "forum"],
  [/ in the UK/g, ""],
  [/ across the UK/g, " across jurisdictions"],
  [/ from the UK/g, ""],
  [/ for the UK/g, " for the forum"],
  [/ to the UK/g, ""],
  [/ of the UK/g, ""],
  [/\| UK /g, "| "],
  [/ UK \|/g, " |"],
  [/ \(UK\)/g, ""],
  [/UK GDPR/g, "GDPR"],
  [/outside the UK/g, "outside your jurisdiction"],
  [/Home Office CPINs/g, "official CPINs"],
  [/Home Office/g, "decision-makers"],
  [/Legal Aid compatible/g, "funding-compatible"],
  [/en-GB/g, "en"],
  [/en_GB/g, "en"],
  [/United Kingdom/g, "Worldwide"],
  [/United States/g, "Worldwide"],
];

const skip = new Set([
  path.normalize("lib/constants.ts"),
  path.normalize("lib/metadata.ts"),
  path.normalize("app/layout.tsx"),
  path.normalize("components/layout/Header.tsx"),
  path.normalize("components/layout/Footer.tsx"),
  path.normalize("components/forms/ContactForm.tsx"),
]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", "scripts"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(ent.name)) out.push(p);
  }
  return out;
}

let n = 0;
for (const root of ["app", "components", "data", "lib"]) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (skip.has(path.normalize(file))) continue;
    if (file.includes("script-registry")) continue;
    let t = fs.readFileSync(file, "utf8");
    const orig = t;
    for (const [re, rep] of pairs) t = t.replace(re, rep);
    if (t !== orig) {
      fs.writeFileSync(file, t);
      n++;
      console.log(file);
    }
  }
}
console.log("updated", n);

let uk = 0;
for (const f of walk(".")) {
  const m = fs.readFileSync(f, "utf8").match(/\bUK\b/g);
  if (m) uk += m.length;
}
console.log("UK_REMAINING", uk);
