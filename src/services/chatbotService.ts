// ==========================
// IMPORTS
// ==========================
import { faq, type FAQAction } from "@/data/faq";
import { profilKalurahan, type ProfilKalurahan } from "@/data/profil";
import { kampungList, type Kampung } from "@/data/kampung";
import { umkmList, type UMKM } from "@/data/umkm";
import { wisataList, type Wisata } from "@/data/wisata";
import { timDeveloper, type TeamMember } from "@/data/tim";

// ==========================
// TYPES
// ==========================
interface SearchResult<T> {
  item: T;
  matchedFields: string[];
}

// ==========================
// UTILITIES
// ==========================
function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeQuery(message: string): string[] {
  return normalizeText(message)
    .split(" ")
    .filter(Boolean);
}

function isQueryMatch(field: string, query: string, tokens: string[]): boolean {
  const normalizedField = normalizeText(field);

  if (!normalizedField) {
    return false;
  }

  if (!query) {
    return false;
  }

  return (
    normalizedField.includes(query) ||
    tokens.every((token) => normalizedField.includes(token))
  );
}

function collectTextFields(values: Array<string | undefined | null>): string[] {
  return values.filter((value): value is string => Boolean(value && value.trim()));
}

function buildBulletList(items: string[]): string {
  return items.map((item) => `• ${item}`).join("\n");
}

function joinWithSeparator(lines: string[]): string {
  return lines.filter(Boolean).join("\n");
}

function createSection(title: string, content: string): string {
  return [title, content].filter(Boolean).join("\n\n");
}

function searchRecords<T>(
  items: T[],
  extractor: (item: T) => string[],
  message: string
): SearchResult<T>[] {
  const query = normalizeText(message);
  const tokens = tokenizeQuery(message);

  if (!query) {
    return [];
  }

  return items
    .map((item) => {
      const fields = extractor(item);
      const matchedFields = fields.filter((field) => isQueryMatch(field, query, tokens));

      if (matchedFields.length === 0) {
        return null;
      }

      return {
        item,
        matchedFields,
      };
    })
    .filter((entry): entry is SearchResult<T> => Boolean(entry));
}

function getProfileSearchFields(profile: ProfilKalurahan): string[] {
  return collectTextFields([
    profile.nama,
    profile.kemantren,
    profile.kota,
    profile.provinsi,
    profile.deskripsi,
    profile.sejarah,
    profile.visi,
    ...profile.misi,
    ...profile.potensi,
    profile.batasWilayah.utara,
    profile.batasWilayah.selatan,
    profile.batasWilayah.timur,
    profile.batasWilayah.barat,
    profile.kontak.alamat,
    profile.kontak.telepon,
    profile.kontak.email,
    profile.kontak.website,
    profile.sosial.pkk,
    profile.sosial.karangTaruna,
    profile.sosial.bankSampah,
    profile.sosial.posyandu,
  ]);
}

function getKampungSearchFields(kampung: Kampung): string[] {
  return collectTextFields([
    kampung.nama,
    kampung.tagline,
    kampung.deskripsi,
    kampung.sejarah,
    kampung.highlight,
    ...kampung.potensi,
    ...kampung.keunggulan,
    ...kampung.fasilitas,
  ]);
}

function getUMKMSearchFields(umkm: UMKM): string[] {
  return collectTextFields([
    umkm.nama,
    umkm.kategori,
    umkm.deskripsi,
    umkm.kampung,
    umkm.alamat,
    umkm.jamOperasional,
    umkm.kontak,
    umkm.instagram,
    umkm.maps,
    ...umkm.produkUnggulan,
  ]);
}

function getWisataSearchFields(wisata: Wisata): string[] {
  return collectTextFields([
    wisata.nama,
    wisata.kategori,
    wisata.deskripsi,
    wisata.kampung,
    wisata.alamat,
    wisata.jamOperasional,
    wisata.tiket,
    wisata.highlight,
  ]);
}

function getTeamSearchFields(member: TeamMember): string[] {
  return collectTextFields([member.nama, member.peran, member.inisial]);
}

function summarizeCount(label: string, total: number): string {
  return `${label} saat ini tercatat ${total} item.`;
}

// ==========================
// INTENT DETECTION
// ==========================
function detectIntent(message: string): FAQAction | null {
  const input = normalizeText(message);

  if (!input) {
    return null;
  }

  const found = faq.find((item) =>
    item.keywords.some((keyword) => input.includes(normalizeText(keyword)))
  );

  return found?.action ?? null;
}

