export type FAQAction =
  | "GREETING"
  | "COUNT_KAMPUNG"
  | "LIST_KAMPUNG"
  | "LIST_UMKM"
  | "LIST_KULINER"
  | "SHOW_PROFIL"
  | "SHOW_WISATA"
  | "SHOW_TIM";

export interface FAQItem {
  id: number;
  keywords: string[];
  action: FAQAction;
}

export const faq: FAQItem[] = [
  {
    id: 1,
    keywords: ["halo", "hai", "hi", "assalamualaikum"],
    action: "GREETING",
  },
  {
    id: 2,
    keywords: ["berapa kampung", "jumlah kampung"],
    action: "COUNT_KAMPUNG",
  },
  {
    id: 3,
    keywords: ["kampung apa saja", "daftar kampung"],
    action: "LIST_KAMPUNG",
  },
  {
    id: 4,
    keywords: ["umkm"],
    action: "LIST_UMKM",
  },
  {
    id: 5,
    keywords: ["kuliner", "makanan", "tempat makan"],
    action: "LIST_KULINER",
  },
  {
    id: 6,
    keywords: ["profil", "sejarah"],
    action: "SHOW_PROFIL",
  },
  {
    id: 7,
    keywords: ["wisata", "destinasi"],
    action: "SHOW_WISATA",
  },
  {
    id: 8,
    keywords: ["tim", "developer", "kkn"],
    action: "SHOW_TIM",
  },
];