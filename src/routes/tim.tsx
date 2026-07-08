import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { timDeveloper } from "@/data/kampung";
import kknLogo from "@/assets/kkn-logo.png";

export const Route = createFileRoute("/tim")({
  head: () => ({
    meta: [
      { title: "Tim Developer — Sosromenduran" },
      { name: "description", content: "Kenali Tim KKN yang mengembangkan website Kalurahan Sosromenduran." },
      { property: "og:title", content: "Tim Developer Bergandeng Tengen" },
      { property: "og:description", content: "Tim KKN pengembang website Sosromenduran." },
    ],
  }),
  component: Tim,
});

function Tim() {
  return (
    <div>
      <PageHero
        eyebrow="Tim Pengembang"
        title="Di balik Bergandeng Tengen"
        description="Website ini dikembangkan sebagai bagian dari program KKN — persembahan kecil untuk Kalurahan Sosromenduran."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <img src={kknLogo} alt="Logo KKN" width={100} height={100} className="h-24 w-24" />
          <h2 className="font-display text-2xl font-bold">Tim KKN Sosromenduran</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Kelompok mahasiswa yang terjun langsung mengenal warga, mendokumentasikan
            potensi, dan meramunya menjadi website ini.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timDeveloper.map((t) => (
            <div key={t.nama} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-[color:var(--terracotta)] font-display text-2xl font-bold text-primary-foreground">
                {t.inisial}
              </div>
              <div className="mt-4 font-display text-lg font-bold">{t.nama}</div>
              <div className="text-sm text-primary">{t.peran}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
