import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import kknLogo from "@/assets/kkn-logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/kampung", label: "Kampung" },
  { to: "/umkm", label: "UMKM" },
  { to: "/galeri", label: "Galeri" },
  { to: "/peta", label: "Peta" },
  { to: "/tim", label: "Tim" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src={kknLogo}
            alt="Logo KKN"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-sm font-bold text-primary sm:text-base">
              Bergandeng Tengen
            </div>
            <div className="truncate text-[10px] text-muted-foreground sm:text-xs">
              Kalurahan Sosromenduran
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-3 py-1.5 text-sm" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Buka menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-display text-lg">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-foreground/80 hover:bg-secondary"
                  activeProps={{ className: "rounded-lg px-3 py-2.5 text-base bg-primary text-primary-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="batik-divider" />
    </header>
  );
}
