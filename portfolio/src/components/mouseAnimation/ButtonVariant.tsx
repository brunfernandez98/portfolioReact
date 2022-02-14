import { mouseAnimation } from "./MousePositionInterface";

export const variants = ({
  mouseXPosition,
  mouseYPosition,
}: mouseAnimation,color:string) => {
  return {
    default: {
      opacity: 1,
      height: 12,
      width: 12,
      fontSize: "16px",
      backgroundColor: color,
      x: mouseXPosition!,
      y: mouseYPosition!,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition! - 32,
      y: mouseYPosition! - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition! - 48,
      y: mouseYPosition! - 48,
    },
  };
};

export const barsVariant = {
  animate: {
    transition: { staggerChildren: 0.095 },
  },
};

export const barVariant = {
  initial: { scaleY: 0 },
  animate: {
    scale: [1, 2, 2, 1, 1],
    transition: { ease: "easeOut" },
  },
};

export const buttonsVariant = {
  appear: { transition: { staggerChildren: 0.08 } },
  animate: { transition: { staggerChildren: 0.12 } },
};

export const buttonVariant = {
  hidden: { opacity: 0, x: -20 },
  appear: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  animate: {
    y: [null, 50, 0],
    scale: [1, 0, 1],
    rotate: [0, 360, 0],
  },
};
