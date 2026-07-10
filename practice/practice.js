const baseProblems = [
  {
    id: "sum-a-b",
    collection: "????",
    title: "A + B Problem",
    difficulty: "??",
    tags: ["????", "??"],
    officialUrl: "",
    description: "?????? a ? b???????????? C++ ???????????",
    input: "3 5",
    output: "8",
    hint: "?? cin ???? long long???? a + b????????",
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b;
    cin >> a >> b;
    cout << a + b << '\n';
    return 0;
}
`,
    methods: [
      {
        name: "????",
        idea: "???????????????? O(1)?",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    cout << a + b << '\n';
    return 0;
}
`,
      },
    ],
  },
  {
    id: "max-of-three",
    collection: "????",
    title: "????????",
    difficulty: "??",
    tags: ["??", "??"],
    officialUrl: "",
    description: "?????????????????",
    input: "7 13 9",
    output: "13",
    hint: "??? max({a, b, c})????? if ?????",
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
        name: "??? max",
        idea: "? initializer_list ??? max ???????????",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max({a, b, c}) << '\n';
    return 0;
}
`,
      },
      { name: "if ??", idea: "?? ans???? b?c ?????", code: "// TODO: ? if ????" },
    ],
  },
  {
    id: "prefix-sum-range",
    collection: "????",
    title: "?????",
    difficulty: "??",
    tags: ["???", "??"],
    officialUrl: "",
    description: "?? n ??? q ???????? [l, r] ???????? 1 ???",
    input: "5 3\n1 2 3 4 5\n1 3\n2 5\n4 4",
    output: "6\n14\n4",
    hint: "??? prefix[i] = a[1] + ... + a[i]????? prefix[r] - prefix[l - 1]?",
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
        name: "?????",
        idea: "? O(n) ??????????? O(1) ???",
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
        cout << prefix[r] - prefix[l - 1] << '\n';
    }
    return 0;
}
`,
      },
    ],
  },
  {
    id: "two-sum-sorted",
    collection: "????",
    title: "???????",
    difficulty: "??",
    tags: ["???", "??"],
    officialUrl: "",
    description: "???????????? target??????????????????? target?",
    input: "6 10\n1 2 4 6 8 11",
    output: "YES",
    hint: "????????????????????????????????",
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
        name: "???",
        idea: "????????????????????? O(n)?",
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
            cout << "YES\n";
            return 0;
        }
        if (sum < target) ++l;
        else --r;
    }
    cout << "NO\n";
    return 0;
}
`,
      },
    ],
  },
  {
    id: "gcd-lcm",
    collection: "????",
    title: "???????????",
    difficulty: "??",
    tags: ["??", "??"],
    officialUrl: "",
    description: "??????? a ? b??? gcd(a, b) ? lcm(a, b)?",
    input: "12 18",
    output: "6 36",
    hint: "C++17 ???? std::gcd?lcm = a / gcd(a, b) * b ?????????",
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
    methods: [
      {
        name: "gcd ? lcm",
        idea: "?????????? a / gcd * b ???????",
        code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;
    long long g = gcd(a, b);
    cout << g << ' ' << a / g * b << '\n';
    return 0;
}
`,
      },
    ],
  },
  {
    id: "binary-search-first",
    collection: "????",
    title: "?????????? x",
    difficulty: "??",
    tags: ["??", "??"],
    officialUrl: "",
    description: "??????? x?????????? x ???????????? -1???? 1 ???",
    input: "6 5\n1 3 5 5 7 9",
    output: "3",
    hint: "???? ans?? a[mid] >= x??? mid ???????",
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
    methods: [
      { name: "????", idea: "???????????????", code: "// TODO: ??????" },
      { name: "lower_bound", idea: "?? STL lower_bound ???????? x ????", code: "// TODO: lower_bound ??" },
    ],
  },
  {
    id: "bfs-grid",
    collection: "????",
    title: "?????",
    difficulty: "??",
    tags: ["BFS", "??", "??"],
    officialUrl: "",
    description: "?? n*m ???'.' ???'#' ???? S ? T????????????? -1?",
    input: "3 4\nS..#\n.#..\n...T",
    output: "5",
    hint: "???? BFS??? dist????????????? T ?????????",
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
    methods: [{ name: "BFS", idea: "? S ????????????dist ?????????", code: "// TODO: BFS ????" }],
  },
  {
    id: "knapsack-01",
    collection: "????",
    title: "01 ??",
    difficulty: "??",
    tags: ["????", "??"],
    officialUrl: "",
    description: "? n ????????? w ??? v?????? W???????????????",
    input: "4 7\n3 4\n4 5\n2 3\n5 7",
    output: "9",
    hint: "?? dp??????????? W ??? w?????????????",
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
    methods: [{ name: "?? DP", idea: "???????????????????", code: "// TODO: 01 ??????" }],
  },
];

