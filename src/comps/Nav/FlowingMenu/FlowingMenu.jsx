import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { menuItemVariants, slideVariants } from "./anim";
import "./FlowingMenu.css";

const EXPO_OUT = [0.16, 1, 0.3, 1];

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = "var(--white)",
  marqueeTextColor = "var(--black)",
  setIsOpen,
}) {
  return (
    <div className="menu-wrap">
      <motion.svg
        variants={slideVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="closeBtn"
        onClick={() => {
          setIsOpen(false);
        }}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 1.5L67 67" />

        <path d="M66.5 1L0.999997 66.5" />
      </motion.svg>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            index={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeTextColor={marqueeTextColor}
            setIsOpen={setIsOpen}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link,
  text,
  subtext,
  speed,
  textColor,
  marqueeTextColor,
  borderColor,
  setIsOpen,
  index,
}) {
  const itemRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const marqueeControls = useAnimationControls();
  const marqueeInnerControls = useAnimationControls();
  const [repetitions, setRepetitions] = useState(4);

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      // Get the first marquee part to measure content width
      const marqueeContent =
        marqueeInnerRef.current.querySelector(".marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate how many copies we need to fill viewport + extra for seamless loop
      // We need at least 2, but calculate based on content vs viewport
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent =
        marqueeInnerRef.current.querySelector(".marquee__part");
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      // Animate exactly one content width for seamless loop
      marqueeInnerControls.set({ x: 0 });
      marqueeInnerControls.start({
        x: -contentWidth,
        transition: { duration: speed, ease: "linear", repeat: Infinity },
      });
    };

    document.fonts.ready.then(setupMarquee);

    return () => {
      marqueeInnerControls.stop();
    };
  }, [text, repetitions, speed, marqueeInnerControls]);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    marqueeControls.set({ y: edge === "top" ? "-101%" : "101%" });
    marqueeInnerControls.set({ y: edge === "top" ? "101%" : "-101%" });
    marqueeControls.start({
      y: "0%",
      transition: { duration: 0.6, ease: EXPO_OUT },
    });
    marqueeInnerControls.start({
      y: "0%",
      transition: { duration: 0.6, ease: EXPO_OUT },
    });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    marqueeControls.start({
      y: edge === "top" ? "-101%" : "101%",
      transition: { duration: 0.6, ease: EXPO_OUT },
    });
    marqueeInnerControls.start({
      y: edge === "top" ? "101%" : "-101%",
      transition: { duration: 0.6, ease: EXPO_OUT },
    });
  };

  return (
    <motion.div
      variants={menuItemVariants}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu__item"
      ref={itemRef}
      style={{ "--i": index, borderColor }}
    >
      <Link
        className="menu__item-link"
        to={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {text}
      </Link>
      <motion.div
        className="marquee"
        animate={marqueeControls}
        initial={{ y: "101%" }}
      >
        <div className="marquee__inner-wrap">
          <motion.div
            className="marquee__inner"
            ref={marqueeInnerRef}
            animate={marqueeInnerControls}
            initial={{ x: 0, y: "-101%" }}
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="marquee__part"
                key={idx}
                style={{ color: marqueeTextColor }}
              >
                <span>{subtext}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FlowingMenu;
