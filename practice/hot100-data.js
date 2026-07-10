window.hot100Problems = [
  {
    "id": "leetcode-1-two-sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "1",
    "title": "1. 两数之和",
    "englishTitle": "Two Sum",
    "difficulty": "简单",
    "category": "哈希",
    "tags": [
      "数组",
      "哈希表"
    ],
    "officialUrl": "https://leetcode.cn/problems/two-sum/",
    "description": "这是一道 哈希 / 数组、哈希表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "遍历数组，用哈希表记录已经出现过的数字及下标，每次查找 target - 当前数 是否存在。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "遍历数组，用哈希表记录已经出现过的数字及下标，每次查找 target - 当前数 是否存在。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> mp;\n        for (int i = 0; i < nums.size(); i++) {\n            int need = target - nums[i];\n            if (mp.count(need)) {\n                return {mp[need], i};\n            }\n            mp[nums[i]] = i;\n        }\n        return {};\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-49-group-anagrams",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "49",
    "title": "49. 字母异位词分组",
    "englishTitle": "Group Anagrams",
    "difficulty": "中等",
    "category": "哈希",
    "tags": [
      "数组",
      "哈希表",
      "字符串",
      "排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/group-anagrams/",
    "description": "这是一道 哈希 / 数组、哈希表、字符串 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "异位词排序后相同，因此把排序后的字符串作为哈希 key，将原字符串加入对应分组。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "异位词排序后相同，因此把排序后的字符串作为哈希 key，将原字符串加入对应分组。\n\n复杂度：时间 O(nk log k)，空间 O(nk)，k 为字符串平均长度。",
        "code": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> mp;\n        for (string s : strs) {\n            string key = s;\n            sort(key.begin(), key.end());\n            mp[key].push_back(s);\n        }\n\n        vector<vector<string>> ans;\n        for (auto& [key, group] : mp) {\n            ans.push_back(group);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-128-longest-consecutive-sequence",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "128",
    "title": "128. 最长连续序列",
    "englishTitle": "Longest Consecutive Sequence",
    "difficulty": "中等",
    "category": "哈希",
    "tags": [
      "并查集",
      "数组",
      "哈希表"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-consecutive-sequence/",
    "description": "这是一道 哈希 / 并查集、数组、哈希表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用哈希集合存所有数，只从“没有前驱”的序列起点开始向后扩展，避免重复统计。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "用哈希集合存所有数，只从“没有前驱”的序列起点开始向后扩展，避免重复统计。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> st(nums.begin(), nums.end());\n        int ans = 0;\n\n        for (int x : st) {\n            if (!st.count(x - 1)) {\n                int cur = x;\n                int len = 1;\n                while (st.count(cur + 1)) {\n                    cur++;\n                    len++;\n                }\n                ans = max(ans, len);\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-283-move-zeroes",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "283",
    "title": "283. 移动零",
    "englishTitle": "Move Zeroes",
    "difficulty": "简单",
    "category": "双指针",
    "tags": [
      "数组",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/move-zeroes/",
    "description": "这是一道 双指针 / 数组、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "慢指针记录下一个非零元素应放的位置，遍历时将非零数依次前移，最后补零。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "慢指针记录下一个非零元素应放的位置，遍历时将非零数依次前移，最后补零。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int slow = 0;\n        for (int x : nums) {\n            if (x != 0) {\n                nums[slow++] = x;\n            }\n        }\n        while (slow < nums.size()) {\n            nums[slow++] = 0;\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-11-container-with-most-water",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "11",
    "title": "11. 盛最多水的容器",
    "englishTitle": "Container With Most Water",
    "difficulty": "中等",
    "category": "双指针",
    "tags": [
      "贪心",
      "数组",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/container-with-most-water/",
    "description": "这是一道 双指针 / 贪心、数组、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "左右指针从两端开始，面积受短板限制，因此每次移动较短的一边尝试变大。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "左右指针从两端开始，面积受短板限制，因此每次移动较短的一边尝试变大。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int l = 0, r = height.size() - 1;\n        int ans = 0;\n\n        while (l < r) {\n            ans = max(ans, min(height[l], height[r]) * (r - l));\n            if (height[l] < height[r]) {\n                l++;\n            } else {\n                r--;\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-15-3sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "15",
    "title": "15. 三数之和",
    "englishTitle": "3Sum",
    "difficulty": "中等",
    "category": "双指针",
    "tags": [
      "数组",
      "双指针",
      "排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/3sum/",
    "description": "这是一道 双指针 / 数组、双指针、排序 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "先排序，固定一个数，再用双指针在右侧找另外两个数，同时跳过重复元素。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "先排序，固定一个数，再用双指针在右侧找另外两个数，同时跳过重复元素。\n\n复杂度：时间 O(n^2)，空间 O(1)，不算返回结果。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> ans;\n        int n = nums.size();\n\n        for (int i = 0; i < n; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            if (nums[i] > 0) break;\n\n            int l = i + 1, r = n - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    ans.push_back({nums[i], nums[l], nums[r]});\n                    l++;\n                    r--;\n                    while (l < r && nums[l] == nums[l - 1]) l++;\n                    while (l < r && nums[r] == nums[r + 1]) r--;\n                } else if (sum < 0) {\n                    l++;\n                } else {\n                    r--;\n                }\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-42-trapping-rain-water",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "42",
    "title": "42. 接雨水",
    "englishTitle": "Trapping Rain Water",
    "difficulty": "困难",
    "category": "双指针",
    "tags": [
      "栈",
      "数组",
      "双指针",
      "动态规划",
      "单调栈"
    ],
    "officialUrl": "https://leetcode.cn/problems/trapping-rain-water/",
    "description": "这是一道 双指针 / 栈、数组、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "双指针维护左右最大高度，较低一侧的最大高度决定当前位置能接多少水。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "双指针维护左右最大高度，较低一侧的最大高度决定当前位置能接多少水。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        int l = 0, r = height.size() - 1;\n        int leftMax = 0, rightMax = 0;\n        int ans = 0;\n\n        while (l < r) {\n            leftMax = max(leftMax, height[l]);\n            rightMax = max(rightMax, height[r]);\n\n            if (leftMax < rightMax) {\n                ans += leftMax - height[l];\n                l++;\n            } else {\n                ans += rightMax - height[r];\n                r--;\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-3-longest-substring-without-repeating-characters",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "3",
    "title": "3. 无重复字符的最长子串",
    "englishTitle": "Longest Substring Without Repeating Characters",
    "difficulty": "中等",
    "category": "滑动窗口 / 子串",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-substring-without-repeating-characters/",
    "description": "这是一道 滑动窗口 / 子串 / 哈希表、字符串、滑动窗口 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用数组记录字符最近出现位置，若重复出现在窗口内，就移动左边界。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "把窗口内不变量说清楚：什么时候扩张，什么时候收缩，结果在收缩前还是后更新。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "用数组记录字符最近出现位置，若重复出现在窗口内，就移动左边界。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        vector<int> last(128, -1);\n        int left = 0, ans = 0;\n\n        for (int right = 0; right < s.size(); right++) {\n            char c = s[right];\n            if (last[c] >= left) {\n                left = last[c] + 1;\n            }\n            last[c] = right;\n            ans = max(ans, right - left + 1);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-438-find-all-anagrams-in-a-string",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "438",
    "title": "438. 找到字符串中所有字母异位词",
    "englishTitle": "Find All Anagrams in a String",
    "difficulty": "中等",
    "category": "滑动窗口 / 子串",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "officialUrl": "https://leetcode.cn/problems/find-all-anagrams-in-a-string/",
    "description": "这是一道 滑动窗口 / 子串 / 哈希表、字符串、滑动窗口 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "固定长度滑动窗口统计字符频次，窗口长度等于 p 时比较频次是否一致。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "把窗口内不变量说清楚：什么时候扩张，什么时候收缩，结果在收缩前还是后更新。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "固定长度滑动窗口统计字符频次，窗口长度等于 p 时比较频次是否一致。\n\n复杂度：时间 O(26n) 即 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        vector<int> ans;\n        int n = s.size(), m = p.size();\n        if (n < m) return ans;\n\n        vector<int> need(26, 0), win(26, 0);\n        for (char c : p) need[c - 'a']++;\n\n        for (int i = 0; i < n; i++) {\n            win[s[i] - 'a']++;\n            if (i >= m) {\n                win[s[i - m] - 'a']--;\n            }\n            if (i >= m - 1 && win == need) {\n                ans.push_back(i - m + 1);\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-560-subarray-sum-equals-k",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "560",
    "title": "560. 和为 K 的子数组",
    "englishTitle": "Subarray Sum Equals K",
    "difficulty": "中等",
    "category": "滑动窗口 / 子串",
    "tags": [
      "数组",
      "哈希表",
      "前缀和"
    ],
    "officialUrl": "https://leetcode.cn/problems/subarray-sum-equals-k/",
    "description": "这是一道 滑动窗口 / 子串 / 数组、哈希表、前缀和 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用前缀和记录到当前位置的和，哈希表统计历史前缀和出现次数。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "用前缀和记录到当前位置的和，哈希表统计历史前缀和出现次数。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        unordered_map<int, int> cnt;\n        cnt[0] = 1;\n        int prefix = 0;\n        int ans = 0;\n\n        for (int x : nums) {\n            prefix += x;\n            if (cnt.count(prefix - k)) {\n                ans += cnt[prefix - k];\n            }\n            cnt[prefix]++;\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-239-sliding-window-maximum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "239",
    "title": "239. 滑动窗口最大值",
    "englishTitle": "Sliding Window Maximum",
    "difficulty": "困难",
    "category": "滑动窗口 / 子串",
    "tags": [
      "队列",
      "数组",
      "滑动窗口",
      "单调队列",
      "堆（优先队列）"
    ],
    "officialUrl": "https://leetcode.cn/problems/sliding-window-maximum/",
    "description": "这是一道 滑动窗口 / 子串 / 队列、数组、滑动窗口 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "单调递减队列保存下标，队头始终是当前窗口最大值的位置。",
    "interviewNotes": [
      "把窗口内不变量说清楚：什么时候扩张，什么时候收缩，结果在收缩前还是后更新。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：滑动窗口",
        "idea": "单调递减队列保存下标，队头始终是当前窗口最大值的位置。\n\n复杂度：时间 O(n)，空间 O(k)。",
        "code": "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        deque<int> q;\n        vector<int> ans;\n\n        for (int i = 0; i < nums.size(); i++) {\n            while (!q.empty() && q.front() <= i - k) q.pop_front();\n            while (!q.empty() && nums[q.back()] <= nums[i]) q.pop_back();\n            q.push_back(i);\n            if (i >= k - 1) ans.push_back(nums[q.front()]);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-76-minimum-window-substring",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "76",
    "title": "76. 最小覆盖子串",
    "englishTitle": "Minimum Window Substring",
    "difficulty": "困难",
    "category": "滑动窗口 / 子串",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "officialUrl": "https://leetcode.cn/problems/minimum-window-substring/",
    "description": "这是一道 滑动窗口 / 子串 / 哈希表、字符串、滑动窗口 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "右指针扩张直到覆盖 t，再不断移动左指针缩短窗口并更新答案。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "把窗口内不变量说清楚：什么时候扩张，什么时候收缩，结果在收缩前还是后更新。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "右指针扩张直到覆盖 t，再不断移动左指针缩短窗口并更新答案。\n\n复杂度：时间 O(m+n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        vector<int> need(128, 0);\n        for (char c : t) need[c]++;\n\n        int missing = t.size();\n        int left = 0, start = 0, minLen = INT_MAX;\n\n        for (int right = 0; right < s.size(); right++) {\n            if (need[s[right]] > 0) missing--;\n            need[s[right]]--;\n\n            while (missing == 0) {\n                if (right - left + 1 < minLen) {\n                    minLen = right - left + 1;\n                    start = left;\n                }\n\n                need[s[left]]++;\n                if (need[s[left]] > 0) missing++;\n                left++;\n            }\n        }\n        return minLen == INT_MAX ? \"\" : s.substr(start, minLen);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-53-maximum-subarray",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "53",
    "title": "53. 最大子数组和",
    "englishTitle": "Maximum Subarray",
    "difficulty": "中等",
    "category": "普通数组",
    "tags": [
      "数组",
      "分治",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/maximum-subarray/",
    "description": "这是一道 普通数组 / 数组、分治、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "动态维护以当前位置结尾的最大连续和，决定接在前面还是从当前重新开始。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "动态维护以当前位置结尾的最大连续和，决定接在前面还是从当前重新开始。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int cur = nums[0], ans = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            cur = max(nums[i], cur + nums[i]);\n            ans = max(ans, cur);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-56-merge-intervals",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "56",
    "title": "56. 合并区间",
    "englishTitle": "Merge Intervals",
    "difficulty": "中等",
    "category": "普通数组",
    "tags": [
      "数组",
      "排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/merge-intervals/",
    "description": "这是一道 普通数组 / 数组、排序 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "按左端点排序，依次检查当前区间是否和结果末尾区间重叠，重叠就合并。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：标准写法",
        "idea": "按左端点排序，依次检查当前区间是否和结果末尾区间重叠，重叠就合并。\n\n复杂度：时间 O(n log n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        sort(intervals.begin(), intervals.end());\n        vector<vector<int>> ans;\n\n        for (auto& it : intervals) {\n            if (ans.empty() || ans.back()[1] < it[0]) {\n                ans.push_back(it);\n            } else {\n                ans.back()[1] = max(ans.back()[1], it[1]);\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-189-rotate-array",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "189",
    "title": "189. 轮转数组",
    "englishTitle": "Rotate Array",
    "difficulty": "中等",
    "category": "普通数组",
    "tags": [
      "数组",
      "数学",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/rotate-array/",
    "description": "这是一道 普通数组 / 数组、数学、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "三次反转：先整体反转，再反转前 k 个，最后反转剩余部分。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "三次反转：先整体反转，再反转前 k 个，最后反转剩余部分。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n = nums.size();\n        k %= n;\n        reverse(nums.begin(), nums.end());\n        reverse(nums.begin(), nums.begin() + k);\n        reverse(nums.begin() + k, nums.end());\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-238-product-of-array-except-self",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "238",
    "title": "238. 除了自身以外数组的乘积",
    "englishTitle": "Product of Array Except Self",
    "difficulty": "中等",
    "category": "普通数组",
    "tags": [
      "数组",
      "前缀和"
    ],
    "officialUrl": "https://leetcode.cn/problems/product-of-array-except-self/",
    "description": "这是一道 普通数组 / 数组、前缀和 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "答案数组先存左侧乘积，再从右往左乘上右侧乘积。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：标准写法",
        "idea": "答案数组先存左侧乘积，再从右往左乘上右侧乘积。\n\n复杂度：时间 O(n)，额外空间 O(1)，不算返回数组。",
        "code": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> ans(n, 1);\n\n        int left = 1;\n        for (int i = 0; i < n; i++) {\n            ans[i] = left;\n            left *= nums[i];\n        }\n\n        int right = 1;\n        for (int i = n - 1; i >= 0; i--) {\n            ans[i] *= right;\n            right *= nums[i];\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-41-first-missing-positive",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "41",
    "title": "41. 缺失的第一个正数",
    "englishTitle": "First Missing Positive",
    "difficulty": "困难",
    "category": "普通数组",
    "tags": [
      "数组",
      "哈希表"
    ],
    "officialUrl": "https://leetcode.cn/problems/first-missing-positive/",
    "description": "这是一道 普通数组 / 数组、哈希表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "把数字 x 尽量放到下标 x-1，最后第一个不满足 nums[i]==i+1 的位置就是答案。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "把数字 x 尽量放到下标 x-1，最后第一个不满足 nums[i]==i+1 的位置就是答案。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int firstMissingPositive(vector<int>& nums) {\n        int n = nums.size();\n\n        for (int i = 0; i < n; i++) {\n            while (nums[i] >= 1 && nums[i] <= n && nums[i] != nums[nums[i] - 1]) {\n                swap(nums[i], nums[nums[i] - 1]);\n            }\n        }\n\n        for (int i = 0; i < n; i++) {\n            if (nums[i] != i + 1) return i + 1;\n        }\n        return n + 1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-73-set-matrix-zeroes",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "73",
    "title": "73. 矩阵置零",
    "englishTitle": "Set Matrix Zeroes",
    "difficulty": "中等",
    "category": "矩阵",
    "tags": [
      "数组",
      "哈希表",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/set-matrix-zeroes/",
    "description": "这是一道 矩阵 / 数组、哈希表、矩阵 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用第一行和第一列作为标记，额外记录第一行、第一列本身是否需要置零。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "用第一行和第一列作为标记，额外记录第一行、第一列本身是否需要置零。\n\n复杂度：时间 O(mn)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        int m = matrix.size(), n = matrix[0].size();\n        bool firstRow = false, firstCol = false;\n\n        for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRow = true;\n        for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstCol = true;\n\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) {\n                if (matrix[i][j] == 0) {\n                    matrix[i][0] = 0;\n                    matrix[0][j] = 0;\n                }\n            }\n        }\n\n        for (int i = 1; i < m; i++) {\n            if (matrix[i][0] == 0) {\n                for (int j = 1; j < n; j++) matrix[i][j] = 0;\n            }\n        }\n\n        for (int j = 1; j < n; j++) {\n            if (matrix[0][j] == 0) {\n                for (int i = 1; i < m; i++) matrix[i][j] = 0;\n            }\n        }\n\n        if (firstRow) for (int j = 0; j < n; j++) matrix[0][j] = 0;\n        if (firstCol) for (int i = 0; i < m; i++) matrix[i][0] = 0;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-54-spiral-matrix",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "54",
    "title": "54. 螺旋矩阵",
    "englishTitle": "Spiral Matrix",
    "difficulty": "中等",
    "category": "矩阵",
    "tags": [
      "数组",
      "矩阵",
      "模拟"
    ],
    "officialUrl": "https://leetcode.cn/problems/spiral-matrix/",
    "description": "这是一道 矩阵 / 数组、矩阵、模拟 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用上下左右四个边界控制未遍历区域，每走完一条边就收缩对应边界。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：标准写法",
        "idea": "用上下左右四个边界控制未遍历区域，每走完一条边就收缩对应边界。\n\n复杂度：时间 O(mn)，空间 O(1)，不算返回数组。",
        "code": "class Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        vector<int> ans;\n        int top = 0, bottom = matrix.size() - 1;\n        int left = 0, right = matrix[0].size() - 1;\n\n        while (top <= bottom && left <= right) {\n            for (int j = left; j <= right; j++) ans.push_back(matrix[top][j]);\n            top++;\n\n            for (int i = top; i <= bottom; i++) ans.push_back(matrix[i][right]);\n            right--;\n\n            if (top <= bottom) {\n                for (int j = right; j >= left; j--) ans.push_back(matrix[bottom][j]);\n                bottom--;\n            }\n\n            if (left <= right) {\n                for (int i = bottom; i >= top; i--) ans.push_back(matrix[i][left]);\n                left++;\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-48-rotate-image",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "48",
    "title": "48. 旋转图像",
    "englishTitle": "Rotate Image",
    "difficulty": "中等",
    "category": "矩阵",
    "tags": [
      "数组",
      "数学",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/rotate-image/",
    "description": "这是一道 矩阵 / 数组、数学、矩阵 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "顺时针旋转 90 度等价于先主对角线翻转，再每一行左右翻转。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：标准写法",
        "idea": "顺时针旋转 90 度等价于先主对角线翻转，再每一行左右翻转。\n\n复杂度：时间 O(n^2)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        int n = matrix.size();\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                swap(matrix[i][j], matrix[j][i]);\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            reverse(matrix[i].begin(), matrix[i].end());\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-240-search-a-2d-matrix-ii",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "240",
    "title": "240. 搜索二维矩阵 II",
    "englishTitle": "Search a 2D Matrix II",
    "difficulty": "中等",
    "category": "矩阵",
    "tags": [
      "数组",
      "二分查找",
      "分治",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/search-a-2d-matrix-ii/",
    "description": "这是一道 矩阵 / 数组、二分查找、分治 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "从右上角开始，当前值太大就左移，太小就下移，每次排除一行或一列。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "从右上角开始，当前值太大就左移，太小就下移，每次排除一行或一列。\n\n复杂度：时间 O(m+n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int m = matrix.size(), n = matrix[0].size();\n        int i = 0, j = n - 1;\n\n        while (i < m && j >= 0) {\n            if (matrix[i][j] == target) return true;\n            if (matrix[i][j] > target) j--;\n            else i++;\n        }\n        return false;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-160-intersection-of-two-linked-lists",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "160",
    "title": "160. 相交链表",
    "englishTitle": "Intersection of Two Linked Lists",
    "difficulty": "简单",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/intersection-of-two-linked-lists/",
    "description": "这是一道 链表 / 哈希表、链表、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "两个指针分别走 A+B 和 B+A，长度差会被抵消，最终在交点或空节点相遇。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "两个指针分别走 A+B 和 B+A，长度差会被抵消，最终在交点或空节点相遇。\n\n复杂度：时间 O(m+n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        ListNode* pA = headA;\n        ListNode* pB = headB;\n\n        while (pA != pB) {\n            pA = pA ? pA->next : headB;\n            pB = pB ? pB->next : headA;\n        }\n        return pA;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-206-reverse-linked-list",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "206",
    "title": "206. 反转链表",
    "englishTitle": "Reverse Linked List",
    "difficulty": "简单",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/reverse-linked-list/",
    "description": "这是一道 链表 / 递归、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用 prev、cur、next 三个指针，逐个把当前节点指向前一个节点。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：链表",
        "idea": "用 prev、cur、next 三个指针，逐个把当前节点指向前一个节点。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = nullptr;\n        ListNode* cur = head;\n\n        while (cur) {\n            ListNode* nextNode = cur->next;\n            cur->next = prev;\n            prev = cur;\n            cur = nextNode;\n        }\n        return prev;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-234-palindrome-linked-list",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "234",
    "title": "234. 回文链表",
    "englishTitle": "Palindrome Linked List",
    "difficulty": "简单",
    "category": "链表",
    "tags": [
      "栈",
      "递归",
      "链表",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/palindrome-linked-list/",
    "description": "这是一道 链表 / 栈、递归、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "快慢指针找中点，反转后半部分，再与前半部分逐个比较。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "快慢指针找中点，反转后半部分，再与前半部分逐个比较。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        if (!head || !head->next) return true;\n\n        ListNode* slow = head;\n        ListNode* fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n        if (fast) slow = slow->next;\n\n        ListNode* second = reverse(slow);\n        ListNode* p1 = head;\n        ListNode* p2 = second;\n\n        while (p2) {\n            if (p1->val != p2->val) return false;\n            p1 = p1->next;\n            p2 = p2->next;\n        }\n        return true;\n    }\n\nprivate:\n    ListNode* reverse(ListNode* head) {\n        ListNode* prev = nullptr;\n        while (head) {\n            ListNode* nextNode = head->next;\n            head->next = prev;\n            prev = head;\n            head = nextNode;\n        }\n        return prev;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-141-linked-list-cycle",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "141",
    "title": "141. 环形链表",
    "englishTitle": "Linked List Cycle",
    "difficulty": "简单",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/linked-list-cycle/",
    "description": "这是一道 链表 / 哈希表、链表、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "快慢指针同时走，如果有环，快指针会在环中追上慢指针。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "快慢指针同时走，如果有环，快指针会在环中追上慢指针。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-142-linked-list-cycle-ii",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "142",
    "title": "142. 环形链表 II",
    "englishTitle": "Linked List Cycle II",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/linked-list-cycle-ii/",
    "description": "这是一道 链表 / 哈希表、链表、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "快慢指针相遇后，一个指针回到头节点，两个指针同步走，相遇点就是环入口。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "快慢指针相遇后，一个指针回到头节点，两个指针同步走，相遇点就是环入口。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) {\n                ListNode* p = head;\n                while (p != slow) {\n                    p = p->next;\n                    slow = slow->next;\n                }\n                return p;\n            }\n        }\n        return nullptr;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-21-merge-two-sorted-lists",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "21",
    "title": "21. 合并两个有序链表",
    "englishTitle": "Merge Two Sorted Lists",
    "difficulty": "简单",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/merge-two-sorted-lists/",
    "description": "这是一道 链表 / 递归、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用虚拟头节点，每次比较两个链表当前节点，把较小节点接到结果链表后。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：链表",
        "idea": "用虚拟头节点，每次比较两个链表当前节点，把较小节点接到结果链表后。\n\n复杂度：时间 O(m+n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        ListNode dummy(0);\n        ListNode* cur = &dummy;\n\n        while (list1 && list2) {\n            if (list1->val <= list2->val) {\n                cur->next = list1;\n                list1 = list1->next;\n            } else {\n                cur->next = list2;\n                list2 = list2->next;\n            }\n            cur = cur->next;\n        }\n        cur->next = list1 ? list1 : list2;\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-2-add-two-numbers",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "2",
    "title": "2. 两数相加",
    "englishTitle": "Add Two Numbers",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "递归",
      "链表",
      "数学"
    ],
    "officialUrl": "https://leetcode.cn/problems/add-two-numbers/",
    "description": "这是一道 链表 / 递归、链表、数学 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "两个链表从个位开始逐位相加，维护进位，结果也按链表顺序生成。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：链表",
        "idea": "两个链表从个位开始逐位相加，维护进位，结果也按链表顺序生成。\n\n复杂度：时间 O(max(m,n))，空间 O(max(m,n)) 用于结果链表。",
        "code": "class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode dummy(0);\n        ListNode* cur = &dummy;\n        int carry = 0;\n\n        while (l1 || l2 || carry) {\n            int sum = carry;\n            if (l1) {\n                sum += l1->val;\n                l1 = l1->next;\n            }\n            if (l2) {\n                sum += l2->val;\n                l2 = l2->next;\n            }\n            carry = sum / 10;\n            cur->next = new ListNode(sum % 10);\n            cur = cur->next;\n        }\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-19-remove-nth-node-from-end-of-list",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "19",
    "title": "19. 删除链表的倒数第 N 个结点",
    "englishTitle": "Remove Nth Node From End of List",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "链表",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",
    "description": "这是一道 链表 / 链表、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "快指针先走 n 步，再和慢指针同步走，慢指针停在待删节点前驱。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "快指针先走 n 步，再和慢指针同步走，慢指针停在待删节点前驱。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        ListNode dummy(0);\n        dummy.next = head;\n        ListNode* fast = &dummy;\n        ListNode* slow = &dummy;\n\n        for (int i = 0; i < n; i++) fast = fast->next;\n        while (fast->next) {\n            fast = fast->next;\n            slow = slow->next;\n        }\n\n        ListNode* del = slow->next;\n        slow->next = slow->next->next;\n        delete del;\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-24-swap-nodes-in-pairs",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "24",
    "title": "24. 两两交换链表中的节点",
    "englishTitle": "Swap Nodes in Pairs",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/swap-nodes-in-pairs/",
    "description": "这是一道 链表 / 递归、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用虚拟头节点，每次处理相邻两个节点，调整三条指针完成交换。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：链表",
        "idea": "用虚拟头节点，每次处理相邻两个节点，调整三条指针完成交换。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* swapPairs(ListNode* head) {\n        ListNode dummy(0);\n        dummy.next = head;\n        ListNode* cur = &dummy;\n\n        while (cur->next && cur->next->next) {\n            ListNode* first = cur->next;\n            ListNode* second = cur->next->next;\n\n            first->next = second->next;\n            second->next = first;\n            cur->next = second;\n\n            cur = first;\n        }\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-25-reverse-nodes-in-k-group",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "25",
    "title": "25. K 个一组翻转链表",
    "englishTitle": "Reverse Nodes in k-Group",
    "difficulty": "困难",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/reverse-nodes-in-k-group/",
    "description": "这是一道 链表 / 递归、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每次先找当前组第 k 个节点，若够 k 个就局部反转并接回原链表。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：链表",
        "idea": "每次先找当前组第 k 个节点，若够 k 个就局部反转并接回原链表。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* reverseKGroup(ListNode* head, int k) {\n        ListNode dummy(0);\n        dummy.next = head;\n        ListNode* groupPrev = &dummy;\n\n        while (true) {\n            ListNode* kth = groupPrev;\n            for (int i = 0; i < k && kth; i++) kth = kth->next;\n            if (!kth) break;\n\n            ListNode* groupNext = kth->next;\n            ListNode* prev = groupNext;\n            ListNode* cur = groupPrev->next;\n\n            while (cur != groupNext) {\n                ListNode* nextNode = cur->next;\n                cur->next = prev;\n                prev = cur;\n                cur = nextNode;\n            }\n\n            ListNode* oldHead = groupPrev->next;\n            groupPrev->next = kth;\n            groupPrev = oldHead;\n        }\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-138-copy-list-with-random-pointer",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "138",
    "title": "138. 随机链表的复制",
    "englishTitle": "Copy List with Random Pointer",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/copy-list-with-random-pointer/",
    "description": "这是一道 链表 / 哈希表、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "复制节点插入原节点后面，借助 cur->random->next 找到复制 random，最后拆分链表。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "复制节点插入原节点后面，借助 cur->random->next 找到复制 random，最后拆分链表。\n\n复杂度：时间 O(n)，额外空间 O(1)，不算新链表。",
        "code": "class Solution {\npublic:\n    Node* copyRandomList(Node* head) {\n        if (!head) return nullptr;\n\n        Node* cur = head;\n        while (cur) {\n            Node* copy = new Node(cur->val);\n            copy->next = cur->next;\n            cur->next = copy;\n            cur = copy->next;\n        }\n\n        cur = head;\n        while (cur) {\n            if (cur->random) {\n                cur->next->random = cur->random->next;\n            }\n            cur = cur->next->next;\n        }\n\n        cur = head;\n        Node* newHead = head->next;\n        while (cur) {\n            Node* copy = cur->next;\n            cur->next = copy->next;\n            if (copy->next) copy->next = copy->next->next;\n            cur = cur->next;\n        }\n        return newHead;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-148-sort-list",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "148",
    "title": "148. 排序链表",
    "englishTitle": "Sort List",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "链表",
      "双指针",
      "分治",
      "排序",
      "归并排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/sort-list/",
    "description": "这是一道 链表 / 链表、双指针、分治 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "使用自底向上的归并排序，按长度 1、2、4... 切分并两两合并。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "使用自底向上的归并排序，按长度 1、2、4... 切分并两两合并。\n\n复杂度：时间 O(n log n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* sortList(ListNode* head) {\n        if (!head || !head->next) return head;\n\n        int len = 0;\n        for (ListNode* p = head; p; p = p->next) len++;\n\n        ListNode dummy(0);\n        dummy.next = head;\n\n        for (int step = 1; step < len; step <<= 1) {\n            ListNode* cur = dummy.next;\n            ListNode* tail = &dummy;\n\n            while (cur) {\n                ListNode* left = cur;\n                ListNode* right = cut(left, step);\n                cur = cut(right, step);\n                tail = merge(left, right, tail);\n            }\n        }\n        return dummy.next;\n    }\n\nprivate:\n    ListNode* cut(ListNode* head, int n) {\n        while (--n && head) head = head->next;\n        if (!head) return nullptr;\n        ListNode* nextHead = head->next;\n        head->next = nullptr;\n        return nextHead;\n    }\n\n    ListNode* merge(ListNode* l1, ListNode* l2, ListNode* tail) {\n        while (l1 && l2) {\n            if (l1->val <= l2->val) {\n                tail->next = l1;\n                l1 = l1->next;\n            } else {\n                tail->next = l2;\n                l2 = l2->next;\n            }\n            tail = tail->next;\n        }\n        tail->next = l1 ? l1 : l2;\n        while (tail->next) tail = tail->next;\n        return tail;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-23-merge-k-sorted-lists",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "23",
    "title": "23. 合并 K 个升序链表",
    "englishTitle": "Merge k Sorted Lists",
    "difficulty": "困难",
    "category": "链表",
    "tags": [
      "链表",
      "分治",
      "堆（优先队列）",
      "归并排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/merge-k-sorted-lists/",
    "description": "这是一道 链表 / 链表、分治、堆（优先队列） 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "分治两两合并链表，每一轮间隔翻倍，最终把 k 个链表合成一个。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：堆",
        "idea": "分治两两合并链表，每一轮间隔翻倍，最终把 k 个链表合成一个。\n\n复杂度：时间 O(N log k)，额外空间 O(1)。",
        "code": "class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        int n = lists.size();\n        if (n == 0) return nullptr;\n\n        for (int interval = 1; interval < n; interval <<= 1) {\n            for (int i = 0; i + interval < n; i += interval << 1) {\n                lists[i] = mergeTwoLists(lists[i], lists[i + interval]);\n            }\n        }\n        return lists[0];\n    }\n\nprivate:\n    ListNode* mergeTwoLists(ListNode* a, ListNode* b) {\n        ListNode dummy(0);\n        ListNode* cur = &dummy;\n\n        while (a && b) {\n            if (a->val <= b->val) {\n                cur->next = a;\n                a = a->next;\n            } else {\n                cur->next = b;\n                b = b->next;\n            }\n            cur = cur->next;\n        }\n        cur->next = a ? a : b;\n        return dummy.next;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-146-lru-cache",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "146",
    "title": "146. LRU 缓存",
    "englishTitle": "LRU Cache",
    "difficulty": "中等",
    "category": "链表",
    "tags": [
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "officialUrl": "https://leetcode.cn/problems/lru-cache/",
    "description": "这是一道 链表 / 设计、哈希表、链表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "哈希表负责按 key 定位节点，双向链表维护最近使用顺序，头部最新、尾部最旧。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "哈希表负责按 key 定位节点，双向链表维护最近使用顺序，头部最新、尾部最旧。\n\n复杂度：get 和 put 都是 O(1)，空间 O(capacity)。",
        "code": "class LRUCache {\nprivate:\n    struct Node {\n        int key, value;\n        Node* prev;\n        Node* next;\n        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}\n    };\n\n    int cap;\n    unordered_map<int, Node*> mp;\n    Node* head;\n    Node* tail;\n\n    void removeNode(Node* node) {\n        node->prev->next = node->next;\n        node->next->prev = node->prev;\n    }\n\n    void addToHead(Node* node) {\n        node->next = head->next;\n        node->prev = head;\n        head->next->prev = node;\n        head->next = node;\n    }\n\n    void moveToHead(Node* node) {\n        removeNode(node);\n        addToHead(node);\n    }\n\npublic:\n    LRUCache(int capacity) {\n        cap = capacity;\n        mp.reserve(capacity * 2);\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head->next = tail;\n        tail->prev = head;\n    }\n\n    int get(int key) {\n        auto it = mp.find(key);\n        if (it == mp.end()) return -1;\n        Node* node = it->second;\n        moveToHead(node);\n        return node->value;\n    }\n\n    void put(int key, int value) {\n        auto it = mp.find(key);\n        if (it != mp.end()) {\n            Node* node = it->second;\n            node->value = value;\n            moveToHead(node);\n            return;\n        }\n\n        Node* node = new Node(key, value);\n        mp[key] = node;\n        addToHead(node);\n\n        if (mp.size() > cap) {\n            Node* old = tail->prev;\n            removeNode(old);\n            mp.erase(old->key);\n            delete old;\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-94-binary-tree-inorder-traversal",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "94",
    "title": "94. 二叉树的中序遍历",
    "englishTitle": "Binary Tree Inorder Traversal",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/binary-tree-inorder-traversal/",
    "description": "这是一道 二叉树 / 栈、树、深度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "中序遍历顺序是左、根、右，递归处理即可。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。",
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：栈",
        "idea": "中序遍历顺序是左、根、右，递归处理即可。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<int> ans;\n        dfs(root, ans);\n        return ans;\n    }\n\nprivate:\n    void dfs(TreeNode* root, vector<int>& ans) {\n        if (!root) return;\n        dfs(root->left, ans);\n        ans.push_back(root->val);\n        dfs(root->right, ans);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-104-maximum-depth-of-binary-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "104",
    "title": "104. 二叉树的最大深度",
    "englishTitle": "Maximum Depth of Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/maximum-depth-of-binary-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、广度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "当前节点深度等于左右子树最大深度加一，空节点深度为零。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "当前节点深度等于左右子树最大深度加一，空节点深度为零。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (!root) return 0;\n        return max(maxDepth(root->left), maxDepth(root->right)) + 1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-226-invert-binary-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "226",
    "title": "226. 翻转二叉树",
    "englishTitle": "Invert Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/invert-binary-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、广度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "对每个节点交换左右孩子，然后递归翻转左右子树。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "对每个节点交换左右孩子，然后递归翻转左右子树。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (!root) return nullptr;\n        swap(root->left, root->right);\n        invertTree(root->left);\n        invertTree(root->right);\n        return root;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-101-symmetric-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "101",
    "title": "101. 对称二叉树",
    "englishTitle": "Symmetric Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/symmetric-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、广度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "判断左右子树是否镜像：左外侧对右外侧，左内侧对右内侧。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "判断左右子树是否镜像：左外侧对右外侧，左内侧对右内侧。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        if (!root) return true;\n        return check(root->left, root->right);\n    }\n\nprivate:\n    bool check(TreeNode* a, TreeNode* b) {\n        if (!a && !b) return true;\n        if (!a || !b) return false;\n        if (a->val != b->val) return false;\n        return check(a->left, b->right) && check(a->right, b->left);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-543-diameter-of-binary-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "543",
    "title": "543. 二叉树的直径",
    "englishTitle": "Diameter of Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/diameter-of-binary-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、二叉树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "递归求每个节点左右深度，用左右深度之和更新经过当前节点的最长路径。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "递归求每个节点左右深度，用左右深度之和更新经过当前节点的最长路径。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    int ans = 0;\n\n    int diameterOfBinaryTree(TreeNode* root) {\n        depth(root);\n        return ans;\n    }\n\nprivate:\n    int depth(TreeNode* root) {\n        if (!root) return 0;\n        int left = depth(root->left);\n        int right = depth(root->right);\n        ans = max(ans, left + right);\n        return max(left, right) + 1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-102-binary-tree-level-order-traversal",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "102",
    "title": "102. 二叉树的层序遍历",
    "englishTitle": "Binary Tree Level Order Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "广度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/binary-tree-level-order-traversal/",
    "description": "这是一道 二叉树 / 树、广度优先搜索、二叉树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用队列 BFS，每轮处理当前队列中已有的所有节点，即一整层。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "用队列 BFS，每轮处理当前队列中已有的所有节点，即一整层。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        vector<vector<int>> ans;\n        if (!root) return ans;\n\n        queue<TreeNode*> q;\n        q.push(root);\n\n        while (!q.empty()) {\n            int size = q.size();\n            vector<int> level;\n            for (int i = 0; i < size; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n                level.push_back(node->val);\n                if (node->left) q.push(node->left);\n                if (node->right) q.push(node->right);\n            }\n            ans.push_back(level);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-108-convert-sorted-array-to-binary-search-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "108",
    "title": "108. 将有序数组转换为二叉搜索树",
    "englishTitle": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "tags": [
      "树",
      "二叉搜索树",
      "数组",
      "分治",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/",
    "description": "这是一道 二叉树 / 树、二叉搜索树、数组 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每次选当前区间中点作为根，左半构造左子树，右半构造右子树。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "每次选当前区间中点作为根，左半构造左子树，右半构造右子树。\n\n复杂度：时间 O(n)，空间 O(log n)。",
        "code": "class Solution {\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return build(nums, 0, nums.size() - 1);\n    }\n\nprivate:\n    TreeNode* build(vector<int>& nums, int l, int r) {\n        if (l > r) return nullptr;\n        int mid = l + (r - l) / 2;\n        TreeNode* root = new TreeNode(nums[mid]);\n        root->left = build(nums, l, mid - 1);\n        root->right = build(nums, mid + 1, r);\n        return root;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-98-validate-binary-search-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "98",
    "title": "98. 验证二叉搜索树",
    "englishTitle": "Validate Binary Search Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉搜索树",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/validate-binary-search-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、二叉搜索树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "递归时为每个节点维护合法上下界，确保所有左子树小于根、右子树大于根。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "递归时为每个节点维护合法上下界，确保所有左子树小于根、右子树大于根。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        return check(root, LONG_MIN, LONG_MAX);\n    }\n\nprivate:\n    bool check(TreeNode* root, long long low, long long high) {\n        if (!root) return true;\n        if (root->val <= low || root->val >= high) return false;\n        return check(root->left, low, root->val) && check(root->right, root->val, high);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-230-kth-smallest-element-in-a-bst",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "230",
    "title": "230. 二叉搜索树中第 K 小的元素",
    "englishTitle": "Kth Smallest Element in a BST",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉搜索树",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、二叉搜索树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "BST 的中序遍历是升序序列，用栈迭代中序，第 k 次弹出就是答案。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "BST 的中序遍历是升序序列，用栈迭代中序，第 k 次弹出就是答案。\n\n复杂度：时间 O(h+k)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        stack<TreeNode*> st;\n        TreeNode* cur = root;\n\n        while (cur || !st.empty()) {\n            while (cur) {\n                st.push(cur);\n                cur = cur->left;\n            }\n            cur = st.top();\n            st.pop();\n            if (--k == 0) return cur->val;\n            cur = cur->right;\n        }\n        return -1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-199-binary-tree-right-side-view",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "199",
    "title": "199. 二叉树的右视图",
    "englishTitle": "Binary Tree Right Side View",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/binary-tree-right-side-view/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、广度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "右子树优先 DFS，每一层第一次访问到的节点就是右视图节点。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "右子树优先 DFS，每一层第一次访问到的节点就是右视图节点。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        vector<int> ans;\n        dfs(root, 0, ans);\n        return ans;\n    }\n\nprivate:\n    void dfs(TreeNode* root, int depth, vector<int>& ans) {\n        if (!root) return;\n        if (depth == ans.size()) ans.push_back(root->val);\n        dfs(root->right, depth + 1, ans);\n        dfs(root->left, depth + 1, ans);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-114-flatten-binary-tree-to-linked-list",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "114",
    "title": "114. 二叉树展开为链表",
    "englishTitle": "Flatten Binary Tree to Linked List",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "栈",
      "树",
      "深度优先搜索",
      "链表",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",
    "description": "这是一道 二叉树 / 栈、树、深度优先搜索 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "反向前序遍历右、左、根，用 prev 记录已经展开好的链表头。",
    "interviewNotes": [
      "默认优先考虑虚拟头节点和指针断开顺序，追问常是能否 O(1) 额外空间。",
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。",
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：栈",
        "idea": "反向前序遍历右、左、根，用 prev 记录已经展开好的链表头。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    TreeNode* prev = nullptr;\n\n    void flatten(TreeNode* root) {\n        if (!root) return;\n        flatten(root->right);\n        flatten(root->left);\n        root->right = prev;\n        root->left = nullptr;\n        prev = root;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-105-construct-binary-tree-from-preorder-and-inorder-traversal",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "105",
    "title": "105. 从前序与中序遍历序列构造二叉树",
    "englishTitle": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "数组",
      "哈希表",
      "分治",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "description": "这是一道 二叉树 / 树、数组、哈希表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "前序首元素确定根节点，中序中根节点左边是左子树，右边是右子树。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "前序首元素确定根节点，中序中根节点左边是左子树，右边是右子树。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    unordered_map<int, int> pos;\n\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        for (int i = 0; i < inorder.size(); i++) {\n            pos[inorder[i]] = i;\n        }\n        return build(preorder, 0, preorder.size() - 1, 0, inorder.size() - 1);\n    }\n\nprivate:\n    TreeNode* build(vector<int>& preorder, int pl, int pr, int il, int ir) {\n        if (pl > pr) return nullptr;\n        int rootVal = preorder[pl];\n        TreeNode* root = new TreeNode(rootVal);\n        int idx = pos[rootVal];\n        int leftSize = idx - il;\n\n        root->left = build(preorder, pl + 1, pl + leftSize, il, idx - 1);\n        root->right = build(preorder, pl + leftSize + 1, pr, idx + 1, ir);\n        return root;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-437-path-sum-iii",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "437",
    "title": "437. 路径总和 III",
    "englishTitle": "Path Sum III",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/path-sum-iii/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、二叉树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "记录根到当前路径的前缀和次数，查找 当前前缀和-target 出现过几次。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "记录根到当前路径的前缀和次数，查找 当前前缀和-target 出现过几次。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    unordered_map<long long, int> cnt;\n    int ans = 0;\n\n    int pathSum(TreeNode* root, int targetSum) {\n        cnt[0] = 1;\n        dfs(root, 0, targetSum);\n        return ans;\n    }\n\nprivate:\n    void dfs(TreeNode* root, long long sum, int target) {\n        if (!root) return;\n        sum += root->val;\n        ans += cnt[sum - target];\n        cnt[sum]++;\n\n        dfs(root->left, sum, target);\n        dfs(root->right, sum, target);\n\n        cnt[sum]--;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-236-lowest-common-ancestor-of-a-binary-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "236",
    "title": "236. 二叉树的最近公共祖先",
    "englishTitle": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、二叉树 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "递归搜索左右子树，若左右都找到目标节点，当前节点就是最近公共祖先。",
    "interviewNotes": [
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：树形处理",
        "idea": "递归搜索左右子树，若左右都找到目标节点，当前节点就是最近公共祖先。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        if (!root || root == p || root == q) return root;\n\n        TreeNode* left = lowestCommonAncestor(root->left, p, q);\n        TreeNode* right = lowestCommonAncestor(root->right, p, q);\n\n        if (left && right) return root;\n        return left ? left : right;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-124-binary-tree-maximum-path-sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "124",
    "title": "124. 二叉树中的最大路径和",
    "englishTitle": "Binary Tree Maximum Path Sum",
    "difficulty": "困难",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "动态规划",
      "二叉树"
    ],
    "officialUrl": "https://leetcode.cn/problems/binary-tree-maximum-path-sum/",
    "description": "这是一道 二叉树 / 树、深度优先搜索、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "递归返回单边最大贡献，经过当前节点的路径可取左贡献加根加右贡献。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "树题要说清遍历顺序和返回值含义，并考虑空树、单节点和极端链式树。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "递归返回单边最大贡献，经过当前节点的路径可取左贡献加根加右贡献。\n\n复杂度：时间 O(n)，空间 O(h)。",
        "code": "class Solution {\npublic:\n    int ans = INT_MIN;\n\n    int maxPathSum(TreeNode* root) {\n        dfs(root);\n        return ans;\n    }\n\nprivate:\n    int dfs(TreeNode* root) {\n        if (!root) return 0;\n        int left = max(0, dfs(root->left));\n        int right = max(0, dfs(root->right));\n        ans = max(ans, root->val + left + right);\n        return root->val + max(left, right);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-200-number-of-islands",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "200",
    "title": "200. 岛屿数量",
    "englishTitle": "Number of Islands",
    "difficulty": "中等",
    "category": "图论 / Trie",
    "tags": [
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/number-of-islands/",
    "description": "这是一道 图论 / Trie / 深度优先搜索、广度优先搜索、并查集 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "遍历网格，遇到陆地就 BFS 把与它相连的整座岛全部标记为水。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：并查集",
        "idea": "遍历网格，遇到陆地就 BFS 把与它相连的整座岛全部标记为水。\n\n复杂度：时间 O(mn)，空间 O(mn)。",
        "code": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        int m = grid.size(), n = grid[0].size();\n        int ans = 0;\n        int dirs[5] = {1, 0, -1, 0, 1};\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == '1') {\n                    ans++;\n                    queue<int> q;\n                    q.push(i * n + j);\n                    grid[i][j] = '0';\n\n                    while (!q.empty()) {\n                        int id = q.front();\n                        q.pop();\n                        int x = id / n, y = id % n;\n\n                        for (int k = 0; k < 4; k++) {\n                            int nx = x + dirs[k];\n                            int ny = y + dirs[k + 1];\n                            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] == '1') {\n                                grid[nx][ny] = '0';\n                                q.push(nx * n + ny);\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-994-rotting-oranges",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "994",
    "title": "994. 腐烂的橘子",
    "englishTitle": "Rotting Oranges",
    "difficulty": "中等",
    "category": "图论 / Trie",
    "tags": [
      "广度优先搜索",
      "数组",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/rotting-oranges/",
    "description": "这是一道 图论 / Trie / 广度优先搜索、数组、矩阵 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "多源 BFS，先把所有腐烂橘子入队，每扩散一层表示经过一分钟。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：Trie",
        "idea": "多源 BFS，先把所有腐烂橘子入队，每扩散一层表示经过一分钟。\n\n复杂度：时间 O(mn)，空间 O(mn)。",
        "code": "class Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        int m = grid.size(), n = grid[0].size();\n        queue<pair<int, int>> q;\n        int fresh = 0;\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == 2) q.push({i, j});\n                else if (grid[i][j] == 1) fresh++;\n            }\n        }\n\n        if (fresh == 0) return 0;\n        int minutes = 0;\n        int dirs[5] = {1, 0, -1, 0, 1};\n\n        while (!q.empty() && fresh > 0) {\n            int size = q.size();\n            minutes++;\n            while (size--) {\n                auto [x, y] = q.front();\n                q.pop();\n\n                for (int k = 0; k < 4; k++) {\n                    int nx = x + dirs[k];\n                    int ny = y + dirs[k + 1];\n                    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] == 1) {\n                        grid[nx][ny] = 2;\n                        fresh--;\n                        q.push({nx, ny});\n                    }\n                }\n            }\n        }\n        return fresh == 0 ? minutes : -1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-207-course-schedule",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "207",
    "title": "207. 课程表",
    "englishTitle": "Course Schedule",
    "difficulty": "中等",
    "category": "图论 / Trie",
    "tags": [
      "深度优先搜索",
      "广度优先搜索",
      "图",
      "拓扑排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/course-schedule/",
    "description": "这是一道 图论 / Trie / 深度优先搜索、广度优先搜索、图 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "根据先修关系建有向图，拓扑排序不断删除入度为零的点，最后看能否学完。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：Trie",
        "idea": "根据先修关系建有向图，拓扑排序不断删除入度为零的点，最后看能否学完。\n\n复杂度：时间 O(V+E)，空间 O(V+E)。",
        "code": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        vector<vector<int>> graph(numCourses);\n        vector<int> indegree(numCourses, 0);\n\n        for (auto& p : prerequisites) {\n            int a = p[0], b = p[1];\n            graph[b].push_back(a);\n            indegree[a]++;\n        }\n\n        queue<int> q;\n        for (int i = 0; i < numCourses; i++) {\n            if (indegree[i] == 0) q.push(i);\n        }\n\n        int count = 0;\n        while (!q.empty()) {\n            int cur = q.front();\n            q.pop();\n            count++;\n\n            for (int next : graph[cur]) {\n                if (--indegree[next] == 0) q.push(next);\n            }\n        }\n        return count == numCourses;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-208-implement-trie-prefix-tree",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "208",
    "title": "208. 实现 Trie (前缀树)",
    "englishTitle": "Implement Trie (Prefix Tree)",
    "difficulty": "中等",
    "category": "图论 / Trie",
    "tags": [
      "设计",
      "字典树",
      "哈希表",
      "字符串"
    ],
    "officialUrl": "https://leetcode.cn/problems/implement-trie-prefix-tree/",
    "description": "这是一道 图论 / Trie / 设计、字典树、哈希表 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每个节点保存 26 个子节点指针和一个单词结尾标记，按字符路径插入和查找。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "每个节点保存 26 个子节点指针和一个单词结尾标记，按字符路径插入和查找。\n\n复杂度：插入、查找、前缀查询均为 O(L)。",
        "code": "class Trie {\nprivate:\n    struct Node {\n        bool isEnd;\n        Node* child[26];\n        Node() : isEnd(false) {\n            for (int i = 0; i < 26; i++) child[i] = nullptr;\n        }\n    };\n\n    Node* root;\n\npublic:\n    Trie() {\n        root = new Node();\n    }\n\n    void insert(string word) {\n        Node* cur = root;\n        for (char c : word) {\n            int idx = c - 'a';\n            if (!cur->child[idx]) cur->child[idx] = new Node();\n            cur = cur->child[idx];\n        }\n        cur->isEnd = true;\n    }\n\n    bool search(string word) {\n        Node* cur = root;\n        for (char c : word) {\n            int idx = c - 'a';\n            if (!cur->child[idx]) return false;\n            cur = cur->child[idx];\n        }\n        return cur->isEnd;\n    }\n\n    bool startsWith(string prefix) {\n        Node* cur = root;\n        for (char c : prefix) {\n            int idx = c - 'a';\n            if (!cur->child[idx]) return false;\n            cur = cur->child[idx];\n        }\n        return true;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-46-permutations",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "46",
    "title": "46. 全排列",
    "englishTitle": "Permutations",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/permutations/",
    "description": "这是一道 回溯 / 数组、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每一层选择一个还没使用过的数字，路径长度等于数组长度时记录一个排列。",
    "interviewNotes": [
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：回溯搜索",
        "idea": "每一层选择一个还没使用过的数字，路径长度等于数组长度时记录一个排列。\n\n复杂度：时间 O(n·n!)，空间 O(n)，不算返回结果。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> path;\n    vector<bool> used;\n\n    vector<vector<int>> permute(vector<int>& nums) {\n        used.assign(nums.size(), false);\n        dfs(nums);\n        return ans;\n    }\n\n    void dfs(vector<int>& nums) {\n        if (path.size() == nums.size()) {\n            ans.push_back(path);\n            return;\n        }\n\n        for (int i = 0; i < nums.size(); i++) {\n            if (used[i]) continue;\n            used[i] = true;\n            path.push_back(nums[i]);\n            dfs(nums);\n            path.pop_back();\n            used[i] = false;\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-78-subsets",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "78",
    "title": "78. 子集",
    "englishTitle": "Subsets",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "位运算",
      "数组",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/subsets/",
    "description": "这是一道 回溯 / 位运算、数组、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "从当前位置开始枚举下一个要选的元素，每到一个状态就记录当前路径。",
    "interviewNotes": [
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：回溯搜索",
        "idea": "从当前位置开始枚举下一个要选的元素，每到一个状态就记录当前路径。\n\n复杂度：时间 O(n·2^n)，空间 O(n)，不算返回结果。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> path;\n\n    vector<vector<int>> subsets(vector<int>& nums) {\n        dfs(nums, 0);\n        return ans;\n    }\n\n    void dfs(vector<int>& nums, int start) {\n        ans.push_back(path);\n        for (int i = start; i < nums.size(); i++) {\n            path.push_back(nums[i]);\n            dfs(nums, i + 1);\n            path.pop_back();\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-17-letter-combinations-of-a-phone-number",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "17",
    "title": "17. 电话号码的字母组合",
    "englishTitle": "Letter Combinations of a Phone Number",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "哈希表",
      "字符串",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",
    "description": "这是一道 回溯 / 哈希表、字符串、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每个数字对应若干字母，按数字位置逐层选择一个字母加入当前路径。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "每个数字对应若干字母，按数字位置逐层选择一个字母加入当前路径。\n\n复杂度：时间 O(4^n·n)，空间 O(n)，不算返回结果。",
        "code": "class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        if (digits.empty()) return {};\n        vector<string> mp = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\n        vector<string> ans;\n        string path;\n        dfs(digits, 0, mp, path, ans);\n        return ans;\n    }\n\n    void dfs(string& digits, int idx, vector<string>& mp, string& path, vector<string>& ans) {\n        if (idx == digits.size()) {\n            ans.push_back(path);\n            return;\n        }\n        for (char c : mp[digits[idx] - '0']) {\n            path.push_back(c);\n            dfs(digits, idx + 1, mp, path, ans);\n            path.pop_back();\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-39-combination-sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "39",
    "title": "39. 组合总和",
    "englishTitle": "Combination Sum",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/combination-sum/",
    "description": "这是一道 回溯 / 数组、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "从当前下标开始选数，递归时仍从当前下标开始，表示该数字可以重复使用。",
    "interviewNotes": [
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：回溯搜索",
        "idea": "从当前下标开始选数，递归时仍从当前下标开始，表示该数字可以重复使用。\n\n复杂度：与答案规模相关，空间 O(target / min)。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> path;\n\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        sort(candidates.begin(), candidates.end());\n        dfs(candidates, target, 0);\n        return ans;\n    }\n\n    void dfs(vector<int>& candidates, int target, int start) {\n        if (target == 0) {\n            ans.push_back(path);\n            return;\n        }\n\n        for (int i = start; i < candidates.size(); i++) {\n            if (candidates[i] > target) break;\n            path.push_back(candidates[i]);\n            dfs(candidates, target - candidates[i], i);\n            path.pop_back();\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-22-generate-parentheses",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "22",
    "title": "22. 括号生成",
    "englishTitle": "Generate Parentheses",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "字符串",
      "动态规划",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/generate-parentheses/",
    "description": "这是一道 回溯 / 字符串、动态规划、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "左括号数量不超过 n，右括号数量不能超过左括号，满足条件就继续递归。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "左括号数量不超过 n，右括号数量不能超过左括号，满足条件就继续递归。\n\n复杂度：与卡特兰数答案规模相关，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<string> ans;\n    string path;\n\n    vector<string> generateParenthesis(int n) {\n        dfs(n, 0, 0);\n        return ans;\n    }\n\n    void dfs(int n, int left, int right) {\n        if (path.size() == 2 * n) {\n            ans.push_back(path);\n            return;\n        }\n\n        if (left < n) {\n            path.push_back('(');\n            dfs(n, left + 1, right);\n            path.pop_back();\n        }\n        if (right < left) {\n            path.push_back(')');\n            dfs(n, left, right + 1);\n            path.pop_back();\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-79-word-search",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "79",
    "title": "79. 单词搜索",
    "englishTitle": "Word Search",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "深度优先搜索",
      "数组",
      "字符串",
      "回溯",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/word-search/",
    "description": "这是一道 回溯 / 深度优先搜索、数组、字符串 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "从每个可能起点 DFS 匹配单词，走过的格子临时标记，失败后恢复。",
    "interviewNotes": [
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：回溯搜索",
        "idea": "从每个可能起点 DFS 匹配单词，走过的格子临时标记，失败后恢复。\n\n复杂度：最坏 O(mn·3^L)，空间 O(L)。",
        "code": "class Solution {\npublic:\n    int m, n;\n    int dirs[5] = {1, 0, -1, 0, 1};\n\n    bool exist(vector<vector<char>>& board, string word) {\n        m = board.size();\n        n = board[0].size();\n\n        vector<int> cnt(128, 0);\n        for (auto& row : board) {\n            for (char c : row) cnt[c]++;\n        }\n        for (char c : word) {\n            if (--cnt[c] < 0) return false;\n        }\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (dfs(board, word, i, j, 0)) return true;\n            }\n        }\n        return false;\n    }\n\n    bool dfs(vector<vector<char>>& board, string& word, int x, int y, int idx) {\n        if (board[x][y] != word[idx]) return false;\n        if (idx == word.size() - 1) return true;\n\n        char temp = board[x][y];\n        board[x][y] = '#';\n\n        for (int k = 0; k < 4; k++) {\n            int nx = x + dirs[k], ny = y + dirs[k + 1];\n            if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] != '#') {\n                if (dfs(board, word, nx, ny, idx + 1)) {\n                    board[x][y] = temp;\n                    return true;\n                }\n            }\n        }\n\n        board[x][y] = temp;\n        return false;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-131-palindrome-partitioning",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "131",
    "title": "131. 分割回文串",
    "englishTitle": "Palindrome Partitioning",
    "difficulty": "中等",
    "category": "回溯",
    "tags": [
      "字符串",
      "动态规划",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/palindrome-partitioning/",
    "description": "这是一道 回溯 / 字符串、动态规划、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "先预处理任意区间是否回文，回溯时只选择回文子串作为下一段。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "先预处理任意区间是否回文，回溯时只选择回文子串作为下一段。\n\n复杂度：预处理 O(n^2)，回溯与答案规模相关。",
        "code": "class Solution {\npublic:\n    vector<vector<string>> ans;\n    vector<string> path;\n    vector<vector<bool>> isPal;\n\n    vector<vector<string>> partition(string s) {\n        int n = s.size();\n        isPal.assign(n, vector<bool>(n, true));\n\n        for (int len = 2; len <= n; len++) {\n            for (int l = 0; l + len - 1 < n; l++) {\n                int r = l + len - 1;\n                isPal[l][r] = (s[l] == s[r]) && (len == 2 || isPal[l + 1][r - 1]);\n            }\n        }\n\n        dfs(s, 0);\n        return ans;\n    }\n\n    void dfs(string& s, int start) {\n        if (start == s.size()) {\n            ans.push_back(path);\n            return;\n        }\n\n        for (int end = start; end < s.size(); end++) {\n            if (!isPal[start][end]) continue;\n            path.push_back(s.substr(start, end - start + 1));\n            dfs(s, end + 1);\n            path.pop_back();\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-51-n-queens",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "51",
    "title": "51. N 皇后",
    "englishTitle": "N-Queens",
    "difficulty": "困难",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯"
    ],
    "officialUrl": "https://leetcode.cn/problems/n-queens/",
    "description": "这是一道 回溯 / 数组、回溯 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "按行放皇后，用列数组和两条对角线数组判断冲突，合法则递归下一行。",
    "interviewNotes": [
      "留意去重、剪枝和恢复现场，面试中常会改成需要输出个数或字典序。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：回溯搜索",
        "idea": "按行放皇后，用列数组和两条对角线数组判断冲突，合法则递归下一行。\n\n复杂度：回溯搜索，空间 O(n)，不算棋盘和答案。",
        "code": "class Solution {\npublic:\n    vector<vector<string>> ans;\n    vector<string> board;\n    vector<bool> col, diag1, diag2;\n\n    vector<vector<string>> solveNQueens(int n) {\n        board.assign(n, string(n, '.'));\n        col.assign(n, false);\n        diag1.assign(2 * n - 1, false);\n        diag2.assign(2 * n - 1, false);\n        dfs(0, n);\n        return ans;\n    }\n\n    void dfs(int row, int n) {\n        if (row == n) {\n            ans.push_back(board);\n            return;\n        }\n\n        for (int c = 0; c < n; c++) {\n            int d1 = row - c + n - 1;\n            int d2 = row + c;\n            if (col[c] || diag1[d1] || diag2[d2]) continue;\n\n            board[row][c] = 'Q';\n            col[c] = diag1[d1] = diag2[d2] = true;\n            dfs(row + 1, n);\n            col[c] = diag1[d1] = diag2[d2] = false;\n            board[row][c] = '.';\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-35-search-insert-position",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "35",
    "title": "35. 搜索插入位置",
    "englishTitle": "Search Insert Position",
    "difficulty": "简单",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "officialUrl": "https://leetcode.cn/problems/search-insert-position/",
    "description": "这是一道 二分查找 / 数组、二分查找 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "二分查找第一个大于等于 target 的位置，找到返回下标，没找到也是插入位置。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "二分查找第一个大于等于 target 的位置，找到返回下标，没找到也是插入位置。\n\n复杂度：时间 O(log n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        int l = 0, r = nums.size();\n        while (l < r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] >= target) r = mid;\n            else l = mid + 1;\n        }\n        return l;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-74-search-a-2d-matrix",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "74",
    "title": "74. 搜索二维矩阵",
    "englishTitle": "Search a 2D Matrix",
    "difficulty": "中等",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/search-a-2d-matrix/",
    "description": "这是一道 二分查找 / 数组、二分查找、矩阵 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "把矩阵看成一维升序数组，用 mid / n 和 mid % n 转回二维下标。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "把矩阵看成一维升序数组，用 mid / n 和 mid % n 转回二维下标。\n\n复杂度：时间 O(log(mn))，空间 O(1)。",
        "code": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int m = matrix.size(), n = matrix[0].size();\n        int l = 0, r = m * n - 1;\n\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            int x = mid / n, y = mid % n;\n            if (matrix[x][y] == target) return true;\n            if (matrix[x][y] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return false;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-34-find-first-and-last-position-of-element-in-sorted-array",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "34",
    "title": "34. 在排序数组中查找元素的第一个和最后一个位置",
    "englishTitle": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "officialUrl": "https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "description": "这是一道 二分查找 / 数组、二分查找 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "用两次二分，找第一个 >= target 的位置和第一个 > target 的位置。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "用两次二分，找第一个 >= target 的位置和第一个 > target 的位置。\n\n复杂度：时间 O(log n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        int left = lower_bound(nums.begin(), nums.end(), target) - nums.begin();\n        int right = upper_bound(nums.begin(), nums.end(), target) - nums.begin() - 1;\n\n        if (left < nums.size() && nums[left] == target) {\n            return {left, right};\n        }\n        return {-1, -1};\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-33-search-in-rotated-sorted-array",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "33",
    "title": "33. 搜索旋转排序数组",
    "englishTitle": "Search in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "officialUrl": "https://leetcode.cn/problems/search-in-rotated-sorted-array/",
    "description": "这是一道 二分查找 / 数组、二分查找 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每次二分判断哪一半有序，再看目标是否落在有序区间中来缩小范围。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "每次二分判断哪一半有序，再看目标是否落在有序区间中来缩小范围。\n\n复杂度：时间 O(log n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n\n            if (nums[l] <= nums[mid]) {\n                if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n                else l = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n                else r = mid - 1;\n            }\n        }\n        return -1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-153-find-minimum-in-rotated-sorted-array",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "153",
    "title": "153. 寻找旋转排序数组中的最小值",
    "englishTitle": "Find Minimum in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "officialUrl": "https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/",
    "description": "这是一道 二分查找 / 数组、二分查找 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "比较中点和右端点，若中点较小则最小值在左侧含中点，否则在右侧。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "比较中点和右端点，若中点较小则最小值在左侧含中点，否则在右侧。\n\n复杂度：时间 O(log n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        int l = 0, r = nums.size() - 1;\n\n        while (l < r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] < nums[r]) r = mid;\n            else l = mid + 1;\n        }\n        return nums[l];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-4-median-of-two-sorted-arrays",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "4",
    "title": "4. 寻找两个正序数组的中位数",
    "englishTitle": "Median of Two Sorted Arrays",
    "difficulty": "困难",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找",
      "分治"
    ],
    "officialUrl": "https://leetcode.cn/problems/median-of-two-sorted-arrays/",
    "description": "这是一道 二分查找 / 数组、二分查找、分治 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "中位数转化为找第 k 小元素，每次比较两个数组的第 k/2 个并排除一段。",
    "interviewNotes": [
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：二分",
        "idea": "中位数转化为找第 k 小元素，每次比较两个数组的第 k/2 个并排除一段。\n\n复杂度：时间 O(log(m+n))，空间 O(1)。",
        "code": "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        int total = nums1.size() + nums2.size();\n        if (total % 2 == 1) {\n            return getKth(nums1, nums2, total / 2 + 1);\n        }\n        int a = getKth(nums1, nums2, total / 2);\n        int b = getKth(nums1, nums2, total / 2 + 1);\n        return (a + b) / 2.0;\n    }\n\nprivate:\n    int getKth(vector<int>& a, vector<int>& b, int k) {\n        int i = 0, j = 0;\n        int m = a.size(), n = b.size();\n\n        while (true) {\n            if (i == m) return b[j + k - 1];\n            if (j == n) return a[i + k - 1];\n            if (k == 1) return min(a[i], b[j]);\n\n            int half = k / 2;\n            int ni = min(i + half, m) - 1;\n            int nj = min(j + half, n) - 1;\n\n            if (a[ni] <= b[nj]) {\n                k -= ni - i + 1;\n                i = ni + 1;\n            } else {\n                k -= nj - j + 1;\n                j = nj + 1;\n            }\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-20-valid-parentheses",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "20",
    "title": "20. 有效的括号",
    "englishTitle": "Valid Parentheses",
    "difficulty": "简单",
    "category": "栈",
    "tags": [
      "栈",
      "字符串"
    ],
    "officialUrl": "https://leetcode.cn/problems/valid-parentheses/",
    "description": "这是一道 栈 / 栈、字符串 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "左括号入栈，右括号出现时检查栈顶是否为对应左括号。",
    "interviewNotes": [
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：栈",
        "idea": "左括号入栈，右括号出现时检查栈顶是否为对应左括号。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n\n        for (char c : s) {\n            if (c == '(' || c == '[' || c == '{') {\n                st.push(c);\n            } else {\n                if (st.empty()) return false;\n                char top = st.top();\n                st.pop();\n                if (c == ')' && top != '(') return false;\n                if (c == ']' && top != '[') return false;\n                if (c == '}' && top != '{') return false;\n            }\n        }\n        return st.empty();\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-155-min-stack",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "155",
    "title": "155. 最小栈",
    "englishTitle": "Min Stack",
    "difficulty": "中等",
    "category": "栈",
    "tags": [
      "栈",
      "设计"
    ],
    "officialUrl": "https://leetcode.cn/problems/min-stack/",
    "description": "这是一道 栈 / 栈、设计 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "一个栈存所有元素，另一个辅助栈同步保存当前阶段的最小值。",
    "interviewNotes": [
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：栈",
        "idea": "一个栈存所有元素，另一个辅助栈同步保存当前阶段的最小值。\n\n复杂度：每个操作 O(1)，空间 O(n)。",
        "code": "class MinStack {\nprivate:\n    stack<int> st;\n    stack<int> minSt;\n\npublic:\n    MinStack() {}\n\n    void push(int val) {\n        st.push(val);\n        if (minSt.empty() || val <= minSt.top()) minSt.push(val);\n    }\n\n    void pop() {\n        if (st.top() == minSt.top()) minSt.pop();\n        st.pop();\n    }\n\n    int top() {\n        return st.top();\n    }\n\n    int getMin() {\n        return minSt.top();\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-394-decode-string",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "394",
    "title": "394. 字符串解码",
    "englishTitle": "Decode String",
    "difficulty": "中等",
    "category": "栈",
    "tags": [
      "栈",
      "递归",
      "字符串"
    ],
    "officialUrl": "https://leetcode.cn/problems/decode-string/",
    "description": "这是一道 栈 / 栈、递归、字符串 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "数字栈保存重复次数，字符串栈保存进入括号前的字符串，遇到右括号时合并。",
    "interviewNotes": [
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：栈",
        "idea": "数字栈保存重复次数，字符串栈保存进入括号前的字符串，遇到右括号时合并。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    string decodeString(string s) {\n        stack<int> nums;\n        stack<string> strs;\n        int num = 0;\n        string cur;\n\n        for (char c : s) {\n            if (isdigit(c)) {\n                num = num * 10 + (c - '0');\n            } else if (c == '[') {\n                nums.push(num);\n                strs.push(cur);\n                num = 0;\n                cur.clear();\n            } else if (c == ']') {\n                int times = nums.top(); nums.pop();\n                string prev = strs.top(); strs.pop();\n                while (times--) prev += cur;\n                cur = prev;\n            } else {\n                cur.push_back(c);\n            }\n        }\n        return cur;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-739-daily-temperatures",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "739",
    "title": "739. 每日温度",
    "englishTitle": "Daily Temperatures",
    "difficulty": "中等",
    "category": "栈",
    "tags": [
      "栈",
      "数组",
      "单调栈"
    ],
    "officialUrl": "https://leetcode.cn/problems/daily-temperatures/",
    "description": "这是一道 栈 / 栈、数组、单调栈 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "单调栈保存还没找到更高温度的下标，遇到更高温时弹出并计算等待天数。",
    "interviewNotes": [
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：单调栈",
        "idea": "单调栈保存还没找到更高温度的下标，遇到更高温时弹出并计算等待天数。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        int n = temperatures.size();\n        vector<int> ans(n, 0);\n        vector<int> st;\n        st.reserve(n);\n\n        for (int i = 0; i < n; i++) {\n            while (!st.empty() && temperatures[st.back()] < temperatures[i]) {\n                int idx = st.back();\n                st.pop_back();\n                ans[idx] = i - idx;\n            }\n            st.push_back(i);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-84-largest-rectangle-in-histogram",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "84",
    "title": "84. 柱状图中最大的矩形",
    "englishTitle": "Largest Rectangle in Histogram",
    "difficulty": "困难",
    "category": "栈",
    "tags": [
      "栈",
      "数组",
      "单调栈"
    ],
    "officialUrl": "https://leetcode.cn/problems/largest-rectangle-in-histogram/",
    "description": "这是一道 栈 / 栈、数组、单调栈 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "单调递增栈存下标，遇到更矮柱子时弹出并用左右边界结算矩形面积。",
    "interviewNotes": [
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：单调栈",
        "idea": "单调递增栈存下标，遇到更矮柱子时弹出并用左右边界结算矩形面积。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        int n = heights.size();\n        stack<int> st;\n        int ans = 0;\n\n        for (int i = 0; i <= n; i++) {\n            int cur = (i == n ? 0 : heights[i]);\n            while (!st.empty() && heights[st.top()] > cur) {\n                int h = heights[st.top()];\n                st.pop();\n                int left = st.empty() ? -1 : st.top();\n                int width = i - left - 1;\n                ans = max(ans, h * width);\n            }\n            st.push(i);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-215-kth-largest-element-in-an-array",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "215",
    "title": "215. 数组中的第K个最大元素",
    "englishTitle": "Kth Largest Element in an Array",
    "difficulty": "中等",
    "category": "堆",
    "tags": [
      "数组",
      "分治",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "officialUrl": "https://leetcode.cn/problems/kth-largest-element-in-an-array/",
    "description": "这是一道 堆 / 数组、分治、快速选择 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "题目数值范围有限，可用计数桶统计出现次数，从大到小扫描直到累计到第 k 个。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：堆",
        "idea": "题目数值范围有限，可用计数桶统计出现次数，从大到小扫描直到累计到第 k 个。\n\n复杂度：时间 O(n+20001)，空间 O(20001)。",
        "code": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        vector<int> bucket(20001, 0);\n        for (int x : nums) {\n            bucket[x + 10000]++;\n        }\n\n        for (int i = 20000; i >= 0; i--) {\n            k -= bucket[i];\n            if (k <= 0) return i - 10000;\n        }\n        return 0;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-347-top-k-frequent-elements",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "347",
    "title": "347. 前 K 个高频元素",
    "englishTitle": "Top K Frequent Elements",
    "difficulty": "中等",
    "category": "堆",
    "tags": [
      "数组",
      "哈希表",
      "分治",
      "桶排序",
      "计数",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "officialUrl": "https://leetcode.cn/problems/top-k-frequent-elements/",
    "description": "这是一道 堆 / 数组、哈希表、分治 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "先统计频率，再用频率作为桶下标，把元素放进对应频率桶，从高频桶往低频收集。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "先统计频率，再用频率作为桶下标，把元素放进对应频率桶，从高频桶往低频收集。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        unordered_map<int, int> cnt;\n        for (int x : nums) cnt[x]++;\n\n        vector<vector<int>> buckets(nums.size() + 1);\n        for (auto& [num, freq] : cnt) {\n            buckets[freq].push_back(num);\n        }\n\n        vector<int> ans;\n        for (int f = buckets.size() - 1; f >= 0 && ans.size() < k; f--) {\n            for (int x : buckets[f]) {\n                ans.push_back(x);\n                if (ans.size() == k) break;\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-295-find-median-from-data-stream",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "295",
    "title": "295. 数据流的中位数",
    "englishTitle": "Find Median from Data Stream",
    "difficulty": "困难",
    "category": "堆",
    "tags": [
      "设计",
      "双指针",
      "数据流",
      "排序",
      "堆（优先队列）"
    ],
    "officialUrl": "https://leetcode.cn/problems/find-median-from-data-stream/",
    "description": "这是一道 堆 / 设计、双指针、数据流 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "大根堆保存较小一半，小根堆保存较大一半，通过平衡两个堆大小快速得到中位数。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "大根堆保存较小一半，小根堆保存较大一半，通过平衡两个堆大小快速得到中位数。\n\n复杂度：插入 O(log n)，查询 O(1)，空间 O(n)。",
        "code": "class MedianFinder {\nprivate:\n    priority_queue<int> left;\n    priority_queue<int, vector<int>, greater<int>> right;\n\npublic:\n    MedianFinder() {}\n\n    void addNum(int num) {\n        if (left.empty() || num <= left.top()) left.push(num);\n        else right.push(num);\n\n        if (left.size() > right.size() + 1) {\n            right.push(left.top());\n            left.pop();\n        } else if (right.size() > left.size()) {\n            left.push(right.top());\n            right.pop();\n        }\n    }\n\n    double findMedian() {\n        if (left.size() > right.size()) return left.top();\n        return ((double)left.top() + right.top()) / 2.0;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-121-best-time-to-buy-and-sell-stock",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "121",
    "title": "121. 买卖股票的最佳时机",
    "englishTitle": "Best Time to Buy and Sell Stock",
    "difficulty": "简单",
    "category": "贪心",
    "tags": [
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",
    "description": "这是一道 贪心 / 数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "遍历价格时维护历史最低买入价，用当前价格卖出利润更新最大值。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "遍历价格时维护历史最低买入价，用当前价格卖出利润更新最大值。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minPrice = prices[0];\n        int ans = 0;\n\n        for (int i = 1; i < prices.size(); i++) {\n            ans = max(ans, prices[i] - minPrice);\n            minPrice = min(minPrice, prices[i]);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-55-jump-game",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "55",
    "title": "55. 跳跃游戏",
    "englishTitle": "Jump Game",
    "difficulty": "中等",
    "category": "贪心",
    "tags": [
      "贪心",
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/jump-game/",
    "description": "这是一道 贪心 / 贪心、数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "维护当前能到达的最远位置，若遍历到超过最远位置的下标，说明无法到达。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "维护当前能到达的最远位置，若遍历到超过最远位置的下标，说明无法到达。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        int farthest = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            if (i > farthest) return false;\n            farthest = max(farthest, i + nums[i]);\n            if (farthest >= nums.size() - 1) return true;\n        }\n        return true;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-45-jump-game-ii",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "45",
    "title": "45. 跳跃游戏 II",
    "englishTitle": "Jump Game II",
    "difficulty": "中等",
    "category": "贪心",
    "tags": [
      "贪心",
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/jump-game-ii/",
    "description": "这是一道 贪心 / 贪心、数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "当前步数能覆盖 [0,end]，遍历时维护下一步最远范围，走到 end 就步数加一。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "当前步数能覆盖 [0,end]，遍历时维护下一步最远范围，走到 end 就步数加一。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int jump(vector<int>& nums) {\n        int steps = 0;\n        int end = 0;\n        int farthest = 0;\n\n        for (int i = 0; i < nums.size() - 1; i++) {\n            farthest = max(farthest, i + nums[i]);\n            if (i == end) {\n                steps++;\n                end = farthest;\n            }\n        }\n        return steps;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-763-partition-labels",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "763",
    "title": "763. 划分字母区间",
    "englishTitle": "Partition Labels",
    "difficulty": "中等",
    "category": "贪心",
    "tags": [
      "贪心",
      "哈希表",
      "双指针",
      "字符串"
    ],
    "officialUrl": "https://leetcode.cn/problems/partition-labels/",
    "description": "这是一道 贪心 / 贪心、哈希表、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "记录每个字母最后出现位置，遍历时扩展当前片段右边界，到边界就切分。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "记录每个字母最后出现位置，遍历时扩展当前片段右边界，到边界就切分。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    vector<int> partitionLabels(string s) {\n        vector<int> last(26);\n        for (int i = 0; i < s.size(); i++) {\n            last[s[i] - 'a'] = i;\n        }\n\n        vector<int> ans;\n        int start = 0, end = 0;\n        for (int i = 0; i < s.size(); i++) {\n            end = max(end, last[s[i] - 'a']);\n            if (i == end) {\n                ans.push_back(end - start + 1);\n                start = i + 1;\n            }\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-70-climbing-stairs",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "70",
    "title": "70. 爬楼梯",
    "englishTitle": "Climbing Stairs",
    "difficulty": "简单",
    "category": "动态规划",
    "tags": [
      "记忆化",
      "数学",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/climbing-stairs/",
    "description": "这是一道 动态规划 / 记忆化、数学、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "到第 i 阶只能从 i-1 或 i-2 阶来，因此答案满足斐波那契递推。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "到第 i 阶只能从 i-1 或 i-2 阶来，因此答案满足斐波那契递推。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int climbStairs(int n) {\n        int a = 1, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-118-pascals-triangle",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "118",
    "title": "118. 杨辉三角",
    "englishTitle": "Pascal's Triangle",
    "difficulty": "简单",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/pascals-triangle/",
    "description": "这是一道 动态规划 / 数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每行首尾为 1，中间位置等于上一行左上和右上两个数之和。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "每行首尾为 1，中间位置等于上一行左上和右上两个数之和。\n\n复杂度：时间 O(numRows^2)，空间 O(1) 不算返回结果。",
        "code": "class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        vector<vector<int>> ans;\n\n        for (int i = 0; i < numRows; i++) {\n            vector<int> row(i + 1, 1);\n            for (int j = 1; j < i; j++) {\n                row[j] = ans[i - 1][j - 1] + ans[i - 1][j];\n            }\n            ans.push_back(row);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-198-house-robber",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "198",
    "title": "198. 打家劫舍",
    "englishTitle": "House Robber",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/house-robber/",
    "description": "这是一道 动态规划 / 数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "每间房考虑偷或不偷，偷则加前两间最优，不偷则继承前一间最优。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "每间房考虑偷或不偷，偷则加前两间最优，不偷则继承前一间最优。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        int prev2 = 0, prev1 = 0;\n        for (int x : nums) {\n            int cur = max(prev1, prev2 + x);\n            prev2 = prev1;\n            prev1 = cur;\n        }\n        return prev1;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-279-perfect-squares",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "279",
    "title": "279. 完全平方数",
    "englishTitle": "Perfect Squares",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "广度优先搜索",
      "数学",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/perfect-squares/",
    "description": "这是一道 动态规划 / 广度优先搜索、数学、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "完全背包，把平方数看成可重复使用的物品，求凑成 n 的最少数量。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "完全背包，把平方数看成可重复使用的物品，求凑成 n 的最少数量。\n\n复杂度：时间 O(n√n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int numSquares(int n) {\n        vector<int> dp(n + 1, INT_MAX / 2);\n        dp[0] = 0;\n\n        for (int i = 1; i * i <= n; i++) {\n            int square = i * i;\n            for (int j = square; j <= n; j++) {\n                dp[j] = min(dp[j], dp[j - square] + 1);\n            }\n        }\n        return dp[n];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-322-coin-change",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "322",
    "title": "322. 零钱兑换",
    "englishTitle": "Coin Change",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "广度优先搜索",
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/coin-change/",
    "description": "这是一道 动态规划 / 广度优先搜索、数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "完全背包，dp[j] 表示凑成金额 j 的最少硬币数，每种硬币可重复使用。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "完全背包，dp[j] 表示凑成金额 j 的最少硬币数，每种硬币可重复使用。\n\n复杂度：时间 O(amount·coins)，空间 O(amount)。",
        "code": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        vector<int> dp(amount + 1, amount + 1);\n        dp[0] = 0;\n\n        for (int coin : coins) {\n            for (int j = coin; j <= amount; j++) {\n                dp[j] = min(dp[j], dp[j - coin] + 1);\n            }\n        }\n        return dp[amount] == amount + 1 ? -1 : dp[amount];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-139-word-break",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "139",
    "title": "139. 单词拆分",
    "englishTitle": "Word Break",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "字典树",
      "记忆化",
      "数组",
      "哈希表",
      "字符串",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/word-break/",
    "description": "这是一道 动态规划 / 字典树、记忆化、数组 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "dp[i] 表示前 i 个字符能否拆分，枚举最后一个单词的起点并查字典。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "dp[i] 表示前 i 个字符能否拆分，枚举最后一个单词的起点并查字典。\n\n复杂度：时间约 O(n·maxWordLen) 次子串检查，空间 O(n)。",
        "code": "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        unordered_set<string> dict(wordDict.begin(), wordDict.end());\n        int maxLen = 0;\n        for (auto& w : wordDict) maxLen = max(maxLen, (int)w.size());\n\n        int n = s.size();\n        vector<bool> dp(n + 1, false);\n        dp[0] = true;\n\n        for (int i = 1; i <= n; i++) {\n            for (int len = 1; len <= maxLen && len <= i; len++) {\n                if (dp[i - len] && dict.count(s.substr(i - len, len))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        return dp[n];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-300-longest-increasing-subsequence",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "300",
    "title": "300. 最长递增子序列",
    "englishTitle": "Longest Increasing Subsequence",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "数组",
      "二分查找",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-increasing-subsequence/",
    "description": "这是一道 动态规划 / 数组、二分查找、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "tails[i] 存长度为 i+1 的递增子序列最小结尾，用二分替换。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "tails[i] 存长度为 i+1 的递增子序列最小结尾，用二分替换。\n\n复杂度：时间 O(n log n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> tails;\n        for (int x : nums) {\n            auto it = lower_bound(tails.begin(), tails.end(), x);\n            if (it == tails.end()) tails.push_back(x);\n            else *it = x;\n        }\n        return tails.size();\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-152-maximum-product-subarray",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "152",
    "title": "152. 乘积最大子数组",
    "englishTitle": "Maximum Product Subarray",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/maximum-product-subarray/",
    "description": "这是一道 动态规划 / 数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "负数会让最大最小互换，因此同时维护以当前位置结尾的最大乘积和最小乘积。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "负数会让最大最小互换，因此同时维护以当前位置结尾的最大乘积和最小乘积。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int maxProd = nums[0], minProd = nums[0], ans = nums[0];\n\n        for (int i = 1; i < nums.size(); i++) {\n            int x = nums[i];\n            if (x < 0) swap(maxProd, minProd);\n            maxProd = max(x, maxProd * x);\n            minProd = min(x, minProd * x);\n            ans = max(ans, maxProd);\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-416-partition-equal-subset-sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "416",
    "title": "416. 分割等和子集",
    "englishTitle": "Partition Equal Subset Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/partition-equal-subset-sum/",
    "description": "这是一道 动态规划 / 数组、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "转化为 0/1 背包，判断能否选出若干数凑成总和一半；bitset 可快速更新状态。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "转化为 0/1 背包，判断能否选出若干数凑成总和一半；bitset 可快速更新状态。\n\n复杂度：时间约 O(n·target/wordSize)，空间 O(target)。",
        "code": "class Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        int sum = accumulate(nums.begin(), nums.end(), 0);\n        if (sum % 2 == 1) return false;\n        int target = sum / 2;\n\n        bitset<10001> dp;\n        dp[0] = 1;\n        for (int x : nums) {\n            dp |= (dp << x);\n            if (dp[target]) return true;\n        }\n        return dp[target];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-32-longest-valid-parentheses",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "32",
    "title": "32. 最长有效括号",
    "englishTitle": "Longest Valid Parentheses",
    "difficulty": "困难",
    "category": "动态规划",
    "tags": [
      "栈",
      "字符串",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-valid-parentheses/",
    "description": "这是一道 动态规划 / 栈、字符串、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "双向扫描，左到右处理右括号过多，右到左处理左括号过多，空间最优。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "栈内存什么（值还是下标）、单调性是什么，是这类题的关键。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "双向扫描，左到右处理右括号过多，右到左处理左括号过多，空间最优。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int longestValidParentheses(string s) {\n        int ans = 0;\n        int left = 0, right = 0;\n\n        for (char c : s) {\n            if (c == '(') left++;\n            else right++;\n\n            if (left == right) ans = max(ans, 2 * right);\n            else if (right > left) left = right = 0;\n        }\n\n        left = right = 0;\n        for (int i = s.size() - 1; i >= 0; i--) {\n            if (s[i] == '(') left++;\n            else right++;\n\n            if (left == right) ans = max(ans, 2 * left);\n            else if (left > right) left = right = 0;\n        }\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-62-unique-paths",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "62",
    "title": "62. 不同路径",
    "englishTitle": "Unique Paths",
    "difficulty": "中等",
    "category": "多维动态规划",
    "tags": [
      "数学",
      "动态规划",
      "组合数学"
    ],
    "officialUrl": "https://leetcode.cn/problems/unique-paths/",
    "description": "这是一道 多维动态规划 / 数学、动态规划、组合数学 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "机器人总共走 m-1 次向下和 n-1 次向右，本质是组合数问题。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "机器人总共走 m-1 次向下和 n-1 次向右，本质是组合数问题。\n\n复杂度：时间 O(min(m,n))，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        int down = m - 1, right = n - 1;\n        int k = min(down, right);\n        int total = down + right;\n        long long ans = 1;\n\n        for (int i = 1; i <= k; i++) {\n            ans = ans * (total - k + i) / i;\n        }\n        return (int)ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-64-minimum-path-sum",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "64",
    "title": "64. 最小路径和",
    "englishTitle": "Minimum Path Sum",
    "difficulty": "中等",
    "category": "多维动态规划",
    "tags": [
      "数组",
      "动态规划",
      "矩阵"
    ],
    "officialUrl": "https://leetcode.cn/problems/minimum-path-sum/",
    "description": "这是一道 多维动态规划 / 数组、动态规划、矩阵 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "一维 DP，当前格子的最小路径和等于自身值加上方或左方的较小值。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "一维 DP，当前格子的最小路径和等于自身值加上方或左方的较小值。\n\n复杂度：时间 O(mn)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        int m = grid.size(), n = grid[0].size();\n        vector<int> dp(n, INT_MAX / 2);\n        dp[0] = 0;\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (j == 0) dp[j] += grid[i][j];\n                else dp[j] = min(dp[j], dp[j - 1]) + grid[i][j];\n            }\n        }\n        return dp[n - 1];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-5-longest-palindromic-substring",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "5",
    "title": "5. 最长回文子串",
    "englishTitle": "Longest Palindromic Substring",
    "difficulty": "中等",
    "category": "多维动态规划",
    "tags": [
      "双指针",
      "字符串",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-palindromic-substring/",
    "description": "这是一道 多维动态规划 / 双指针、字符串、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "Manacher 算法先插入分隔符统一奇偶回文，再利用中心和右边界复用已知半径。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "Manacher 算法先插入分隔符统一奇偶回文，再利用中心和右边界复用已知半径。\n\n复杂度：时间 O(n)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        if (s.empty()) return \"\";\n\n        string t = \"@#\";\n        for (char c : s) {\n            t += c;\n            t += '#';\n        }\n        t += '$';\n\n        int n = t.size();\n        vector<int> p(n, 0);\n        int center = 0, right = 0;\n        int start = 0, maxLen = 0;\n\n        for (int i = 1; i < n - 1; i++) {\n            int mirror = 2 * center - i;\n            if (i < right) {\n                p[i] = min(p[mirror], right - i);\n            }\n\n            while (t[i - p[i] - 1] == t[i + p[i] + 1]) {\n                p[i]++;\n            }\n\n            if (i + p[i] > right) {\n                center = i;\n                right = i + p[i];\n            }\n\n            if (p[i] > maxLen) {\n                maxLen = p[i];\n                start = (i - p[i]) / 2;\n            }\n        }\n        return s.substr(start, maxLen);\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-1143-longest-common-subsequence",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "1143",
    "title": "1143. 最长公共子序列",
    "englishTitle": "Longest Common Subsequence",
    "difficulty": "中等",
    "category": "多维动态规划",
    "tags": [
      "字符串",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/longest-common-subsequence/",
    "description": "这是一道 多维动态规划 / 字符串、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "一维 DP 优化二维状态，字符相同取左上加一，不同取上方和左方最大值。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "一维 DP 优化二维状态，字符相同取左上加一，不同取上方和左方最大值。\n\n复杂度：时间 O(mn)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        int m = text1.size(), n = text2.size();\n        vector<int> dp(n + 1, 0);\n\n        for (int i = 1; i <= m; i++) {\n            int prev = 0;\n            for (int j = 1; j <= n; j++) {\n                int temp = dp[j];\n                if (text1[i - 1] == text2[j - 1]) {\n                    dp[j] = prev + 1;\n                } else {\n                    dp[j] = max(dp[j], dp[j - 1]);\n                }\n                prev = temp;\n            }\n        }\n        return dp[n];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-72-edit-distance",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "72",
    "title": "72. 编辑距离",
    "englishTitle": "Edit Distance",
    "difficulty": "中等",
    "category": "多维动态规划",
    "tags": [
      "字符串",
      "动态规划"
    ],
    "officialUrl": "https://leetcode.cn/problems/edit-distance/",
    "description": "这是一道 多维动态规划 / 字符串、动态规划 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "一维 DP 保存编辑距离，字符不同时在删除、插入、替换三种操作中取最小值。",
    "interviewNotes": [
      "优先说状态定义、转移方程和初始条件；常见加分点是滚动数组或空间压缩。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：DP",
        "idea": "一维 DP 保存编辑距离，字符不同时在删除、插入、替换三种操作中取最小值。\n\n复杂度：时间 O(mn)，空间 O(n)。",
        "code": "class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        int m = word1.size(), n = word2.size();\n        vector<int> dp(n + 1, 0);\n        for (int j = 0; j <= n; j++) dp[j] = j;\n\n        for (int i = 1; i <= m; i++) {\n            int prev = dp[0];\n            dp[0] = i;\n\n            for (int j = 1; j <= n; j++) {\n                int temp = dp[j];\n                if (word1[i - 1] == word2[j - 1]) {\n                    dp[j] = prev;\n                } else {\n                    dp[j] = min({dp[j], dp[j - 1], prev}) + 1;\n                }\n                prev = temp;\n            }\n        }\n        return dp[n];\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-136-single-number",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "136",
    "title": "136. 只出现一次的数字",
    "englishTitle": "Single Number",
    "difficulty": "简单",
    "category": "技巧",
    "tags": [
      "位运算",
      "数组"
    ],
    "officialUrl": "https://leetcode.cn/problems/single-number/",
    "description": "这是一道 技巧 / 位运算、数组 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "异或满足相同数字抵消、零与任何数异或为其本身，最终剩下只出现一次的数。",
    "interviewNotes": [
      "先说暴力思路，再说优化掉的重复计算或额外状态，最后补上边界情况。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：标准写法",
        "idea": "异或满足相同数字抵消、零与任何数异或为其本身，最终剩下只出现一次的数。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int ans = 0;\n        for (int x : nums) ans ^= x;\n        return ans;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-169-majority-element",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "169",
    "title": "169. 多数元素",
    "englishTitle": "Majority Element",
    "difficulty": "简单",
    "category": "技巧",
    "tags": [
      "数组",
      "哈希表",
      "分治",
      "计数",
      "排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/majority-element/",
    "description": "这是一道 技巧 / 数组、哈希表、分治 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "摩尔投票法让不同元素两两抵消，因为多数元素超过一半，最后留下的候选就是答案。",
    "interviewNotes": [
      "问清是否存在重复元素、负数或多组答案，并注意哈希表最坏情况和内存开销。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：哈希表",
        "idea": "摩尔投票法让不同元素两两抵消，因为多数元素超过一半，最后留下的候选就是答案。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int candidate = 0, count = 0;\n\n        for (int x : nums) {\n            if (count == 0) candidate = x;\n            count += (x == candidate ? 1 : -1);\n        }\n        return candidate;\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-75-sort-colors",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "75",
    "title": "75. 颜色分类",
    "englishTitle": "Sort Colors",
    "difficulty": "中等",
    "category": "技巧",
    "tags": [
      "数组",
      "双指针",
      "排序"
    ],
    "officialUrl": "https://leetcode.cn/problems/sort-colors/",
    "description": "这是一道 技巧 / 数组、双指针、排序 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "荷兰国旗三指针，0 放左边，2 放右边，1 留中间。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "荷兰国旗三指针，0 放左边，2 放右边，1 留中间。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int left = 0, i = 0, right = nums.size() - 1;\n\n        while (i <= right) {\n            if (nums[i] == 0) {\n                swap(nums[i], nums[left]);\n                left++;\n                i++;\n            } else if (nums[i] == 2) {\n                swap(nums[i], nums[right]);\n                right--;\n            } else {\n                i++;\n            }\n        }\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-31-next-permutation",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "31",
    "title": "31. 下一个排列",
    "englishTitle": "Next Permutation",
    "difficulty": "中等",
    "category": "技巧",
    "tags": [
      "数组",
      "双指针"
    ],
    "officialUrl": "https://leetcode.cn/problems/next-permutation/",
    "description": "这是一道 技巧 / 数组、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "从右找第一个可变大的位置，和右侧比它大的最小数交换，再反转后缀成最小序。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "从右找第一个可变大的位置，和右侧比它大的最小数交换，再反转后缀成最小序。\n\n复杂度：时间 O(n)，空间 O(1)。",
        "code": "class Solution {\npublic:\n    void nextPermutation(vector<int>& nums) {\n        int n = nums.size();\n        int i = n - 2;\n        while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n\n        if (i >= 0) {\n            int j = n - 1;\n            while (j >= 0 && nums[j] <= nums[i]) j--;\n            swap(nums[i], nums[j]);\n        }\n\n        reverse(nums.begin() + i + 1, nums.end());\n    }\n};\n"
      }
    ]
  },
  {
    "id": "leetcode-287-find-the-duplicate-number",
    "collection": "LeetCode Hot 100",
    "source": "力扣 Hot 100",
    "number": "287",
    "title": "287. 寻找重复数",
    "englishTitle": "Find the Duplicate Number",
    "difficulty": "中等",
    "category": "技巧",
    "tags": [
      "位运算",
      "数组",
      "双指针",
      "二分查找"
    ],
    "officialUrl": "https://leetcode.cn/problems/find-the-duplicate-number/",
    "description": "这是一道 技巧 / 位运算、数组、双指针 方向的 Hot100 题。完整题面、示例和图片请打开官方题面；本页重点保留你的题意摘要、思路提示、面试关注点与 C++ 参考答案。",
    "input": "见官方题面示例",
    "output": "见官方题面示例",
    "hint": "把数组看成下标到值的链表，重复数造成环，快慢指针找环入口即重复数。",
    "interviewNotes": [
      "面试常追问是否能原地处理，以及指针移动条件为什么不会漏解。",
      "将区间定义和边界收缩写清楚，特别是左闭右闭还是左闭右开。",
      "当题目要求 O(1) 额外空间时，要明确代码中是否修改了原数据。"
    ],
    "template": "// 先在这里写自己的 C++ 解法，再展开下方参考答案。\nclass Solution {\npublic:\n    // TODO\n};\n",
    "methods": [
      {
        "name": "方法一：双指针",
        "idea": "把数组看成下标到值的链表，重复数造成环，快慢指针找环入口即重复数。\n\n复杂度：时间 O(n)，空间 O(1)，不修改数组。",
        "code": "class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        int slow = nums[0];\n        int fast = nums[0];\n\n        do {\n            slow = nums[slow];\n            fast = nums[nums[fast]];\n        } while (slow != fast);\n\n        slow = nums[0];\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[fast];\n        }\n        return slow;\n    }\n};\n"
      }
    ]
  }
];
