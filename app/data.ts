export type AircraftCategory =
  | "Light Jet"
  | "Midsize"
  | "Long Range"
  | "Ultra Long Range"
  | "VIP Airliner";

export interface Aircraft {
  id: string;
  name: string;
  category: AircraftCategory;
  pax: number;
  rangeKm: number;
  speedKmh: number;
  pricePerHour: number;
  rating: number;
  reviews: number;
  routes: string[];
  badge?: string;
  image: string;
}

export const aircraft: Aircraft[] = [
  {
    id: "g700",
    name: "Gulfstream G700",
    category: "Ultra Long Range",
    pax: 19,
    rangeKm: 13890,
    speedKmh: 956,
    pricePerHour: 18500,
    rating: 4.98,
    reviews: 312,
    routes: ["Milano → New York", "Londra → Dubai"],
    badge: "Più prenotato",
    image:
      "https://images.unsplash.com/photo-1583396060335-6dd6f0c2b2a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "global7500",
    name: "Bombardier Global 7500",
    category: "Ultra Long Range",
    pax: 14,
    rangeKm: 14260,
    speedKmh: 1134,
    pricePerHour: 16200,
    rating: 4.96,
    reviews: 218,
    routes: ["Parigi → Singapore", "Ginevra → Los Angeles"],
    badge: "Top rated",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "falcon8x",
    name: "Dassault Falcon 8X",
    category: "Long Range",
    pax: 16,
    rangeKm: 11945,
    speedKmh: 940,
    pricePerHour: 12800,
    rating: 4.94,
    reviews: 156,
    routes: ["Nizza → New York", "Milano → Dubai"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "praetor600",
    name: "Embraer Praetor 600",
    category: "Midsize",
    pax: 12,
    rangeKm: 7223,
    speedKmh: 863,
    pricePerHour: 7400,
    rating: 4.89,
    reviews: 97,
    routes: ["Roma → Londra", "Milano → Atene"],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300E",
    category: "Light Jet",
    pax: 8,
    rangeKm: 3650,
    speedKmh: 839,
    pricePerHour: 4200,
    rating: 4.86,
    reviews: 134,
    routes: ["Milano → Ibiza", "Roma → Ginevra"],
    image:
      "https://images.unsplash.com/photo-1583396060335-6dd6f0c2b2a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "acj319",
    name: "Airbus ACJ319",
    category: "VIP Airliner",
    pax: 39,
    rangeKm: 12000,
    speedKmh: 870,
    pricePerHour: 24500,
    rating: 4.99,
    reviews: 41,
    routes: ["Milano → Tokyo", "Dubai → Los Angeles"],
    badge: "Esclusivo",
    image:
      "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface Route {
  from: string;
  to: string;
  code: string;
  duration: string;
  priceFrom: number;
  image: string;
}

export const popularRoutes: Route[] = [
  {
    from: "Milano",
    to: "Londra",
    code: "LIN → LTN",
    duration: "2h 10m",
    priceFrom: 8900,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "Roma",
    to: "Parigi",
    code: "FCO → ORY",
    duration: "2h 05m",
    priceFrom: 9200,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "Ginevra",
    to: "Nizza",
    code: "GVA → NCE",
    duration: "0h 55m",
    priceFrom: 4100,
    image:
      "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  route: string;
  aircraftName: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jetflow ha trasformato il mio modo di viaggiare. In 3 anni ho prenotato oltre 80 voli privati attraverso la piattaforma. La trasparenza dei prezzi e la qualita' degli operatori e' incomparabile. Il concierge e' disponibile 24/7 e gestisce ogni dettaglio.",
    name: "Alessandro Ferrari",
    role: "CEO, Nexum Capital",
    route: "Milano → New York",
    aircraftName: "Gulfstream G700",
    rating: 5,
  },
  {
    quote:
      "Come family office gestiamo spostamenti frequenti per i nostri clienti. Jetflow ci permette di confrontare operatori diversi in pochi minuti, con prezzi chiari fin da subito, senza le lunghe trattative tipiche del settore.",
    name: "Chiara Bellini",
    role: "Direttrice operativa, Meridian Family Office",
    route: "Ginevra → Los Angeles",
    aircraftName: "Bombardier Global 7500",
    rating: 5,
  },
];

export const stats = {
  aircraftAvailable: "7.200+",
  guaranteedAvailability: "4h",
  countriesServed: "180+",
  hiddenFees: "0%",
  flightsCompleted: "12.400+",
  avgRating: "4.97",
  clientSatisfaction: "98%",
  industryAwards: "65+",
};
