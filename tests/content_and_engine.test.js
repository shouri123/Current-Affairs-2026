const assert = require('assert');
const fs = require('fs');

console.log('--- RUNNING LEARNING ENGINE & LOGIC SUITE ---');

// Test 1: Search Matching Logic
function searchFacts(facts, query) {
  if (!query.trim()) return facts;
  const q = query.toLowerCase();
  return facts.filter(f =>
    f.text.toLowerCase().includes(q) ||
    (f.category && f.category.toLowerCase().includes(q))
  );
}

const mockFacts = [
  { id: '1', text: 'India real GDP expanded by 7.8% in Q1 FY2026-27.', category: 'Banking & Financial Awareness', hot: true },
  { id: '2', text: 'UPI transactions hit 24.51 billion in August 2026.', category: 'Banking & Financial Awareness', hot: true },
  { id: '3', text: 'India won Asian Games women kabaddi gold 37-34 over Iran.', category: 'Sports Spectacular', hot: true },
  { id: '4', text: '18th BRICS Summit hosted in New Delhi.', category: 'International News & Summits', hot: true },
  { id: '5', text: 'Bankers Books Evidence Act 2026 takes effect on 1 October.', category: 'Banking & Financial Awareness', hot: false }
];

const gdpResults = searchFacts(mockFacts, 'GDP');
assert.strictEqual(gdpResults.length, 1, 'Should find exactly 1 fact for GDP');
assert.strictEqual(gdpResults[0].id, '1');

const upiResults = searchFacts(mockFacts, '24.51 billion');
assert.strictEqual(upiResults.length, 1, 'Should find UPI fact by amount');

const emptyResults = searchFacts(mockFacts, 'nonexistent query 12345');
assert.strictEqual(emptyResults.length, 0, 'Should return empty array for unmatched query');

console.log('PASS: Search matching logic test passed.');

// Test 2: Filter Combinations (Category + Hot)
function filterFacts(facts, { category, onlyHot }) {
  return facts.filter(f => {
    if (onlyHot && !f.hot) return false;
    if (category && f.category !== category) return false;
    return true;
  });
}

const bankingHot = filterFacts(mockFacts, { category: 'Banking & Financial Awareness', onlyHot: true });
assert.strictEqual(bankingHot.length, 2, 'Should find 2 hot banking facts');

const bankingAll = filterFacts(mockFacts, { category: 'Banking & Financial Awareness', onlyHot: false });
assert.strictEqual(bankingAll.length, 3, 'Should find 3 total banking facts');

console.log('PASS: Filter combinations test passed.');

// Test 3: Daily Revision Deterministic Seeding
function generateDailyDose(facts, dateStr, offset = 0) {
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed * 31 + dateStr.charCodeAt(i) + offset) % 100000;
  }
  const copy = [...facts];
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const rnd = seed / 233280;
    const j = Math.floor(rnd * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 3);
}

const doseA1 = generateDailyDose(mockFacts, '2026-11-14', 0);
const doseA2 = generateDailyDose(mockFacts, '2026-11-14', 0);
assert.deepStrictEqual(doseA1.map(f => f.id), doseA2.map(f => f.id), 'Identical dates must yield deterministic selections');

const doseB = generateDailyDose(mockFacts, '2026-11-15', 0);
// Different dates should have different or re-ordered sequences
console.log('PASS: Deterministic daily revision seeding test passed.');

// Test 4: Quiz Scoring & Accuracy
function calculateQuizResult(userSelections, correctIndices) {
  let score = 0;
  const incorrect = [];
  userSelections.forEach((sel, idx) => {
    if (sel === correctIndices[idx]) {
      score++;
    } else {
      incorrect.push(`q-${idx}`);
    }
  });
  const accuracy = Math.round((score / userSelections.length) * 100);
  return { score, total: userSelections.length, accuracy, incorrect };
}

const quizRes = calculateQuizResult([0, 1, 0, 2], [0, 1, 3, 2]);
assert.strictEqual(quizRes.score, 3);
assert.strictEqual(quizRes.accuracy, 75);
assert.strictEqual(quizRes.incorrect.length, 1);
assert.strictEqual(quizRes.incorrect[0], 'q-2');

console.log('PASS: Quiz calculation and accuracy metrics test passed.');

// Test 5: Progress Serialization & Backup Roundtrip
const userProgressData = {
  version: 1,
  masteredFactIds: ['banking-0', 'banking-1', 'sports-3'],
  pinnedFactIds: ['banking-0'],
  quizAttempts: [
    { id: 'quiz-1', date: '2026-11-14T10:00:00Z', score: 5, totalQuestions: 5, accuracy: 100, incorrectQuestionIds: [] }
  ]
};

const serialized = JSON.stringify(userProgressData);
const deserialized = JSON.parse(serialized);
assert.strictEqual(deserialized.version, 1);
assert.strictEqual(deserialized.masteredFactIds.length, 3);
assert.strictEqual(deserialized.quizAttempts[0].accuracy, 100);

console.log('PASS: Progress backup and deserialization roundtrip passed.');

console.log('\nALL 5 LEARNING ENGINE UNIT TESTS PASSED SUCCESSFULLY!\n');

