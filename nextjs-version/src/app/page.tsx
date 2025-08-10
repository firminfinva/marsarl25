import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { PastWork } from "@/components/past-work";
import { Partners } from "@/components/partners";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <PastWork />
      <Partners />
      <Footer />
    </div>
  );
}
