const baseProblems = [
  {
    id: "sum-a-b",
    collection: "基础练习",
    title: "A + B Problem",
    difficulty: "入门",
    tags: ["输入输出", "整数"],
    officialUrl: "",
    description: "读取两个整数 a 和 b，输出它们的和。适合熟悉 C++ 标准输入输出。",
    input: "3 5",
    output: "8",
    hint: "使用 cin 读取两个 long long，再输出 a + b。",
    interviewNotes: ["注意整数范围，竞赛题里 a 和 b 可能超过 int。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b;
    cin >> a >> b;
    cout << a + b << '\\n';
    return 0;
}
`,
    methods: [
      {
        name: "方法一：直接模拟",
        idea: "按题意读取并相加即可。时间 O(1)，空间 O(1)。",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    cout << a + b << '\\n';
    return 0;
}
`,
      },
    ],
  },
  {
    id: "max-of-three",
    collection: "基础练习",
    title: "三个数的最大值",
    difficulty: "入门",
    tags: ["分支", "函数"],
    officialUrl: "",
    description: "给定三个整数，输出其中最大的一个。",
    input: "7 13 9",
    output: "13",
    hint: "可以用 max({a, b, c})，也可以写 if 分支练手。",
    interviewNotes: ["如果输入规模扩展到 n 个数，要自然改成一次遍历维护最大值。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    cin >> a >> b >> c;
    // TODO: output the maximum value
    return 0;
}
`,
    methods: [
      {
        name: "方法一：使用 max",
        idea: "initializer_list 版本的 max 可以直接比较三个数。",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max({a, b, c}) << '\\n';
    return 0;
}
`,
      },
    ],
  },
  {
    id: "prefix-sum-range",
    collection: "基础练习",
    title: "区间和查询",
    difficulty: "基础",
    tags: ["前缀和", "数组"],
    officialUrl: "",
    description: "给定 n 个数和 q 次查询，每次查询区间 [l, r] 的元素和，下标从 1 开始。",
    input: "5 3\\n1 2 3 4 5\\n1 3\\n2 5\\n4 4",
    output: "6\\n14\\n4",
    hint: "预处理 prefix[i] 表示前 i 个数的和，区间和为 prefix[r] - prefix[l - 1]。",
    interviewNotes: ["追问常见变体是二维前缀和，或数组会被修改时改用树状数组/线段树。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<long long> prefix(n + 1);
    // TODO
    return 0;
}
`,
    methods: [
      {
        name: "方法一：前缀和",
        idea: "一次预处理，之后每个查询 O(1)。总时间 O(n + q)，空间 O(n)。",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<long long> prefix(n + 1);
    for (int i = 1; i <= n; ++i) {
        long long x;
        cin >> x;
        prefix[i] = prefix[i - 1] + x;
    }
    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << prefix[r] - prefix[l - 1] << '\\n';
    }
    return 0;
}
`,
      },
    ],
  },
  {
    id: "two-sum-sorted",
    collection: "基础练习",
    title: "有序数组两数和",
    difficulty: "基础",
    tags: ["双指针", "数组"],
    officialUrl: "",
    description: "给定一个升序数组和 target，判断是否存在两个不同位置的数之和等于 target。",
    input: "6 10\\n1 2 4 6 8 11",
    output: "YES",
    hint: "数组有序时，一左一右两个指针可以线性收缩搜索范围。",
    interviewNotes: ["如果数组无序，可先排序再双指针，或用哈希表；注意题目是否要求返回原下标。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long target;
    cin >> n >> target;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    // TODO
    return 0;
}
`,
    methods: [
      {
        name: "方法一：双指针",
        idea: "小了移动左指针，大了移动右指针。时间 O(n)，空间 O(1)。",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long target;
    cin >> n >> target;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;
    int l = 0, r = n - 1;
    while (l < r) {
        long long sum = a[l] + a[r];
        if (sum == target) {
            cout << "YES\\n";
            return 0;
        }
        if (sum < target) ++l;
        else --r;
    }
    cout << "NO\\n";
    return 0;
}
`,
      },
    ],
  },
  {
    id: "gcd-lcm",
    collection: "基础练习",
    title: "最大公约数和最小公倍数",
    difficulty: "基础",
    tags: ["数学", "函数"],
    officialUrl: "",
    description: "输入两个正整数 a 和 b，输出 gcd(a, b) 和 lcm(a, b)。",
    input: "12 18",
    output: "6 36",
    hint: "C++17 可以使用 std::gcd，计算 lcm 时先除后乘以降低溢出风险。",
    interviewNotes: ["讲清楚辗转相除法，以及 lcm = a / gcd(a,b) * b 为什么更稳。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    // TODO
    return 0;
}
`,
    methods: [
      {
        name: "方法一：gcd 推 lcm",
        idea: "用库函数或辗转相除法求 gcd，再由 gcd 推出 lcm。",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    long long g = gcd(a, b);
    cout << g << ' ' << a / g * b << '\\n';
    return 0;
}
`,
      },
    ],
  },
  {
    id: "binary-search-basic",
    collection: "基础练习",
    title: "二分查找",
    difficulty: "基础",
    tags: ["二分", "数组"],
    officialUrl: "",
    description: "给定升序数组和目标值 x，返回 x 的下标；若不存在输出 -1。下标从 1 开始。",
    input: "5 7\\n1 3 5 7 9",
    output: "4",
    hint: "保持闭区间 [l, r]，每次比较 mid 位置并缩小范围。",
    interviewNotes: ["二分题重点是区间定义一致，不要混用闭区间和左闭右开写法。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;
    // TODO
    return 0;
}
`,
    methods: [{ name: "方法一：闭区间二分", idea: "每轮至少排除一半区间。时间 O(log n)，空间 O(1)。", code: "// TODO: 写出闭区间二分" }],
  },
  {
    id: "grid-bfs",
    collection: "基础练习",
    title: "网格最短路",
    difficulty: "提高",
    tags: ["BFS", "队列", "图"],
    officialUrl: "",
    description: "在 n*m 网格中，'.' 可走，'#' 为墙，从 S 到 T 的最短步数；不可达输出 -1。",
    input: "3 4\\nS..#\\n.#..\\n...T",
    output: "5",
    hint: "BFS 按层扩展，第一次到达终点就是最短路。",
    interviewNotes: ["如果有权重，BFS 不再适用，可能需要 Dijkstra 或 0-1 BFS。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> grid(n);
    for (auto &row : grid) cin >> row;
    // TODO
    return 0;
}
`,
    methods: [{ name: "方法一：BFS", idea: "队列存坐标，dist 记录步数。时间 O(nm)，空间 O(nm)。", code: "// TODO: 网格 BFS" }],
  },
  {
    id: "knapsack-01",
    collection: "基础练习",
    title: "01 背包",
    difficulty: "提高",
    tags: ["动态规划", "背包"],
    officialUrl: "",
    description: "有 n 个物品，每个物品有重量 w 和价值 v，背包容量 W，求最大总价值。",
    input: "4 7\\n3 4\\n4 5\\n2 3\\n5 7",
    output: "9",
    hint: "使用一维 dp 时，容量要从 W 逆序枚举到 w。",
    interviewNotes: ["正序会把同一个物品重复使用，变成完全背包，这是常见追问点。"],
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, W;
    cin >> n >> W;
    vector<int> dp(W + 1);
    // TODO
    return 0;
}
`,
    methods: [{ name: "方法一：一维 DP", idea: "dp[j] 表示容量 j 的最大价值，逆序更新。时间 O(nW)，空间 O(W)。", code: "// TODO: 01 背包转移" }],
  },
];

const hot100Problems = (window.hot100Problems || []).map((problem) => {
  const content = window.hot100Content?.[String(problem.number)] || {};
  return {
    ...problem,
    ...content,
    template: window.hot100Starters?.[String(problem.number)] || content.template || problem.template,
    interviewNotes: [...(content.interviewNotes || []), ...(problem.interviewNotes || [])],
    methods: problem.methods?.length
      ? problem.methods
      : [{ name: "方法一：标准写法", idea: "先自己写，再补充复盘。", code: "// TODO" }],
  };
});

const problems = [...baseProblems, ...hot100Problems];
const root = document.documentElement;
const state = {
  selectedId: problems[0].id,
  collection: "all",
  search: "",
  difficulty: "all",
  tag: "all",
  status: "all",
  methodIndex: 0,
};

const storageKey = "xixi-cpp-practice-v2";
const legacyStorageKey = "xixi-cpp-practice-v1";
const themeKey = "theme";
const gateKey = "xixi-practice-access";
const gatePassword = "111";
let researchByNumber = {};
const legacyBlankTemplate = `// 先在这里写自己的 C++ 解法，再展开下方参考答案。
class Solution {
public:
    // TODO
};`;

const $ = (selector) => document.querySelector(selector);

const getPracticeData = () => {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey) || "{}");
  } catch {
    return {};
  }
};

const savePracticeData = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

const getTheme = () => {
  try {
    const item = JSON.parse(localStorage.getItem(themeKey) || "null");
    return item && Date.now() < item.expiry ? item.value : "light";
  } catch {
    return "light";
  }
};

const saveTheme = (value) => {
  localStorage.setItem(themeKey, JSON.stringify({ value, expiry: Date.now() + 365 * 86400000 }));
};

const applyTheme = (value) => {
  root.dataset.theme = value;
  $(".theme-toggle").setAttribute("aria-pressed", value === "dark" ? "true" : "false");
};

const updateGate = () => {
  const unlocked = localStorage.getItem(gateKey) === gatePassword;
  $("#passwordGate").hidden = unlocked;
  $("#practiceApp").hidden = !unlocked;
};

const allCollections = () => [...new Set(problems.map((problem) => problem.collection || "未分类"))];
const allTags = () => [...new Set(problems.flatMap((problem) => problem.tags || []))].sort((a, b) => a.localeCompare(b, "zh-CN"));
const currentProblem = () => problems.find((problem) => problem.id === state.selectedId) || problems[0];

const matchesFilters = (problem, data) => {
  const keyword = state.search.toLowerCase();
  const haystack = [problem.title, problem.englishTitle, problem.number, problem.difficulty, problem.category, ...(problem.tags || []), problem.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (state.collection !== "all" && problem.collection !== state.collection) return false;
  if (state.difficulty !== "all" && problem.difficulty !== state.difficulty) return false;
  if (state.tag !== "all" && !(problem.tags || []).includes(state.tag)) return false;
  if (keyword && !haystack.includes(keyword)) return false;
  if (state.status === "done" && !data[problem.id]?.done) return false;
  if (state.status === "todo" && data[problem.id]?.done) return false;
  return true;
};

const renderCollectionOptions = () => {
  const select = $("#collectionFilter");
  for (const collection of allCollections()) {
    const option = document.createElement("option");
    option.value = collection;
    option.textContent = collection;
    select.appendChild(option);
  }
};

const renderTagOptions = () => {
  const tagFilter = $("#tagFilter");
  for (const tag of allTags()) {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  }
};

const filteredProblems = (data) => problems.filter((problem) => matchesFilters(problem, data));

const renderProgress = (data) => {
  const scoped = state.collection === "all" ? problems : problems.filter((problem) => problem.collection === state.collection);
  const doneCount = scoped.filter((problem) => data[problem.id]?.done).length;
  const percent = scoped.length ? Math.round((doneCount / scoped.length) * 100) : 0;
  $("#progressText").textContent = `${doneCount} / ${scoped.length}`;
  $("#progressBar").style.width = `${percent}%`;
};

const renderProblemList = () => {
  const data = getPracticeData();
  const list = $("#problemList");
  list.innerHTML = "";
  const filtered = filteredProblems(data);
  if (!filtered.some((problem) => problem.id === state.selectedId) && filtered[0]) {
    state.selectedId = filtered[0].id;
    state.methodIndex = 0;
  }

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有匹配的题目";
    list.appendChild(empty);
    return;
  }

  for (const problem of filtered) {
    const category = problem.category || problem.tags?.[0] || "基础练习";
    const difficultyTone = {
      入门: "easy",
      基础: "easy",
      简单: "easy",
      中等: "medium",
      提高: "hard",
      困难: "hard",
    }[problem.difficulty] || "neutral";
    const button = document.createElement("button");
    button.type = "button";
    button.className = ["problem-item", problem.id === state.selectedId ? "active" : "", data[problem.id]?.done ? "done" : ""]
      .filter(Boolean)
      .join(" ");
    button.innerHTML = `
      <span class="problem-item-heading">
        <strong class="problem-name">${problem.title}</strong>
        <span class="problem-list-category">${category}</span>
      </span>
      <span class="problem-tags">
        <span class="chip chip-collection">${problem.collection || "未分类"}</span>
        <span class="chip chip-difficulty difficulty-${difficultyTone}">${problem.difficulty}</span>
        ${(problem.tags || []).slice(0, 4).map((tag, index) => `<span class="chip chip-topic tone-${index % 3}">${tag}</span>`).join("")}
      </span>
    `;
    button.addEventListener("click", () => {
      state.selectedId = problem.id;
      state.methodIndex = 0;
      render();
    });
    list.appendChild(button);
  }
};

const renderMethods = (problem) => {
  const methods = problem.methods || [];
  const select = $("#methodSelect");
  select.innerHTML = "";
  methods.forEach((method, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = method.name || `方法 ${index + 1}`;
    select.appendChild(option);
  });
  const safeIndex = Math.min(state.methodIndex, Math.max(methods.length - 1, 0));
  state.methodIndex = safeIndex;
  select.value = String(safeIndex);
  const method = methods[safeIndex] || { idea: "暂无", code: "// TODO" };
  $("#methodIdea").textContent = method.idea || "暂无思路";
  $("#solutionCode").textContent = method.code || "// TODO";
};

const renderInterviewNotes = (problem) => {
  const box = $("#interviewBox");
  const list = $("#interviewNotes");
  const notes = Array.isArray(problem.interviewNotes) ? problem.interviewNotes : problem.interviewNotes ? [problem.interviewNotes] : [];
  list.innerHTML = "";
  box.hidden = notes.length === 0;
  for (const note of notes) {
    const item = document.createElement("li");
    item.textContent = note;
    list.appendChild(item);
  }
};

const renderResearchMeta = (problem) => {
  const line = $("#researchLine");
  const research = researchByNumber[String(problem.number)];
  line.hidden = !research;
  if (!research) return;
  $("#researchMeta").textContent = `已核对 ${research.articlesReviewed.length} 篇题解 · ${research.commentsScanned} 条评论 · 筛出 ${research.usefulCommentsFound} 条技术讨论`;
  $("#discussionLink").href = research.primaryDiscussionUrl;
};

const svgNs = "http://www.w3.org/2000/svg";
const makeSvg = (name, attributes = {}, text = "") => {
  const element = document.createElementNS(svgNs, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, String(value)));
  if (text !== "") element.textContent = text;
  return element;
};

const addArrowMarker = (svg) => {
  const defs = makeSvg("defs");
  const marker = makeSvg("marker", { id: "visual-arrow", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" });
  marker.appendChild(makeSvg("path", { d: "M 0 0 L 10 5 L 0 10 z", class: "visual-arrow-head" }));
  defs.appendChild(marker);
  svg.appendChild(defs);
};

const drawBars = (svg, visual) => {
  const values = visual.values || [];
  const maxValue = Math.max(...values, ...(visual.waterProfile || []), visual.water || 0, 1);
  const gap = 18;
  const barWidth = Math.min(62, (620 - gap * Math.max(values.length - 1, 0)) / Math.max(values.length, 1));
  const totalWidth = values.length * barWidth + Math.max(values.length - 1, 0) * gap;
  const startX = (720 - totalWidth) / 2;
  const baseY = 238;
  const scale = 170 / maxValue;

  if (visual.active?.length === 2 && visual.water != null) {
    const [left, right] = visual.active;
    const leftX = startX + left * (barWidth + gap) + barWidth / 2;
    const rightX = startX + right * (barWidth + gap) + barWidth / 2;
    svg.appendChild(makeSvg("rect", { x: leftX, y: baseY - visual.water * scale, width: rightX - leftX, height: visual.water * scale, class: "visual-water container-water" }));
  }

  values.forEach((value, index) => {
    const x = startX + index * (barWidth + gap);
    const height = value * scale;
    const profile = visual.waterProfile?.[index] ?? (visual.active?.includes(index) ? visual.water : null);
    if (profile != null && profile > value) {
      svg.appendChild(makeSvg("rect", { x, y: baseY - profile * scale, width: barWidth, height: (profile - value) * scale, class: "visual-water" }));
    }
    svg.appendChild(makeSvg("rect", { x, y: baseY - height, width: barWidth, height, rx: 4, class: visual.active?.includes(index) ? "visual-bar active" : "visual-bar" }));
    svg.appendChild(makeSvg("text", { x: x + barWidth / 2, y: 260, class: "visual-label" }, String(value)));
  });

  if (visual.rectangle) {
    const { from, to, height } = visual.rectangle;
    const x = startX + from * (barWidth + gap);
    const width = (to - from + 1) * barWidth + (to - from) * gap;
    svg.appendChild(makeSvg("rect", { x, y: baseY - height * scale, width, height: height * scale, class: "visual-rectangle" }));
  }
  svg.appendChild(makeSvg("line", { x1: 42, y1: baseY, x2: 678, y2: baseY, class: "visual-axis" }));
};

const drawMatrix = (svg, visual) => {
  if (visual.triangle) {
    const rows = visual.triangle;
    const cell = 42;
    rows.forEach((row, r) => {
      const startX = 360 - (row.length * cell) / 2;
      row.forEach((value, c) => {
        const x = startX + c * cell;
        const y = 24 + r * 46;
        svg.appendChild(makeSvg("circle", { cx: x + cell / 2, cy: y + cell / 2, r: 18, class: "visual-cell" }));
        svg.appendChild(makeSvg("text", { x: x + cell / 2, y: y + 27, class: "visual-cell-text" }, String(value)));
      });
    });
    return;
  }

  const cells = visual.cells || [];
  const rows = cells.length;
  const cols = Math.max(...cells.map((row) => row.length), 1);
  const cell = Math.min(58, 540 / cols, 220 / Math.max(rows, 1));
  const startX = (720 - cols * cell) / 2;
  const startY = (280 - rows * cell) / 2;
  const points = [];

  cells.forEach((row, r) => row.forEach((value, c) => {
    const x = startX + c * cell;
    const y = startY + r * cell;
    const isMarked = visual.marks?.some(([mr, mc]) => mr === r && mc === c);
    const isTarget = visual.target?.[0] === r && visual.target?.[1] === c;
    const isQueen = value === "Q";
    const className = ["visual-cell", isMarked ? "marked" : "", isTarget ? "target" : "", isQueen ? "queen" : "", visual.waves && value === 2 ? "source" : ""].filter(Boolean).join(" ");
    svg.appendChild(makeSvg("rect", { x, y, width: cell - 5, height: cell - 5, rx: 5, class: className }));
    svg.appendChild(makeSvg("text", { x: x + (cell - 5) / 2, y: y + cell / 2 + 5, class: "visual-cell-text" }, String(value)));
    if (isMarked && visual.cross) {
      svg.appendChild(makeSvg("line", { x1: startX, y1: y + cell / 2, x2: startX + cols * cell - 5, y2: y + cell / 2, class: "visual-guide" }));
      svg.appendChild(makeSvg("line", { x1: x + cell / 2, y1: startY, x2: x + cell / 2, y2: startY + rows * cell - 5, class: "visual-guide" }));
    }
  }));

  (visual.path || []).forEach(([r, c]) => points.push(`${startX + c * cell + (cell - 5) / 2},${startY + r * cell + (cell - 5) / 2}`));
  if (points.length > 1) svg.appendChild(makeSvg("polyline", { points: points.join(" "), class: "visual-path", "marker-end": "url(#visual-arrow)" }));
  if (visual.rotate) svg.appendChild(makeSvg("path", { d: "M 575 95 A 72 72 0 0 1 575 195", class: "visual-path", "marker-end": "url(#visual-arrow)" }));
  if (visual.flatten) svg.appendChild(makeSvg("line", { x1: startX, y1: startY + rows * cell + 18, x2: startX + cols * cell - 8, y2: startY + rows * cell + 18, class: "visual-path", "marker-end": "url(#visual-arrow)" }));
};

const drawList = (svg, visual) => {
  const rows = visual.rows || [];
  const rowGap = rows.length > 2 ? 78 : 100;
  rows.forEach((row, rowIndex) => {
    const nodeWidth = Math.min(62, 540 / Math.max(row.length, 1));
    const gap = 22;
    const total = row.length * nodeWidth + (row.length - 1) * gap;
    const startX = (720 - total) / 2;
    const y = 35 + rowIndex * rowGap;
    row.forEach((value, index) => {
      const x = startX + index * (nodeWidth + gap);
      if (index < row.length - 1) svg.appendChild(makeSvg("line", { x1: x + nodeWidth, y1: y + 24, x2: x + nodeWidth + gap - 4, y2: y + 24, class: "visual-edge", "marker-end": "url(#visual-arrow)" }));
      const classes = ["visual-node-box", visual.removed === index && rowIndex === 0 ? "removed" : "", visual.entry === index ? "target" : "", visual.mergeAt === value ? "active" : ""].filter(Boolean).join(" ");
      svg.appendChild(makeSvg("rect", { x, y, width: nodeWidth, height: 48, rx: 6, class: classes }));
      svg.appendChild(makeSvg("text", { x: x + nodeWidth / 2, y: y + 30, class: "visual-node-text" }, String(value)));
      if (visual.removed === index && rowIndex === 0) {
        svg.appendChild(makeSvg("line", { x1: x + 8, y1: y + 8, x2: x + nodeWidth - 8, y2: y + 40, class: "visual-remove" }));
        svg.appendChild(makeSvg("line", { x1: x + nodeWidth - 8, y1: y + 8, x2: x + 8, y2: y + 40, class: "visual-remove" }));
      }
    });
    if (visual.cycleTo != null && rowIndex === 0 && row.length > 1) {
      const endX = startX + (row.length - 1) * (nodeWidth + gap) + nodeWidth / 2;
      const targetX = startX + visual.cycleTo * (nodeWidth + gap) + nodeWidth / 2;
      svg.appendChild(makeSvg("path", { d: `M ${endX} ${y + 48} C ${endX} ${y + 98}, ${targetX} ${y + 98}, ${targetX} ${y + 52}`, class: "visual-random", "marker-end": "url(#visual-arrow)" }));
    }
    (visual.random || []).forEach(([from, to]) => {
      const fromX = startX + from * (nodeWidth + gap) + nodeWidth / 2;
      const toX = startX + to * (nodeWidth + gap) + nodeWidth / 2;
      svg.appendChild(makeSvg("path", { d: `M ${fromX} ${y} Q ${(fromX + toX) / 2} ${y - 42}, ${toX} ${y - 3}`, class: "visual-random", "marker-end": "url(#visual-arrow)" }));
    });
  });
};

const treePosition = (index) => {
  const level = Math.floor(Math.log2(index + 1));
  const first = 2 ** level - 1;
  const offset = index - first;
  const slots = 2 ** level;
  return { x: ((offset + 0.5) / slots) * 640 + 40, y: 36 + level * 68 };
};

const drawTree = (svg, visual) => {
  const nodes = visual.nodes || [];
  if (visual.levels) {
    const maxLevel = Math.floor(Math.log2(Math.max(nodes.length, 1)));
    for (let level = 0; level <= maxLevel; level += 1) {
      const y = 36 + level * 68;
      svg.appendChild(makeSvg("line", { x1: 28, y1: y, x2: 692, y2: y, class: "visual-level-guide" }));
    }
  }
  nodes.forEach((value, index) => {
    if (value == null || index === 0) return;
    const parent = Math.floor((index - 1) / 2);
    if (nodes[parent] == null) return;
    const from = treePosition(parent);
    const to = treePosition(index);
    svg.appendChild(makeSvg("line", { x1: from.x, y1: from.y + 18, x2: to.x, y2: to.y - 18, class: "visual-edge" }));
  });
  nodes.forEach((value, index) => {
    if (value == null) return;
    const { x, y } = treePosition(index);
    const pathHighlighted = visual.paths?.some((path) => path.includes(index));
    const targetFromOrder = visual.targetOrder ? visual.order?.[visual.targetOrder - 1] === index : false;
    const highlighted = visual.highlight?.includes(index) || visual.rightView?.includes(index) || visual.ancestor === index || visual.invalid === index || pathHighlighted || targetFromOrder;
    const className = ["visual-tree-node", highlighted ? "active" : "", visual.invalid === index ? "invalid" : ""].filter(Boolean).join(" ");
    svg.appendChild(makeSvg("circle", { cx: x, cy: y, r: 20, class: className }));
    svg.appendChild(makeSvg("text", { x, y: y + 5, class: "visual-node-text" }, String(value)));
    const orderIndex = visual.order?.indexOf(index) ?? -1;
    if (orderIndex >= 0) {
      svg.appendChild(makeSvg("circle", { cx: x + 18, cy: y - 18, r: 10, class: "visual-order-badge" }));
      svg.appendChild(makeSvg("text", { x: x + 18, y: y - 14, class: "visual-order-text" }, String(orderIndex + 1)));
    }
  });
  if (visual.mirror) svg.appendChild(makeSvg("path", { d: "M 310 34 A 50 50 0 0 1 410 34", class: "visual-path", "marker-end": "url(#visual-arrow)" }));
  if (visual.source) svg.appendChild(makeSvg("text", { x: 360, y: 258, class: "visual-sequence" }, `有序数组：${visual.source.join("  ")}`));
  if (visual.preorder) {
    svg.appendChild(makeSvg("text", { x: 360, y: 236, class: "visual-sequence" }, `前序：${visual.preorder.join("  ")}`));
    svg.appendChild(makeSvg("text", { x: 360, y: 260, class: "visual-sequence" }, `中序：${visual.inorder.join("  ")}`));
  }
  if (visual.list) {
    const rowsSvg = makeSvg("g", { transform: "translate(0 178) scale(1 .52)" });
    drawList(rowsSvg, { rows: [visual.list] });
    svg.appendChild(rowsSvg);
  }
};

const drawPhone = (svg, visual) => {
  (visual.digits || []).forEach((label, index) => {
    const x = 180 + index * 250;
    svg.appendChild(makeSvg("rect", { x, y: 75, width: 150, height: 120, rx: 22, class: "visual-phone-key" }));
    const [digit, letters] = label.split(" ");
    svg.appendChild(makeSvg("text", { x: x + 75, y: 125, class: "visual-phone-digit" }, digit));
    svg.appendChild(makeSvg("text", { x: x + 75, y: 165, class: "visual-phone-letters" }, letters));
    if (index === 0) svg.appendChild(makeSvg("line", { x1: x + 155, y1: 135, x2: x + 240, y2: 135, class: "visual-path", "marker-end": "url(#visual-arrow)" }));
  });
};

const renderVisual = (problem) => {
  const figure = $("#problemVisual");
  const canvas = $("#visualCanvas");
  const caption = $("#visualCaption");
  const visual = problem.visual;
  canvas.replaceChildren();
  figure.hidden = !visual;
  if (!visual) return;

  const svg = makeSvg("svg", { viewBox: "0 0 720 280", role: "img", "aria-label": visual.caption || `${problem.title}示意图` });
  addArrowMarker(svg);
  if (visual.type === "bars") drawBars(svg, visual);
  else if (visual.type === "matrix") drawMatrix(svg, visual);
  else if (visual.type === "list") drawList(svg, visual);
  else if (visual.type === "tree" || visual.type === "tree-list") drawTree(svg, visual);
  else if (visual.type === "phone") drawPhone(svg, visual);
  canvas.appendChild(svg);
  caption.textContent = visual.caption || "原创题意示意图";
};

const renderDetail = () => {
  const data = getPracticeData();
  const problem = currentProblem();
  const saved = data[problem.id] || {};
  $("#problemMeta").textContent = `${problem.collection || "未分类"} · ${problem.difficulty} · ${(problem.tags || []).join(" / ")}`;
  $("#problemTitle").textContent = problem.title;
  $("#problemCategory").textContent = problem.category || problem.tags?.[0] || "基础练习";
  $("#problemDescription").textContent = problem.description;
  $("#sampleInput").textContent = problem.input || "见题面";
  $("#sampleOutput").textContent = problem.output || "见题面";
  $("#problemHint").textContent = problem.hint || "先写出自己的暴力思路，再尝试优化复杂度。";
  const savedCode = saved.code?.trim() === legacyBlankTemplate.trim() ? "" : saved.code;
  $("#codeEditor").value = savedCode || problem.template || "";
  $("#summaryEditor").value = saved.summary || "";
  $("#saveState").textContent = savedCode ? "已保存到当前浏览器" : "保存在当前浏览器";
  $("#summaryState").textContent = saved.summary ? "已保存到当前浏览器" : "保存在当前浏览器";
  $("#doneButton").textContent = saved.done ? "已完成" : "标记完成";
  $("#doneButton").classList.toggle("is-done", saved.done === true);
  const official = $("#officialLink");
  official.href = problem.officialUrl || "#";
  official.style.display = problem.officialUrl ? "inline-flex" : "none";
  renderVisual(problem);
  renderResearchMeta(problem);
  renderInterviewNotes(problem);
  renderMethods(problem);
};

const render = () => {
  const data = getPracticeData();
  renderProgress(data);
  renderProblemList();
  renderDetail();
};

const updateSelectedProblem = (patch) => {
  const data = getPracticeData();
  const problem = currentProblem();
  data[problem.id] = { ...(data[problem.id] || {}), ...patch };
  savePracticeData(data);
  renderProgress(data);
  renderProblemList();
};

const setupEvents = () => {
  $("#passwordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if ($("#passwordInput").value === gatePassword) {
      localStorage.setItem(gateKey, gatePassword);
      updateGate();
      $("#passwordMessage").textContent = "";
    } else {
      $("#passwordMessage").textContent = "密码不对，再试一次。";
    }
  });
  $("#collectionFilter").addEventListener("change", (event) => {
    state.collection = event.target.value;
    render();
  });
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderProblemList();
    renderDetail();
  });
  $("#difficultyFilter").addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    render();
  });
  $("#tagFilter").addEventListener("change", (event) => {
    state.tag = event.target.value;
    render();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    state.status = event.target.value;
    render();
  });
  $("#clearFilters").addEventListener("click", () => {
    state.collection = "all";
    state.search = "";
    state.difficulty = "all";
    state.tag = "all";
    state.status = "all";
    $("#collectionFilter").value = "all";
    $("#searchInput").value = "";
    $("#difficultyFilter").value = "all";
    $("#tagFilter").value = "all";
    $("#statusFilter").value = "all";
    render();
  });
  $("#codeEditor").addEventListener("input", (event) => {
    updateSelectedProblem({ code: event.target.value });
    $("#saveState").textContent = "已保存到当前浏览器";
  });
  $("#summaryEditor").addEventListener("input", (event) => {
    updateSelectedProblem({ summary: event.target.value });
    $("#summaryState").textContent = "已保存到当前浏览器";
  });
  $("#methodSelect").addEventListener("change", (event) => {
    state.methodIndex = Number(event.target.value);
    renderMethods(currentProblem());
  });
  $("#doneButton").addEventListener("click", () => {
    const data = getPracticeData();
    const problem = currentProblem();
    updateSelectedProblem({ done: !data[problem.id]?.done });
    renderDetail();
  });
  $("#resetButton").addEventListener("click", () => {
    const problem = currentProblem();
    $("#codeEditor").value = problem.template || "";
    updateSelectedProblem({ code: problem.template || "" });
    $("#saveState").textContent = "已恢复模板";
  });
  $("#copyButton").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#codeEditor").value);
    $("#saveState").textContent = "已复制";
  });
  $(".theme-toggle").addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
};

applyTheme(getTheme());
renderCollectionOptions();
renderTagOptions();
setupEvents();
updateGate();
render();

fetch("/practice/hot100-research.json?v=practice-20260711-4")
  .then((response) => (response.ok ? response.json() : Promise.reject(new Error("research data unavailable"))))
  .then((data) => {
    researchByNumber = Object.fromEntries((data.problems || []).map((item) => [String(item.number), item]));
    renderResearchMeta(currentProblem());
  })
  .catch(() => {});
