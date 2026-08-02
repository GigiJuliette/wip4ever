import { useState } from "react";
import FlowingMenu from "./FlowingMenu/FlowingMenu";
import { Burger } from "./Burger";
import "./Nav.css";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";

const items = [
  {
    link: "/about",
    text: "about",
    subtext: "WHO AM I ?",
    animatedtext: "✳︎",
  },
  {
    link: "/experiences",
    text: "experiences",
    subtext: "HOW I GOT HERE",
    animatedtext: "✧",
  },
  {
    link: "/contact",
    text: "contact",
    subtext: "GET IN TOUCH",
    animatedtext: "✳︎",
  },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`nav ${isOpen && "isOpen"}`}>
      <Burger setIsOpen={setIsOpen} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <Stairs />
            <FlowingMenu
              setIsOpen={setIsOpen}
              items={items}
              speed={15}
              textColor="var(--white)"
              marqueeTextColor="var(--white)"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
