import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
  } from "react-icons/fa";
  
  export default function HeroSocials() {
    return (
      <div className="flex gap-6 mt-10 text-3xl">
  
        <a
          href="https://github.com/soumithrajkovuri"
          target="_blank"
        >
          <FaGithub />
        </a>
  
        <a
          href="https://linkedin.com/in/soumith-kovuri-02a0b8267"
          target="_blank"
        >
          <FaLinkedin />
        </a>
  
        <a href="mailto:soumithkovuri12@gmail.com">
          <FaEnvelope />
        </a>
  
      </div>
    );
  }