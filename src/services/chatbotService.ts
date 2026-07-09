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

function joinWithSeparator(lines: string[]): string {
  return lines.filter(Boolean).join("\n");
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
  return collectTextFields([
    member.nama,
    member.peran,
    member.inisial,
    member.divisi,
    member.deskripsi,
    ...member.kontribusi,
    ...member.keahlian,
  ]);
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
  return `
🏡 ${profile.nama}

Kalurahan Sosromenduran berada di Kemantren Gedongtengen, Kota Yogyakarta.

Wilayah ini dikenal memiliki beragam potensi wisata, UMKM, serta kehidupan masyarakat yang aktif dan harmonis.

Kalau ingin informasi yang lebih lengkap, kamu bisa membuka halaman Profil.
`.trim();
}

function formatKampung(kampung: Kampung): string {
  return `
${kampung.icon} ${kampung.nama}

${kampung.nama} merupakan salah satu kampung di Kalurahan Sosromenduran. Dikenal dengan identitas "${kampung.tagline}", kawasan ini memiliki keunikan tersendiri.

${kampung.deskripsi}

📍 Highlight:
${kampung.highlight}
`.trim();
}

function formatUMKM(umkm: UMKM): string {
  return `
${umkm.icon} ${umkm.nama}

Kalau kamu sedang mencari informasi tentang ${umkm.kategori.toLowerCase()} di sekitar Sosromenduran, ${umkm.nama} bisa jadi salah satu pilihan.

${umkm.deskripsi}

📍 Lokasi:
${umkm.alamat}

🕘 Jam buka:
${umkm.jamOperasional}
`.trim();
}

function formatWisata(wisata: Wisata): string {
  return `
${wisata.icon} ${wisata.nama}

${wisata.nama} merupakan destinasi ${wisata.kategori.toLowerCase()} yang berlokasi di kawasan sekitar. 

${wisata.deskripsi}

📍 Lokasi:
${wisata.alamat}

🕘 Jam buka:
${wisata.jamOperasional}
`.trim();
}

function formatTeamMember(member: TeamMember): string {
  return `
👨‍💻 ${member.nama}

${member.nama} merupakan salah satu anggota Tim KKN-PPM UGM yang bertugas sebagai ${member.peran}.

${member.deskripsi}

😊 Senang bisa berkenalan!
`.trim();
}

function formatList(items: string[], intro?: string): string {
  const lines = items.map((item) => `• ${item}`);
  const content = [intro, "", ...lines].filter(
    (line): line is string => typeof line === "string" && line.length > 0
  );

  return joinWithSeparator(content);
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
  return formatProfile(profilKalurahan);
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
  return formatList(list, "Di Sosromenduran ada beberapa kampung yang menarik, antara lain:");
}

function handleCountKampung(): string {
  return `Di Sosromenduran ada ${kampungList.length} kampung, dan masing-masing punya karakter sendiri.`;
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
  const list = umkmList.map((umkm) => `${umkm.icon} ${umkm.nama}`);
  return formatList(list, "🛍️ UMKM yang tersedia:");
}

function handleKuliner(): string {
  const kuliner = umkmList.filter((item) => item.kategori === "Kuliner");

  if (kuliner.length === 0) {
    return "Belum ada data kuliner yang tersedia saat ini.";
  }

  const list = kuliner.map((item) => `${item.icon} ${item.nama} — ${item.deskripsi}`);
  return formatList(list, "Kalau kamu cari kuliner, beberapa tempat yang sering jadi favorit:");
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
  return formatList(list, "Kalau ingin melihat suasana sekitar, ada beberapa tempat yang menarik:");
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
  const list = timDeveloper.map((member) => `👨‍💻 ${member.nama} — ${member.peran}`);
  return formatList(list, "Tim yang terlibat dalam pengembangan website ini:");
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
    sections.push(formatProfile(profileMatch));
  }

  if (kampungMatches.length > 0) {
    const content = kampungMatches
      .slice(0, 3)
      .map((kampung) => formatKampung(kampung))
      .join("\n\n");

    sections.push(content);
  }

  if (umkmMatches.length > 0) {
    const content = umkmMatches
      .slice(0, 3)
      .map((umkm) => formatUMKM(umkm))
      .join("\n\n");

    sections.push(content);
  }

  if (wisataMatches.length > 0) {
    const content = wisataMatches
      .slice(0, 3)
      .map((wisata) => formatWisata(wisata))
      .join("\n\n");

    sections.push(content);
  }

  if (timMatches.length > 0) {
    const content = timMatches
      .slice(0, 3)
      .map((member) => formatTeamMember(member))
      .join("\n\n");

    sections.push(content);
  }

  if (sections.length === 0) {
    return null;
  }

  const intro = "";

  return [intro, ...sections].filter(Boolean).join("\n\n");
}

// ==========================
// INTENT HANDLER
// ==========================
function executeIntent(intent: FAQAction): string {
  switch (intent) {
    case "GREETING":
      return `
Halo! 👋

Sugeng rawuh di Bergandeng Tengen.

Aku Mas Menduran. Kalau kamu ingin mencari informasi mengenai kampung, UMKM, wisata, kuliner, ataupun Tim KKN, tinggal tanya saja ya. 😊
`.trim();

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
      return `
Maaf, aku belum menemukan informasi yang sesuai. 😅

Coba gunakan kata kunci seperti:

• profil
• kampung
• UMKM
• kuliner
• wisata
• tim

Aku akan coba bantu mencarikannya.
`.trim();
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

  return `
Maaf, aku belum menemukan informasi yang sesuai. 😅

Coba gunakan kata kunci seperti:

• profil
• kampung
• UMKM
• kuliner
• wisata
• tim

Aku akan coba bantu mencarikannya.
`.trim();
}