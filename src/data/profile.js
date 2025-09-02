import { Github, Linkedin, Globe } from "lucide-react";
import profilePic from "../asset/ProfilePict_Keiko.jpeg";

export const PROFILE = {
  name: "Keiko Kimberly Octavina",
  title: "Master of Computer Science · AI & NLP · Full Stack Developer",
  location: "Jakarta, Indonesia",
  email: "keikokimberly18@gmail.com",
  avatar: profilePic,
  socials: [
    { icon: Github, label: "GitHub", href: "https://github.com/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
    // { icon: Globe, label: "Website", href: "https://yourdomain.com" },
  ],
};

export const HIGHLIGHTS = [
  "Master’s thesis in Natural Language Processing & AI",
  "3+ years as .NET & React.ts developer in Azure cloud",
  "Professional system analyst & IT Business Process Analyst"
];

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
