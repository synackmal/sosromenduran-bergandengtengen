import type { ReactNode } from "react";
import batik from "@/assets/batik-pattern.jpg";

export function PageHero({ eyebrow, title, description, children }: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-screen"
        style={{ backgroundImage: `url(${batik})`, backgroundSize: "260px" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm opacity-90 sm:text-base">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
