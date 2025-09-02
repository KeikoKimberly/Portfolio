import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/education";
import { fadeIn } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Education</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((ed, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900/90 p-2 text-white">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-slate-900">{ed.program}</p>
                <p className="text-sm text-slate-600">{ed.school} · {ed.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
