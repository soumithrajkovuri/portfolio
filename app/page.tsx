import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Architecture from "@/components/architecture/Architecture";
import Resume from "@/components/resume/Resume";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Architecture />

        <Resume />

        <Contact />

      </main>

      <Footer />

    </>
  );
}