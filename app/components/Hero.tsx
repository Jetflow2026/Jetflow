import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-glow">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583396060335-6dd6f0c2b2a2?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-jet-950/40 via-jet-950/80 to-jet-950" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
        <div className="fade-up fade-up-1 max-w-2xl">
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
            Vola senza <span className="text-gradient-gold italic">compromessi.</span>
          </h1>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-slate-400">
            Prenota il tuo jet privato in pochi minuti. Oltre 7.000 aeromobili
            disponibili in tutto il mondo, pronti al decollo in 4 ore.
          </p>
        </div>

        <div className="fade-up fade-up-2 mt-10">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
