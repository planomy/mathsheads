#!/usr/bin/env node
/**
 * Repair corrupted lessons.js and expand diagnostics to 5 per tier.
 * Splits by lesson id, rebuilds diagnostic from practice + legacy seed if found.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LESSONS_PATH = path.join(__dirname, '..', 'lessons.js');
let src = fs.readFileSync(LESSONS_PATH, 'utf8');

// Strip corruption: remove injected lesson blobs inside answer strings
src = src.replace(
  /answer:"id:'[^"]*?diagnostic:\d+"?\s*\}/g,
  (m) => {
    // leave marker for manual fix
    return 'answer:"CORRUPT" }';
  }
);
src = src.replace(/answer:"id:'[\s\S]*?diagnostic:[^"]*"/g, 'answer:"CORRUPT"');
src = src.replace(/\n    diagnostic:\d+[^"]*"/g, '\n    CORRUPT_BLOCK"');
src = src.replace(/\n    diagnostic:[0-9][^,\n]*", answer:/g, '\n    { prompt:"CORRUPT", answer:');

const parts = src.split(/\n  \{\n    id:'/);
const header = parts.shift();
const blocks = parts.map(b => "  {\n    id:'" + b);

function extractId(block) {
  return block.match(/^  \{\n    id:'([^']+)'/)?.[1];
}

function extractPractice(block) {
  const practice = { 1: [], 2: [], 3: [] };
  const m = block.match(/practice:\s*\{([\s\S]*?)\n    \},\n    wordProblems/);
  if (!m) return practice;
  for (const t of [1, 2, 3]) {
    const tm = m[1].match(new RegExp(`${t}:\\s*\\[([\\s\\S]*?)\\](?=,|\\s*$)`, 'm'));
    if (!tm) continue;
    const items = [...tm[1].matchAll(/\{\s*prompt:'([^']*)'|prompt:"([^"]*)",\s*answer:'([^']*)'|answer:"([^"]*)"\s*\}/g)];
    for (const im of tm[1].matchAll(/\{\s*prompt:((?:'[^']*'|"[^"]*")),\s*answer:((?:'[^']*'|"[^"]*"))\s*\}/g)) {
      const prompt = im[1].slice(1, -1).replace(/\\'/g, "'");
      const answer = im[2].slice(1, -1).replace(/\\'/g, "'");
      if (!prompt.includes('CORRUPT')) practice[t].push({ prompt, answer });
    }
  }
  return practice;
}

function extractLegacySeeds(block) {
  const seeds = {};
  // object format
  const dm = block.match(/diagnostic:\s*\{([\s\S]*?)\n    \},\n    hook/);
  if (dm) {
    for (const t of [1, 2, 3]) {
      const tm = dm[1].match(new RegExp(`${t}:\\s*\\[([\\s\\S]*?)\\](?=,|\\s*\\d+:)`));
      if (!tm) continue;
      const first = tm[1].match(/prompt:((?:'[^']*'|"[^"]*")),\s*answer:((?:'[^']*'|"[^"]*"))/);
      if (first) {
        const prompt = first[1].slice(1, -1);
        const answer = first[2].slice(1, -1);
        if (!prompt.includes('CORRUPT') && !answer.includes('CORRUPT') && !answer.includes("id:'")) {
          seeds[t] = { prompt, answer };
        }
      }
    }
  }
  // array format fallback
  const am = block.match(/diagnostic:\s*\[([\s\S]*?)\],\n    hook/);
  if (am && !Object.keys(seeds).length) {
    const items = [...am[1].matchAll(/tier:\s*(\d)[\s\S]*?prompt:((?:'[^']*'|"[^"]*"))[\s\S]*?answer:((?:'[^']*'|"[^"]*"))/g)];
    for (const it of items) {
      seeds[+it[1]] = { prompt: it[2].slice(1, -1), answer: it[3].slice(1, -1) };
    }
  }
  return seeds;
}

function norm(s) {
  return String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function buildDiagnostic(practice, seeds) {
  const diagnostic = {};
  for (const t of [1, 2, 3]) {
    const items = [];
    const seen = new Set();
    const add = q => {
      const k = norm(q.prompt);
      if (!k || seen.has(k) || q.prompt.includes('CORRUPT')) return;
      seen.add(k);
      items.push(q);
    };
    if (seeds[t]) add(seeds[t]);
    for (const q of practice[t] || []) {
      if (items.length >= 5) break;
      add(q);
    }
    while (items.length < 5 && practice[t]?.length) {
      add(practice[t][items.length % practice[t].length]);
    }
    diagnostic[t] = items.slice(0, 5);
  }
  return diagnostic;
}

function qStr(q) {
  const p = JSON.stringify(q.prompt);
  const a = JSON.stringify(q.answer);
  return `{ prompt:${p}, answer:${a} }`;
}

function formatDiagnostic(diag) {
  const lines = ['    diagnostic:', '    {'];
  for (const t of [1, 2, 3]) {
    lines.push(`      ${t}:[`);
    diag[t].forEach((q, i) => {
      lines.push(`        ${qStr(q)}${i < diag[t].length - 1 ? ',' : ''}`);
    });
    lines.push(`      ],`);
  }
  lines.push('    },');
  return lines.join('\n');
}

const LEGACY_SEEDS = {
  'w3-l1': { 3: { prompt: 'What is <b>10%</b> of <b>$80</b>?', answer: '$8' } },
  'w5-l2': {
    1: { prompt: 'A book costs <b>$12</b>. How much for <b>4</b> books?', answer: '$48' },
    2: { prompt: 'Tickets are <b>$8</b> each. <b>25</b> students go. Total cost?', answer: '$200' },
    3: { prompt: 'Canteen sells <b>35</b> lunches at <b>$6</b> each. Total?', answer: '$210' }
  },
  'w10-l2': {
    3: { prompt: '<b>234 × 15 = ?</b>', answer: '3,510' }
  }
};

const outBlocks = [];
let teach = 0;

for (const block of blocks) {
  const id = extractId(block);
  if (!id) continue;
  if (block.includes("type:'assessment'") || !block.includes('practice:')) {
    outBlocks.push(block);
    continue;
  }
  teach++;
  const practice = extractPractice(block);
  let seeds = extractLegacySeeds(block);
  if (LEGACY_SEEDS[id]) seeds = { ...seeds, ...LEGACY_SEEDS[id] };

  const diagnostic = buildDiagnostic(practice, seeds);
  let nb = block.replace(/    diagnostic:[\s\S]*?(?=\n    hook:|\n    hookSolution:)/, formatDiagnostic(diagnostic) + '\n');
  nb = nb.replace(/(\{ phase:'diagnostic', min:)\s*\d+/, '$1 8');
  // remove corruption artifacts
  nb = nb.replace(/\n    title:'[^']*',\n    subtitle:[\s\S]*?diagnostic:\d+[^"]*"\s*\},/g, '');
  nb = nb.replace(/CORRUPT_BLOCK"/g, '');
  nb = nb.replace(/\{ prompt:"CORRUPT", answer:[^}]+\},?\n?/g, '');
  outBlocks.push(nb);
}

let out = header + outBlocks.join('');
fs.writeFileSync(LESSONS_PATH, out);
console.log('Repaired', teach, 'teach lessons');
