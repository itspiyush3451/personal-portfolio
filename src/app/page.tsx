// app/page.tsx
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Education from "../app/components/Education";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Collaborate from "../app/components/Collaborate";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Collaborate />
      <Contact />
      <Footer />
    </div>
  );
}
