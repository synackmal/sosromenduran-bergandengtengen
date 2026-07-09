export interface Kampung {
  slug: string;
  nama: string;
  tagline: string;
  deskripsi: string;
  sejarah: string;
  potensi: string[];
  keunggulan: string[];
  fasilitas: string[];
  highlight: string;
  icon: string;
  galeri: string[];
}

export const kampungList: Kampung[] = [
  {
    slug: "sosrowijayan",
    nama: "Sosrowijayan",
    tagline: "Gerbang Malioboro yang tak pernah tidur",
    deskripsi:
      "Kampung ini berada di pintu utara Malioboro, dikenal karena gang sempit yang hidup dengan losmen klasik, kedai, dan suasana malam yang hangat.",
    sejarah:
      "Sosrowijayan tumbuh sebagai kawasan penginapan dan pendukung Malioboro sejak era perhotelan kecil, lalu berkembang menjadi lokasi backpacker legendaris di Jogja.",
    potensi: ["Wisata heritage", "Losmen tradisional", "Kuliner malam"],
    keunggulan: ["Akses langsung ke Malioboro", "Losmen & guesthouse", "Suasana malam khas Jogja"],
    fasilitas: ["Warung kopi", "Losmen sederhana", "Akses angkutan umum"],
    highlight: "Pintu masuk ramai ke kawasan wisata Malioboro.",
    icon: "🏮",
    galeri: [
      "Gang bertiang lampion malam hari",
      "Losmen tua dengan suasana orisinal",
      "Warung angkringan ramai di malam hari",
      "Pintu masuk Malioboro dari sisi utara",
    ],
  },
  {
    slug: "sosromenduran",
    nama: "Sosromenduran",
    tagline: "Denyut budaya Gedongtengen",
    deskripsi:
      "Kampung induk dari kalurahan ini menjadi pusat kegiatan warga dengan tradisi budaya, gotong royong, dan berbagai paguyuban yang aktif.",
    sejarah:
      "Sosromenduran sejak lama dikenal sebagai pusat sosial dan budaya di wilayah Gedongtengen, tempat pertemuan warga dan acara kebersamaan berlangsung.",
    potensi: ["Kerukunan warga", "Paguyuban budaya", "Kegiatan seni"],
    keunggulan: ["Komunitas aktif", "Ritual tradisi lokal", "Langgam gotong royong"],
    fasilitas: ["Balai dusun", "Ruang pertemuan warga", "Lapangan serbaguna"],
    highlight: "Pusat aktivitas sosial dan budaya kampung.",
    icon: "🎭",
    galeri: [
      "Pertunjukan seni warga di balai kampung",
      "Kerja bakti membersihkan lingkungan",
      "Rapat komunitas di halaman terbuka",
      "Peringatan acara adat bersama" ,
    ],
  },
  {
    slug: "jogonegaran",
    nama: "Jogonegaran",
    tagline: "Kampung penjaga sejarah",
    deskripsi:
      "Jogonegaran memelihara suasana lama dengan rumah-rumah heritage dan cerita tentang relasi kampung ini dengan Keraton Yogyakarta.",
    sejarah:
      "Kampung ini sejak dulu menjadi kawasan hunian yang dekat dengan tradisi keraton, sehingga warisan budaya dan arsitektur lama masih terasa.",
    potensi: ["Wisata sejarah", "Cagar budaya", "Homestay heritage"],
    keunggulan: ["Bangunan kuno terjaga", "Jalan desa tradisional", "Kisah hubungan dengan keraton"],
    fasilitas: ["Homestay heritage", "Museum kecil lokal", "Jalur pejalan kaki sejarah"],
    highlight: "Rumah bagi jejak abdi dalem dan tradisi keraton.",
    icon: "🏛️",
    galeri: [
      "Rumah-rumah tradisional Jogonegaran",
      "Peta sejarah kampung di balai warga",
      "Suasana jalan desa yang teduh",
      "Seni batik khas kawasan sejarah",
    ],
  },
  {
    slug: "dagen",
    nama: "Dagen",
    tagline: "Surga kuliner Malioboro",
    deskripsi:
      "Jalan Dagen menjadi pusat kuliner dan penginapan kecil, dengan deretan tempat makan yang melayani pengunjung hingga larut malam.",
    sejarah:
      "Dagen berkembang sebagai koridor perdagangan makanan dan penginapan yang melayani wisatawan serta warga setempat sejak lama.",
    potensi: ["Wisata kuliner", "Hotel kecil", "Belanja oleh-oleh"],
    keunggulan: ["Deretan rumah makan", "Penginapan praktis", "Akses kuliner lokal"],
    fasilitas: ["Warung makan", "Kedai kopi", "Toko oleh-oleh"],
    highlight: "Deretan tempat makan legendaris di sisi timur kalurahan.",
    icon: "🍜",
    galeri: [
      "Deretan angkringan dan warung makan",
      "Suasana malam di Dagen",
      "Penginapan kecil dengan lampu hangat",
      "Lauk tradisional di meja kayu",
    ],
  },
  {
    slug: "sosrodipuran",
    nama: "Sosrodipuran",
    tagline: "Kampung ramah keluarga",
    deskripsi:
      "Kampung ini dikenal tenang dan hijau, dengan ruang terbuka bagi keluarga dan warga yang aktif menjaga lingkungan.",
    sejarah:
      "Sosrodipuran tumbuh menjadi kawasan permukiman yang stabil di dalam kalurahan, melalui kegiatan warga yang terorganisir.",
    potensi: ["Lingkungan ramah keluarga", "Bank sampah", "Ruang terbuka hijau"],
    keunggulan: ["Komunitas bersih", "Program lingkungan", "Suasana tenang"],
    fasilitas: ["Taman kecil", "Tempat bermain anak", "Ruang pertemuan lingkungan"],
    highlight: "Model kampung tertata di tengah kota dengan suasana asri.",
    icon: "🌿",
    galeri: [
      "Kegiatan hijau di rumah warga",
      "Bank sampah dan program lingkungan",
      "Anak-anak bermain di halaman kampung",
      "Proyek taman komunitas",
    ],
  },
  {
    slug: "pajeksan",
    nama: "Pajeksan",
    tagline: "Gang kreatif penuh cerita",
    deskripsi:
      "Pajeksan dipenuhi UMKM rumahan, dari kuliner khas hingga karya kriya, sehingga kampung ini terasa hidup di siang dan malam hari.",
    sejarah:
      "Kampung ini berkembang sebagai kawasan usaha kecil yang menonjolkan kreativitas warga dalam membuat produk lokal dan makanan tradisional.",
    potensi: ["UMKM kreatif", "Kuliner khas", "Kriya lokal"],
    keunggulan: ["Jaringan usaha rumahan", "Produk tangan lokal", "Rute kuliner kampung"],
    fasilitas: ["Teras usaha kecil", "Kios makanan", "Galeri kriya lokal"],
    highlight: "Pusat kreativitas UMKM rumahan di Sosromenduran.",
    icon: "🧵",
    galeri: [
      "Kriya batik dan tenun warga",
      "Dapur angkringan dengan porsi kecil",
      "Gerobak makanan tradisional",
      "Toko kerajinan di gang kampung",
    ],
  },
  {
    slug: "gandekan",
    nama: "Gandekan",
    tagline: "Warisan kurir keraton",
    deskripsi:
      "Gandekan mempertahankan sentuhan sejarah keraton, dengan suasana kampung tua dan jalan yang terkait kisah kurir istana.",
    sejarah:
      "Nama Gandekan terhubung dengan tradisi pengiriman pesan keraton, sehingga kampung ini masih menyimpan aura sejarah dan ritus lama.",
    potensi: ["Heritage keraton", "Rute sejarah", "Suasana kampung tua"],
    keunggulan: ["Cerita kurir keraton", "Jalan kampung tradisional", "Komunitas guyub"],
    fasilitas: ["Rumah tradisional", "Ritual lokal", "Akses ke jalur sejarah"],
    highlight: "Kampung tua dengan akar kisah kurir dan Keraton.",
    icon: "📜",
    galeri: [
      "Jalan kampung bersejarah",
      "Rumah tradisional berwarna hangat",
      "Warga berkumpul dalam tradisi lokal",
      "Sudut keraton yang terinspirasi dalam detail kampung",
    ],
  },
];
