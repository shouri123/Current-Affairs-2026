const fs = require('fs');
const path = require('path');

// Read magazineSections
const magFile = fs.readFileSync('src/data/magazineSections.ts', 'utf8');
const qaFile = fs.readFileSync('src/data/qaList.ts', 'utf8');

// Section extraction
const sections = [];
const secRegex = /id:\s*'([a-z0-9_-]+)',\s*title:\s*'([^']+)'/g;
let m;
while ((m = secRegex.exec(magFile)) !== null) {
  sections.push({ id: m[1], title: m[2] });
}

console.log('--- SECTIONS (' + sections.length + ') ---');
sections.forEach(s => console.log(`ID: ${s.id} | Title: ${s.title}`));

// Count facts per section
const sectionChunks = magFile.split(/id:\s*'[a-z0-9_-]+'/);
let totalFacts = 0;
let totalMustKnow = 0;

for (let i = 1; i < sectionChunks.length; i++) {
  const chunk = sectionChunks[i];
  const itemsMatch = chunk.match(/items:\s*\[([\s\S]*?)\]\s*\}/);
  if (itemsMatch) {
    const rawItems = itemsMatch[1];
    const factRegex = /\{\s*text:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,\s*hot:\s*(true|false)/g;
    let fm;
    let secCount = 0;
    let secHot = 0;
    while ((fm = factRegex.exec(rawItems)) !== null) {
      secCount++;
      if (fm[2] === 'true') secHot++;
    }
    console.log(`Section ${sections[i-1].id}: ${secCount} facts (${secHot} must-know)`);
    totalFacts += secCount;
    totalMustKnow += secHot;
  }
}

console.log(`TOTAL FACTS: ${totalFacts} (Must-Know: ${totalMustKnow})`);

// Count QA
const qaRegex = /\{\s*q:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,\s*a:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
let qaCount = 0;
while ((m = qaRegex.exec(qaFile)) !== null) {
  qaCount++;
}
console.log(`TOTAL QA DECK QUESTIONS: ${qaCount}`);

