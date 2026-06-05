import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
