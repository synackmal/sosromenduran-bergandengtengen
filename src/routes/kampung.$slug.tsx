import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { kampungList } from "@/data/kampung";
import { ArrowLeft, Sparkles } from "lucide-react";
import kampungImg from "@/assets/kampung-1.jpg";

export const Route = createFileRoute("/kampung/$slug")({
  loader: ({ params }) => {
    const k = kampungList.find((x) => x.slug === params.slug);
    if (!k) throw notFound();
    return { kampung: k };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Kampung tidak ditemukan" }, { name: "robots", content: "noindex" }] };
    }
    const k = loaderData.kampung;
    return {
      meta: [
        { title: `Kampung ${k.nama} — Sosromenduran` },
        { name: "description", content: k.deskripsi },
        { property: "og:title", content: `Kampung ${k.nama} — Sosromenduran` },
        { property: "og:description", content: k.tagline },
      ],
    };
  },
  component: KampungDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Kampung tidak ditemukan</h1>
      <Link to="/kampung" className="mt-4 inline-block text-primary underline">Kembali ke daftar kampung</Link>
    </div>
  ),
});

function KampungDetail() {
  const { kampung: k } = Route.useLoaderData();

  return (
    <div>
      <PageHero
        eyebrow={`Kampung ${k.icon}`}
        title={k.nama}
        description={k.tagline}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Link to="/kampung" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Semua kampung
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={kampungImg}
                alt={`Suasana Kampung ${k.nama}`}
                width={1200}
                height={900}
                loading="lazy"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>

            <h2 className="mt-8 font-display text-2xl font-bold">Tentang Kampung</h2>
            <p className="mt-3 text-muted-foreground">{k.deskripsi}</p>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" /> Yang Menonjol
              </div>
              <p className="mt-1 text-foreground">{k.highlight}</p>
            </div>
          </div>

          <aside>
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-widest text-primary">Keunggulan</div>
              <ul className="mt-4 space-y-3">
                {k.keunggulan.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-3xl border border-border bg-secondary/50 p-6">
              <div className="text-xs uppercase tracking-widest text-primary">Info Cepat</div>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Kalurahan</dt><dd>Sosromenduran</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Kecamatan</dt><dd>Gedongtengen</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Kota</dt><dd>Yogyakarta</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
