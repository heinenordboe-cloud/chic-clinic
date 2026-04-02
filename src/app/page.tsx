import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { BookTime } from "@/components/sections/BookTime";
import { Certifications } from "@/components/sections/Certifications";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BookTime />
      <Certifications />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
