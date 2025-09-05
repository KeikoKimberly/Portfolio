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
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%] inline-block"
              whileHover={{ backgroundPosition: "100% 0%" }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              Hi, I’m {PROFILE.name}. I design & build delightful web apps.
            </motion.span>
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
            <motion.a
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-4 py-2 text-sm shadow"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get in touch
            </motion.a>

            <motion.a
              href="#experience"
              className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white px-4 py-2 text-sm shadow"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View experience
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="relative md:justify-self-end"
        >
          <motion.img
            src={PROFILE.avatar}
            alt="avatar"
            className="h-72 w-72 md:h-84 md:w-84 rounded-2xl object-cover shadow-lg"
            whileHover={{ scale: 1.1 }}   // <--- Image zoom effect
            transition={{ type: "spring", stiffness: 300 }}
          />

          <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 backdrop-blur px-3 py-1.5 border shadow flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-600" />
            <span className="text-sm text-slate-700">{PROFILE.location}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
