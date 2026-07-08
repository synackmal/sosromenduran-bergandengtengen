import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExternalLink } from "lucide-react";

// Ganti URL ini dengan link embed ArcGIS Online dari tim kamu
const ARCGIS_EMBED_URL = "";

export const Route = createFileRoute("/peta")({
  head: () => ({
    meta: [
      { title: "Peta Kalurahan — Sosromenduran" },
      { name: "description", content: "Peta interaktif Kalurahan Sosromenduran (ArcGIS Online)." },
      { property: "og:title", content: "Peta Kalurahan Sosromenduran" },
      { property: "og:description", content: "Peta interaktif wilayah dan kampung Sosromenduran." },
    ],
  }),
  component: Peta,
});

function Peta() {
  return (
    <div>
      <PageHero
        eyebrow="Peta Interaktif"
        title="Peta Kalurahan Sosromenduran"
        description="Peta wilayah lengkap dengan batas kampung, fasilitas, dan titik penting — bersumber dari ArcGIS Online."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          {ARCGIS_EMBED_URL ? (
            <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
              <iframe
                src={ARCGIS_EMBED_URL}
                title="Peta Kalurahan Sosromenduran"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary text-2xl">🗺️</div>
              <h2 className="font-display text-xl font-bold">Peta akan segera hadir</h2>
              <p className="max-w-md text-sm text-muted-foreground">
                Tim akan menempelkan link embed ArcGIS Online di sini. Ganti nilai{" "}
                <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">ARCGIS_EMBED_URL</code>{" "}
                pada file <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">src/routes/peta.tsx</code>.
              </p>
              <a
                href="https://www.arcgis.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Buka ArcGIS Online <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Batas Wilayah", d: "Lihat batas kalurahan & tiap kampung." },
            { t: "Titik Penting", d: "Kantor, fasilitas umum, hingga UMKM." },
            { t: "Navigasi Mudah", d: "Zoom, geser, dan cari lokasi." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-secondary/40 p-5">
              <div className="font-display text-lg font-semibold">{x.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
