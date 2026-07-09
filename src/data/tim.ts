export interface TeamMember {
  nama: string;
  peran: string;
  divisi: string;
  deskripsi: string;
  kontribusi: string[];
  keahlian: string[];
  inisial: string;
}

export const timDeveloper: TeamMember[] = [
  {
    nama: "Alfian",
    peran: "Web Developer",
    divisi: "Teknologi Informasi",
    inisial: "A",
    deskripsi:
      "Alfian merupakan anggota Tim KKN UGM yang berperan sebagai Web Developer dalam pengembangan website Bergandeng Tengen.",
    kontribusi: [
      "Mengembangkan website Bergandeng Tengen",
      "Membangun fitur chatbot informasi",
      "Mengembangkan antarmuka (frontend)",
      "Integrasi data website",
    ],
    keahlian: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
    ],
  },

  {
    nama: "Fauzan",
    peran: "Web Developer",
    divisi: "Teknologi Informasi",
    inisial: "F",
    deskripsi:
      "Fauzan membantu pengembangan website Bergandeng Tengen serta implementasi berbagai fitur pendukung sistem.",
    kontribusi: [
      "Pengembangan frontend",
      "Optimasi tampilan website",
      "Testing fitur",
      "Integrasi komponen",
    ],
    keahlian: [
      "React",
      "JavaScript",
      "TypeScript",
      "UI Development",
    ],
  },

  {
    nama: "Najwa",
    peran: "Pemetaan",
    divisi: "Geospasial",
    inisial: "N",
    deskripsi:
      "Najwa bertanggung jawab dalam penyusunan data spasial dan pemetaan potensi Kalurahan Sosromenduran.",
    kontribusi: [
      "Pemetaan wilayah",
      "Penyusunan data spasial",
      "Inventarisasi potensi kampung",
      "Visualisasi peta digital",
    ],
    keahlian: [
      "GIS",
      "ArcGIS",
      "Pemetaan",
      "Analisis Spasial",
    ],
  },

  {
    nama: "Bunga",
    peran: "Content Writer",
    divisi: "Publikasi",
    inisial: "B",
    deskripsi:
      "Bunga menyusun berbagai konten informasi mengenai Kalurahan Sosromenduran untuk website dan media publikasi.",
    kontribusi: [
      "Menulis artikel",
      "Menyusun profil kampung",
      "Konten wisata",
      "Konten UMKM",
    ],
    keahlian: [
      "Copywriting",
      "Content Writing",
      "Editing",
    ],
  },

  {
    nama: "Fia",
    peran: "Content Writer",
    divisi: "Publikasi",
    inisial: "FI",
    deskripsi:
      "Fia membantu penyusunan dokumentasi serta berbagai konten informasi yang ditampilkan pada website Bergandeng Tengen.",
    kontribusi: [
      "Dokumentasi kegiatan",
      "Artikel website",
      "Konten publikasi",
      "Penyuntingan konten",
    ],
    keahlian: [
      "Writing",
      "Editing",
      "Content Planning",
    ],
  },
];