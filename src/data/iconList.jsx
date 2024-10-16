// Map technologies to their corresponding icons
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact, FaNode, FaPython, FaCss3Alt, FaHtml5, FaAws } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiSass } from "react-icons/si";

// Map technologies to their corresponding icons with custom colors
export const iconList = {
    "Javascript": <RiJavascriptFill color="#f7df1e" />, // JavaScript (yellow)
    "React": <FaReact color="#61dafb" />,               // React (blue)
    "Node": <FaNode color="#68a063" />,                 // Node.js (green)
    "Python": <FaPython color="#3776ab" />,             // Python (blue)
    "Django": <DiDjango color="#092e20" />,             // Django (black)
    "Css": <FaCss3Alt color="#264de4" />,               // CSS (blue)
    "Html": <FaHtml5 color="#e34c26" />,                // HTML (orange)
    "Typescript": <SiTypescript color="#007acc" />,     // TypeScript (blue)
    "TailwindCss": <SiTailwindcss color="#38b2ac" />,   // Tailwind CSS (teal)
    "SassCss": <SiSass color="#cc6699" />,              // Sass (pink)
    "AWS": <FaAws color="#ff9900" />                    // AWS (orange)
};

