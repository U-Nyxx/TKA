// Data Simulasi 1 v2 — pola REAL TKA B.Indo: 8 stimulus, 30 soal (PG + PGK-MCMA + PGK-Kategori) inline.
// Kategori: axis=[lbl0,lbl1], abbr="**" dua huruf untuk salin-chat, rws=[{t, k:0|1}].
const SET_A = [
{
judul:"Teks 1 · Teks Berita — PLTS Desa Sukamaju",
teks:[
"Jumat (16/10), pemerintah Desa Sukamaju bersama perusahaan energi terbarukan resmikan pembangkit listrik tenaga surya (PLTS) kapasitas 120 kilowatt-peak. Panel surya dipasang di atap balai desa, puskesmas, dan dua puluh rumah warga sehingga mampu melayani sekitar 350 rumah. Sebelumnya, listrik desa bergantung sepenuhnya pada jaringan yang kerap padam saat hujan deras sehingga usaha rumahan warga seperti menjahit dan membuat kerupuk sering terbatal.",
"Kepala Desa Burhanuddin mengatakan pembangunan PLTS tidak membebani warga karena didanai program percepatan energi terbarukan kabupaten dan dana desa. \"Dayanya lebih stabil, tetapi tagihan warga justru turun hingga sepertiga,\" ujarnya. Selain menopang kebutuhan rumah tangga, tenaga yang dihasilkan juga menyalakan lemari penyimpan vaksin di puskesmas serta tiga proyektor di sekolah dasar desa. Bulan depan, tiga puluh rumah lagi akan terhubung ke jaringan tersebut."
],
soal:[
{no:1,tag:"Tekstual",q:"Ide pokok wacana tersebut adalah ...",
 o:["warga Desa Sukamaju memperbaiki kelistrikan desa melalui PLTS yang diresmikan bersama perusahaan energi terbarukan","warga Desa Sukamaju harus memasang sendiri panel surya di rumahnya","harga listrik desa naik karena kerja sama dengan perusahaan swasta","jaringan listrik daerah makin sering padam setelah PLTS beroperasi","panel surya hanya menguntungkan balai desa dan puskesmas"],
 k:"A",b:"Gagasan utama: PLTS resmi memperbaiki kelistrikan desa. B, C, D, E bertentangan atau terlalu sempit."},
{no:2,tag:"Tekstual",q:"Kapasitas PLTS yang diresmikan di Desa Sukamaju adalah ...",
 o:["30 kilowatt-peak","120 kilowatt-peak","200 kilowatt-peak","350 kilowatt-peak","20 kilowatt-peak"],
 k:"B",b:"Tersurat: \"kapasitas 120 kilowatt-peak.\" Angka 20 dan 350 berasal dari detail lain — jebakan angka."},
{no:3,tag:"PGK · Tekstual",form:"kategori",q:"Tentukan Benar atau Salah setiap pernyataan berikut berdasarkan teks.",
 axis:["Benar","Salah"],abbr:"BS",krow:[0,1,0],
 rws:[
  {t:"PLTS Desa Sukamaju berkapasitas 120 kilowatt-peak."},
  {t:"Tagihan listrik warga naik hingga sepertiga."},
  {t:"Tiga puluh rumah lagi akan terhubung ke jaringan bulan depan."}],
 b:"Baris A Benar (tersurat), B Salah — teks menyebut tagihan TURUN sepertiga, dan C Benar (tiga puluh rumah). PGK-Kategori: nilai tiap baris satu per satu; satu baris salah = seluruh soal salah."},
{no:4,tag:"Inferensial",q:"Simpulan yang tepat dari wacana mengenai warga Desa Sukamaju adalah ...",
 o:["listrik desa kini sepenuhnya berasal dari panel surya","warga masih menanggung biaya pembangunan PLTS","pasokan listrik desa kini lebih stabil dengan biaya yang lebih rendah","jaringan PLN berhenti melayani Desa Sukamaju","perluasan sambungan listrik membebani dana desa"],
 k:"C",b:"Teks: daya lebih stabil + tagihan turun sepertiga. A berlawanan (listrik campuran), B/D/E nyasar."}
]
},
{
judul:"Teks 2 · Cerpen — Dua Kursi di Teras",
teks:[
"Sore itu Randy baru tiba di pekarangan rumah neneknya di tepi sawah setelah dua tahun tidak berkunjung. Angin dari kebun mangga membawa aroma tanah basah yang baru disirami hujan. Di depan rumah, dua kursi besi tua yang biasa menjadi tempat duduk nenek di sore hari tersusun rapi; sarung kuning yang dilapiskan di atasnya sudah pudar warnanya.",
"\"Nak... Randy?\" Nenek berhenti di ambang pintu sebelum akhirnya bergegas keluar. Ia menggenggam lengan Randy dengan dua tangan, seolah menggenggam hadiah yang sudah bertahun-tahun ditunggu. \"Kok kurus begini,\" katanya sambil mengusap lengan cucunya.",
"Petang itu, di meja kayu tua, Nenek menyajikan ikan bandeng, sambal terasi, dan nasi yang masih mengepulkan uap. Randy menceritakan kota: kereta yang penuh sesak, pekerjaan yang menumpuk, kamar kecil yang ia sewa sendiri. Nenek mengangguk saja, sesekali menambahkan ikan ke piring Randy tanpa diminta.",
"\"Pulang lagi ya, Nak. Nenek tak ke mana-mana,\" bisiknya saat mengantar Randy ke gerbang.",
"Setelah langkah Randy menghilang di ujung jalan, Nenek tidak segera masuk. Ia kembali duduk di kursi besi di teras, memandang gerbang yang mulai gelap."
],
soal:[
{no:5,tag:"Tekstual",q:"Latar tempat dan suasana wacana tersebut adalah ...",
 o:["kota besar pada pagi hari yang sibuk dan panas","pedesaan pada sore pascahujan yang hangat dan intim","tepi pantai pada tengah hari yang ramai dan riuh","pegunungan pada malam hari yang dingin dan sunyi","perumahan elite pada malam hari yang mewah dan tenang"],
 k:"B",b:"Bukti: \"tepi sawah\" + \"sore itu\" + \"tanah basah baru disirami hujan\"; suasana intim lewat peluk, makan bersama."},
{no:6,tag:"Tekstual",q:"Watak tokoh Nenek terbaca dari tindakannya, yaitu ...",
 o:["mudah marah dan emosional","keras kepala dan suka menuntut","penyayang dan penuh perhatian","penakut dan kurang percaya diri","bawel dan pendendam"],
 k:"C",b:"Dua bukti tindakan: menambahkan ikan tanpa diminta; mengantar ke gerbang; duduk lama memandang gerbang."},
{no:7,tag:"PGK · Inferensial",form:"kategori",q:"Tentukan Sesuai atau Tidak Sesuai setiap pernyataan berikut terhadap isi cerita.",
 axis:["Sesuai","Tidak Sesuai"],abbr:"ST",krow:[0,1,0],
 rws:[
  {t:"Randy baru kembali ke desa setelah dua tahun tidak berkunjung."},
  {t:"Nenek mengusir Randy keluar karena kecewa dengan kunjungannya."},
  {t:"Pada petang itu Nenek menyajikan ikan bandeng, sambal terasi, dan nasi yang masih hangat."}],
 b:"A Sesuai (tersurat paragraf 1); B Tidak Sesuai — Nenek justru begitu bahagia; C Sesuai (tersurat paragraf 3)."}
,
{no:8,tag:"Evaluasi",q:"Judul yang paling tepat untuk wacana tersebut adalah ...",
 o:["Dua Kursi di Teras","Sawah saat Hujan","Kota yang Sibuk","Ikan Bandeng Sambal Terasi","Kereta yang Sesak"],
 k:"A",b:"Kursi di teras memayungi awal dan akhir cerita; opsi lain hanya detail nyasar."}
]
},
{
judul:"Teks 3 · Dua Teks Berpendapat — Ponsel di Jam Belajar",
teks:[
"<b>Teks A — Larang Penuh, Sekarang Juga</b><br>Sejak Januari lalu, sekolah kami melarang murid membawa ponsel selama jam pelajaran. Dalam bulan pertama, para guru melaporkan kelas jauh lebih tertib, dan nilai ulangan umum naik dua belas persen dalam satu semester. Bagi saya, aturan itu merupakan penyelamat belajar: layar ponsel memang dipenuhi video pendek dan permainan yang membuat pelajar sulit fokus. Sekolah-sekolah yang belum menerapkan aturan serupa, saya yakin, berada dalam kondisi lebih gaduh dan lebih boros waktu belajar. Karena itu, larangan perlu diberlakukan di seluruh sekolah, bukan hanya di beberapa tempat.<br>— Nabila, ketua OSIS SMA Merdeka",
"<b>Teks B — Melatih, Bukan Melarang</b><br>Kami memahami niat pengarang Teks A, tetapi larangan penuh justru menutup pintu belajar. Hasil survei kelas kami terhadap 320 pelajar menunjukkan 47 persen memakai ponsel untuk membaca buku elektronik, mencatat, dan membuka kamus pada jam belajar mandiri. Ponsel juga alat belajar. Pada masa kerja nanti, pelajar dituntut mampu mengatur waktu layar sendiri; kemampuan itu tidak muncul begitu saja, melainkan dilatih sejak di sekolah. Seharusnya sekolah menerapkan pembatasan terarah: ponsel boleh untuk aplikasi belajar, dilarang untuk hiburan, dengan pembatasi yang diawasi guru. Disiplin sejati berasal dari latihan, bukan dari larangan.<br>— Fajar, pelajar XI SMA Nusantara"
],
soal:[
{no:9,tag:"Inferensial",q:"Persamaan dan perbedaan pandangan kedua pengarang adalah ...",
 o:["keduanya sepakat membuang ponsel dari kehidupan pelagar","keduanya mengakui ponsel membuat pelajar sulit fokus, tetapi Teks A memilih larangan penuh, sedangkan Teks B menawarkan pembatasan terarah","keduanya berasal dari sekolah yang sama dengan aturan yang sama","keduanya menolak survei sebagai dasar kebijakan sekolah","keduanya menganggap para guru kurang mengawasi pelajar"],
 k:"B",b:"Titik temu: keduanya mengakui dampak ponsel pada fokus; titik beda: larangan penuh (A) vs pembatasan terarah (B). Perbandingan dua teks = favorit TKA."},
{no:10,tag:"PGK · Evaluasi",form:"mcma",q:"Kalimat mana saja yang merupakan OPINI? <i>(pilih semua jawaban yang benar)</i>",
 o:["\"Bagi saya, aturan itu merupakan penyelamat belajar.\"","Nilai ulangan umum naik dua belas persen dalam satu semester.","\"Larangan penuh justru menutup pintu belajar.\"","Survei kelas terhadap 320 pelajar menunjukkan 47 persen memakai ponsel untuk membaca buku elektronik.","\"Disiplin sejati berasal dari latihan, bukan dari larangan.\""],
 k:"ACE",b:"A, C, E memuat nilai dan penilaian pribadi (\"bagi saya\", \"justru\", \"sejati\"); B dan D berupa data yang dapat diverifikasi — fakta."},
{no:11,tag:"Evaluasi",q:"Bagian Teks A yang argumennya paling lemah karena tidak didukung data adalah ...",
 o:["laporan para guru bahwa kelas menjadi lebih tertib","kenaikan nilai ulangan umum dua belas persen dalam satu semester","pernyataan \"saya yakin\" bahwa sekolah lain lebih gaduh dan lebih boros waktu","penyebutan video pendek dan permainan yang membuat pelajar sulit fokus","usulan agar larangan berlaku di seluruh sekolah"],
 k:"C",b:"Pengarang sendiri menandainya \"saya yakin\" tanpa data — klaim antarorrang tanpa bukti. A amatan, B data, D maklumat umum."},
{no:12,tag:"Inferensial",q:"Sikap pengarang Teks A terhadap penggunaan ponsel pelajar adalah ...",
 o:["mendukung larangan penuh di jam belajar dan mengusulkan aturan diberlakukan luas","menolak larangan karena mengutamakan kebebasan pelajar","netral dan hanya melaporkan data survei","khawatir larangan membuat pelajar kehilangan alat belajar","menyalahkan penyelenggara media sosial secara langsung"],
 k:"A",b:"Kata \"penyelamat belajar\" + \"larangan perlu diberlakukan di seluruh sekolah\" = sikap mendukung penuh. C/D justru sikap Teks B/peneliti."}
]
},
{
judul:"Teks 4 · Artikel + Data — Kurang Tidur Pelajar",
teks:[
"Survei terhadap 1.200 pelajar kelas IX–XII di enam kota menunjukkan hanya 34 persen yang tidur delapan jam atau lebih per malam — durasi yang dianjurkan bagi remaja. Merajalelanya kebiasaan begadang itu erat kaitannya dengan penggunaan gawai hingga dini hari; jadwal les dan tugas yang menumpuk menjadi penyebab tambahan.",
"Distribusi durasi tidur pelajar (persen): <b>kurang dari 6 jam = 41</b> · <b>6–7 jam = 25</b> · <b>8 jam atau lebih = 34</b> <i>(dibulatkan; sumber: survei ilustratif)</i>",
"Kekurangan tidur mengakibatkan konsentrasi menurun pada pelajaran pagi, mudah tersinggung, dan daya tahan tubuh menurun sehingga pelajar lebih rentan sakit; dalam jangka panjang, daya ingat pun menurun. Pakar kesehatan menyarankan pelajar menetapkan jam tidur tetap, mematikan layar sekurang-kurangnya satu jam sebelum tidur, dan menghindari minuman berkafein pada petang."
],
soal:[
{no:13,tag:"Tekstual",q:"Persentase pelajar yang tidur sesuai anjuran adalah ...",
 o:["34 persen","43 persen","13 persen","86 persen","40 persen"],
 k:"A",b:"\"Hanya 34 persen ... tidur delapan jam atau lebih\"; 41 = kelompok kurang-dari-6-jam."},
{no:14,tag:"PGK · Tekstual",form:"mcma",q:"Pernyataan mana saja yang SESUAI dengan data tabel dan isi teks? <i>(pilih semua jawaban yang benar)</i>",
 o:["Lebih banyak pelajar tidur kurang dari enam jam daripada rentang durasi lainnya.","Jumlah pelajar yang tidur sekurang-kurang delapan jam lebih besar daripada yang tidur 6–7 jam.","Seluruh pelajar mengakui memakai gawai hingga dini hari.","Teks mengaitkan kurang tidur jangka panjang dengan menurunnya daya ingat.","Pakar kesehatan menyarankan menambah minuman berkafein pada petang."],
 k:"ABD",b:"A ✓ (41% kelompok terbesar), B ✓ (34 > 25), D ✓ (tersurat). C ekstrem (\"seluruh\"), E kebalikan (menghindari)."},
{no:15,tag:"Tekstual",q:"Fungsi paragraf terakhir terhadap wacana tersebut adalah ...",
 o:["mengulang data survei dengan kata-kata lain","menyajikan akibat kurang tidur sekaligus saran penyelesaian","membantah hasil survei pada paragraf pertama","memberikan contoh kasus pelajar tertentu","mengumumkan pelaksanaan riset lanjutan"],
 k:"B",b:"Paragraf akhir menutup masalah: sebut akibat (konsentrasi, tersinggung, daya ingat) lalu saran pakar — pola penutup khas teks informasi."},
{no:16,tag:"Inferensial",q:"Berdasarkan teks, penyebab utama kurang tidur pada pelajar adalah ...",
 o:["mata pelajaran malam dari sekolah","tugas sekolah dan les yang menumpuk","kamar yang mencapai suhu panas","kebiasaan memakai gawai hingga dini hari","kebiasaan bangun subuh untuk persiapan sekolah"],
 k:"D",b:"\"Erat kaitannya dengan penggunaan gawai hingga dini hari\" = penyebab utama; tugas/les penyebab tambahan."}
]
},
{
judul:"Teks 5 · Puisi — Sawah Ibu",
teks:[
"<b>Sawah Ibu</b><br><br>Ibu menusuk malam dengan sabit,<br>berkelip kunang-kunang di pinggir pematang.<br>Embun pagi berbisik kabar senang,<br>gabah menguning menanti dipangku.<br><br>Punggungnya menekuk seperti gerbang,<br>lewat gerbang itu fajar masuk ke rumah."
],
soal:[
{no:17,tag:"Apresiasi",q:"Citraan yang dominan digambarkan puisi tersebut adalah ...",
 o:["penglihatan","pendengaran","perabaan","penciuman","pengecapan"],
 k:"A",b:"Gambaran mata dominan: berkelip kunang, \"menguning\", \"menekuk\", gerbang, fajar masuk."},
{no:18,tag:"Inferensial",q:"Makna larik \"Ibu menusuk malam dengan sabit\" adalah ...",
 o:["Ibu menyimpan sabit di dalam rumah setiap malam","Ibu menghunus pisau karena sedang marah","Ibu sedang mengayau tanaman liar di pekarangan","Ibu menceritakan kisah malam kepada anaknya","Ibu masih bekerja di sawah hingga larut malam"],
 k:"E",b:"Kiasan: menusuk malam = memotong/menyarap sawah sampai malam; opsi lain terlalu harfiah."},
{no:19,tag:"Apresiasi",q:"Majas personifikasi terdapat pada larik ...",
 o:["\"Ibu menusuk malam dengan sabit\"","\"Embun pagi berbisik kabar senang\"","\"Punggungnya menekuk seperti gerbang\"","\"lewat gerbang itu fajar masuk ke rumah\"","\"berkelip kunang-kunang di pinggir pematang\""],
 k:"B",b:"\"Embun berbisik\" = benda mati diberi perilaku manusia (personifikasi). A hiperbola/metafora; C simile; D metafora; E denotatif."},
{no:20,tag:"Evaluasi",q:"Kesan yang terbaca dari puisi tersebut adalah ...",
 o:["kekecewaan terhadap pemerintah desa","kekaguman terhadap ketekunan ibu yang bekerja demi keluarga","ketakutan menghadapi malam","kejenuhan dengan pekerjaan sawah","keheranan terhadap kunang-kunang"],
 k:"B",b:"Gambar bekerja hingga malam + \"fajar masuk ke rumah\" → kekaguman pada pengorbanan ibu."}
]
},
{
judul:"Teks 6 · Ulasan Daring — Toko Komputer Maju Jaya",
teks:[
"<b>Dewi A.</b> — ★★★★★ — <i>Teliti dan bergaransi</i><br>Teknisi memeriksa mainboard laptop saya dengan sangat teliti. Garansi pengerjaan dihitung tiga puluh hari; bila kerusakan berulang, perbaikan kembali gratis.",
"<b>Andre</b> — ★★★☆☆ — <i>Asri, tetapi antrean panjang</i><br>Antrean pengerjaan panjang: laptop saya selesai hampir tiga hari karena hanya ada dua teknisi utama. Datanglah pagi hari kalau ingin cepat dilayani konsultasinya.",
"<b>Ita</b> — ★★★★☆ — <i>Sparepart bergaransi pabrik</i><br>Semua sparepart yang dipasang bergaransi pabrik sembilan puluh hari. Harganya memang lebih tinggi daripada toko umum di dekat pasar, tetapi kualitasnya tidak diragukan.",
"<b>Bagus</b> — ★★★★☆ — <i>Transparan</i><br>Teknisi menyerahkan laporan pemeriksaan tertulis dan menjelaskan setiap langkah perbaikan dengan sabar sampai saya paham. Bawa catatan gejala rusaknya biar cepat dianalisis.",
"<i>Ulasan dikutip dari laman ulasan daring toko komputer fiktif. Nama pengulas disamarkan.</i>"
],
soal:[
{no:21,tag:"Tekstual",q:"Informasi yang disebutkan oleh lebih dari satu pengulas adalah ...",
 o:["harga sparepart lebih terjangkau","antrean pengerjaan yang cepat","aspek garansi","laporan pemeriksaan tertulis","toko yang buka sampai malam"],
 k:"C",b:"Dewi menyebut garansi pengerjaan 30 hari; Ita garansi pabrik 90 hari — dua pengulas. Lainnya hanya satu pengulas atau tidak ada."},
{no:22,tag:"PGK · Tekstual",form:"mcma",q:"Manakah pernyataan yang SESUAI dengan ulasan-ulasan tersebut? <i>(pilih semua jawaban yang benar)</i>",
 o:["Teknisi memeriksa barang dengan sangat teliti.","Antrean pengerjaan selalu cepat.","Sparepart yang dipasang bergaransi pabrik sembilan puluh hari.","Pengerjaan bisa menghabiskan waktu hampir tiga hari.","Harga semua jasa di toko itu paling murah di kota."],
 k:"ACD",b:"A ✓ (Dewi), C ✓ (Ita), D ✓ (Andre). B kebalikan ulasan Andre; E tidak pernah disebut — jebakan ekstrem."},
{no:23,tag:"Evaluasi",q:"Ulasan Andre memuat kalimat: \"Antrean pengerjaan panjang, laptop saya selesai hampir tiga hari.\" Perbaikan yang paling efektif adalah ...",
 o:["Karena antrean pengerjaannya panjang, laptop saya baru selesai tiga hari kemudian.","Karena antrean pengerjaannya panjang, sehingga laptop saya baru selesai tiga hari kemudian.","Antrean pengerjaan panjang dikarenakan laptop saya baru selesai tiga hari kemudian.","Laptop saya antrean pengerjaan panjang, karena baru selesai tiga hari kemudian.","Karena panjangnya antrean pengerjaan, laptop saya selesai dikerjakan selama tiga puluh hari."],
 k:"A",b:"A hun: hubungan sebab-akibat rapi, \"tiga hari kemudian\" logis. B karena+sehingga; C terbalik; D SPK kacau; E tercampur angka garansi 30 hari."}
]
},
{
judul:"Teks 7 · Naskah Drama — Peta Sebelum Berangkat",
teks:[
"*(Teras rumah, malam. Di meja kayu tersusun brosur magang dan secarik formulir. Dandi, kelas XII TJKT, masuk membawa map biru.)*",
"<b>Dandi:</b> Pa, seleksi magang PT Andalan Jaringan di Bandung sudah dibuka. Enam bulan, ada sertifikasi kompetensi di akhir program. Perusahaan itu punya laboratorium transceiver yang lengkap.",
"<b>Hendra:</b> *(menaruh cangkir, tidak menatap Dandi)* Bandung? Kan tempat lain serupa, Bengkel Tirta dekat pasar, cuma empat puluh menit dari rumah. Sertifikatnya juga dilegal, katanya.",
"<b>Dandi:</b> *(duduk di samping ayahnya)* Bengkel Tirta bagus untuk elektronika dasar, Pa. Tapi mimpi saya jaringan long-haul. Di PT Andalan, koordinator magangnya alumni sekolah kita. Asrama disediakan; makan tidak mahal. Anggaran saya sudah saya hitung.",
"<b>Hendra:</b> Bukan soal jarak saja, Dandi. Kamu belum pernah tinggal sendiri, dan bus ke sana tidak setiap jam, kamu tahu sendiri.",
"<b>Dandi:</b> Aku tahu, Pa. Karena itu aku siapkan semuanya dengan rinci; jadwal bus pagi tersedia sepanjang hari. Kalau ada masalah, ada wali magang yang bisa dihubungi. Yang aku minta bukan izin tanpa bicara; aku minta Ayah ikut menimbang bersama.",
"<b>Hendra:</b> *(diam sejenak, membalik brosur Bengkel Tirta lalu membalik kembali brosur PT Andalan)* Enam bulan itu bukan lama sekali... tapi bukan singkat juga.",
"<b>Dandi:</b> Dan kalau lulus sertifikasi, Pa, pemula dengan sertifikat serupa diterima lebih cepat di perusahaan besar. Tadi kubaca di maklumat programnya.",
"<b>Hendra:</b> *(mengambil formulir PT Andalan, memandang brosur Bengkel Tirta sekali lagi, lalu meletakkannya di dasar tumpukan)* Berangkatnya ke Bandung naik bus pagi mana yang aman? Lebih baik Ayah antar ke terminal subuh nanti saja."
],
soal:[
{no:24,tag:"Inferensial",q:"Konflik utama dalam kutipan drama tersebut adalah ...",
 o:["Dandi belum lolos seleksi magang PT Andalan Jaringan","sertifikat kompetensi tidak diakui perusahaan mana pun","perbedaan pilihan tempat magang: Dandi menginginkan PT Andalan di Bandung, Hendra menginginkan tempat dekat rumah","Hendra ingin Dandi berhenti sekolah dan bekerja penuh","PT Andalan memungut biaya magang secara tidak resmi"],
 k:"C",b:"Inti tarik-menarik: almamater Network pusat vs bengkel 40 menit dari rumah; bukan uang gelap, bukan kelulusan."},
{no:25,tag:"Tekstual",q:"Watak tokoh Dandi tergambar dari dialog dan petunjuk lakuannya, yaitu ...",
 o:["malas dan pasrah menunggu keputusan orang lain","takut bersuara dan mudah melemah","sombong karena diterima magang bergengsi","berani mengambil peluang namun tetap santun dan menghargai ayah","pendendam dan suka menutupi fakta"],
 k:"D",b:"Dua bukti: siapkan hitungan + minta ayah \"ikut menimbang bersama\"; santun via duduk di samping ayah, tidak membentak."},
{no:26,tag:"Inferensial",q:"Berdasarkan petunjuk lakukan terakhir, kelanjutan cerita yang paling mungkin adalah ...",
 o:["Hendra memaksa Dandi magang di Bengkel Tirta","Dandi membatalkan pendaftaran dengan diam-diam","Hendra menjual sepeda motornya demi biaya kuliah Dandi","Dandi berangkat malam itu juga tanpa pamit","Hendra menyetujui magang di Bandung dan mengantar Dandi ke terminal pagi"],
 k:"E",b:"Hendra menyimpan brosur lokal + menanyakan bus pagi + tawaran mengantar terminal = restu. Petunjuk laku akhir = kunci kelanjutan."},
{no:27,tag:"PGK · Apresiasi",form:"kategori",q:"Tentukan Relevan atau Tidak Relevan setiap pernyataan berikut terhadap nilai yang dapat diambil dari drama untuk kehidupan saat ini.",
 axis:["Relevan","Tidak Relevan"],abbr:"RT",krow:[0,0,1],
 rws:[
  {t:"Komunikasi terbuka antara orang tua dan anak membantu keputusan besar tercapai."},
  {t:"Program magang yang dipilih dengan pertimbangan matang memperbesar peluang kerja lulusan SMK."},
  {t:"Anak sebaiknya menuruti seluruh keputusan orang tua tanpa menyampaikan pendapatnya."}],
 b:"A dan B sejalan muatan drama (dialog dua arah + pertimbangan matang); C berlawanan dengan pesan drama — pendapat anak justru didengar."}
]
},
{
judul:"Teks 8 · Teks Prosedur — Meredakan Panas Laptop",
teks:[
"<b>Meredakan Panas Laptop: Empat Langkah Cepat</b><br>Ketika laptop tiba-tiba terasa panas dan kipasnya berdengung keras, jangan panik. Lakukan empat langkah berikut secara berurutan.",
"Pertama, simpan pekerjaan, lalu matikan laptop dan tunggu sepuluh menit agar suhu turun. Kedua, bersihkan lubang ventilasi dan kipas dari debu memakai kuas kecil atau udara tekan yang disemprotkan perlahan. Ketiga, pindahkan laptop dari permukaan lembut seperti kasur atau sofa; letakkan di meja keras yang memungkinkan udara mengalir bebas. Terakhir, saat laptop digunakan kembali, tutup program yang tidak dipakai dan batasi aplikasi berat agar kerja komponen tidak menumpuk.",
"Panas berlebih yang dibiarkan berlangsung lama dapat merusak baterai dan memperpendek usia perangkat."
],
soal:[
{no:28,tag:"Tekstual",q:"Tujuan teks prosedur tersebut adalah ...",
 o:["mengajak pembaca membeli laptop baru","menganjurkan pembelian pendingin khusus laptop","menjelaskan cara memperbaiki layar laptop yang rusak","memberikan langkah berurutan meredakan laptop yang terlalu panas","melarang pemakaian laptop saat cuaca panas"],
 k:"D",b:"Judul + kalimat pengantar menyatakan tujuan tepat: empat langkah meredakan panas."},
{no:29,tag:"Tekstual",q:"Urutan langkah yang benar sesuai teks adalah ...",
 o:["membersihkan ventilasi → mematikan laptop → memindah ke meja keras → menutup aplikasi","menyimpan pekerjaan & mematikan laptop → membersihkan ventilasi → memindah ke meja keras → menutup aplikasi berat","memindah ke meja keras → membersihkan ventilasi → mematikan laptop → menutup aplikasi","menutup aplikasi berat → mematikan laptop → membersihkan ventilasi → memindah ke meja keras","mematikan laptop → memindah ke meja keras → menutup aplikasi → membersihkan ventilasi"],
 k:"B",b:"Urutan teks: simpan+matikan → ventilasi → meja keras → tutup aplikasi; opsi lain menukar posisi langkah."},
{no:30,tag:"Inferensial",q:"Makna kata meredakan pada judul \"Meredakan Panas Laptop\" adalah ...",
 o:["membasmi","menyekat","mengurangi","melindungi","menahan"],
 k:"C",b:"Meredakan = menurunkan/mengurangi (bukan menghilangkan total); \"membasmi\" terlalu kuat."}
]
}
];
