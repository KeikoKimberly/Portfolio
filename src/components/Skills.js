import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { fadeIn } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-3xl font-bold tracking-tight text-slate-900 relative inline-block group"
      >
        <span>
          Skills
        </span>
      </motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((s, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-900">{s.group}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((i, k) => (
                <span key={k} className="rounded-xl border px-3 py-1 text-xs text-slate-700">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
