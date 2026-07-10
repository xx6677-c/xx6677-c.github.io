const problems = [
  {
    id: "sum-a-b",
    title: "A + B Problem",
    difficulty: "入门",
    tags: ["输入输出", "基础"],
    description: "读入两个整数 a 和 b，输出它们的和。适合检查 C++ 输入输出模板是否顺手。",
    input: "3 5",
    output: "8",
    hint: "使用 cin 读取两个 int 或 long long，再输出 a + b。注意最后可以换行。",
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
    solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    cout << a + b << '\\n';
    return 0;
}
`,
  },
  {
    id: "max-of-three",
    title: "三个数中的最大值",
    difficulty: "入门",
    tags: ["分支", "基础"],
    description: "读入三个整数，输出其中最大的一个。",
    input: "7 13 9",
    output: "13",
    hint: "可以用 max({a, b, c})，也可以用 if 逐个比较。",
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
    solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max({a, b, c}) << '\\n';
    return 0;
}
`,
  },
  {
    id: "prefix-sum-range",
    title: "区间和查询",
    difficulty: "简单",
    tags: ["前缀和", "数组"],
    description: "给定 n 个数和 q 次询问，每次询问 [l, r] 的区间和。下标从 1 开始。",
    input: "5 3\n1 2 3 4 5\n1 3\n2 5\n4 4",
    output: "6\n14\n4",
    hint: "预处理 prefix[i] = a[1] + ... + a[i]，区间和为 prefix[r] - prefix[l - 1]。",
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
    solution: `#include <bits/stdc++.h>
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
  {
    id: "two-sum-sorted",
    title: "有序数组两数和",
    difficulty: "简单",
    tags: ["双指针", "数组"],
    description: "给定一个递增数组和目标值 target，判断是否存在两个不同位置的数之和等于 target。",
    input: "6 10\n1 2 4 6 8 11",
    output: "YES",
    hint: "左指针从开头，右指针从末尾。和太小左指针右移，和太大右指针左移。",
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
    solution: `#include <bits/stdc++.h>
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
  {
    id: "gcd-lcm",
    title: "最大公约数与最小公倍数",
    difficulty: "简单",
    tags: ["数学", "函数"],
    description: "读入两个正整数 a 和 b，输出 gcd(a, b) 和 lcm(a, b)。",
    input: "12 18",
    output: "6 36",
    hint: "C++17 可以使用 std::gcd。lcm = a / gcd(a, b) * b 可以减少溢出风险。",
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b;
    cin >> a >> b;
    // TODO
    return 0;
}
`,
    solution: `#include <bits/stdc++.h>
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
  {
    id: "binary-search-first",
    title: "二分查找第一个不小于 x",
    difficulty: "中等",
    tags: ["二分", "数组"],
    description: "给定递增数组和 x，输出第一个大于等于 x 的位置。如果不存在，输出 -1。位置从 1 开始。",
    input: "6 5\n1 3 5 5 7 9",
    output: "3",
    hint: "维护答案 ans。若 a[mid] >= x，记录 mid 并继续向左找。",
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long x;
    cin >> n >> x;
    vector<long long> a(n);
    for (auto &v : a) cin >> v;
    // TODO
    return 0;
}
`,
    solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long x;
    cin >> n >> x;
    vector<long long> a(n);
    for (auto &v : a) cin >> v;
    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] >= x) {
            ans = mid + 1;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    cout << ans << '\\n';
    return 0;
}
`,
  },
  {
    id: "bfs-grid",
    title: "网格最短路",
    difficulty: "中等",
    tags: ["BFS", "队列", "图论"],
    description: "给定 n*m 网格，'.' 可走，'#' 障碍。从 S 到 T，输出最短步数，不可达输出 -1。",
    input: "3 4\nS..#\n.#..\n...T",
    output: "5",
    hint: "使用队列 BFS，记录 dist。四个方向扩展，第一次到达 T 的距离就是最短路。",
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<string> g(n);
    for (auto &row : g) cin >> row;
    // TODO
    return 0;
}
`,
    solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> g(n);
    for (auto &row : g) cin >> row;
    queue<pair<int, int>> q;
    vector dist(n, vector<int>(m, -1));
    pair<int, int> target{-1, -1};
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (g[i][j] == 'S') {
                q.push({i, j});
                dist[i][j] = 0;
            }
            if (g[i][j] == 'T') target = {i, j};
        }
    }
    int dx[4] = {1, -1, 0, 0};
    int dy[4] = {0, 0, 1, -1};
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        for (int k = 0; k < 4; ++k) {
            int nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (g[nx][ny] == '#' || dist[nx][ny] != -1) continue;
            dist[nx][ny] = dist[x][y] + 1;
            q.push({nx, ny});
        }
    }
    cout << dist[target.first][target.second] << '\\n';
    return 0;
}
`,
  },
  {
    id: "knapsack-01",
    title: "01 背包",
    difficulty: "提高",
    tags: ["动态规划", "背包"],
    description: "有 n 件物品，每件有体积 w 和价值 v，背包容量为 W。每件最多选一次，求最大价值。",
    input: "4 7\n3 4\n4 5\n2 3\n5 7",
    output: "9",
    hint: "一维 dp。枚举物品后，容量要从 W 倒序到 w，避免同一件物品被重复选。",
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
    solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> dp(W + 1);
    for (int i = 0; i < n; ++i) {
        int w, v;
        cin >> w >> v;
        for (int cap = W; cap >= w; --cap) {
            dp[cap] = max(dp[cap], dp[cap - w] + v);
        }
    }
    cout << dp[W] << '\\n';
    return 0;
}
`,
  },
];

const root = document.documentElement;
const state = {
  selectedId: problems[0].id,
  search: "",
  difficulty: "all",
  tag: "all",
  status: "all",
};

const storageKey = "xixi-cpp-practice-v1";
const themeKey = "theme";

const $ = (selector) => document.querySelector(selector);

const getPracticeData = () => {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
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
  localStorage.setItem(
    themeKey,
    JSON.stringify({ value, expiry: Date.now() + 365 * 86400000 }),
  );
};

const applyTheme = (value) => {
  root.dataset.theme = value === "dark" ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", value === "dark" ? "#17120f" : "#f4dfbf");
};

const currentProblem = () => problems.find((problem) => problem.id === state.selectedId);

const allTags = () => [...new Set(problems.flatMap((problem) => problem.tags))].sort();

const matchesFilters = (problem, data) => {
  const haystack = [problem.title, problem.difficulty, ...problem.tags, problem.description]
    .join(" ")
    .toLowerCase();
  const done = data[problem.id]?.done === true;
  const statusOk =
    state.status === "all" ||
    (state.status === "done" && done) ||
    (state.status === "todo" && !done);
  return (
    (!state.search || haystack.includes(state.search.toLowerCase())) &&
    (state.difficulty === "all" || problem.difficulty === state.difficulty) &&
    (state.tag === "all" || problem.tags.includes(state.tag)) &&
    statusOk
  );
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

const renderProgress = (data) => {
  const doneCount = problems.filter((problem) => data[problem.id]?.done).length;
  const percent = problems.length ? Math.round((doneCount / problems.length) * 100) : 0;
  $("#progressText").textContent = `${doneCount} / ${problems.length}`;
  $("#progressBar").style.width = `${percent}%`;
};

const renderProblemList = () => {
  const data = getPracticeData();
  const list = $("#problemList");
  list.innerHTML = "";
  const filtered = problems.filter((problem) => matchesFilters(problem, data));

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有匹配的题目。";
    list.appendChild(empty);
    return;
  }

  for (const problem of filtered) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "problem-item",
      problem.id === state.selectedId ? "active" : "",
      data[problem.id]?.done ? "done" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.innerHTML = `
      <strong class="problem-name">${problem.title}</strong>
      <span class="problem-tags">
        <span class="chip">${problem.difficulty}</span>
        ${problem.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </span>
    `;
    button.addEventListener("click", () => {
      state.selectedId = problem.id;
      render();
    });
    list.appendChild(button);
  }
};

const renderDetail = () => {
  const data = getPracticeData();
  const problem = currentProblem();
  const saved = data[problem.id] || {};
  $("#problemMeta").textContent = `${problem.difficulty} · ${problem.tags.join(" / ")}`;
  $("#problemTitle").textContent = problem.title;
  $("#problemDescription").textContent = problem.description;
  $("#sampleInput").textContent = problem.input;
  $("#sampleOutput").textContent = problem.output;
  $("#problemHint").textContent = problem.hint;
  $("#solutionCode").textContent = problem.solution;
  $("#codeEditor").value = saved.code || problem.template;
  $("#saveState").textContent = saved.code ? "已加载本机草稿" : "自动保存到本机";
  $("#doneButton").textContent = saved.done ? "已完成" : "标记完成";
  $("#doneButton").classList.toggle("is-done", saved.done === true);
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
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderProblemList();
  });
  $("#difficultyFilter").addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    renderProblemList();
  });
  $("#tagFilter").addEventListener("change", (event) => {
    state.tag = event.target.value;
    renderProblemList();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    state.status = event.target.value;
    renderProblemList();
  });
  $("#clearFilters").addEventListener("click", () => {
    state.search = "";
    state.difficulty = "all";
    state.tag = "all";
    state.status = "all";
    $("#searchInput").value = "";
    $("#difficultyFilter").value = "all";
    $("#tagFilter").value = "all";
    $("#statusFilter").value = "all";
    renderProblemList();
  });
  $("#codeEditor").addEventListener("input", (event) => {
    updateSelectedProblem({ code: event.target.value });
    $("#saveState").textContent = "已自动保存";
  });
  $("#doneButton").addEventListener("click", () => {
    const data = getPracticeData();
    const problem = currentProblem();
    updateSelectedProblem({ done: !data[problem.id]?.done });
    renderDetail();
  });
  $("#resetButton").addEventListener("click", () => {
    const problem = currentProblem();
    $("#codeEditor").value = problem.template;
    updateSelectedProblem({ code: problem.template });
    $("#saveState").textContent = "已恢复模板";
  });
  $("#copyButton").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#codeEditor").value);
    $("#saveState").textContent = "代码已复制";
  });
  $(".theme-toggle").addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
};

applyTheme(getTheme());
renderTagOptions();
setupEvents();
render();