// ==========================
// FORMATTERS
// ==========================
function formatProfile(profile: ProfilKalurahan): string {
  return joinWithSeparator([
    `👤 ${profile.nama}`,
    profile.deskripsi,
    "",
    `Kemantren: ${profile.kemantren}`,
    `Kota: ${profile.kota}`,
    `Provinsi: ${profile.provinsi}`,
    "",
    `Visi: ${profile.visi}`,
    "",
    `Misi:`,
    buildBulletList(profile.misi),
    "",
    `Potensi:`,
    buildBulletList(profile.potensi),
    "",
    `Jumlah kampung: ${profile.jumlahKampung}`,
    `Daftar kampung: ${profile.daftarKampung.join(", ")}`,
    "",
    `Kontak:`,
    buildBulletList([
      `Alamat: ${profile.kontak.alamat}`,
      `Telepon: ${profile.kontak.telepon}`,
      `Email: ${profile.kontak.email}`,
      `Website: ${profile.kontak.website}`,
    ]),
    "",
    `Sosial:`,
    buildBulletList([
      `PKK: ${profile.sosial.pkk}`,
      `Karang Taruna: ${profile.sosial.karangTaruna}`,
      `Bank Sampah: ${profile.sosial.bankSampah}`,
      `Posyandu: ${profile.sosial.posyandu}`,
    ]),
  ]);
}

function formatKampung(kampung: Kampung): string {
  return joinWithSeparator([
    `${kampung.icon} ${kampung.nama}`,
    kampung.tagline,
    "",
    kampung.deskripsi,
    "",
    `Sejarah: ${kampung.sejarah}`,
    "",
    `Highlight: ${kampung.highlight}`,
    "",
    `Potensi: ${kampung.potensi.join(", ")}`,
    `Keunggulan: ${kampung.keunggulan.join(", ")}`,
    `Fasilitas: ${kampung.fasilitas.join(", ")}`,
  ]);
}

function formatUMKM(umkm: UMKM): string {
  return joinWithSeparator([
    `${umkm.icon} ${umkm.nama}`,
    `${umkm.kategori} • ${umkm.kampung}`,
    "",
    umkm.deskripsi,
    "",
    `Produk unggulan: ${umkm.produkUnggulan.join(", ")}`,
    `Alamat: ${umkm.alamat}`,
    `Jam operasional: ${umkm.jamOperasional}`,
    `Kontak: ${umkm.kontak}`,
    `Instagram: ${umkm.instagram}`,
    `Maps: ${umkm.maps}`,
  ]);
}

function formatWisata(wisata: Wisata): string {
  return joinWithSeparator([
    `${wisata.icon} ${wisata.nama}`,
    `${wisata.kategori} • ${wisata.kampung}`,
    "",
    wisata.deskripsi,
    "",
    `Highlight: ${wisata.highlight}`,
    `Alamat: ${wisata.alamat}`,
    `Jam operasional: ${wisata.jamOperasional}`,
    `Tiket: ${wisata.tiket}`,
  ]);
}

function formatTeamMember(member: TeamMember): string {
  return `${member.inisial} • ${member.nama} — ${member.peran}`;
}

function formatList(items: string[]): string {
  return items.join("\n");
}

// ==========================
// PROFILE SEARCH
// ==========================
function searchProfile(message: string): ProfilKalurahan | null {
  const query = normalizeText(message);

  if (!query) {
    return null;
  }

  const profileFields = getProfileSearchFields(profilKalurahan);
  const tokens = tokenizeQuery(message);

  const hasMatch = profileFields.some((field) => isQueryMatch(field, query, tokens));

  return hasMatch ? profilKalurahan : null;
}

function handleShowProfile(): string {
  return createSection(
    "👤 Profil Kalurahan",
    formatProfile(profilKalurahan)
  );
}

// ==========================
// KAMPUNG SEARCH
// ==========================
function searchKampung(message: string): Kampung[] {
  return searchRecords(kampungList, getKampungSearchFields, message).map(
    (entry) => entry.item
  );
}

function handleListKampung(): string {
  const list = kampungList.map((kampung) => `${kampung.icon} ${kampung.nama}`);

  return createSection(
    "🏘️ Daftar kampung",
    formatList(list)
  );
}

function handleCountKampung(): string {
  return createSection(
    "📊 Jumlah kampung",
    `Kalurahan Sosromenduran memiliki ${kampungList.length} kampung berdasarkan data terbarunya.`
  );
}

// ==========================
// UMKM SEARCH
// ==========================
function searchUMKM(message: string): UMKM[] {
  return searchRecords(umkmList, getUMKMSearchFields, message).map(
    (entry) => entry.item
  );
}

function handleListUMKM(): string {
  const list = umkmList.map((umkm) => `${umkm.icon} ${umkm.nama} (${umkm.kategori})`);

  return createSection(
    "🛍️ Daftar UMKM",
    formatList(list)
  );
}

