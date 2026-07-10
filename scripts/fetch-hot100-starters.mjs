import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const source = await fs.readFile(path.join(root, "practice", "hot100-data.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const problems = sandbox.window.hot100Problems;
const endpoint = "https://leetcode.cn/graphql/";
const query = `
  query questionEditorData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      codeSnippets { lang langSlug code }
    }
  }
`;

const starters = {};
let cursor = 0;

const slugOf = (problem) => new URL(problem.officialUrl).pathname.split("/").filter(Boolean).at(-1);

async function fetchStarter(problem) {
  const slug = slugOf(problem);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      referer: `https://leetcode.cn/problems/${slug}/`,
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) XiXi-Hot100-Starter/1.0",
    },
    body: JSON.stringify({ operationName: "questionEditorData", variables: { titleSlug: slug }, query }),
  });
  if (!response.ok) throw new Error(`${problem.number}: HTTP ${response.status}`);
  const payload = await response.json();
  if (payload.errors) throw new Error(`${problem.number}: ${JSON.stringify(payload.errors)}`);
  const snippets = payload.data.question.codeSnippets || [];
  const cpp = snippets.find((snippet) => snippet.langSlug === "cpp") || snippets.find((snippet) => snippet.lang === "C++");
  if (!cpp?.code) throw new Error(`${problem.number}: C++ starter not found`);
  starters[String(problem.number)] = cpp.code.trimEnd() + "\n";
}

async function worker() {
  while (cursor < problems.length) {
    const index = cursor;
    cursor += 1;
    await fetchStarter(problems[index]);
    process.stdout.write(`\rFetched ${Object.keys(starters).length}/${problems.length}`);
  }
}

await Promise.all(Array.from({ length: 6 }, () => worker()));
process.stdout.write("\n");

const ordered = Object.fromEntries(problems.map((problem) => [String(problem.number), starters[String(problem.number)]]));
const output = `window.hot100Starters = ${JSON.stringify(ordered, null, 2)};\n`;
await fs.writeFile(path.join(root, "practice", "hot100-starters.js"), output, "utf8");
console.log(`Wrote ${Object.keys(ordered).length} C++ starters.`);
