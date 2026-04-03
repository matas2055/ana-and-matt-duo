import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Repertoire from "@/components/Repertoire";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Repertoire />
      <Experience />
      <Gallery />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
