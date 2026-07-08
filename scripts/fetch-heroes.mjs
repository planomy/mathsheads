#!/usr/bin/env node
/**
 * Fetch hero images from Pexels into images/
 * Usage: PEXELS_API_KEY=your_key node scripts/fetch-heroes.mjs
 *        node scripts/fetch-heroes.mjs --missing   (only files not yet downloaded)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MANIFEST = path.join(ROOT, 'hero-images.json');
const OUT_DIR = path.join(ROOT, 'images');
const ATTR = path.join(ROOT, 'IMAGE-ATTRIBUTIONS.md');

const key = process.env.PEXELS_API_KEY;
const missingOnly = process.argv.includes('--missing');

if (!key) {
  console.error('\nMissing PEXELS_API_KEY.');
  console.error('1. Free key: https://www.pexels.com/api/');
  console.error('2. Run: PEXELS_API_KEY=your_key node scripts/fetch-heroes.mjs\n');
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
    const buf = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(dest, buf);

    attributions.push({
      file: item.file,
      photographer: photo.photographer,
      link: photo.url,
      pexelsId: photo.id
    });
    console.log(`✓ ${item.file}  (${photo.photographer})`);
    ok++;
    await new Promise(r => setTimeout(r, 350));
  } catch (e) {
    console.error(`✗ ${item.file}  ${e.message}`);
    fail++;
  }
}

if (attributions.length) {
  const block = attributions.map(a =>
    `- **${a.file}** — [${a.photographer}](${a.link}) on Pexels`
  ).join('\n');
  const header = '# Hero image attributions (Pexels)\n\nRequired by Pexels licence — keep this file if you publish the app.\n\n';
  const existing = fs.existsSync(ATTR) ? fs.readFileSync(ATTR, 'utf8') : header;
  const merged = existing.includes('## Batch') ? existing : header;
  fs.writeFileSync(ATTR, merged + `\n## Batch ${new Date().toISOString().slice(0, 10)}\n\n${block}\n`);
}

console.log(`\nDone: ${ok} downloaded, ${skip} skipped, ${fail} failed → ${OUT_DIR}\n`);
