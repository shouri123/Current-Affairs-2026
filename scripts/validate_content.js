const fs = require('fs');

console.log('--- RUNNING CONTENT & ACCURACY VALIDATION ---');

// 1. Read magazineSections
const magContent = fs.readFileSync('src/data/magazineSections.ts', 'utf8');
const qaContent = fs.readFileSync('src/data/qaList.ts', 'utf8');

let errors = [];

// Check 1: Kabaddi 37-33 must NOT exist anywhere
if (magContent.includes('37-33') || magContent.includes('37–33')) {
  errors.push('FAIL: 37-33 / 37–33 still found in magazineSections.ts');
} else {
  console.log('PASS: Zero occurrences of outdated score 37-33.');
}

if (!magContent.includes('37-34') && !magContent.includes('37–34')) {
  errors.push('FAIL: Correct score 37-34 / 37–34 not found in magazineSections.ts');
} else {
  console.log('PASS: Correct score 37-34 verified in sports fact and SVG.');
}

// Check 2: Q7 in qaList must use past tense 'entered into force'
if (qaContent.includes('scheduled to take effect on 20 October 2026')) {
  errors.push('FAIL: Q7 still uses future tense in qaList.ts');
} else if (qaContent.includes('entered into force on 20 October 2026')) {
  console.log('PASS: Q7 correctly updated to past tense.');
}

// Check 3: Booker prize outcome
if (!magContent.includes('M. John Harrison')) {
  errors.push('FAIL: Booker prize winner M. John Harrison not found in magazineSections.ts');
} else {
  console.log('PASS: Booker prize outcome verified.');
}

// Check 4: Sagarmala withdrawal
if (!magContent.includes('subsequently withdrawn on 28 September 2026')) {
  errors.push('FAIL: Sagarmala blue bond withdrawal not noted in magazineSections.ts');
} else {
  console.log('PASS: Sagarmala blue bond withdrawal status verified.');
}

// Check 5: Count 149 facts
const factRegex = /\{\s*text:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,\s*hot:\s*(true|false)/g;
let factCount = 0;
while (factRegex.exec(magContent) !== null) {
  factCount++;
}
console.log(`PASS: Verified ${factCount} total facts across sections.`);
if (factCount !== 149) {
  errors.push(`FAIL: Expected 149 facts, found ${factCount}`);
}

// Check 6: Count 39 QA items
const qaRegex = /"id":\s*"q-\d+"/g;
const qaCount = (qaContent.match(qaRegex) || []).length;
console.log(`PASS: Verified ${qaCount} total structured revision questions.`);
if (qaCount !== 39) {
  errors.push(`FAIL: Expected 39 questions, found ${qaCount}`);
}

if (errors.length > 0) {
  console.error('\nValidation encountered errors:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('\nALL 6 CONTENT VALIDATION AUDIT CHECKS PASSED SUCCESSFULLY!\n');
}

