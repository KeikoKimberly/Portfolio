import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-slate-800" href="#about">About</a>
          <a className="hover:text-slate-800" href="#experience">Experience</a>
          <a className="hover:text-slate-800" href="#skills">Skills</a>
          <a className="hover:text-slate-800" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
