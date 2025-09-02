import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { useState } from "react";

export default function App() {
  return (
      // <div className="min-h-screen animated-bg text-slate-800">
      <div className="min-h-screen bg-gradient-to-br from-blue-150 via-purple-100 to-pink-100 text-slate-800">

        <Header />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
  );
}

