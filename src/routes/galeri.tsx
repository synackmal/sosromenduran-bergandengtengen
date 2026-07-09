import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { galeriFoto } from "@/data/galeri";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Kegiatan — Sosromenduran" },
      { name: "description", content: "Momen dan atmosfer kegiatan warga Kalurahan Sosromenduran." },
      { property: "og:title", content: "Galeri Kegiatan Sosromenduran" },
      { property: "og:description", content: "Kerja bakti, pentas budaya, bazar UMKM, dan kegiatan warga lainnya." },
    ],
  }),
  component: Galeri,
});

const gradients = [
  "from-[color:var(--terracotta)] to-[color:var(--gold)]",
  "from-primary to-[color:var(--terracotta)]",
  "from-[color:var(--gold)] to-primary",
  "from-primary/80 to-primary",
  "from-[color:var(--terracotta)] to-primary",
  "from-[color:var(--gold)] to-[color:var(--terracotta)]",
];

export function Galeri() {
  return (
    <div>
      <PageHero
        eyebrow="Galeri"
        title="Atmosfer khas kampung"
        description="Cuplikan momen kegiatan warga — mulai dari yang syahdu hingga yang meriah."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galeriFoto.map((g, i) => (
            <figure
              key={i}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="absolute inset-0 grid place-items-center text-6xl opacity-90 transition group-hover:scale-110">
                {g.emoji}
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Foto asli menyusul — tim KKN sedang mengumpulkan dokumentasi kegiatan warga.
        </p>
      </section>
    </div>
  );
}
