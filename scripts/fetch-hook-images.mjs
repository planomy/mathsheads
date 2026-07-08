#!/usr/bin/env node
/**
 * Fetch hook-slide images (problem-specific) into images/hooks/
 * Usage: PEXELS_API_KEY=your_key node scripts/fetch-hook-images.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MANIFEST = path.join(ROOT, 'hook-images.json');
const OUT_DIR = path.join(ROOT, 'images', 'hooks');
const ATTR = path.join(ROOT, 'IMAGE-ATTRIBUTIONS.md');

const key = process.env.PEXELS_API_KEY;
const missingOnly = process.argv.includes('--missing');

if (!key) {
  console.error('\nMissing PEXELS_API_KEY — add to .env or pass inline.\n');
  process.exit(1);
}

const items = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
fs.mkdirSync(OUT_DIR, { recursive: true });

const attributions = [];
let ok = 0, skip = 0, fail = 0;

for (const item of items) {
  const dest = path.join(OUT_DIR, item.file);
  if (missingOnly && fs.existsSync(dest)) {
    skip++;
    continue;
  }

  const orientation = item.diagram ? 'square' : 'landscape';
  const url = new URL('https://api.pexels.com/v1/search');
  url.searchParams.set('query', item.query);
  url.searchParams.set('per_page', '1');
  url.searchParams.set('orientation', orientation);

  try {
    const res = await fetch(url, { headers: { Authorization: key } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const photo = data.photos?.[0];
    if (!photo) throw new Error('no results');

    const imgUrl = photo.src.large2x || photo.src.large || photo.src.original;
    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) throw new Error('download failed');
    fs.writeFileSync(dest, Buffer.from(await imgRes.arrayBuffer()));

    attributions.push({ file: `hooks/${item.file}`, photographer: photo.photographer, link: photo.url });
    console.log(`✓ ${item.id} → hooks/${item.file}  (${photo.photographer})`);
    ok++;
    await new Promise(r => setTimeout(r, 350));
  } catch (e) {
    console.error(`✗ ${item.id}  ${e.message}`);
    fail++;
  }
}

if (attributions.length) {
  const block = attributions.map(a =>
    `- **${a.file}** — [${a.photographer}](${a.link}) on Pexels`
  ).join('\n');
  const header = '# Hero image attributions (Pexels)\n\n';
  const existing = fs.existsSync(ATTR) ? fs.readFileSync(ATTR, 'utf8') : header;
  fs.writeFileSync(ATTR, existing + `\n## Hook images ${new Date().toISOString().slice(0, 10)}\n\n${block}\n`);
}

console.log(`\nDone: ${ok} downloaded, ${skip} skipped, ${fail} failed → ${OUT_DIR}\n`);
