import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../data/experience";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-3xl font-bold tracking-tight text-slate-900 relative inline-block group"
      >
        <span>
          Experience
        </span>
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIENCE.map((job, idx) => (
          <motion.article
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative rounded-2xl border bg-white/70 backdrop-blur-md p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-2 text-white shadow-md"
              >
                <Briefcase className="h-5 w-5" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-slate-900">{job.role}</h3>
                <p className="text-sm text-slate-600">
                  {job.company} · {job.period}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-700 relative z-10">
              {job.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
