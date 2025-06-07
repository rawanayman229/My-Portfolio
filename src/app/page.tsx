import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <div className="container mx-auto px-12 py-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
</div>
</main>
  );
}