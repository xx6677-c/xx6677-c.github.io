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

const hot100Problems = (window.hot100Problems || []).map((problem) => ({
  ...problem,
  methods: problem.methods?.length
    ? problem.methods
    : [{ name: "方法一：标准写法", idea: "先自己写，再补充复盘。", code: "// TODO" }],
}));

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
const gatePassword = "111111";

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
    const button = document.createElement("button");
    button.type = "button";
    button.className = ["problem-item", problem.id === state.selectedId ? "active" : "", data[problem.id]?.done ? "done" : ""]
      .filter(Boolean)
      .join(" ");
    button.innerHTML = `
      <strong class="problem-name">${problem.title}</strong>
      <span class="problem-tags">
        <span class="chip">${problem.collection || "未分类"}</span>
        <span class="chip">${problem.difficulty}</span>
        ${(problem.tags || []).slice(0, 4).map((tag) => `<span class="chip">${tag}</span>`).join("")}
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

const renderDetail = () => {
  const data = getPracticeData();
  const problem = currentProblem();
  const saved = data[problem.id] || {};
  $("#problemMeta").textContent = `${problem.collection || "未分类"} · ${problem.difficulty} · ${(problem.tags || []).join(" / ")}`;
  $("#problemTitle").textContent = problem.title;
  $("#problemDescription").textContent = problem.description;
  $("#sampleInput").textContent = problem.input || "见题面";
  $("#sampleOutput").textContent = problem.output || "见题面";
  $("#problemHint").textContent = problem.hint || "先写出自己的暴力思路，再尝试优化复杂度。";
  $("#codeEditor").value = saved.code || problem.template || "";
  $("#summaryEditor").value = saved.summary || "";
  $("#saveState").textContent = saved.code ? "已保存草稿" : "自动保存到本机";
  $("#summaryState").textContent = saved.summary ? "已保存摘要" : "自动保存到本机";
  $("#doneButton").textContent = saved.done ? "已完成" : "标记完成";
  $("#doneButton").classList.toggle("is-done", saved.done === true);
  const official = $("#officialLink");
  official.href = problem.officialUrl || "#";
  official.style.display = problem.officialUrl ? "inline-flex" : "none";
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
    $("#saveState").textContent = "已保存草稿";
  });
  $("#summaryEditor").addEventListener("input", (event) => {
    updateSelectedProblem({ summary: event.target.value });
    $("#summaryState").textContent = "已保存摘要";
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
