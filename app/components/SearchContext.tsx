"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type TripType = "solo-andata" | "andata-ritorno" | "multi-tratta";

interface SearchContextValue {
  from: string;
  to: string;
  date: string;
  passengers: number;
  tripType: TripType;
  hasSearched: boolean;
  error: string | null;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  setDate: (v: string) => void;
  setPassengers: (v: number) => void;
  setTripType: (v: TripType) => void;
  runSearch: () => void;
  reset: () => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(2);
  const [tripType, setTripType] = useState<TripType>("solo-andata");
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function runSearch() {
    if (!from || !to) {
      setError("Seleziona partenza e destinazione per avviare la ricerca.");
      return;
    }
    if (from === to) {
      setError("Partenza e destinazione non possono coincidere.");
      return;
    }
    setError(null);
    setHasSearched(true);

    // Scorre fino alla sezione flotta con i risultati filtrati
    document.getElementById("flotta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function reset() {
    setHasSearched(false);
    setError(null);
    setFrom("");
    setTo("");
    setDate("");
    setPassengers(2);
  }

  return (
    <SearchContext.Provider
      value={{
        from,
        to,
        date,
        passengers,
        tripType,
        hasSearched,
        error,
        setFrom,
        setTo,
        setDate,
        setPassengers,
        setTripType,
        runSearch,
        reset,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch deve essere usato dentro <SearchProvider>");
  }
  return ctx;
}
