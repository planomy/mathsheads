#!/usr/bin/env node
/** Shared Pexels fetch — supports pick index and dedupe by photo id */
export async function fetchPexelsImage({ key, query, orientation = 'landscape', pick = 0, usedIds = new Set() }) {
  const url = new URL('https://api.pexels.com/v1/search');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', '15');
  url.searchParams.set('orientation', orientation);

  const res = await fetch(url, { headers: { Authorization: key } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const photos = data.photos || [];
  if (!photos.length) throw new Error('no results');

  let photo = null;
  for (let i = pick; i < photos.length; i++) {
    if (!usedIds.has(photos[i].id)) {
      photo = photos[i];
      break;
    }
  }
  if (!photo) {
    for (const p of photos) {
      if (!usedIds.has(p.id)) { photo = p; break; }
    }
  }
  if (!photo) throw new Error('no unused results');

  usedIds.add(photo.id);
  const imgUrl = photo.src.large2x || photo.src.large || photo.src.original;
  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) throw new Error('download failed');
  return { buf: Buffer.from(await imgRes.arrayBuffer()), photo };
}
