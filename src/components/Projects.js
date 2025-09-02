// src/components/Projects.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { fadeIn } from "../data/profile";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (selectedProject) {
      setCurrentIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedProject) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Projects
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 text-justify">
                {p.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-xl border px-2 py-1 text-xs text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedProject(p);
                  setCurrentIndex(0);
                }}
                className="inline-block mt-4 text-sm font-medium text-slate-900 hover:underline"
              >
                View project →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-[85%] max-h-[90vh] overflow-auto p-6 relative flex flex-col items-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 shadow-sm transitionabsolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 shadow-sm transition z-[9999]"
            >
              ✕
            </button>

            {/* Image carousel */}
            <div className="relative w-full h-[350px] flex justify-center items-center overflow-hidden bg-gray-50 rounded-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={selectedProject.images[currentIndex]}
                  alt={selectedProject.title}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Prev/Next arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 bg-white/70 hover:bg-white text-slate-900 px-2 py-1 rounded-full shadow"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 bg-white/70 hover:bg-white text-slate-900 px-2 py-1 rounded-full shadow"
              >
                ›
              </button>
            </div>

            {/* Project details */}
            <h3 className="text-lg font-semibold mt-4 text-center">{selectedProject.title}</h3>
            <p className="mt-2 text-sm text-slate-600 text-center">
              {selectedProject.description}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-xl border px-2 py-1 text-xs text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* External link */}
            {/* {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                Open in new tab →
              </a>
            )} */}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
