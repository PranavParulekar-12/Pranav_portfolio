import React, { useRef } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const contactRef = useRef(null);

  const handleContactPress = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* GTA V-style glow background */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 overflow-hidden">
        <div
          className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full
          pointer-events-none animate-gtaGlow blur-3xl opacity-60 
          bg-[radial-gradient(circle,rgba(78,0,255,0.5),rgba(255,0,100,0.3),transparent)]"
        />
      </div>

      <div className="px-10 m-auto container">
        <Navbar />
        <Hero handleContactPress={handleContactPress} />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
