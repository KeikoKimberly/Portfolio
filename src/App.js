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
import { motion } from "framer-motion";

export default function App() {
  return (
    // <div className="min-h-screen animated-bg text-slate-800">
    <div className="relative min-h-screen bg-gradient-to-br from-blue-80 via-purple-100 to-pink-80">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blob 1 */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Blob 2 */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Blob 3 */}
        <motion.div
          className="absolute top-40 right-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ y: [0, -30, 0], x: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

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

