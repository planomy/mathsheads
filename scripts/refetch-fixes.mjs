#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchPexelsImage } from './fetch-image.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const FIXES = path.join(ROOT, 'refetch-fixes.json');
const key = process.env.PEXELS_API_KEY;

if (!key) {
  console.error('Missing PEXELS_API_KEY\n');
  process.exit(1);
}

const { heroes = [], hooks = [] } = JSON.parse(fs.readFileSync(FIXES, 'utf8'));
const usedIds = new Set();
let ok = 0, fail = 0;

for (const item of heroes) {
  const dest = path.join(ROOT, 'images', item.file);
  try {
    const { buf, photo } = await fetchPexelsImage({
      key, query: item.query,
      orientation: item.diagram ? 'square' : 'landscape',
      pick: item.pick ?? 0, usedIds
    });
    fs.writeFileSync(dest, buf);
    console.log(`✓ hero ${item.file}  id=${photo.id}  (${photo.photographer})`);
    ok++;
    await new Promise(r => setTimeout(r, 400));
  } catch (e) {
    console.error(`✗ hero ${item.file}  ${e.message}`);
    fail++;
  }
}

const hookDir = path.join(ROOT, 'images', 'hooks');
fs.mkdirSync(hookDir, { recursive: true });

for (const item of hooks) {
  const dest = path.join(hookDir, item.file);
  try {
    const { buf, photo } = await fetchPexelsImage({
      key, query: item.query,
      orientation: item.diagram ? 'square' : 'landscape',
      pick: item.pick ?? 0, usedIds
    });
    fs.writeFileSync(dest, buf);
    console.log(`✓ hook ${item.id}  id=${photo.id}  (${photo.photographer})`);
    ok++;
    await new Promise(r => setTimeout(r, 400));
  } catch (e) {
    console.error(`✗ hook ${item.id}  ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed\n`);
