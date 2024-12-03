// service
import serviceIMG from "@/assets/service.png";

// psikolog
import psikologIMG from "@/assets/psikolog.jpg";

// article
import articleIMG from "@/assets/article.png";
import relatedArticleIMG from "@/assets/related_article.png";

const dataBanner = [
  {
    title: "Your Partner in Health and Wellness",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const dataServices = [
  {
    img: serviceIMG,
    title: "Konsultasi psikologi",
    desc: "Jaga kesehatan mentalmu, yuk konsultasi dengan psikolog untuk hidup yang lebih bahagia dan seimbang!",
  },
  {
    img: serviceIMG,
    title: "tes kesehatan psikologi",
    desc: "Ingin lebih mengenal dirimu? Yuk, ikut tes psikologi untuk memahami potensi dan kepribadianmu lebih dalam!",
  },
  {
    img: serviceIMG,
    title: "tes Penjurusan sekolah",
    desc: "Bingung dalam milih jurusan? Temukan jurusan yang tepat untuk masa depanmu! Yuk, ikut tes penjurusan sekolah!",
  },
  {
    img: serviceIMG,
    title: "ANALISis JABATAN",
    desc: "Ayo, lakukan analisis jabatan untuk memahami peran dan tanggung jawabmu, serta tingkatkan kinerja!",
  },
  {
    img: serviceIMG,
    title: "Konsultasi psikologi",
    desc: "Jaga kesehatan mentalmu, yuk konsultasi dengan psikolog untuk hidup yang lebih bahagia dan seimbang!",
  },
];

const dataFaq = [
  {
    question: "Perbedaan psikolog dan psikiater?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question:
      "Apakah data yang diberikan pada terapis terjamin kerahasiaannya?",
    answer:
      "Yes. It comes with default styles that matches the other component's aesthetic.",
  },
  {
    question: " Berapa kali saya harus melakukan konsultasi?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: "Apakah saya perlu meminum obat?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Berapa biaya pelayanan di Psikologi Putra Tunggal?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const biayaPelayanan = [
  {
    pelayanan: "Konsultasi",
    biaya: "Rp.125.000/Jam",
  },
  {
    pelayanan: "Tes Itelegensi (IQ) TK-SD-SMP-SMA",
    biaya: "Rp.200.000",
  },
  {
    pelayanan: "Tes Minat Bakat",
    biaya: "Rp.200.000",
  },
  {
    pelayanan:
      "Tes Lengkap TK-SD-SMP-SMA(Itelegensi,Minat Bakat, dan Kepribadian)",
    biaya: "Rp.300.000",
  },
  {
    pelayanan: "Tes Itelegensi kelompok TK-SMA (>15 anak)",
    biaya: "Rp.125.000/Jam",
  },
  {
    pelayanan: "Konsultasi",
    biaya: "Rp.50.000 - Rp.150.000",
  },
  {
    pelayanan: "Tes Psikotes untuk Industri dan Organisasi",
    biaya:
      "Rp.300.000 (1-20 Orang) / Rp.200.000-Rp.250.000 (21-50 Orang) / Rp.175.000-Rp.225.000 (51-100 orang)",
  },
  {
    pelayanan:
      "Tes Lengkap Psikotes dan Wawancara untuk Industri dan Oganisasi",
    biaya: "Rp.350.000 (Staff) / Rp.400.000 (SPV/Koor) / Rp.500.000 (Manager)",
  },
  {
    pelayanan: "Tes Calon Siswa LPK",
    biaya: "Rp.150.000",
  },
  {
    pelayanan: "Tes Calon Pekerja Migran Indonesia (CPMI) G TO G",
    biaya: "Rp.250.000",
  },
];

const carouselServices = [
  {
    // title: "Your Partner in Health and Wellness",
    desc: "Lakukan pencarian dokter atau pilih rekomendasi dokter terbaik, dan kirim permintaan untuk berbicara sesuai dengan kebutuhan dan keluhan kesehatanmu.",
  },
  {
    // title: "Your Partner in Health and Wellness",
    desc: "Lakukan pencarian dokter atau pilih rekomendasi dokter terbaik, dan kirim permintaan untuk berbicara sesuai dengan kebutuhan dan keluhan kesehatanmu.",
  },
];

const service = [
  {
    title: "Konsultasi dengan Dokter Ahli",
    desc: "Sekarang, kamu dapat berkonsultasi dengan psikolog secara online langsung dari website kami. Layanan kesehatan mental online kami menyediakan akses ke tim psikolog terkualifikasi yang siap membantu dengan berbagai aspek kesehatan mental Anda. Mulai dari konseling psikologis untuk keluhan emosional yang lebih ringan hingga layanan dari psikolog spesialis yang berpengalaman dalam kasus-kasus yang lebih kompleks. Tidak perlu menunggu hingga masalah mental memburuk, segera berkonsultasi dengan kami untuk mendapatkan bantuan profesional dan dukungan yang Anda butuhkan.",
  },
  {
    title: "Mengapa Pilih Konsultasi Dokter PsikoCare?",
    desc: "Sekarang, kamu dapat berkonsultasi dengan psikolog secara online langsung dari website kami. Layanan kesehatan mental online kami menyediakan akses ke tim psikolog terkualifikasi yang siap membantu dengan berbagai aspek kesehatan mental Anda. Mulai dari konseling psikologis untuk keluhan emosional yang lebih ringan hingga layanan dari psikolog spesialis yang berpengalaman dalam kasus-kasus yang lebih kompleks. Tidak perlu menunggu hingga masalah mental memburuk, segera berkonsultasi dengan kami untuk mendapatkan bantuan profesional dan dukungan yang Anda butuhkan.",
  },
];

const dataPsikolog = [
  {
    img: psikologIMG,
    name: "Dr. Rr. Wara Setija Brawidjajani",
    job: "Psikiater Ahli",
    experience: 7,
    like: 100,
    cost: 50000,
  },
  {
    img: psikologIMG,
    name: "Dr. Ahmad Fadli",
    job: "Psikolog Klinis",
    experience: 10,
    like: 100,
    cost: 60000,
  },
  {
    img: psikologIMG,
    name: "Dra. Siti Nurjanah",
    job: "Psikolog Anak",
    experience: 5,
    like: 80,
    cost: 40000,
  },
  {
    img: psikologIMG,
    name: "Dr. Budi Santoso",
    job: "Psikoterapis",
    experience: 12,
    like: 100,
    cost: 55000,
  },
  {
    img: psikologIMG,
    name: "Dra. Lani Setyowati",
    job: "Konselor",
    experience: 8,
    like: 90,
    cost: 45000,
  },
];

const dataTestmoni = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    profile: psikologIMG,
    name: "kopsus",
  },
];

const dataArticle1 = {
  title: "Pengertian Kesehatan Mental",
  desc: "Suatu konsep yang melampaui ranah emosi dan menjangkau aspek kejiwaan dan psikis individu, kini menjadi perhatian utama dalam ranah ilmiah. Para ahli kesehatan mental terus mengkaji hubungan kompleks antara peristiwa hidup dan dampaknya terhadap kesehatan mental. Penelitian menunjukkan bahwa peristiwa traumatis, seperti pelecehan, stres kronis, dan kekerasan, dapat meninggalkan jejak mendalam pada kepribadian dan perilaku individu. Dampak ini dapat bermanifestasi dalam bentuk gangguan kesehatan mental, yang ditandai dengan berbagai gejala dan perubahan pola pikir. Gangguan mental, seperti depresi, gangguan bipolar, kecemasan, PTSD, OCD, dan psikosis, tidak hanya memengaruhi kemampuan individu untuk menghadapi stres, berhubungan dengan orang lain, dan membuat keputusan, tetapi juga dapat memicu perilaku berbahaya, termasuk keinginan untuk menyakiti diri sendiri. Meskipun beberapa gangguan mental memiliki karakteristik umum, penting untuk diingat bahwa pengalaman setiap individu berbeda-beda. Gangguan mental tertentu, seperti postpartum depression, hanya menyerang kelompok tertentu, seperti ibu setelah melahirkan. Memahami kompleksitas kesehatan mental dan dampak peristiwa hidup merupakan langkah krusial dalam memajukan ilmu pengetahuan dan meningkatkan kualitas hidup. Penelitian lanjutan dan upaya edukasi perlu terus dilakukan untuk mendukung individu yang mengalami gangguan mental dan membangun masyarakat yang lebih suportif. Dengan menggabungkan pengetahuan ilmiah dan empati, kita dapat membantu individu untuk menjalani hidup yang lebih sehat dan bahagia.",
};

const dataArticle2 = {
  image: articleIMG,
  title:
    "Kata Psikolog, 3 Kebiasaan Pagi Ini Bisa Bikin Lebih Bahagia Setiap Hari",
  place: "Jakarta",
  date: "Kamis 19 September 2024",
  desc: "Suatu konsep yang melampaui ranah emosi dan menjangkau aspek kejiwaan dan psikis individu, kini menjadi perhatian utama dalam ranah ilmiah. Para ahli kesehatan mental terus mengkaji hubungan kompleks antara peristiwa hidup dan dampaknya terhadap kesehatan mental. Penelitian menunjukkan bahwa peristiwa traumatis, seperti pelecehan, stres kronis, dan kekerasan, dapat meninggalkan jejak mendalam pada kepribadian dan perilaku individu. Dampak ini dapat bermanifestasi dalam bentuk gangguan kesehatan mental, yang ditandai dengan berbagai gejala dan perubahan pola pikir. Gangguan mental, seperti depresi, gangguan bipolar, kecemasan, PTSD, OCD, dan psikosis, tidak hanya memengaruhi kemampuan individu untuk menghadapi stres, berhubungan dengan orang lain, dan membuat keputusan, tetapi juga dapat memicu perilaku berbahaya, termasuk keinginan untuk menyakiti diri sendiri. Meskipun beberapa gangguan mental memiliki karakteristik umum, penting untuk diingat bahwa pengalaman setiap individu berbeda-beda. Gangguan mental tertentu, seperti postpartum depression, hanya menyerang kelompok tertentu, seperti ibu setelah melahirkan. Memahami kompleksitas kesehatan mental dan dampak peristiwa hidup merupakan langkah krusial dalam memajukan ilmu pengetahuan dan meningkatkan kualitas hidup. Penelitian lanjutan dan upaya edukasi perlu terus dilakukan untuk mendukung individu yang mengalami gangguan mental dan membangun masyarakat yang lebih suportif. Dengan menggabungkan pengetahuan ilmiah dan empati, kita dapat membantu individu untuk menjalani hidup yang lebih sehat dan bahagia.",
};

const dataFaqArticle = [
  {
    question:
      "Apa saja tanda-tanda seseorang mengalami masalah kesehatan mental?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Bagaimana cara mengatasi gangguan kecemasan?",
    answer:
      "Yes. It comes with default styles that matches the other component's aesthetic.",
  },
  {
    question:
      "Ke mana saya harus pergi jika saya merasa tidak baik secara mental?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const dataRelatedArticle = [
  {
    img: relatedArticleIMG,
    title: "Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains",
    date: "30 Juni 2023",
  },
  {
    img: relatedArticleIMG,
    title: "Sampah Alun-alun Banyumas Capai Dua Dump Truk",
    date: "30 Juni 2023",
  },
  {
    img: relatedArticleIMG,
    title: "Apa Itu Flexing di Medsos? Pengertian dan Cara Menyikapinya",
    date: "30 Juni 2023",
  },
  {
    img: relatedArticleIMG,
    title: "Apa Itu Empati? Ini Perbedaannya dengan Simpati",
    date: "30 Juni 2023",
  },
  {
    img: relatedArticleIMG,
    title: "Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains",
    date: "30 Juni 2023",
  },
];

const dataHistoryChat = [
  {
    img: psikologIMG,
    name: "Dr. John Cena",
    chat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    img: psikologIMG,
    name: "Dr. Rr. Wara Setija Brawidjajani",
    chat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    img: psikologIMG,
    name: "Dr. Ahmad Fadli",
    chat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    img: psikologIMG,
    name: "Dra. Siti Nurjanah",
    chat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    img: psikologIMG,
    name: "Dr. Budi Santoso",
    chat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
];

const dataHistoryInteraction = [
  {
    docterName: "Silvia Anastasi",
    service: "Online",
    date: "27 Oktober",
    time: "10",
  },
  {
    docterName: "Silvia Anastasi",
    service: "Offline",
    date: "27 Oktober",
    time: "10",
  },
];

export {
  dataBanner,
  dataServices,
  dataFaq,
  biayaPelayanan,
  carouselServices,
  service,
  dataPsikolog,
  dataTestmoni,
  dataArticle1,
  dataArticle2,
  dataFaqArticle,
  dataRelatedArticle,
  dataHistoryChat,
  dataHistoryInteraction,
};
