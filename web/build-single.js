// Gabungkan index.html + data-a.js + data-b.js menjadi satu file tka.html (agar bisa diupload ke file host single-file).
const fs = require('fs');
const p = __dirname;
let html = fs.readFileSync(p + '/index.html', 'utf8');
const a = fs.readFileSync(p + '/data-a.js', 'utf8');
const b = fs.readFileSync(p + '/data-b.js', 'utf8');
const before = html.length;
html = html.split('<script src="data-a.js"></script>').join('<script>\n' + a + '</script>');
html = html.split('<script src="data-b.js"></script>').join('<script>\n' + b + '</script>');
if (html.includes('src="data-a.js"') || html.includes('src="data-b.js"')) {
  console.error('GAGAL: masih ada referensi data-a.js/data-b.js');
  process.exit(1);
}
fs.writeFileSync(p + '/tka.html', html);
console.log('OK tka.html dibuat:', fs.statSync(p + '/tka.html').size, 'bytes (dari', before, 'bytes)');
