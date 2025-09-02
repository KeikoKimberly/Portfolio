import { Link } from "react-scroll";

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900">
          Keiko Kimberly Octavina
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-slate-900"
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-slate-900"
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-slate-900"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-slate-900"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-slate-900"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
