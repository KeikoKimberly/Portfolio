import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../data/experience";
import { fadeIn } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 pb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Experience</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCE.map((job, idx) => (
          <motion.article key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900/90 p-2 text-white">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900">{job.role}</h3>
                <p className="text-sm text-slate-600">{job.company} · {job.period}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
