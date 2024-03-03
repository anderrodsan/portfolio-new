import About from "@/components/sections/about/About";
import Paintings from "@/components/sections/art/Paintings";
import Background from "@/components/sections/background/background";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className="relative h-full w-screen bg-slate-50 dark:bg-slate-950 overflow-y-auto scroll-smooth">
      <Hero />
      <About />
      <Background />
      <Projects />
      <Paintings />
      <Contact />
    </main>
  );
}
