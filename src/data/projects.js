
import LYSelf from "../asset/LYSelf-Proto.png";
import LYSelf2 from "../asset/LYSELFInfografik.png";
import Sportzen from "../asset/SportzenCropped.png";
import Sportzen2 from "../asset/Sportzen2.png";
import Sportzen3 from "../asset/Sportzen3.png";
import GetYourJob from "../asset/Getyourjob.png";
import Porto from  "../asset/PortoWeb.png";
import NLP from "../asset/NLPDetecction.png";
import CariKerja2 from "../asset/CariKerja2.png";
import CariKerja3 from "../asset/CariKerja3.png";
import CariKerja4 from "../asset/CariKerja4.png";
import CariKerja5 from "../asset/CariKerja5.png";
import CariKerja6 from "../asset/CariKerja6.png";

export const PROJECTS = [
  {
    title: "Booking Management Mobile App (Sportzen)",
    description:
      "This project is a prototype mobile application for managing sport court reservations (e.g., futsal, badminton, tennis). The app allows users to browse available courts, check schedules, and make reservations from their smartphones",
    images: [
      Sportzen,
      Sportzen2,
      Sportzen3
    ],
    link: "https://github.com/yourusername/dashboard",
    tags: ["React Native", ".NET", "Azure"],
  },
  {
    title: "Mental Health Support Mobile App (LYSelf)",
    description: "This project is a prototype A prototype mobile application designed to support users in managing their mental well-being through mood tracking, forums & articles, self-help tools, and online consultation with psychiatrists or communities.",
    images: [LYSelf,
      LYSelf2
    ],
    link: "https://github.com/yourusername/dashboard",
    tags: ["React Native", ".NET", "Azure"],
  },
  {
    title: "Get Your Job",
    description: "A prototype web application built with Laravel that connects job seekers with employers. The platform provides essential features such as job postings, resume submissions, and user authentication, offering a simple and structured way for candidates to search and apply for jobs, while employers can post and manage vacancies.",
    images: [
      GetYourJob, 
      CariKerja2, 
      CariKerja3, 
      CariKerja4, 
      CariKerja5
    ],
    link: "https://github.com/yourusername/dashboard",
    tags: ["Laravel", "PHP"],
  },
  {
    title: "Portfolio Website",
    description:
      "This very site, crafted with React, Tailwind CSS, and Framer Motion to showcase my skills and experience.",
    images: [Porto],
    link: "https://yourportfolio.com",
    tags: ["React.js", "Tailwind", "Framer Motion"],
  },
   {
    title: "NLP Personality Detections",
    description: "Built an AI-powered NLP system that predicts personality traits from X (formerly Twitter) posts with breakthrough accuracy, using the Big Five Personality Model.",
    images: [NLP], 
    link: "https://github.com/yourusername/chatbot", 
    tags: ["NLP", "AI", "BERT", "Ensemble Model"],
  },
];
