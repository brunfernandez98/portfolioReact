import { motion, Variants } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import cellPhone from "../../assets/animation/cellphone.json";
import { CellPhoneInterface } from "./interfaces";

interface DivCellPhoneInterface {
  width: number;
  height: number;
}
const DivCellPhone = styled.div<DivCellPhoneInterface>`
  z-index: 3;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-bottom: 42px;
`;

const SvgCohete = (props: CellPhoneInterface) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: cellPhone,
    rendererSettings: {},
  };
  const variants: Variants = {
    active: {
      scale: 1,
    },
    inactive: {
      scale: 5,
    },
  };
  return (
    <DivCellPhone width={props.width} height={props.height}>
      <motion.div
        variants={variants}
        initial="inactive"
        animate="active"
        transition={{ delay: 4, duration: 3 }}
        {...props}
      >
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </motion.div>
    </DivCellPhone>
  );
};

export default SvgCohete;
