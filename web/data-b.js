// Data Simulasi 2 v2 — pola REAL TKA B.Indo: 8 stimulus, 30 soal (PG + PGK-MCMA + PGK-Kategori) inline.
// Kategori: axis=[lbl0,lbl1], abbr dua huruf buat salin-chat, krow=[0/1 per baris], rws=[{t}] teks saja.
const SET_B = [
{
judul:"Teks 1 · Berita — Tim SMK Juara IoT Nasional",
teks:[
"Tim \"Triloka,\" terdiri atas tiga siswa kelas XII Teknik Jaringan Komputer dan Telekomunikasi SMKN 7 Purwokerto, menjadi juara pertama Lomba Karya IoT Pelajar Nasional 2026 yang digelar di Jakarta, Sabtu (18/10). Mereka membawa prototipe HidroGuard, sistem pemantauan irigasi berbasis mikrokontroler dengan sensor debit air, pH, dan kelembapan; datanya terkirim ke ponsel petani melalui jaringan seluler.",
"Dalam uji coba dua minggu di persawahan warga, prototipe itu membantu menekan penggunaan air irigasi 25 persen. Petani tidak perlu berkeliling sawah; pemberitahuan otomatis muncul ketika aliran kurang atau tersekat. Hadiah yang dibawa tim berupa piala, sertifikat, dan uang pembinaan Rp25.000.000.",
"Guru pembimbing, Pak Samudra, mengatakan tim akan memantapkan perangkat agar siap digunakan luas di petak-petak sawah desa sekitar sekolah."
],
soal:[
{no:31,tag:"Tekstual",q:"Ide pokok wacana tersebut adalah ...",
 o:["petani sawah kebingungan memakai teknologi seluler","sekolah merekrut siswa berprestasi khusus untuk lomba","tim siswa SMK menjuarai lomba IoT lewat alat pemantau irigasi pintar","pemerintah mendirikan pusat penelitian irigasi baru","air irigasi desa kian berkurang"],
 k:"C",b:"Gagasan utama: keberhasilan tim SMK juara IoT dengan alat irigasi pintar; lainnya nyasar/tak disebut."},
{no:32,tag:"Tekstual",q:"Dalam uji coba, prototipe membantu menekan penggunaan air irigasi sebesar ...",
 o:["15 persen","35 persen","40 persen","25 persen","5,2 persen"],
 k:"D",b:"Tersurat: \"menekan penggunaan air irigasi 25 persen\"; angka lain murni penggoda."},
{no:33,tag:"PGK · Tekstual",form:"kategori",q:"Tentukan Benar atau Salah setiap pernyataan berikut berdasarkan teks.",
 axis:["Benar","Salah"],abbr:"BS",krow:[0,1,0],
 rws:[
  {t:"Prototipe HidroGuard memiliki sensor debit air, pH, dan kelembapan."},
  {t:"Uji coba prototipe berlangsung selama tiga bulan di persawahan."},
  {t:"Hadiah tim berupa piala, sertifikat, dan uang pembinaan."}],
 b:"A Benar (tersurat), B Salah — uji coba DUA MINGGU; C Benar. Satu baris salah = soal salah total; aturan penilaiannya sama dengan PGK asli."},
{no:34,tag:"Evaluasi",q:"Judul berita yang paling tepat untuk wacana tersebut adalah ...",
 o:["Air Irigasi Desa Tak Perlu Dijaga Lagi","Semua Pelajar SMK Menangkan Lomba Teknologi","Prototipe HidroGuard Menemani Petani Menjaga Sawah","Sertifikat Lomba untuk Pemerintah Desa","Petani Purwokerto Menang Kontes Pemantauan Air"],
 k:"C",b:"Judul menangkap alat + manfaatnya bagi petani; A terlalu ekstrem, B overgeneralisasi, D/E menggeser subjek."}
]
},
{
judul:"Teks 2 · Cerpen — Helm Putih",
teks:[
"Setiap subuh, sebelum adzan berkumandang, bapak sudah berdiri di depan motor tua itu. Ia memeriksa rem, menggosok jok yang sudah licin, lalu mengenakan helm putih yang mulai menguning di bagian dagu. Aku sering tertidur lagi sebelum dengung motor itu benar-benar menjauh.",
"Aku jarang melihat bapak di siang hari; ia pulang ketika langit senja sudah kemerahan.",
"Suatu petang, ia membawa pulang sebuah kotak. Isinya sepasang sepatu sekolah baru untukku. \"Yang lama sudah bocor; nanti kakimu basah,\" katanya sambil menepuk-nepuk kotak itu.",
"Sementara helm putih yang sudah licin dan menguning itu tak pernah ia ganti. \"Helm lama masih menepat,\" katanya sambil tersenyum.",
"Aku memandang helm itu lebih lama dari biasanya. Warna kuningnya perlahan memudar, tetapi ia tetap melindungi setiap perjalanan.",
"Seperti bapak, warnanya memudar, tetapi perannya tidak."
],
soal:[
{no:35,tag:"Tekstual",q:"Latar waktu yang mendominasi kutipan cerpen tersebut adalah ...",
 o:["tengah hari","larut malam","siang menjelang asar","subuh sebelum adzan berkumandang","dini hari saat hujan turun"],
 k:"D",b:"Paragraf pembuka memfokuskan momen subuh; senja hanya disinggung sekali."},
{no:36,tag:"Inferensial",q:"Watak tokoh bapak tergambar pada tindakan \"ia membawa pulang sebuah kotak... sepasang sepatu sekolah baru untukku\", yaitu ...",
 o:["mudah mencemaskan","penyayang dan mengutamakan anak","suka berlebihan menabung","penghabis uang keluarga","tidak konsisten pada diri sendiri"],
 k:"B",b:"Prioritas: sepatu anak diganti, helm sendiri dibiarkan — pengorbanan + kasih sayang wataknya."},
{no:37,tag:"PGK · Inferensial",form:"kategori",q:"Tentukan Sesuai atau Tidak Sesuai setiap pernyataan berikut terhadap isi cerpen.",
 axis:["Sesuai","Tidak Sesuai"],abbr:"ST",krow:[0,1,0],
 rws:[
  {t:"Aku sering tertidur lagi sebelum dengung motor bapak menjauh."},
  {t:"Helm putih bapak selalu diganti setiap bulan dengan yang baru."},
  {t:"Bapak pulang ketika langit senja sudah kemerahan."}],
 b:"A Sesuai (tersurat), B Tidak Sesuai — helm justru TAK PERNAH diganti; C Sesuai (tersurat)."},
{no:38,tag:"Inferensial",q:"Makna tersirat kalimat \"Seperti bapak, warnanya memudar, tetapi perannya tidak\" adalah ...",
 o:["bapak berniat mengecat ulang helm agar tampak baru","wujud bapak menua, tetapi tanggung jawabnya tetap teguh","helm baru sudah dibeli untuk sang anak","bapak berhenti bekerja sebagai pengendara","helm tua disimpan hanya sebagai kenangan"],
 k:"B",b:"Kiasan helm = bapak: badan menua, peran penjaga keluarga tak pudar; opsi lain terlalu harfiah."}
]
},
{
judul:"Teks 3 · Dua Teks Berpendapat — Bacaan Digital vs Cetak",
teks:[
"<b>Teks A — Manisnya Membaca Digital</b><br>Sebuah layar kecil kini menjadi pintu ribuan bacaan: berita, artikel, hingga buku elektronik. Akses mudah itulah keuntungan terbesar membaca digital; pembaca tidak perlu menunggu kiriman paket atau berjalan ke perpustakaan. Bagi saya, membaca digital itu teman yang setia: satu jempol cukup untuk membuka kamus, sekaligus menyimpan puluhan buku di dalam kantong. Potongan pendek pun tidak buruk; ia membuat orang yang tadinya malas membaca mulai menyukai huruf. Karena itu, sekolah tidak perlu melarangnya — cukup menyediakan daftar bacaan digital yang terkurasi.<br>— Bagas, pelajar XI",
"<b>Teks B — Buku Cetak Melatih Ketekunan</b><br>Akses digital memang cepat. Meskipun demikian, riset menemukan banyak orang berhenti di sepertiga artikel panjang; pola bacaan menjadi seperti mengapung — mata bergerak cepat, tetapi sedikit yang dipahami. Buku cetak memaksa kita duduk tenang; halamannya tak pernah memunculkan notifikasi. Menurut saya, sekolah wajib menyediakan waktu membaca buku cetak tiga puluh menit sehari. Ketekunan tidak bisa dipinjam dari jendela layar; ia dirajut halaman demi halaman.<br>— Vina, ketua sasana baca"
],
soal:[
{no:39,tag:"Inferensial",q:"Persamaan dan perbedaan pandangan kedua pengarang adalah ...",
 o:["keduanya sepakat melarang ponsel di sekolah","keduanya setuju membaca itu penting; Teks A memuji kepraktisan layar, sedangkan Teks B mengedepankan ketekunan buku cetak","keduanya berasal dari organisasi sasana yang sama","keduanya menilai potongan pendek berbahaya","keduanya mengusulkan membaca tiga puluh menit sehari"],
 k:"B",b:"Titik temu: sama-sama menghargai kebiasaan membaca; beda: kepraktisan digital (A) vs ketekunan cetak (B). D salah — A justru membela potongan pendek."},
{no:40,tag:"PGK · Evaluasi",form:"mcma",q:"Kalimat mana saja yang merupakan OPINI? <i>(pilih semua jawaban yang benar)</i>",
 o:["\"Bagi saya, membaca digital itu teman yang setia.\"","Banyak orang berhenti di sepertiga artikel panjang.","\"Ketekunan tidak bisa dipinjam dari jendela layar.\"","Pola bacaan menjadi seperti mengapung: mata bergerak cepat, sedikit yang dipahami.","\"Potongan pendek membuat orang yang tadinya malas mulai menyukai huruf.\""],
 k:"ACE",b:"A, C, E penilaian pribadi pengarang; B dan D laporan riset yang dapat diverifikasi — fakta."},
{no:41,tag:"Evaluasi",q:"Bagian Teks A yang argumennya paling lemah karena tidak didukung bukti adalah ...",
 o:["satu jempol membuka kamus dan menyimpan puluhan buku","pembaca tak perlu menunggu kiriman paket ke rumah","potongan pendek membuat orang malas mulai menyukai huruf","sekolah menyediakan daftar bacaan digital terkurasi","akses bacaan tersedia di mana-mana"],
 k:"C",b:"Klaim manfaat potongan pendek digembar-gemborkan tanpa data — dan berlawanan dengan temuan riset di Teks B."},
{no:42,tag:"Inferensial",q:"Sikap pengarang Teks B terhadap bacaan digital adalah ...",
 o:["mengakui aksesnya cepat, tetapi khawatir kebiasaan membaca sekilas terbentuk","menyambut penuh penawaran aplikasi bacaan","menilai manfaat digital tanpa syarat apa pun","menyerukan larangan total tanpa argumentasi","menganggap layar sama saja dengan buku cetak"],
 k:"A",b:"Pengarang B memberi pengakuan (\"akses digital memang cepat\") lalu menaruh kekhawatiran; sikapnya berimbang siaga, bukan larangan total."}
]
},
{
judul:"Teks 4 · Artikel + Data — Kata Sandi yang Berantai",
teks:[
"Kebiasaan memakai satu kata sandi yang sama di banyak aplikasi terbukti berbahaya. Ketika data salah satu layanan bocor, pelaku tidak berhenti di sana; mereka mencoba sandi yang sama pada layanan lain dan menembus akun-akun milik orang yang sama — efek berantai seperti kartu domino.",
"Hasil survei daring terhadap 800 pengguna pemula: <b>58 persen</b> memakai sandi yang sama di sekurang-kurangnya tiga aplikasi · <b>31 persen</b> mengaktifkan verifikasi dua langkah · <b>45 persen</b> memilih sandi pendek yang mudah diingat <i>(sumber: survei ilustratif)</i>.",
"Karena itu, pengembang aplikasi menekankan dua kebiasaan sederhana: sandi unik dan panjang untuk tiap layanan serta verifikasi dua langkah yang menuntut kode tambahan ke ponsel milik kita sendiri. Pengelola sandi memudahkan menyimpan ratusan sandi tanpa perlu mengingat semuanya. Bila satu akun terbukti bocor, segera ganti sandinya dan periksa riwayat masuk."
],
soal:[
{no:43,tag:"Tekstual",q:"Berdasarkan data dalam artikel, persentase pengguna yang mengaktifkan verifikasi dua langkah adalah ...",
 o:["58 persen","45 persen","11 persen","31 persen","80 persen"],
 k:"D",b:"Data: verifikasi dua langkah 31 persen; 58 = pemakai sandi sama, 45 = penggemar sandi pendek — waspada angka tertukar."},
{no:44,tag:"PGK · Tekstual",form:"mcma",q:"Pernyataan mana saja yang SESUAI dengan data dan isi artikel? <i>(pilih semua jawaban yang benar)</i>",
 o:["Lebih dari separuh responden memakai sandi yang sama di sekurang-kurangnya tiga aplikasi.","Verifikasi dua langkah sudah dipakai mayoritas responden.","Efek pembobolan akun digambarkan seperti kartu domino.","Artikel menganjurkan sandi unik dan panjang untuk tiap layanan.","Penggantian sandi cukup dilakukan sekali setiap lima tahun."],
 k:"ACD",b:"A sesuai (58% = lebih dari separuh), C sesuai (tersurat), D sesuai (saran utama). B salah (31% bukan mayoritas); E kebalikan — segera bila bocor."},
{no:45,tag:"Tekstual",q:"Fungsi paragraf terakhir terhadap artikel tersebut adalah ...",
 o:["menyajikan data survei pendukung baru","menyajikan saran langkah untuk menanggulangi masalah","membantah isi paragraf pertama","menceritakan pengalaman pengembang aplikasi","mengumumkan tenggat penggantian sandi"],
 k:"B",b:"Penutup berisi dua kebiasaan yang dianjurkan + tindakan bila bocor = saran penyelesaian; data justru di paragraf kedua."},
{no:46,tag:"Inferensial",q:"Berdasarkan artikel, penyebab pelaku bisa menembus banyak akun sekaligus adalah ...",
 o:["kebiasaan pengguna memakai sandi yang sama di beberapa layanan","kemampuan pelaku menebak sandi acak setiap waktu","seluruh layanan menyimpan sandi di tempat terbuka","pengembang aplikasi melarang penggantian sandi","verifikasi dua langkah sudah dipakai semua orang"],
 k:"A",b:"Rantai berbahaya lahir dari kebiasaan sandi tunggal; opsi lain nyasar/berlawanan dengan saran artikel."}
]
},
{
judul:"Teks 5 · Puisi — Belum Usai",
teks:[
"<b>Belum Usai</b><br><br>Perahu kecil melaju membelah ombak,<br>dengung mesin mengiringi doa bapak.<br>Gemuruh air berdentang sampai bibir pantai,<br>namun tangan bapak teguh memegang kemudi.<br><br>Jala terentang menyambut gelombang,<br>laut memberi sesuai usaha.<br>Di dermaga, lampu menunggu fajar,<br>doa bapak tak pernah usai."
],
soal:[
{no:47,tag:"Apresiasi",q:"Citraan yang dominan digambarkan puisi tersebut adalah ...",
 o:["perabaan","penciuman","pendengaran","pengecapan","penglihatan"],
 k:"C",b:"Bunyi mendominasi: dengung mesin, doa, gemuruh air \"berdentang\"; penglihatan hanya pelengkap."},
{no:48,tag:"Inferensial",q:"Makna larik \"Jala terentang menyambut gelombang\" adalah ...",
 o:["jala disimpan rapi di gudang","nelayan berhenti sementara melaut","jala dipinjam perahu tetangga","kesiapan nelayan menghadap kenyataan kerja laut","embun pagi membasahi jala tua"],
 k:"D",b:"\"Menyambut gelombang\" = berani berhadapan dengan gelombang laut; diiringi \"laut memberi sesuai usaha\"."},
{no:49,tag:"Apresiasi",q:"Pernyataan tentang majas yang tepat berdasarkan puisi tersebut adalah ...",
 o:["\"Perahu kecil melaju membelah ombak\" memuat majas simile","\"Gemuruh air berdentang\" memuat majas repetisi","\"Jala terentang menyambut gelombang\" memuat majas simile","\"laut memberi sesuai usaha\" memuat majas hiperbola","\"Di dermaga, lampu menunggu fajar\" memuat majas personifikasi"],
 k:"E",b:"\"Lampu menunggu\" — benda mati diberi perilaku manusia (personifikasi). Penandaan majas lain tidak equal dengan lariknya."},
{no:50,tag:"Evaluasi",q:"Kesan dominan yang terbaca dari puisi tersebut adalah ...",
 o:["keriuhan hari raya di desa nelayan","kekecewaan terhadap cuaca buruk","kejenuhan para pekerja laut","kegigihan dan harapan","kepanikan menghadapi gelombang besar"],
 k:"D",b:"Kerja berat + doa yang \"tak pernah usai\" = gigih menggantung harapan."}
]
},
{
judul:"Teks 6 · Ulasan Daring — Kelas Simulasi Sertifikasi",
teks:[
"<b>Putri</b> — ★★★★★ — <i>Modulnya nyata pas</i><br>Modul simulasi kelas ini mirip soal sertifikasi asli. Mentor menjawab pertanyaan lewat forum tiap malam selama dua pekan; rekaman kelas tersedia untuk diakses satu tahun penuh.",
"<b>Yoga</b> — ★★★☆☆ — <i>Bagus, waktunya sering lipat</i><br>Materinya bagus, tetapi jadwal mentor mundur beberapa kali sehingga kelas malam berpindah tiga kali. Bantuan teknis lewat nomor telepon juga jarang dijawab pada jam sibuk.",
"<b>Nina</b> — ★★★★☆ — <i>Kuisnya langsung keluar nilai</i><br>Setiap akhir modul ada kuis kecil dan hasilnya langsung tampil, jadi saya tahu bagian mana yang masih lemah sebelum uji asli.",
"<b>Tari</b> — ★★★★☆ — <i>Wajar untuk kualitasnya</i><br>Biaya kelas cukup terjangkau, hanya sedikit lebih tinggi daripada kelas video tanpa pendampingan. Pengeluaran ini sepadan dengan ilmu yang saya terima.",
"<i>Ulasan dikutip dari laman kelas daring fiktif. Nama pengulas disamarkan.</i>"
],
soal:[
{no:51,tag:"Tekstual",q:"Informasi yang disebutkan oleh lebih dari satu pengulas adalah ...",
 o:["biaya kelas paling murah di kota","rekaman kelas diakses lima tahun","kuis di akhir setiap modul","peran mentor dalam kelas","garansi lulus uji sertifikasi"],
 k:"D",b:"Putri: mentor menjawab tiap malam; Yoga: jadwal mentor mundur — dua pengulas. Lainnya hanya satu pengulas/tak disebut."},
{no:52,tag:"PGK · Tekstual",form:"mcma",q:"Manakah pernyataan yang SESUAI dengan ulasan-ulasan tersebut? <i>(pilih semua jawaban yang benar)</i>",
 o:["Modul simulasi disebut mirip soal sertifikasi asli.","Kelas malam pernah berpindah jadwal beberapa kali.","Seluruh pendaftar dijamin lulus uji sertifikasi.","Kuis di akhir modul menampilkan hasil secara langsung.","Biaya kelas jauh lebih murah daripada kelas video mana pun."],
 k:"ABD",b:"A sesuai (Putri), B sesuai (Yoga), D sesuai (Nina). C jebakan kata \"dijamin\"; E kebalikan — justru sedikit lebih TINGGI."},
{no:53,tag:"Evaluasi",q:"Ulasan Yoga memuat kalimat: \"Jadwal mentor mundur beberapa kali, kelas malam berpindah tiga kali.\" Perbaikan paling efektif menjadi kalimat efektif adalah ...",
 o:["Karena jadwal mentor mundur sehingga kelas malam berpindah tiga kali.","Jadwal mentor mundur dikarenakan kelas malam berpindah tiga kali.","Karena jadwal mentor mundur beberapa kali, kelas malam berpindah tiga kali.","Jadwal mentor mundurnya beberapa kali berpindah tiga kali kelas malam.","Mundurnya jadwal mentor, merupakan sebab kelas malam berpindah tiga kali."],
 k:"C",b:"C hubungan sebab-akibat rapi tanpa konjungsi ganda; A karena+sehingga; B terbalik; D/E strukturnya melantur dan mubazir."}
]
},
{
judul:"Teks 7 · Naskah Drama — Kartu untuk Gerobak",
teks:[
"*(Kios lumpia di pasar rakyat, siang. Gerobak tua Bu Sunarti berhias etalase. Rian — mahasiswa KKN bercelana lapangan — datang membawa map dan lembar kartu.)*",
"<b>Rian:</b> Bu Sunarti, ini kartu pembayaran digitalnya. Soal langkahnya, coba dulu tiga kali bareng saya; nanti saya tinggalkan lembar panduan bergambar di rak gerobak.",
"<b>Bu Sunarti:</b> *(mengusap tangannya ke kain celemek)* Rumit tuh, Mas. Saya juga khawatir saldo di ponsel kurang aman. Uang tunai saja sudah macet, kadang kembaliannya bingung dicari.",
"<b>Rian:</b> Perhatian yang sehat, Bu. Karena itu langkahnya dibagi kecil-kecil: praktik pertama pakai nominal kecil, kedua Bu yang menekan tombolnya, ketiga Bu yang menghitung masuknya dana sendiri. Saldo bisa dilihat tiap malam sebelum tutup gerobak.",
"<b>Bu Sunarti:</b> Kalau pembeli memakai kartu ini, uangnya masuk ke mana?",
"<b>Rian:</b> Masuk ke rekening yang sudah Bu daftarkan. Di lembar panduan, jalannya uang saya gambar panah kecil, Bu, biar jelas.",
"*(Seorang pembeli muda mendatangi gerobak, membuka ponsel.)*",
"<b>Pembeli muda:</b> Bu, bisa bayar pakai kode QRIS? Aku jarang bawa uang tunai.",
"<b>Bu Sunarti:</b> *(melirik Rian, menarik napas sekali, lalu tersenyum)* Dapat, Nak. Ajarkan sekali, Mas Rian, sebagai pengingat.",
"<b>Bu Sunarti:</b> *(menggantung kartu QRIS ke tiang gerobak dengan tali kuning, lalu merapikan kain etalasenya)* Mulai besok, pembeli pakai kode itu saja; uang kembalian jadi kutabungkan untuk kegiatan pasar."
],
soal:[
{no:54,tag:"Inferensial",q:"Konflik utama dalam kutipan drama tersebut adalah ...",
 o:["Rian ingin memindahkan gerobak Bu Sunarti ke pasar besar","keraguan Bu Sunarti terhadap pembayaran digital dihadang ketekunan Rian mendampingi","pembeli muda menolak membayar dengan uang tunai","Mahasiswa KKN melarang pedagang menerima uang tunai","persaingan gerobak dengan kios tetangga yang lebih ramai"],
 k:"B",b:"Tarik-menariknya bukan soal kios atau pembeli; isu utamanya keraguan Bu Sunarti (merasa rumit + takut saldo) dihadang pembinaan bertahap Rian."},
{no:55,tag:"Tekstual",q:"Watak Bu Sunarti tergambar dari dialog dan petunjuk lakunya, yaitu ...",
 o:["sombong dan menolak semua teknologi","pemarah dan mudah menyerah","hati-hati, tetapi terbuka belajar hal baru","malas dan menunggu bantuan orang lain","suka menunda pekerjaan dan berkata kasar"],
 k:"C",b:"Bukti dua sisi: khawatir \"rumit\" + \"saldo kurang aman\" (hati-hati), namun mau belajar dan menggantung kartu (terbuka)."},
{no:56,tag:"Inferensial",q:"Berdasarkan petunjuk laku terakhir, kelanjutan cerita yang paling mungkin adalah ...",
 o:["pembayaran QRIS di gerobak Bu Sunarti makin lancar keesokan harinya","Bu Sunarti membuang kartu QRIS ke sungai belakang pasar","Rian berhenti KKN dan mengambil alih gerobak","ketua pasar melarang pembayaran digital","Bu Sunarti menutup gerobak duluan malam itu"],
 k:"A",b:"Petunjuk laku penutup: kartu digantung + janji menabung kembalian = komitmen mulai memakainya; bukan perlakuan setahun sekali."},
{no:57,tag:"PGK · Apresiasi",form:"kategori",q:"Tentukan Relevan atau Tidak Relevan setiap pernyataan berikut terhadap nilai yang dapat diambil dari drama untuk kehidupan saat ini.",
 axis:["Relevan","Tidak Relevan"],abbr:"RT",krow:[0,0,1],
 rws:[
  {t:"Teknologi baru lebih mudah diterima bila pendampingannya dilakukan langsung dan bertahap."},
  {t:"Pembayaran digital mempermudah pembeli yang jarang membawa uang tunai."},
  {t:"Pedagang berusia lanjut sebaiknya menolak semua teknologi tanpa mencoba dulu."}],
 b:"A dan B sejalan muatan drama (pendampingan bertahap + manfaat bagi pembeli muda); C berlawanan dengan pesan drama."
}
]
},
{
judul:"Teks 8 · Teks Prosedur — Jadwal Belajar",
teks:[
"<b>Tiga Langkah Menyusun Jadwal Belajar yang Tak Berantakan</b><br><br>Pertama, catat seluruh tugas dan tenggat di satu buku kecil — satu tempat, jangan tersebar. Kedua, blok materi paling berat pada jam ketika pikiranmu paling segar; beri jeda lima menit setiap dua puluh lima menit agar otak tetap lapang. Ketiga, tiap akhir pekan, cermati tugas mana yang tertunda, lalu rapikan jadwal minggu berikutnya.",
"Luangkan waktu sepuluh menit setiap malam untuk menata buku catatan tersebut — kebiasaan kecil yang membuahkan keteraturan besar."
],
soal:[
{no:58,tag:"Tekstual",q:"Tujuan teks prosedur tersebut adalah ...",
 o:["mengajak siswa membeli buku kecil berlabel mewah","menyuruh siswa belajar sepuluh jam tiap malam","memberikan langkah sederhana agar jadwal belajar tersusun rapi","melarang siswa menonton tayangan pendek saat belajar","menyarankan les privat bagi siswa kelas XII"],
 k:"C",b:"Judul + tiga langkah → tujuan menata jadwal belajar; lainnya nyasar/terlalu jauh."},
{no:59,tag:"Tekstual",q:"Urutan langkah yang tepat sesuai teks adalah ...",
 o:["evaluasi akhir pekan → mencatat tugas → blok materi berat","mencatat seluruh tugas → blok materi berat dengan jeda lima menit → evaluasi tiap akhir pekan","blok materi berat → evaluasi akhir pekan → mencatat tugas","menata buku catatan → evaluasi akhir pekan → mencatat tugas","blok materi berat → mencatat tugas → evaluasi"],
 k:"B",b:"Rangkaian teks: catat semua → blok materi berat (jeda) → evaluasi akhir pekan; opsi lain menukar posisi."},
{no:60,tag:"Inferensial",q:"Makna kata meluangkan dalam \"Luangkan waktu sepuluh menit setiap malam...\" adalah ...",
 o:["mengurangi waktu secara terus-menerus","membuang waktu percuma","menambah jam tidur","menghitung waktu dengan teliti","menyisihkan waktu secara khusus"],
 k:"E",b:"Meluangkan = menyisihkan/mengalokasikan untuk keperluan khusus."}
]
}
];
