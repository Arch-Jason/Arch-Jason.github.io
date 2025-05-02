const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'source/gallery/photos');

function isImage(file) {
//   return /\.(png|jpg|jpeg|gif|bmp|webp|tiff)$/i.test(file);
    return true;
}

function generateMarkdown() {
  const yearFolders = fs.readdirSync(baseDir)
    .filter(f => fs.statSync(path.join(baseDir, f)).isDirectory())
    .sort();

  let output = '';

  for (const folder of yearFolders) {
    const folderPath = path.join(baseDir, folder);
    const files = fs.readdirSync(folderPath)
      .filter(f => isImage(f))
      .sort();

    for (const file of files) {
      const relativePath = `/gallery/photos/${folder}/${file}`;
      output += `![图片](${relativePath})\n`;
      output += `标题\n`;
      output += `<desc>描述</desc>\n\n`;
    }
  }

  return output;
}

console.log(generateMarkdown());
