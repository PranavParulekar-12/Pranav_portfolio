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

function App() {
  const contactRef = useRef(null);

  const handleContactPress = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="w-full h-full -z-10 fixed top-0">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="px-10 8 m-auto container">
        <Navbar />
        <Hero handleContactPress={handleContactPress} />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
