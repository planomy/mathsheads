#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const require = createRequire(import.meta.url);

// Load lessons + assessments via require by writing temp - use dynamic import with query string won't work
// Parse with regex instead
const lessons = fs.readFileSync(path.join(ROOT, 'lessons.js'), 'utf8');
const assess = fs.readFileSync(path.join(ROOT, 'assessments.js'), 'utf8');

const paths = new Set();
for (const m of lessons.matchAll(/src:\s*['"]([^'"]+)['"]/g)) paths.add(m[1]);
for (const m of assess.matchAll(/src:\s*['"]([^'"]+)['"]/g)) paths.add(m[1]);

// Hook convention for lessons with hook but no hook.image
for (const m of lessons.matchAll(/id:'([^']+)'[\s\S]*?hook:\{/g)) {
  const id = m[1];
  const chunk = m[0];
  if (chunk.includes('image:')) continue;
  if (chunk.includes("type:'assessment'")) continue;
  paths.add(`images/hooks/${id}-hook.jpg`);
}

const missing = [];
const ok = [];
for (const p of [...paths].sort()) {
  const full = path.join(ROOT, p);
  if (fs.existsSync(full)) ok.push(p);
  else missing.push(p);
}

console.log('MISSING:', missing.length);
missing.forEach(p => console.log('  ✗', p));
console.log('\nOK:', ok.length);