function handleKuliner(): string {
  const kuliner = umkmList.filter((item) => item.kategori === "Kuliner");

  if (kuliner.length === 0) {
    return createSection(
      "🍜 Kuliner",
      "Belum ada data kuliner yang tersedia."
    );
  }

  const list = kuliner.map((item) => `${item.icon} ${item.nama} — ${item.deskripsi}`);

  return createSection(
    "🍜 Rekomendasi kuliner",
    formatList(list)
  );
}

// ==========================
// WISATA SEARCH
// ==========================
function searchWisata(message: string): Wisata[] {
  return searchRecords(wisataList, getWisataSearchFields, message).map(
    (entry) => entry.item
  );
}

function handleListWisata(): string {
  const list = wisataList.map((wisata) => `${wisata.icon} ${wisata.nama} (${wisata.kategori})`);

  return createSection(
    "📍 Daftar wisata",
    formatList(list)
  );
}

// ==========================
// TEAM SEARCH
// ==========================
function searchTim(message: string): TeamMember[] {
  return searchRecords(timDeveloper, getTeamSearchFields, message).map(
    (entry) => entry.item
  );
}

function handleListTim(): string {
  const list = timDeveloper.map((member) => formatTeamMember(member));

  return createSection(
    "👨‍💻 Tim KKN",
    formatList(list)
  );
}

// ==========================
// GLOBAL SEARCH
// ==========================
function searchGlobal(message: string): string | null {
  const query = normalizeText(message);

  if (!query) {
    return null;
  }

  const profileMatch = searchProfile(message);
  const kampungMatches = searchKampung(message);
  const umkmMatches = searchUMKM(message);
  const wisataMatches = searchWisata(message);
  const timMatches = searchTim(message);

  const sections: string[] = [];

  if (profileMatch) {
    sections.push(createSection("👤 Profil", formatProfile(profileMatch)));
  }

  if (kampungMatches.length > 0) {
    const content = kampungMatches
      .slice(0, 3)
      .map((kampung) => formatKampung(kampung))
      .join("\n\n");

    sections.push(createSection("🏘️ Kampung", content));
  }

  if (umkmMatches.length > 0) {
    const content = umkmMatches
      .slice(0, 3)
      .map((umkm) => formatUMKM(umkm))
      .join("\n\n");

    sections.push(createSection("🛍️ UMKM", content));
  }

  if (wisataMatches.length > 0) {
    const content = wisataMatches
      .slice(0, 3)
      .map((wisata) => formatWisata(wisata))
      .join("\n\n");

    sections.push(createSection("📍 Wisata", content));
  }

  if (timMatches.length > 0) {
    const content = timMatches
      .slice(0, 3)
      .map((member) => formatTeamMember(member))
      .join("\n");

    sections.push(createSection("👨‍💻 Tim", content));
  }

  if (sections.length === 0) {
    return null;
  }

  return sections.join("\n\n");
}

// ==========================
// INTENT HANDLER
// ==========================
function executeIntent(intent: FAQAction): string {
  switch (intent) {
    case "GREETING":
      return createSection(
        "👋 Salam",
        `Halo! Saya adalah chatbot lokal informasi Kalurahan Sosromenduran. Saya dapat membantu menampilkan profil, kampung, UMKM, wisata, dan tim.`
      );

    case "SHOW_PROFILE":
      return handleShowProfile();

    case "COUNT_KAMPUNG":
      return handleCountKampung();

    case "LIST_KAMPUNG":
      return handleListKampung();

    case "LIST_UMKM":
      return handleListUMKM();

    case "LIST_KULINER":
      return handleKuliner();

    case "LIST_WISATA":
      return handleListWisata();

    case "LIST_TIM":
      return handleListTim();

    default:
      return createSection(
        "❓ Jawaban",
        "Saya belum menemukan jawaban yang relevan untuk pertanyaan tersebut. Silakan coba tanyakan tentang profil, kampung, UMKM, kuliner, wisata, atau tim."
      );
  }
}

// ==========================
// GET RESPONSE
// ==========================
export function getResponse(message: string): string {
  const intent = detectIntent(message);

  if (intent) {
    return executeIntent(intent);
  }

  const globalResult = searchGlobal(message);

  if (globalResult) {
    return globalResult;
  }

  const fallback = createSection(
    "❓ Jawaban",
    [
      `Saya belum menemukan informasi yang sesuai dengan permintaan Anda.`,
      `Anda dapat bertanya seperti:`,
      `• profil kalurahan`,
      `• berapa jumlah kampung`,
      `• daftar umkm`,
      `• wisata di sosromenduran`,
      `• anggota tim`,
      `• kuliner di daerah ini`,
    ].join("\n")
  );

  return fallback;
}