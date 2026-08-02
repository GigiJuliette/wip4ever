import { height, background, mountAnim } from "./anim";
import { motion } from "framer-motion";
import "./Stairs.css";

export default function Stairs() {
  return (
    <div className="stairs">
      {[...Array(5)].map((_, index) => {
        return <Stair key={index} index={index} />;
      })}
      <Background />
    </div>
  );
}

export const Stair = ({ index }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={4 - index}
      className="stair"
    ></motion.div>
  );
};

export const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className="background"
    ></motion.div>
  );
};
