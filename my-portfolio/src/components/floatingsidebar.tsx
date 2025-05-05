import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaSmile,
  FaHandsHelping,
  FaBalanceScale,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { id: "about", label: "About Me", icon: <FaUser /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "experience", label: "Working Experience", icon: <FaBriefcase /> },
  { id: "fun-facts", label: "Fun Facts", icon: <FaSmile /> },
  { id: "skills", label: "Soft Skills", icon: <FaHandsHelping /> },
  { id: "strengths-weaknesses", label: "Strength & Weakness", icon: <FaBalanceScale /> },
];

const FloatingSidebar: React.FC = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 z-50 space-y-3">
      {links.map((link) => (
        <ScrollLink
          key={link.id}
          to={link.id}
          smooth={true}
          duration={500}
          offset={-100}
          className="group flex items-center gap-3 relative cursor-pointer"
        >
          <div className="p-3 bg-[#4b0000] text-white rounded-r-full shadow-md transition-all hover:bg-black/60">
            {link.icon}
          </div>
          
          <span className="absolute left-12 bg-[#4b0000] text-white text-sm px-3 py-1 rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
            {link.label}
          </span>
        </ScrollLink>
      ))}
    </div>
  );
};

export default FloatingSidebar;