const hot100Problems = (window.hot100Problems || []).map((problem) => ({
  ...problem,
  methods: problem.methods || [
    { name: "???????", idea: "????????????????", code: "// TODO" },
  ],
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
  root.dataset.theme = value === "dark" ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", value === "dark" ? "#17120f" : "#f4dfbf");
};

const currentProblem = () => problems.find((problem) => problem.id === state.selectedId) || problems[0];
const allTags = () => [...new Set(problems.flatMap((problem) => problem.tags))].sort((a, b) => a.localeCompare(b, "zh-CN"));
const allCollections = () => [...new Set(problems.map((problem) => problem.collection || "????"))];

const isUnlocked = () => localStorage.getItem(gateKey) === gatePassword;

const updateGate = () => {
  const gate = $("#passwordGate");
  if (gate) gate.classList.toggle("is-unlocked", isUnlocked());
};

const matchesFilters = (problem, data) => {
  const haystack = [problem.title, problem.englishTitle, problem.number, problem.difficulty, ...(problem.tags || []), problem.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const done = data[problem.id]?.done === true;
  const statusOk = state.status === "all" || (state.status === "done" && done) || (state.status === "todo" && !done);
  return (
    (state.collection === "all" || problem.collection === state.collection) &&
    (!state.search || haystack.includes(state.search.toLowerCase())) &&
    (state.difficulty === "all" || problem.difficulty === state.difficulty) &&
    (state.tag === "all" || (problem.tags || []).includes(state.tag)) &&
    statusOk
  );
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
    empty.textContent = "????????";
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
        <span class="chip">${problem.collection || "????"}</span>
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
    option.textContent = method.name || `?? ${index + 1}`;
    select.appendChild(option);
  });
  const safeIndex = Math.min(state.methodIndex, Math.max(methods.length - 1, 0));
  state.methodIndex = safeIndex;
  select.value = String(safeIndex);
  const method = methods[safeIndex] || { idea: "???", code: "// TODO" };
  $("#methodIdea").textContent = method.idea || "????";
  $("#solutionCode").textContent = method.code || "// TODO";
};

const renderDetail = () => {
  const data = getPracticeData();
  const problem = currentProblem();
  const saved = data[problem.id] || {};
  $("#problemMeta").textContent = `${problem.collection || "????"} ? ${problem.difficulty} ? ${(problem.tags || []).join(" / ")}`;
  $("#problemTitle").textContent = problem.title;
  $("#problemDescription").textContent = problem.description;
  $("#sampleInput").textContent = problem.input || "???";
  $("#sampleOutput").textContent = problem.output || "???";
  $("#problemHint").textContent = problem.hint || "??????????????";
  $("#codeEditor").value = saved.code || problem.template || "";
  $("#summaryEditor").value = saved.summary || "";
  $("#saveState").textContent = saved.code ? "???????" : "???????";
  $("#summaryState").textContent = saved.summary ? "???????" : "???????";
  $("#doneButton").textContent = saved.done ? "???" : "????";
  $("#doneButton").classList.toggle("is-done", saved.done === true);
  const official = $("#officialLink");
  official.href = problem.officialUrl || "#";
  official.style.display = problem.officialUrl ? "inline-flex" : "none";
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
      $("#passwordMessage").textContent = "??????????";
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
    $("#saveState").textContent = "?????";
  });
  $("#summaryEditor").addEventListener("input", (event) => {
    updateSelectedProblem({ summary: event.target.value });
    $("#summaryState").textContent = "?????";
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
    $("#saveState").textContent = "?????";
  });
  $("#copyButton").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#codeEditor").value);
    $("#saveState").textContent = "?????";
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
