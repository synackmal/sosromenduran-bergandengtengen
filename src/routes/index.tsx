import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Users, Sparkles, Utensils } from "lucide-react";
import heroImg from "@/assets/hero-sosromenduran.jpg";
import batik from "@/assets/batik-pattern.jpg";
import { kampungList } from "@/data/kampung";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Suasana Kalurahan Sosromenduran"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/95" />
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-screen"
            style={{ backgroundImage: `url(${batik})`, backgroundSize: "260px" }}
            aria-hidden
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-primary-foreground sm:py-28 lg:py-36">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            Kalurahan Sosromenduran · Gedongtengen · Yogyakarta
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Bergandeng<br />
            <span className="text-[color:var(--gold)]">Tengen</span>
          </h1>
          <p className="mt-5 max-w-xl text-base opacity-90 sm:text-lg">
            Berjalan bersisian, bergotong royong — semangat warga Sosromenduran
            menjaga kampung, budaya, dan denyut kota Jogja.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-[color:var(--gold)] text-primary hover:bg-[color:var(--gold)]/90">
              <Link to="/kampung">
                Jelajahi 7 Kampung <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/5 text-primary-foreground backdrop-blur hover:bg-white/15">
              <Link to="/profil">Profil Kalurahan</Link>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-widest opacity-70">Kampung</dt>
              <dd className="mt-1 font-display text-3xl font-bold">7</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest opacity-70">RW</dt>
              <dd className="mt-1 font-display text-3xl font-bold">14</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest opacity-70">RT</dt>
              <dd className="mt-1 font-display text-3xl font-bold">55</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Quick nav */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="ornament-line mb-3 text-[11px] uppercase tracking-widest text-primary">
          <span>Sugeng Rawuh</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Sekilas tentang <span className="text-primary">Sosromenduran</span>
          </h2>
          <p className="text-muted-foreground">
            Kalurahan di jantung Kota Yogyakarta yang memayungi tujuh kampung dengan
            karakter unik — dari gerbang Malioboro yang ramai hingga gang sunyi bersejarah.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: "Strategis", desc: "Di sisi barat Malioboro, jantung Jogja." },
            { icon: Users, title: "Guyub", desc: "Warga bergotong royong menjaga kampung." },
            { icon: Sparkles, title: "Berbudaya", desc: "Jejak Keraton di tiap sudut kampung." },
            { icon: Utensils, title: "Kaya Rasa", desc: "UMKM & kuliner khas Jogja hidup di sini." },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kampung preview */}
      <section className="relative bg-secondary/50 py-16 sm:py-20">
        <div
          className="absolute inset-x-0 top-0 h-px opacity-40"
          style={{ backgroundImage: `url(${batik})`, backgroundSize: "200px" }}
        />
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-primary">Tujuh Kampung</div>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Setiap kampung, satu cerita
              </h2>
            </div>
            <Link to="/kampung" className="text-sm font-medium text-primary hover:underline">
              Lihat semua →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kampungList.slice(0, 6).map((k) => (
              <Link
                key={k.slug}
                to="/kampung/$slug"
                params={{ slug: k.slug }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute right-4 top-4 text-2xl opacity-80">{k.icon}</div>
                <div className="text-xs uppercase tracking-widest text-primary/70">Kampung</div>
                <div className="mt-1 font-display text-xl font-bold text-foreground">{k.nama}</div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{k.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {k.keunggulan.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: `url(${batik})`, backgroundSize: "260px" }}
            aria-hidden
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-4xl">
                Mari menyusuri Sosromenduran lebih dekat
              </h2>
              <p className="mt-3 max-w-xl opacity-90">
                Buka peta interaktif, cicipi UMKM warga, dan lihat momen kebersamaan
                di galeri kegiatan kami.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-[color:var(--gold)] text-primary hover:bg-[color:var(--gold)]/90">
                <Link to="/peta">Buka Peta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/5 text-primary-foreground hover:bg-white/15">
                <Link to="/umkm">UMKM & Kuliner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
