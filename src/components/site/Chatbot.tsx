import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "bot" | "user"; text: string };

const knowledge: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["kampung", "berapa", "7"],
    answer: "Di Sosromenduran ada 7 kampung: Sosrowijayan, Sosromenduran, Jogonegaran, Dagen, Sosrodipuran, Pajeksan, dan Gandekan. Lihat halaman Kampung untuk detailnya!",
  },
  { keywords: ["umkm", "kuliner", "makan"], answer: "Coba mampir ke halaman UMKM & Kuliner — ada gudeg, bakmi jawa, angkringan, kopi, sampai batik tulis." },
  { keywords: ["peta", "lokasi", "map"], answer: "Peta interaktif ada di halaman Peta (embed ArcGIS Online)." },
  { keywords: ["galeri", "foto", "kegiatan"], answer: "Galeri foto kegiatan warga ada di halaman Galeri." },
  { keywords: ["profil", "geografi", "sejarah"], answer: "Profil umum kalurahan (geografis, demografi, sejarah singkat) tersedia di halaman Profil." },
  { keywords: ["tim", "developer", "kkn"], answer: "Website ini dikembangkan oleh Tim KKN — kenalan lebih dekat di halaman Tim." },
  { keywords: ["halo", "hai", "hi"], answer: "Halo! Sugeng rawuh di Bergandeng Tengen 👋 Ada yang ingin ditanyakan soal Sosromenduran?" },
];

function reply(input: string): string {
  const q = input.toLowerCase();
  const hit = knowledge.find((k) => k.keywords.some((w) => q.includes(w)));
  return (
    hit?.answer ??
    "Matur nuwun pertanyaannya! Coba tanyakan soal kampung, UMKM, peta, galeri, profil, atau tim kami ya."
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Sugeng rawuh! Aku Mas Menduran, siap bantu menjelajah Kalurahan Sosromenduran 🙂" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply(text) }]);
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka chatbot"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[540px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-lg">🪷</div>
            <div className="min-w-0">
              <div className="truncate font-display text-sm font-semibold">Mas Menduran</div>
              <div className="truncate text-[11px] opacity-80">Asisten Kalurahan · online</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background/50 px-3 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2 text-sm text-secondary-foreground"
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 border-t border-border bg-card p-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya tentang Sosromenduran…"
              className="flex-1"
            />
            <Button type="submit" size="icon" aria-label="Kirim">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
