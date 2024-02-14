import Paintings from "@/components/sections/art/Paintings";
import Background from "@/components/sections/background/background";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className="h-full w-full bg-slate-50 dark:bg-slate-950 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Hero/>
      <Background/>
      <Projects/>
      <Paintings/>
      <Contact/>
    </main>
  );
}
