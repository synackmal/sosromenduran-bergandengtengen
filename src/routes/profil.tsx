import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Users, Landmark, Compass } from "lucide-react";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Kalurahan — Sosromenduran" },
      { name: "description", content: "Profil geografis, demografis, dan sejarah singkat Kalurahan Sosromenduran, Gedongtengen, Yogyakarta." },
      { property: "og:title", content: "Profil Kalurahan Sosromenduran" },
      { property: "og:description", content: "Kenali sisi geografis, demografis, dan sejarah Sosromenduran." },
    ],
  }),
  component: Profil,
});

function Profil() {
  return (
    <div>
      <PageHero
        eyebrow="Profil Umum"
        title="Kalurahan Sosromenduran"
        description="Kalurahan di Kecamatan Gedongtengen, Kota Yogyakarta — bersebelahan langsung dengan Jalan Malioboro dan Stasiun Tugu."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Luas Wilayah", value: "± 46 Ha" },
            { icon: Users, label: "Jumlah Penduduk", value: "± 8.500 jiwa" },
            { icon: Landmark, label: "Kampung", value: "7 Kampung" },
            { icon: Compass, label: "Ketinggian", value: "± 114 mdpl" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="mt-1 font-display text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Section title="Letak Geografis">
              <p>
                Kalurahan Sosromenduran terletak di Kecamatan Gedongtengen, Kota Yogyakarta.
                Berbatasan dengan Kalurahan Pringgokusuman di sebelah utara, Kalurahan Ngupasan
                di sebelah timur (dibelah Jalan Malioboro), Kalurahan Ngampilan di sebelah selatan,
                dan Kalurahan Bumijo di sebelah barat.
              </p>
              <p>
                Posisinya sangat strategis — hanya beberapa langkah dari kawasan Malioboro,
                Stasiun Tugu, dan Titik Nol Kilometer Yogyakarta.
              </p>
            </Section>

            <Section title="Sejarah Singkat">
              <p>
                Nama "Sosromenduran" berakar dari tradisi penamaan kampung di sekitar Keraton
                Yogyakarta, banyak yang berkaitan dengan abdi dalem dan fungsinya. Kalurahan ini
                menyatukan kampung-kampung tua yang sudah berdiri sejak masa Kesultanan.
              </p>
            </Section>

            <Section title="Visi & Misi">
              <p className="italic text-primary">
                "Terwujudnya masyarakat Sosromenduran yang guyub, berbudaya, dan sejahtera."
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Meningkatkan pelayanan publik yang ramah dan cepat.</li>
                <li>Memperkuat identitas budaya di setiap kampung.</li>
                <li>Mendorong pertumbuhan UMKM warga.</li>
                <li>Menjaga lingkungan dan tata ruang kalurahan.</li>
              </ul>
            </Section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-secondary/50 p-5">
              <div className="text-xs uppercase tracking-widest text-primary">Batas Wilayah</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><b>Utara:</b> Kal. Pringgokusuman</li>
                <li><b>Timur:</b> Kal. Ngupasan</li>
                <li><b>Selatan:</b> Kal. Ngampilan</li>
                <li><b>Barat:</b> Kal. Bumijo</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-widest text-primary">Alamat Kantor</div>
              <p className="mt-3 text-sm">
                Kantor Kalurahan Sosromenduran<br />
                Kec. Gedongtengen, Kota Yogyakarta<br />
                Daerah Istimewa Yogyakarta
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>
    </div>
  );
}
