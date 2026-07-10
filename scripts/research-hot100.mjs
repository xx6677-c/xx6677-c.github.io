import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const source = await fs.readFile(path.join(root, "practice", "hot100-data.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const problems = sandbox.window.hot100Problems;
const endpoint = "https://leetcode.cn/graphql/";
const rawPath = path.join(os.tmpdir(), "xixi-hot100-research-raw.json");
const auditPath = path.join(root, "practice", "hot100-research.json");

const questionQuery = `
  query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      translatedTitle
      translatedContent
      exampleTestcases
      sampleTestCase
    }
  }
`;

const solutionsQuery = `
  query questionTopicsList($questionSlug: String!, $skip: Int, $first: Int, $orderBy: SolutionArticleOrderBy) {
    questionSolutionArticles(
      questionSlug: $questionSlug
      skip: $skip
      first: $first
      orderBy: $orderBy
    ) {
      totalNum
      edges {
        node {
          title
          slug
          upvoteCount
          summary
          byLeetcode
          isEditorsPick
          topic { id commentCount viewCount }
        }
      }
    }
  }
`;

const commentsQuery = `
  query questionDiscussComments($topicId: Int!, $orderBy: String, $pageNo: Int, $numPerPage: Int) {
    topicComments(
      topicId: $topicId
      orderBy: $orderBy
      pageNo: $pageNo
      numPerPage: $numPerPage
    ) {
      totalNum
      data {
        id
        numChildren
        post { id content voteCount status }
      }
    }
  }
`;

const usefulPattern = /(复杂度|空间|时间|哈希|双指针|边界|溢出|排序|原地|递归|迭代|循环|重复|下标|空数组|指针|链表|二叉|队列|栈|回溯|剪枝|动态规划|单调|前缀|面试|证明|为什么|负数|整数|矩阵|并查集|拓扑|滑动窗口|贪心|二分|状态|转移|初始化|去重|nullptr|\bnull\b|\bmap\b|\bset\b|\bvector\b|\bstack\b|\bqueue\b|\bbfs\b|\bdfs\b|\bdp\b|O\s*\()/i;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function graphql(operationName, query, variables, referer) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        referer,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) XiXi-Hot100-Research/1.0",
      },
      body: JSON.stringify({ operationName, query, variables }),
    });
    if (response.ok) {
      const payload = await response.json();
      if (payload.errors) throw new Error(JSON.stringify(payload.errors));
      return payload.data;
    }
    if (response.status !== 429 && response.status < 500) {
      throw new Error(`HTTP ${response.status}`);
    }
    await sleep(600 * (attempt + 1));
  }
  throw new Error("GraphQL request failed after retries");
}

function slugOf(problem) {
  return new URL(problem.officialUrl).pathname.split("/").filter(Boolean).at(-1);
}

function usefulComments(items) {
  return items
    .map((item) => ({
      id: item.id,
      votes: item.post?.voteCount || 0,
      content: (item.post?.content || "").replace(/\s+/g, " ").trim(),
    }))
    .filter((item) => item.content.length >= 18 && usefulPattern.test(item.content))
    .sort((a, b) => b.votes - a.votes);
}

