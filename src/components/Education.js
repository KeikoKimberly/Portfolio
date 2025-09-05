import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/education";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-3xl font-bold tracking-tight text-slate-900 relative inline-block group"
      >
        <span>
          Education
        </span>
        
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((ed, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative rounded-2xl border bg-white/70 backdrop-blur-md p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
          >

            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-200 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-2 text-white shadow-md"
              >
                <GraduationCap className="h-5 w-5" />
              </motion.div>
              <div>
                <p className="font-semibold text-slate-900">{ed.program}</p>
                <p className="text-sm text-slate-600">
                  {ed.school} · {ed.period}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
