const assert = require("assert");
const fs = require("fs");
const ts = require("typescript");

const source = fs.readFileSync("src/lib/quizEngine.ts", "utf8");
const compiled = ts.transpile(source, {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2020,
});
const quizModule = { exports: {} };
new Function("module", "exports", compiled)(quizModule, quizModule.exports);

const {
  createBalancedAnswerPositions,
  createQuizSession,
  createSeededRandom,
} = quizModule.exports;

function makeQuestion(index) {
  return {
    id: `q-${index}`,
    q: `Question ${index}?`,
    a: `Correct answer ${index}`,
    options: [
      `Correct answer ${index}`,
      `Plausible distractor one ${index}`,
      `Plausible distractor two ${index}`,
      `Plausible distractor three ${index}`,
    ],
    correctAnswerIndex: 0,
  };
}

const questionBank = Array.from({ length: 39 }, (_, index) => makeQuestion(index + 1));
const session = createQuizSession(questionBank, createSeededRandom("test-session"));

assert.strictEqual(session.length, 39, "All valid questions should be included.");
assert.strictEqual(new Set(session.map((question) => question.id)).size, 39, "Question IDs must remain unique.");

const answerPositions = session.map((question) => question.correctAnswerIndex);
const positionCounts = [0, 0, 0, 0];
answerPositions.forEach((position) => { positionCounts[position] += 1; });

assert.ok(
  Math.max(...positionCounts) - Math.min(...positionCounts) <= 1,
  "Correct answers should be evenly distributed across A, B, C and D."
);
for (let index = 1; index < answerPositions.length; index += 1) {
  assert.notStrictEqual(
    answerPositions[index],
    answerPositions[index - 1],
    "The same correct option position should not repeat consecutively."
  );
}

session.forEach((question) => {
  assert.strictEqual(question.options.length, 4);
  assert.strictEqual(new Set(question.options.map((option) => option.toLowerCase())).size, 4);
  assert.strictEqual(question.options[question.correctAnswerIndex], question.a);
  assert.strictEqual(
    question.options.filter((option) => option === question.a).length,
    1,
    "The correct answer must appear exactly once."
  );
});

const firstRun = createQuizSession(questionBank, createSeededRandom("repeatable"));
const secondRun = createQuizSession(questionBank, createSeededRandom("repeatable"));
assert.deepStrictEqual(firstRun, secondRun, "A seeded daily session should be repeatable.");

const differentRun = createQuizSession(questionBank, createSeededRandom("another-day"));
assert.notDeepStrictEqual(
  firstRun.map((question) => question.id),
  differentRun.map((question) => question.id),
  "Different seeds should produce a different question order."
);

const invalidQuestions = [
  { ...makeQuestion(100), options: ["Correct answer 100", "Only one distractor"] },
  {
    ...makeQuestion(101),
    options: ["Correct answer 101", "State Directive", "Union Council", "Apex Authority"],
  },
  {
    ...makeQuestion(102),
    options: ["Not the answer", "Distractor one", "Distractor two", "Distractor three"],
  },
];
assert.strictEqual(
  createQuizSession(invalidQuestions).length,
  0,
  "Questions with missing, placeholder, or mismatched choices must be excluded."
);

for (let length = 1; length <= 100; length += 1) {
  const positions = createBalancedAnswerPositions(length, createSeededRandom(`length-${length}`));
  const counts = [0, 0, 0, 0];
  positions.forEach((position) => { counts[position] += 1; });
  assert.ok(
    Math.max(...counts) - Math.min(...counts) <= 1,
    `Position counts should stay balanced for a ${length}-question quiz.`
  );
  for (let index = 1; index < positions.length; index += 1) {
    assert.notStrictEqual(positions[index], positions[index - 1]);
  }
}

console.log("PASS: Quiz questions and answer positions are randomised and balanced.");
console.log("PASS: Invalid and placeholder question options are rejected.");
console.log("PASS: Seeded daily quiz sessions are reproducible.");