async function researchOne(problem) {
  const slug = slugOf(problem);
  const referer = `https://leetcode.cn/problems/${slug}/solutions/`;
  const [questionData, solutionData] = await Promise.all([
    graphql("questionData", questionQuery, { titleSlug: slug }, referer),
    graphql(
      "questionTopicsList",
      solutionsQuery,
      { questionSlug: slug, skip: 0, first: 3, orderBy: "HOT" },
      referer,
    ),
  ]);

  const question = questionData.question;
  const articles = solutionData.questionSolutionArticles.edges.map(({ node }) => node);
  const primary = articles.find((article) => article.byLeetcode && article.topic?.id) || articles.find((article) => article.topic?.id);
  let comments = [];
  let commentTotal = 0;

  if (primary?.topic?.id) {
    const [popular, recent] = await Promise.all([
      graphql(
        "questionDiscussComments",
        commentsQuery,
        { topicId: primary.topic.id, orderBy: "most_votes", pageNo: 1, numPerPage: 30 },
        `https://leetcode.cn/problems/${slug}/solutions/${primary.slug}/`,
      ),
      graphql(
        "questionDiscussComments",
        commentsQuery,
        { topicId: primary.topic.id, orderBy: "newest_to_oldest", pageNo: 1, numPerPage: 30 },
        `https://leetcode.cn/problems/${slug}/solutions/${primary.slug}/`,
      ),
    ]);
    const merged = [...popular.topicComments.data, ...recent.topicComments.data];
    comments = [...new Map(merged.map((item) => [item.id, item])).values()];
    commentTotal = popular.topicComments.totalNum;
  }

  const useful = usefulComments(comments);
  const html = question.translatedContent || "";
  const imageCount = (html.match(/<img\b/gi) || []).length;
  const research = {
    number: String(problem.number),
    slug,
    title: question.translatedTitle,
    officialUrl: problem.officialUrl,
    hasOriginalImage: imageCount > 0,
    originalImageCount: imageCount,
    exampleCaseGroups: (question.exampleTestcases || "").split("\n").length,
    articlesReviewed: articles.map((article) => ({
      title: article.title,
      slug: article.slug,
      topicId: article.topic?.id || null,
      commentCount: article.topic?.commentCount || 0,
      upvoteCount: article.upvoteCount || 0,
      byLeetcode: Boolean(article.byLeetcode),
      isEditorsPick: Boolean(article.isEditorsPick),
    })),
    primaryDiscussionUrl: primary ? `https://leetcode.cn/problems/${slug}/solutions/${primary.slug}/` : problem.officialUrl,
    discussionCommentTotal: commentTotal,
    commentsScanned: comments.length,
    usefulCommentsFound: useful.length,
  };

  return {
    audit: research,
    raw: {
      ...research,
      officialExampleTestcases: question.exampleTestcases,
      officialSampleTestCase: question.sampleTestCase,
      articleSummaries: articles.map((article) => ({ title: article.title, slug: article.slug, summary: article.summary })),
      usefulComments: useful.slice(0, 8),
    },
  };
}

const results = new Array(problems.length);
let cursor = 0;
const workerCount = 4;

async function worker() {
  while (cursor < problems.length) {
    const index = cursor;
    cursor += 1;
    try {
      results[index] = await researchOne(problems[index]);
      process.stdout.write(`\rReviewed ${results.filter(Boolean).length}/${problems.length}`);
    } catch (error) {
      results[index] = { error: String(error), number: String(problems[index].number) };
      process.stdout.write(`\nFailed ${problems[index].number}: ${error}\n`);
    }
    await sleep(180);
  }
}

await Promise.all(Array.from({ length: workerCount }, () => worker()));
process.stdout.write("\n");

const failed = results.filter((item) => !item?.audit);
if (failed.length) {
  await fs.writeFile(rawPath, JSON.stringify(results, null, 2), "utf8");
  throw new Error(`${failed.length} problems failed; partial data saved to ${rawPath}`);
}

const audits = results.map((item) => item.audit);
const summary = {
  generatedAt: new Date().toISOString(),
  source: "LeetCode CN question pages, top solution articles, and their discussion comments",
  problemsReviewed: audits.length,
  articlesReviewed: audits.reduce((sum, item) => sum + item.articlesReviewed.length, 0),
  commentsScanned: audits.reduce((sum, item) => sum + item.commentsScanned, 0),
  usefulCommentsFound: audits.reduce((sum, item) => sum + item.usefulCommentsFound, 0),
  problemsWithOriginalImages: audits.filter((item) => item.hasOriginalImage).length,
};

await fs.writeFile(rawPath, JSON.stringify({ summary, problems: results.map((item) => item.raw) }, null, 2), "utf8");
await fs.writeFile(auditPath, JSON.stringify({ summary, problems: audits }, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ ...summary, rawPath, auditPath }, null, 2));
