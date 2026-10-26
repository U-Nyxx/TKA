// Verifikasi v2: A = bentuk campuran real (30 soal: PG+MCMA+Kategori) · B = format lama sementara (36 soal hingga direvamp).
const fs = require('fs');
const file = (p, name) => new Function(fs.readFileSync(p, 'utf8') + `\nreturn ${name};`)();
const A = file(__dirname + '/data-a.js', 'SET_A');
const B = file(__dirname + '/data-b.js', 'SET_B');

let fail = [];
function tokPg(k){return {t:'pg', k};}
function tokMc(k){return {t:'mcma', k};}
function tokKat(rows, abbr){return {t:'kategori', rows, abbr};}

const A_EXP = [
  tokPg('A'), tokPg('B'), tokKat([0,1,0],'BS'), tokPg('C'),
  tokPg('B'), tokPg('C'), tokKat([0,1,0],'ST'), tokPg('A'),
  tokPg('B'), tokMc('ACE'), tokPg('C'), tokPg('A'),
  tokPg('A'), tokMc('ABD'), tokPg('B'), tokPg('D'),
  tokPg('A'), tokPg('E'), tokPg('B'), tokPg('B'),
  tokPg('C'), tokMc('ACD'), tokPg('A'), tokPg('C'),
  tokPg('D'), tokPg('E'), tokKat([0,0,1],'RT'), tokPg('D'),
  tokPg('B'), tokPg('C')
];
const B_EXP = [
  tokPg('C'), tokPg('D'), tokKat([0,1,0],'BS'), tokPg('C'),
  tokPg('D'), tokPg('B'), tokKat([0,1,0],'ST'), tokPg('B'),
  tokPg('B'), tokMc('ACE'), tokPg('C'), tokPg('A'),
  tokPg('D'), tokMc('ACD'), tokPg('B'), tokPg('A'),
  tokPg('C'), tokPg('D'), tokPg('E'), tokPg('D'),
  tokPg('D'), tokMc('ABD'), tokPg('C'), tokPg('B'),
  tokPg('C'), tokPg('A'), tokKat([0,0,1],'RT'), tokPg('C'),
  tokPg('B'), tokPg('E')
];

function check(set, name, startNo, exp){
  let flat = [];
  set.forEach(w => flat = flat.concat(w.soal));
  if (flat.length !== exp.length) fail.push(`${name}: jumlah soal ${flat.length}, harus ${exp.length}`);
  let n = startNo;
  const count = {pg:0, mcma:0, kat:0};
  flat.forEach((q, i) => {
    const e = exp[i];
    const form = q.form || (q.krow ? 'kategori' : (q.k.length > 1 ? 'mcma' : 'pg'));
    if (form !== e.t) fail.push(`${name}: soal ${n} bentuk ${form} ≠ ${e.t}`);
    if (q.no !== n) fail.push(`${name}: nomor salah → posisi ${i + 1} = ${q.no}, harus ${n}`);
    if (form === 'kategori') {
      count.kat++;
      if (!Array.isArray(q.krow) || q.krow.length !== 3) fail.push(`${name}: soal ${n} krow = ${q.krow ? q.krow.length : 'null'}, harus 3`);
      q.krow.forEach(k => { if (![0,1].includes(k)) fail.push(`${name}: soal ${n} krow invalid: ${k}`); });
      if (!Array.isArray(q.rws) || q.rws.length !== 3 || q.rws.some(r => !r.t)) fail.push(`${name}: soal ${n} rws invalid`);
      if (!Array.isArray(q.axis) || q.axis.length !== 2) fail.push(`${name}: soal ${n} axis invalid`);
      if (!q.abbr || q.abbr.length !== 2) fail.push(`${name}: soal ${n} abbr invalid`);
      if (JSON.stringify(q.krow) !== JSON.stringify(e.rows)) fail.push(`${name}: soal ${n} krow ${JSON.stringify(q.krow)} ≠ ${JSON.stringify(e.rows)}`);
      if (q.abbr !== e.abbr) fail.push(`${name}: soal ${n} abbr ${q.abbr} ≠ ${e.abbr}`);
    } else {
      if (!Array.isArray(q.o) || q.o.length !== 5) fail.push(`${name}: soal ${n} opsi = ${q.o ? q.o.length : 'null'}, harus 5`);
      if (form === 'pg' && (q.k.length !== 1 || !'ABCDE'.includes(q.k))) fail.push(`${name}: soal ${n} kunci invalid: ${q.k}`);
      if (form === 'mcma') {
        count.mcma++;
        if (![...q.k].every(c => 'ABCDE'.includes(c))) fail.push(`${name}: soal ${n} kunci invalid: ${q.k}`);
        if (q.k.toUpperCase() !== e.k.toUpperCase()) fail.push(`${name}: soal ${n} kunci ${q.k} ≠ ${e.k}`);
      } else if (form === 'pg') {
        count.pg++;
        if (q.k !== e.k) fail.push(`${name}: soal ${n} kunci ${q.k} ≠ ${e.k}`);
      }
    }
    if (!q.q || q.q.length < 12) fail.push(`${name}: soal ${n} pertanyaan kosong/pendek`);
    if (!q.b || q.b.length < 12) fail.push(`${name}: soal ${n} pembahasan kosong/pendek`);
    if (!q.tag) fail.push(`${name}: soal ${n} tag kosong`);
    n++;
  });
  console.log(`${name}: soal ${flat.length} | PG=${count.pg} MCMA=${count.mcma} Kategori=${count.kat} | stimulus=${set.length}`);
}

check(A, 'Simulasi 1 (v2 real)', 1, A_EXP);
check(B, 'Simulasi 2 (v2 real)', 31, B_EXP);

// Detektor junk marker + karakter CJK/Hangul
for (const [f, txt] of Object.entries({
  'data-a.js': fs.readFileSync(__dirname + '/data-a.js', 'utf8'),
  'data-b.js': fs.readFileSync(__dirname + '/data-b.js', 'utf8'),
  'index.html': fs.readFileSync(__dirname + '/index.html', 'utf8')
})) {
  const junk = /clean:|FINAL|oops|\? —|maybe|dutuh|aturnya|kelulusan\?|[\u4e00-\u9fff\uac00-\ud7af]/.exec(txt);
  if (junk) fail.push(`JUNK di ${f}: "${junk[0]}"`);
}

if (fail.length) {
  console.log('\n== MASALAH ==');
  fail.forEach(f => console.log(' - ' + f));
  process.exitCode = 1;
} else {
  console.log('\nALL PASS ✓ Sim1 & Sim2 pola real (masing-masing 24 PG + 3 MCMA + 3 Kategori) · bebas junk');
}
