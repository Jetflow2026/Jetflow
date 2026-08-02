import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import HowItWorks from "./components/HowItWorks";
import PopularRoutes from "./components/PopularRoutes";
import Testimonials from "./components/Testimonials";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-jet-950">
      <Nav />
      <Hero />
      <Fleet />
      <HowItWorks />
      <PopularRoutes />
      <Testimonials />
      <Membership />
      <Footer />
    </main>
  );
}
