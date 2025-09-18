#!/usr/bin/env node
/**
 * Optimize Reads section cover images.
 * Input: public/figma-assets/<hash>.png (original Figma exports)
 * Output: public/figma-assets/optimized/<basename>-180w.webp and -360w.webp
 */
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const SRC_DIR = path.join(ROOT, 'public', 'figma-assets');
const OUT_DIR = path.join(SRC_DIR, 'optimized');

const TARGET_WIDTH_1X = 180; // matches design tile width
const TARGET_HEIGHT_1X = 276; // explicit to avoid aspect drift
const SCALE_2X = 2;

async function ensureDir(dir){
  await fs.mkdir(dir, { recursive: true });
}

async function optimize() {
  await ensureDir(OUT_DIR);
  const files = await fs.readdir(SRC_DIR);
  const pngs = files.filter(f => f.endsWith('.png'));

  const selected = new Set([
    '0318d832bb2bea1acffab20b7a68ceda21dd081c.png',
    '57a756d84a3ded6df3c3fa5ba53ce40bf1d7ac76.png',
    '590b70389c10b655dec7bfe4e6797c36f5385cb9.png',
    '7177699d52f9a59a0f8fedece84e34d0d077128b.png',
    '7183fd4808b9c2d6938eee6ee2c59abc39a68ea9.png',
    '9f8566fe9f21f23fa9b1fd2463180ebd229f4522.png',
    'c71eb51acbcae35c15f5f5dbb410de4ed8ec10c1.png',
    'f50fa8d5f1147d1ae36eb1eefe6d3002c3f851e7.png'
  ]);

  const coverPngs = pngs.filter(f => selected.has(f));
  if (coverPngs.length !== 8) {
    console.warn(`Warning: expected 8 cover PNGs, found ${coverPngs.length}`);
  }

  for (const file of coverPngs) {
    const inPath = path.join(SRC_DIR, file);
    const base = path.parse(file).name;
    const out1x = path.join(OUT_DIR, `${base}-180w.webp`);
    const out2x = path.join(OUT_DIR, `${base}-360w.webp`);

    // Skip if already exists (idempotent)
    try { await fs.access(out1x); await fs.access(out2x); console.log(`Skip (exists): ${file}`); continue; } catch {}

    const buffer = await fs.readFile(inPath);
    // 1x
    await sharp(buffer)
      .resize(TARGET_WIDTH_1X, TARGET_HEIGHT_1X, { fit: 'cover' })
      .webp({ quality: 82, effort: 5 })
      .toFile(out1x);
    // 2x
    await sharp(buffer)
      .resize(TARGET_WIDTH_1X * SCALE_2X, TARGET_HEIGHT_1X * SCALE_2X, { fit: 'cover' })
      .webp({ quality: 78, effort: 6 })
      .toFile(out2x);

    console.log(`Optimized: ${file}`);
  }
  console.log('Optimization complete.');
}

optimize().catch(err => { console.error(err); process.exit(1); });
