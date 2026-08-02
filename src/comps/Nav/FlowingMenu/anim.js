export const slideVariants = {
  initial: {
    opacity: 0,
    x: "200%",
    rotate: 90,
  },
  enter: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: "200%",
    rotate: 90,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const menuItemVariants = {
  initial: { opacity: 0, rotateX: -90 },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.3, ease: "easeOut", delay: i * 0.1 + 0.2 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
