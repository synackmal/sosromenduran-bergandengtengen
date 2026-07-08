import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { kampungList } from "@/data/kampung";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/kampung/")({
  head: () => ({
    meta: [
      { title: "7 Kampung — Sosromenduran" },
      { name: "description", content: "Kenali 7 kampung di Kalurahan Sosromenduran, masing-masing dengan keunggulan dan karakternya sendiri." },
      { property: "og:title", content: "7 Kampung Sosromenduran" },
      { property: "og:description", content: "Sosrowijayan, Jogonegaran, Dagen, dan kampung-kampung lain di jantung Jogja." },
    ],
  }),
  component: KampungIndex,
});

function KampungIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Tujuh Kampung"
        title="Menjelajah tiap sudut Sosromenduran"
        description="Setiap kampung punya cerita, keunggulan, dan warganya sendiri. Pilih salah satu untuk mengenal lebih dekat."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kampungList.map((k, i) => (
            <Link
              key={k.slug}
              to="/kampung/$slug"
              params={{ slug: k.slug }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="text-xs uppercase tracking-widest text-primary/70">
                  Kampung {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-3xl">{k.icon}</div>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{k.nama}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{k.tagline}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {k.keunggulan.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Lihat profil <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
