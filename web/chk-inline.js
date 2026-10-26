// Ekstrak <script> inline dari index.html lalu cek sintaksnya dengan node --check.
const fs = require('fs');
const cp = require('child_process');
const p = __dirname;
const h = fs.readFileSync(p + '/index.html', 'utf8');
const m = [...h.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (!m.length) { console.error('Tidak ada script inline'); process.exit(1); }
const js = m.map(x => x[1]).join('\n');
fs.writeFileSync(p + '/_inline.js', js);
const r = cp.spawnSync('node', ['--check', p + '/_inline.js'], { encoding: 'utf8' });
if (r.status !== 0) { console.error('SYNTAX ERROR di script inline:\n' + (r.stderr || r.stdout)); process.exit(1); }
console.log('Inline JS OK ✓ (' + js.length + ' chars)');
fs.unlinkSync(p + '/_inline.js');
