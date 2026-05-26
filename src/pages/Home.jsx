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
  "1.png",
  "2.png",
  "3.png",
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