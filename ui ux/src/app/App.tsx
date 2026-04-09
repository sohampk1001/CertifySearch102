import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { LogoCarousel } from "./components/LogoCarousel";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Stats />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}