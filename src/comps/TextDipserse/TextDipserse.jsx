import { useState } from "react";
import { motion } from "framer-motion";
import { disperse } from "./anim.js";
import "./style.css";

export default function TextDipserse({ children, href, className = "" }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    const word = element.props.children;
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          style={{ display: "inline-block" }}
          custom={i}
          variants={disperse}
          animate={isAnimated ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>,
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
  };
  const manageMouseLeave = () => {
    setIsAnimated(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`dipserse ${className}`}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave(false);
      }}
    >
      {getChars(children)}
    </a>
  );
}
