import { motion } from "framer-motion";

interface Props {
  text: String;
}
const TextH2 = ({ text }: Props) => {
  return <motion.h2 {...hoverAnimation}>{text}</motion.h2>;
};

const hoverAnimation = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.9,
  },
};

export default TextH2;
