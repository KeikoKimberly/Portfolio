import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { fadeIn } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Skills</h2>
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
