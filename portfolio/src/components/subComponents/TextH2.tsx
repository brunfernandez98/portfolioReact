import { motion } from "framer-motion";
import styled from "styled-components";
interface Props {
  text: String;
}
interface AnimationProps {
  whileHover: {
    scale: number;
  };
  whileTap: {
    scale: number;
  };
}

const H2Text = styled(motion.h2)<AnimationProps>`
  @media (max-width: 30em) {
    font-size: 1em;
  }
`;
const TextH2 = ({ text }: Props) => {
  return <H2Text {...hoverAnimation}>{text}</H2Text>;
};

const hoverAnimation: AnimationProps = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.9,
  },
};

export default TextH2;
