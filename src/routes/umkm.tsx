import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { umkmList } from "@/data/kampung";
import umkmImg from "@/assets/umkm-kuliner.jpg";

export const Route = createFileRoute("/umkm")({
  head: () => ({
    meta: [
      { title: "UMKM & Kuliner — Sosromenduran" },
      { name: "description", content: "Ragam UMKM, kuliner khas, dan kriya warga Kalurahan Sosromenduran, Yogyakarta." },
      { property: "og:title", content: "UMKM & Kuliner Sosromenduran" },
      { property: "og:description", content: "Gudeg, bakmi jawa, angkringan, batik, dan kriya warga." },
    ],
  }),
  component: UMKM,
});

function UMKM() {
  return (
    <div>
      <PageHero
        eyebrow="UMKM & Kuliner"
        title="Rasa dan karya dari warga"
        description="Deretan usaha warga yang menghidupkan Sosromenduran — dari kuliner ikonik hingga kriya penuh cerita."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 overflow-hidden rounded-3xl border border-border">
          <img src={umkmImg} alt="Kuliner khas" width={1200} height={900} loading="lazy" className="h-56 w-full object-cover sm:h-80" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {umkmList.map((u) => (
            <div key={u.nama} className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-widest text-primary">
                  {u.jenis}
                </span>
                <span className="text-3xl">{u.emoji}</span>
              </div>
              <div className="mt-3 font-display text-xl font-bold">{u.nama}</div>
              <p className="mt-1 text-sm text-muted-foreground">{u.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
