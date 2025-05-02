const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, 'source/gallery/photos');
const MAX_SIZE_KB = 1000;

function isImage(file) {
  return /\.(png|jpg|jpeg)$/i.test(file);
}

async function compressImage(filePath) {
  const { size } = fs.statSync(filePath);
  if (size <= MAX_SIZE_KB * 1024) return;

  console.log(`压缩：${filePath} (${(size / 1024).toFixed(1)} KB)`);

  let quality = 90;
  let buffer = null;

  while (quality >= 10) {
    try {
      buffer = await sharp(filePath)
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();

      if (buffer.length <= MAX_SIZE_KB * 1024) {
        fs.writeFileSync(filePath, buffer);
        console.log(`→ 已压缩到 ${(buffer.length / 1024).toFixed(1)} KB (质量=${quality})`);
        return;
      }
      quality -= 10;
    } catch (err) {
      console.error(`压缩失败：${filePath}`, err.message);
      return;
    }
  }

  console.warn(`→ 无法压缩至 ${MAX_SIZE_KB} KB 以下：${filePath}`);
}

function walkAndCompress(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndCompress(fullPath);
    } else if (isImage(item)) {
      compressImage(fullPath);
    }
  }
}

walkAndCompress(baseDir);
