import { faq, FAQAction } from "@/data/faq";
import { kampungList } from "@/data/kampung";
import { umkmList } from "@/data/umkm";

function detectIntent(message: string): FAQAction | null {
  const input = message.toLowerCase();

  const found = faq.find((item) =>
    item.keywords.some((keyword) => input.includes(keyword))
  );

  return found?.action ?? null;
}

function handleGreeting(): string {
  return "Halo! 👋 Sugeng rawuh di Bergandeng Tengen. Ada yang bisa saya bantu mengenai Kalurahan Sosromenduran?";
}

function handleCountKampung(): string {
  return `Kalurahan Sosromenduran memiliki ${kampungList.length} kampung.`;
}

function handleListKampung(): string {
  return (
    "Daftar kampung di Kalurahan Sosromenduran:\n\n" +
    kampungList.map((k) => `• ${k.nama}`).join("\n")
  );
}

function handleListUMKM(): string {
  return (
    "Berikut beberapa UMKM di Sosromenduran:\n\n" +
    umkmList.map((u) => `${u.emoji} ${u.nama}`).join("\n")
  );
}

function handleKuliner(): string {
  const kuliner = umkmList.filter(
    (item) => item.jenis.toLowerCase() === "kuliner"
  );

  return (
    "Rekomendasi kuliner:\n\n" +
    kuliner.map((k) => `${k.emoji} ${k.nama}`).join("\n")
  );
}

export function getResponse(message: string): string {
  const intent = detectIntent(message);

  switch (intent) {
    case "GREETING":
      return handleGreeting();

    case "COUNT_KAMPUNG":
      return handleCountKampung();

    case "LIST_KAMPUNG":
      return handleListKampung();

    case "LIST_UMKM":
      return handleListUMKM();

    case "LIST_KULINER":
      return handleKuliner();

    default:
      return "Maaf, saya belum memahami pertanyaan tersebut. Silakan coba tanyakan tentang kampung, UMKM, kuliner, wisata, atau profil Kalurahan.";
  }
}