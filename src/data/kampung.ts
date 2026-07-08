export type Kampung = {
  slug: string;
  nama: string;
  tagline: string;
  deskripsi: string;
  keunggulan: string[];
  highlight: string;
  icon: string;
};

export const kampungList: Kampung[] = [
  {
    slug: "sosrowijayan",
    nama: "Sosrowijayan",
    tagline: "Gerbang Malioboro yang tak pernah tidur",
    deskripsi:
      "Kampung ikonik di sisi utara Sosromenduran, dikenal sebagai kantong wisatawan backpacker dengan gang-gang legendaris dan losmen tua bernuansa klasik Jogja.",
    keunggulan: ["Wisata heritage", "Losmen & guesthouse", "Kuliner malam"],
    highlight: "Titik masuk paling ramai menuju Malioboro",
    icon: "🏮",
  },
  {
    slug: "sosromenduran",
    nama: "Sosromenduran",
    tagline: "Denyut budaya Gedongtengen",
    deskripsi:
      "Kampung induk yang menjadi jantung kalurahan, kaya akan aktivitas warga, paguyuban, dan tradisi kerukunan khas Jawa.",
    keunggulan: ["Kegiatan warga", "Tradisi gotong royong", "Sanggar seni"],
    highlight: "Pusat kegiatan sosial dan budaya",
    icon: "🎭",
  },
  {
    slug: "jogonegaran",
    nama: "Jogonegaran",
    tagline: "Kampung penjaga sejarah",
    deskripsi:
      "Menyimpan jejak abdi dalem Keraton dengan bangunan lama yang masih terawat, cocok untuk penelusuran sejarah kota Yogyakarta.",
    keunggulan: ["Bangunan cagar budaya", "Wisata sejarah", "Homestay"],
    highlight: "Rumah bagi jejak abdi dalem",
    icon: "🏛️",
  },
  {
    slug: "dagen",
    nama: "Dagen",
    tagline: "Surga kuliner Malioboro",
    deskripsi:
      "Jalan Dagen dikenal sebagai koridor kuliner dan penginapan yang menghidupkan sisi timur Sosromenduran sepanjang hari.",
    keunggulan: ["Kuliner", "Hotel & penginapan", "Belanja oleh-oleh"],
    highlight: "Deretan hotel dan tempat makan legendaris",
    icon: "🍜",
  },
  {
    slug: "sosrodipuran",
    nama: "Sosrodipuran",
    tagline: "Kampung ramah keluarga",
    deskripsi:
      "Kampung hunian yang tenang dengan komunitas warga yang aktif menjaga kebersihan dan lingkungan hijau.",
    keunggulan: ["Kampung hijau", "Bank sampah", "PKK aktif"],
    highlight: "Model kampung tertata di tengah kota",
    icon: "🌿",
  },
  {
    slug: "pajeksan",
    nama: "Pajeksan",
    tagline: "Gang kreatif penuh cerita",
    deskripsi:
      "Kampung padat yang dinamis dengan UMKM rumahan, dari makanan tradisional hingga jasa kreatif warga.",
    keunggulan: ["UMKM rumahan", "Kreativitas warga", "Kuliner khas"],
    highlight: "Pusat UMKM rumahan Sosromenduran",
    icon: "🧵",
  },
  {
    slug: "gandekan",
    nama: "Gandekan",
    tagline: "Warisan kurir keraton",
    deskripsi:
      "Namanya berasal dari 'Gandhek' — utusan Keraton — mencerminkan kampung tua dengan cerita historis yang lekat dengan istana.",
    keunggulan: ["Sejarah Keraton", "Kampung tua", "Guyub warga"],
    highlight: "Kampung dengan akar sejarah Keraton",
    icon: "📜",
  },
];

export const umkmList = [
  { nama: "Gudeg Yu Sri", jenis: "Kuliner", deskripsi: "Gudeg legendaris resep turun-temurun.", emoji: "🍚" },
  { nama: "Bakmi Jawa Pak Rebo", jenis: "Kuliner", deskripsi: "Bakmi Jawa aroma arang malam hari.", emoji: "🍜" },
  { nama: "Batik Sosro", jenis: "Kriya", deskripsi: "Batik tulis motif kontemporer.", emoji: "🎨" },
  { nama: "Kopi Gandekan", jenis: "Kuliner", deskripsi: "Kedai kopi mungil bergaya klasik.", emoji: "☕" },
  { nama: "Angkringan Mbak Tum", jenis: "Kuliner", deskripsi: "Nasi kucing & wedang jahe hangat.", emoji: "🍢" },
  { nama: "Wayang Kulit Mini", jenis: "Kriya", deskripsi: "Souvenir wayang tangan pengrajin lokal.", emoji: "🪅" },
];

export const galeriFoto = [
  { alt: "Kegiatan senam warga", emoji: "🤸" },
  { alt: "Kerja bakti kampung", emoji: "🧹" },
  { alt: "Pentas budaya", emoji: "🎭" },
  { alt: "Bazar UMKM", emoji: "🛍️" },
  { alt: "Posyandu balita", emoji: "👶" },
  { alt: "Tirakatan 17 Agustus", emoji: "🇮🇩" },
  { alt: "Latihan karawitan", emoji: "🎶" },
  { alt: "Jalan sehat", emoji: "🚶" },
];

export const timDeveloper = [
  { nama: "Ketua Tim", peran: "Koordinator KKN", inisial: "KT" },
  { nama: "Anggota 1", peran: "Frontend Developer", inisial: "A1" },
  { nama: "Anggota 2", peran: "UI/UX Designer", inisial: "A2" },
  { nama: "Anggota 3", peran: "Content Writer", inisial: "A3" },
  { nama: "Anggota 4", peran: "Data & Riset", inisial: "A4" },
  { nama: "Anggota 5", peran: "Dokumentasi", inisial: "A5" },
];
