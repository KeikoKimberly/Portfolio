import { Mail } from "lucide-react";
import { PROFILE } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Let’s build something great</h3>
            <p className="mt-2 text-slate-600 max-w-prose">
              Have a project in mind or just want to say hello? I’m always open to discussing product ideas, collaboration, or consulting.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-md transition">
              <Mail className="h-4 w-4" /> {PROFILE.email}
            </a>
            <div className="flex items-center gap-3">
              {PROFILE.socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50">
                  <s.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
