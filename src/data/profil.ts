export interface ProfilKalurahan {
  nama: string;
  kemantren: string;
  kota: string;
  provinsi: string;

  deskripsi: string;
  sejarah: string;

  visi: string;
  misi: string[];

  jumlahKampung: number;
  daftarKampung: string[];

  potensi: string[];

  batasWilayah: {
    utara: string;
    selatan: string;
    timur: string;
    barat: string;
  };

  kontak: {
    alamat: string;
    telepon: string;
    email: string;
    website: string;
  };

  sosial: {
    pkk: string;
    karangTaruna: string;
    bankSampah: string;
    posyandu: string;
  };
}

export const profilKalurahan: ProfilKalurahan = {
  nama: "Kalurahan Sosromenduran",
  kemantren: "Gedongtengen",
  kota: "Kota Yogyakarta",
  provinsi: "Daerah Istimewa Yogyakarta",

  deskripsi:
    "Kalurahan Sosromenduran merupakan salah satu kalurahan di Kemantren Gedongtengen, Kota Yogyakarta. Wilayah ini berada di kawasan strategis yang berdekatan dengan Jalan Malioboro sehingga dikenal sebagai kawasan wisata, perdagangan, jasa, penginapan, dan aktivitas ekonomi masyarakat.",

  sejarah:
    "Sosromenduran merupakan kawasan yang berkembang seiring pertumbuhan Kota Yogyakarta sebagai pusat perdagangan, pariwisata, dan budaya. Beberapa kampung di wilayah ini memiliki nilai sejarah dan menjadi bagian dari perkembangan kawasan Malioboro serta aktivitas masyarakat sejak masa lampau.",

  visi:
    "Mewujudkan Kalurahan Sosromenduran yang maju, nyaman, berbudaya, dan berdaya saing melalui pelayanan publik, pemberdayaan masyarakat, serta pengembangan potensi lokal.",

  misi: [
    "Meningkatkan kualitas pelayanan kepada masyarakat.",
    "Mendorong pemberdayaan masyarakat dan UMKM.",
    "Menjaga kebersihan, ketertiban, dan kelestarian lingkungan.",
    "Melestarikan budaya lokal dan potensi wisata.",
    "Meningkatkan pemanfaatan teknologi informasi dalam pelayanan dan promosi wilayah."
  ],

  jumlahKampung: 7,

  daftarKampung: [
    "Sosrowijayan",
    "Sosromenduran",
    "Jogonegaran",
    "Dagen",
    "Sosrodipuran",
    "Pajeksan",
    "Gandekan"
  ],

  potensi: [
    "Pariwisata",
    "UMKM",
    "Kuliner",
    "Penginapan",
    "Ekonomi kreatif",
    "Budaya",
    "Kampung perkotaan"
  ],

  batasWilayah: {
    utara: "-",
    selatan: "-",
    timur: "-",
    barat: "-"
  },

  kontak: {
    alamat: "Kantor Kalurahan Sosromenduran, Gedongtengen, Kota Yogyakarta",
    telepon: "-",
    email: "-",
    website: "-"
  },

  sosial: {
    pkk: "PKK aktif melaksanakan berbagai kegiatan pemberdayaan keluarga dan masyarakat.",
    karangTaruna:
      "Karang Taruna menjadi wadah pengembangan kepemudaan dan kegiatan sosial masyarakat.",
    bankSampah:
      "Terdapat kegiatan pengelolaan sampah berbasis masyarakat sebagai bagian dari upaya menjaga lingkungan.",
    posyandu:
      "Posyandu secara rutin melaksanakan pelayanan kesehatan ibu dan anak bersama tenaga kesehatan setempat."
  }
};