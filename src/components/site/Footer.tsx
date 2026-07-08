import { Link } from "@tanstack/react-router";
import kknLogo from "@/assets/kkn-logo.png";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={kknLogo} alt="Logo KKN" width={44} height={44} className="h-11 w-11 rounded-full bg-white/10 p-1" />
            <div>
              <div className="font-display text-lg font-bold">Bergandeng Tengen</div>
              <div className="text-xs opacity-80">Kalurahan Sosromenduran</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80">
            Website profil kalurahan Sosromenduran, Kecamatan Gedongtengen, Kota Yogyakarta —
            dibangun bersama semangat gotong royong.
          </p>
        </div>

        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-wider opacity-90">
            Jelajahi
          </div>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><Link to="/profil" className="hover:underline">Profil Kalurahan</Link></li>
            <li><Link to="/kampung" className="hover:underline">7 Kampung</Link></li>
            <li><Link to="/umkm" className="hover:underline">UMKM & Kuliner</Link></li>
            <li><Link to="/galeri" className="hover:underline">Galeri Kegiatan</Link></li>
            <li><Link to="/peta" className="hover:underline">Peta Kalurahan</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-wider opacity-90">
            Kontak
          </div>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>Kantor Kalurahan Sosromenduran</li>
            <li>Kec. Gedongtengen, Yogyakarta</li>
            <li>Email: XXX@xxx.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Bergandeng Tengen · Dibuat oleh Tim KKN-PPM UGM 2026
      </div>
    </footer>
  );
}
