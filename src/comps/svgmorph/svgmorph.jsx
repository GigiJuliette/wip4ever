import { motion } from "framer-motion";
import "./svgmorph.css";

// const textPathVariants = {
//   rest: { startOffset: "-100px" },
//   hover: {
//     startOffset: "128px",
//     transition: { duration: 1, ease: "easeIn" },
//   },
// };

const dot1Variants = {
  rest: { offsetDistance: "0%" },
  hover: {
    offsetDistance: "100%",
    transition: { duration: 0.8, ease: "easeOut", delay: 0 },
  },
};
const dot2Variants = {
  rest: { offsetDistance: "0%" },
  hover: {
    offsetDistance: "100%",
    transition: { duration: 0.7, ease: "easeIn", delay: 0.44 },
  },
};

export const Svgmorph = () => {
  return (
    <motion.svg
      width="181"
      height="69"
      viewBox="0 0 181 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lei"
      initial="rest"
      whileHover="hover"
      //2.623
    >
      {/* <defs> */}
      <path
        d="M66.3879 29.5004C67.3879 4.50043 80.8879 9.99983 88.3879 18.5C96.0092 16.2597 99.8879 15.5 112.888 16.5C125.888 17.5 134.888 28.5 142.388 29.5001"
        id="dot1Path"
        stroke="red"
      />
      <path
        d="M142.388 29.5001C167.388 29.5001 145.888 61.5 163.388 61.5H174.665"
        id="dot2Path"
        stroke="red"
      />
      <path
        d="M67.8879 68C67.9308 65.7235 68.0719 57.3443 68.3872 37.5009C68.8877 6.00036 100.888 13.4999 180.888 13.5"
        id="textPath"
        stroke="red"
      />
      {/* </defs> */}
      <path
        d="M27.712 51.4881V44.0001H56.128V68.0001H47.616L47.104 60.9601C42.88 65.5681 36.16 68.6401 26.624 68.6401C10.112 68.6401 0 60.4481 0 45.6001C0 30.7521 10.112 22.5601 28.544 22.5601C46.464 22.5601 55.424 29.5361 56.128 40.6721H44.416C43.776 37.2801 40.704 32.2241 28.544 32.2241C13.568 32.2241 11.52 40.4801 11.52 45.8561C11.52 51.2961 13.632 59.7441 28.544 59.7441C39.68 59.7441 44.16 54.8801 44.416 51.4881H27.712Z"
        fill="black"
      />
      <path d="M72.16 37V68.0001H60.64V37H72.16Z" fill="black" />
      <path
        d="M103.712 51.4881V44.0001H132.128V68.0001H123.616L123.104 60.9601C118.88 65.5681 112.16 68.6401 102.624 68.6401C86.112 68.6401 76 60.4481 76 45.6001C76 30.7521 86.112 22.5601 104.544 22.5601C122.464 22.5601 131.424 29.5361 132.128 40.6721H120.416C119.776 37.2801 116.704 32.2241 104.544 32.2241C89.568 32.2241 87.52 40.4801 87.52 45.8561C87.52 51.2961 89.632 59.7441 104.544 59.7441C115.68 59.7441 120.16 54.8801 120.416 51.4881H103.712Z"
        fill="black"
      />
      <path d="M148.16 37V68.0001H136.64V37H148.16Z" fill="black" />
      <motion.path
        d="M72.8879 29.5C72.8879 33.0899 69.9778 36 66.3879 36C62.7981 36 59.8879 33.0899 59.8879 29.5C59.8879 25.9101 62.7981 23 66.3879 23C69.9778 23 72.8879 25.9101 72.8879 29.5Z"
        fill="black"
        id="dot1"
        variants={dot1Variants}
        style={{
          offsetPath: "url(#dot1Path)",
          offsetRotate: "0deg",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
      />
      <motion.path
        d="M148.888 29.5C148.888 33.0899 145.978 36 142.388 36C138.798 36 135.888 33.0899 135.888 29.5C135.888 25.9101 138.798 23 142.388 23C145.978 23 148.888 25.9101 148.888 29.5Z"
        fill="black"
        id="dot2"
        variants={dot2Variants}
        style={{
          offsetPath: "url(#dot2Path)",
          offsetRotate: "0deg",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
      />

      <line
        x1="180.888"
        y1="0.5"
        x2="172.888"
        y2="0.5"
        stroke="#ffffff00"
        id="imuseless"
      />
      {/* <text
        fill="white"
        className="text"
        style={{ mixBlendMode: "difference" }}
      >
        <motion.textPath
          href="#textPath"
          variants={textPathVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          transformOrigin="top"
        >
          gigi
        </motion.textPath>
      </text> */}
    </motion.svg>
  );
};
