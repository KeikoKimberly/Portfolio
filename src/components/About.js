import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { PROFILE, HIGHLIGHTS, fadeIn } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-10 items-center">

        {/* Left */}
        <motion.div initial="hidden" animate="show" variants={fadeIn}>
          {/* <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-slate-600">
            <Sparkles className="h-4 w-4" />
            Available for freelance
          </div> */}
          <h1 className="relative mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block align-baseline pb-2">
              Hi, I’m {PROFILE.name}. I design & build delightful web apps.
            </span>
          </h1>




          <p className="mt-4 max-w-prose text-slate-600 leading-relaxed">
            {PROFILE.title}
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm shadow hover:shadow-md transition">
              Get in touch
            </a>
            <a href="#experience" className="rounded-2xl border px-4 py-2 text-sm hover:bg-slate-50">
              View experience
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }} className="md:justify-self-end">
          <div className="relative">
            <img
              src={PROFILE.avatar}
              alt="avatar"
              className="h-56 w-56 md:h-64 md:w-64 rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/80 backdrop-blur border p-3 shadow flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span className="text-sm text-slate-700">{PROFILE.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
