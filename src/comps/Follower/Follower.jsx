import { useEffect, useRef } from "react";
import { wishlist } from "../../assets/wishlist";
import useMouse from "../../hooks/useMouse";
import "./style.css";

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function Follower({ activeItem }) {
  const ref = useRef(null);
  const mouse = useMouse();
  const lastIndex = useRef(0);

  if (activeItem !== null) lastIndex.current = activeItem;

  useEffect(() => {
    wishlist.forEach((p) => {
      new Image().src = p.src;
    });
  }, []);

  useEffect(() => {
    const smooth = { x: 0, y: 0 };
    let rotation = 0;
    let frame;

    const tick = () => {
      const el = ref.current;
      const { x, y } = mouse.current;
      const dx = x - smooth.x;
      smooth.x = lerp(smooth.x, x, 0.1);
      smooth.y = lerp(smooth.y, y, 0.1);
      rotation = lerp(rotation, clamp(dx * 0.04, -12, 12), 0.1);

      el.style.transform = `translate(${smooth.x - el.offsetWidth / 2}px, ${smooth.y - el.offsetHeight / 2}px) rotate(${rotation}deg)`;

      frame = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(frame);
  }, [mouse]);

  return (
    <div
      ref={ref}
      className={`follower ${activeItem !== null ? "visible" : ""}`}
    >
      <img src={wishlist[lastIndex.current].src} alt="" />
    </div>
  );
}
