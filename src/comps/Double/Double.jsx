import "./style.css";
import { useRef } from "react";

const speed = 0.15;

export default function Index({ drawings }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const frameId = useRef(null);
  const xPercent = useRef(0);
  const currentXPercent = useRef(0);

  const animate = () => {
    currentXPercent.current += (xPercent.current - currentXPercent.current) * speed;
    firstImage.current.style.width = `${66.66 - currentXPercent.current * 0.33}%`;
    secondImage.current.style.width = `${33.33 + currentXPercent.current * 0.33}%`;

    if (Math.round(xPercent.current) === Math.round(currentXPercent.current)) {
      frameId.current = null;
    } else {
      frameId.current = window.requestAnimationFrame(animate);
    }
  };

  const manageMouseMove = (e) => {
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    xPercent.current = (e.clientX / window.innerWidth) * 100;

    if (!frameId.current) {
      frameId.current = window.requestAnimationFrame(animate);
    }
  };

  return (
    <div className="double" onMouseMove={manageMouseMove}>
      <div ref={firstImage} className="imageContainer">
        <div className="stretchyWrapper">
          <img src={drawings[0].src} alt="image" />
        </div>
      </div>

      <div ref={secondImage} className="imageContainer">
        <div className="stretchyWrapper">
          <img src={drawings[1].src} alt="image" />
        </div>
      </div>
    </div>
  );
}
