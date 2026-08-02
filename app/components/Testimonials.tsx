"use client";

import { useState } from "react";
import { testimonials, stats } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="border-t border-jet-800/80 bg-jet-900/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Colonna sinistra: titolo, controlli, statistiche */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-gold-dim">Testimonianze</p>
            <h2 className="mt-3 font-display text-4xl text-ivory">Chi vola con noi</h2>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Testimonianza precedente"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Testimonianza successiva"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                →
              </button>
            </div>

            <div className="mt-2 flex gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-jet-700"
                  }`}
                />
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <Stat value={stats.flightsCompleted} label="Voli completati" />
              <Stat value={stats.avgRating} label="Valutazione media" />
              <Stat value={stats.clientSatisfaction} label="Clienti soddisfatti" />
              <Stat value={stats.industryAwards} label="Premi del settore" />
            </div>
          </div>

          {/* Colonna destra: quote */}
          <div className="rounded-sm border border-jet-800 bg-jet-950 p-8">
            <p className="text-gold" aria-hidden>
              {"★".repeat(current.rating)}
            </p>
            <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-ivory">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between border-t border-jet-800 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jet-800 font-mono text-sm text-gold">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-body text-sm text-ivory">{current.name}</p>
                  <p className="font-body text-xs text-slate-600">{current.role}</p>
                </div>
              </div>
              <div className="text-right font-mono text-[11px] text-slate-600">
                <p className="uppercase tracking-widest">Rotta · Aeromobile</p>
                <p className="text-gold">{current.route}</p>
                <p>{current.aircraftName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-gold">{value}</p>
      <p className="mt-1 font-body text-xs text-slate-600">{label}</p>
    </div>
  );
}
