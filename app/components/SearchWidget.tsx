"use client";

import { useState } from "react";
import { stats } from "../data";

type TripType = "solo-andata" | "andata-ritorno" | "multi-tratta";

export default function SearchWidget() {
  const [tripType, setTripType] = useState<TripType>("solo-andata");
  const [passengers, setPassengers] = useState(2);

  const tabs: { id: TripType; label: string }[] = [
    { id: "solo-andata", label: "Solo andata" },
    { id: "andata-ritorno", label: "Andata e ritorno" },
    { id: "multi-tratta", label: "Multi-tratta" },
  ];

  return (
    <div className="rounded-md border border-jet-800 bg-jet-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur">
      {/* Tabs tipo di viaggio */}
      <div className="mb-6 flex gap-8 border-b border-jet-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setTripType(tab.id)}
            className={`relative pb-3 font-body text-sm transition-colors ${
              tripType === tab.id ? "text-gold" : "text-slate-400 hover:text-ivory"
            }`}
          >
            {tab.label}
            {tripType === tab.id && (
              <span className="absolute -bottom-px left-0 h-[2px] w-full bg-gold" />
            )}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_1.2fr_1fr_1fr_auto]">
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Partenza
          </label>
          <select className="w-full appearance-none border-b border-jet-700 bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold">
            <option className="bg-jet-900">Seleziona aeroporto</option>
            <option className="bg-jet-900">Milano Linate (LIN)</option>
            <option className="bg-jet-900">Roma Ciampino (CIA)</option>
            <option className="bg-jet-900">Ginevra (GVA)</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Destinazione
          </label>
          <select className="w-full appearance-none border-b border-jet-700 bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold">
            <option className="bg-jet-900">Seleziona aeroporto</option>
            <option className="bg-jet-900">Londra Luton (LTN)</option>
            <option className="bg-jet-900">Parigi Orly (ORY)</option>
            <option className="bg-jet-900">Nizza (NCE)</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Data partenza
          </label>
          <input
            type="date"
            className="w-full border-b border-jet-700 bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Passeggeri
          </label>
          <div className="flex items-center justify-between border-b border-jet-700 py-2">
            <button
              type="button"
              aria-label="Riduci passeggeri"
              onClick={() => setPassengers((p) => Math.max(1, p - 1))}
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              −
            </button>
            <span className="font-body text-sm text-ivory">{passengers}</span>
            <button
              type="button"
              aria-label="Aumenta passeggeri"
              onClick={() => setPassengers((p) => Math.min(19, p + 1))}
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 py-2.5 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90 md:w-auto"
          >
            Cerca
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {/* Statistiche */}
      <div className="mt-8 grid grid-cols-2 gap-6 border-t border-jet-800 pt-6 md:grid-cols-4">
        <Stat value={stats.aircraftAvailable} label="aeromobili disponibili" />
        <Stat value={stats.guaranteedAvailability} label="disponibilita' garantita" />
        <Stat value={stats.countriesServed} label="paesi serviti" />
        <Stat value={stats.hiddenFees} label="commissioni nascoste" />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-gold">{value}</p>
      <p className="mt-1 font-body text-xs text-slate-600">{label}</p>
    </div>
  );
}
