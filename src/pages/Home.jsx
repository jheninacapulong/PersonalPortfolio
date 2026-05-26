import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certification from "@/components/Certification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

const heroImage = "/hero3.JPG";
const projectImages = [
  "https://media.base44.com/images/public/6a1527b8fb8236419f128f37/f5967f0f1_generated_165d3712.png",
  "https://media.base44.com/images/public/6a1527b8fb8236419f128f37/b925d2128_generated_7b2251c6.png",
  "https://media.base44.com/images/public/6a1527b8fb8236419f128f37/976aa07c1_generated_986e95b2.png",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <ScrollProgress />
      <Navbar />
      <Hero heroImage={heroImage} />
      <About />
      <Certification />
      <Experience />
      <Skills />
      <Project projectImages={projectImages} />
      <Contact />
    </div>
  );
}