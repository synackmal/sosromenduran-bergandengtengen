export type FAQAction =
  | "GREETING"

  | "SHOW_PROFILE"

  | "COUNT_KAMPUNG"
  | "LIST_KAMPUNG"

  | "LIST_UMKM"
  | "LIST_KULINER"

  | "LIST_WISATA"

  | "LIST_TIM";

export interface FAQItem {
  keywords: string[];
  action: FAQAction;
}

export const faq: FAQItem[] = [
  {
    keywords: [
      "halo",
      "hai",
      "hi",
      "selamat pagi",
      "selamat siang",
      "selamat sore",
      "selamat malam",
      "assalamualaikum"
    ],
    action: "GREETING",
  },

  {
    keywords: [
      "profil",
      "tentang sosromenduran",
      "kalurahan",
      "apa itu sosromenduran",
      "deskripsi"
    ],
    action: "SHOW_PROFILE",
  },

  {
    keywords: [
      "berapa kampung",
      "jumlah kampung",
      "ada berapa kampung"
    ],
    action: "COUNT_KAMPUNG",
  },

  {
    keywords: [
      "daftar kampung",
      "nama kampung",
      "kampung apa saja"
    ],
    action: "LIST_KAMPUNG",
  },

  {
    keywords: [
      "umkm",
      "usaha",
      "produk lokal"
    ],
    action: "LIST_UMKM",
  },

  {
    keywords: [
      "kuliner",
      "makanan",
      "tempat makan",
      "makan"
    ],
    action: "LIST_KULINER",
  },

  {
    keywords: [
      "wisata",
      "tempat wisata",
      "landmark",
      "destinasi"
    ],
    action: "LIST_WISATA",
  },

  {
    keywords: [
      "tim",
      "anggota",
      "kkn",
      "developer",
      "siapa yang membuat"
    ],
    action: "LIST_TIM",
  },
];