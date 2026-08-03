"use client";

import { stats, airports } from "../data";
import { useSearch, TripType } from "./SearchContext";

export default function SearchWidget() {
  const {
    from,
    to,
    date,
    passengers,
    tripType,
    error,
    setFrom,
    setTo,
    setDate,
    setPassengers,
    setTripType,
    runSearch,
  } = useSearch();

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
          <label htmlFor="from" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Partenza
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className={`w-full appearance-none border-b bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold ${
              error && !from ? "border-red-500/70" : "border-jet-700"
            }`}
          >
            <option value="" className="bg-jet-900">Seleziona aeroporto</option>
            {airports.map((a) => (
              <option key={a.code} value={a.code} className="bg-jet-900">
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="to" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Destinazione
          </label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={`w-full appearance-none border-b bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold ${
              error && !to ? "border-red-500/70" : "border-jet-700"
            }`}
          >
            <option value="" className="bg-jet-900">Seleziona aeroporto</option>
            {airports.map((a) => (
              <option key={a.code} value={a.code} className="bg-jet-900">
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Data partenza
          </label>
          <input
            id="date"
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-b border-jet-700 bg-transparent py-2 font-body text-sm text-ivory outline-none focus:border-gold [color-scheme:dark]"
          />
        </div>

        <div>
          <p className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-gold-dim">
            Passeggeri
          </p>
          <div className="flex items-center justify-between border-b border-jet-700 py-2">
            <button
              type="button"
              aria-label="Riduci passeggeri"
              onClick={() => setPassengers(Math.max(1, passengers - 1))}
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              −
            </button>
            <span className="font-body text-sm text-ivory">{passengers}</span>
            <button
              type="button"
              aria-label="Aumenta passeggeri"
              onClick={() => setPassengers(Math.min(39, passengers + 1))}
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-jet-700 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={runSearch}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 py-2.5 font-body text-sm font-medium uppercase tracking-wider text-jet-950 transition-opacity hover:opacity-90 md:w-auto"
          >
            Cerca
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-3 font-body text-xs text-red-400" role="alert">
          {error}
        </p>
      )}

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
