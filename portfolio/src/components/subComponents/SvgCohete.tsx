import { motion, Variants } from "framer-motion";
import Lottie from "react-lottie";
import styled from "styled-components";
import cellPhone from "../../assets/animation/cellphone.json";
import { CellPhoneInterface } from "./interfaces";
import { useEffect, useContext, useRef, useState } from "react";
import React from "react";
import useDevice from "../hooks/useDevice";
import FirstTime from "../../../context/FirstTimeContext";
interface DivCellPhoneInterface {
  width: number;
  height: number;
}
const DivCellPhone = styled.div<DivCellPhoneInterface>`
  z-index: 3;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin-bottom: 42px;
  @media only screen and (max-width: 50em) {
    height: calc(${(props) => props.width}px * 0.9);
    width: calc(${(props) => props.width}px * 0.9);
    margin-bottom: 10px;
  }
`;

const SvgCohete = (props: CellPhoneInterface) => {
  const firstTimeContext = useContext(FirstTime);

  useEffect(() => {
    if (firstTimeContext.firstTime) {
      setTimeout(() => {
        firstTimeContext.setFirstTime(false);
      }, 7000);
    }
    return () => {
      firstTimeContext.setFirstTime(false);
    };
  }, []);

  const type = useDevice();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: cellPhone,
    rendererSettings: {},
  };
  const scaleInactive = type === "mobile" ? 2 : 6;

  const variants: Variants = {
    active: {
      scale: 1,
    },
    inactive: {
      scale: scaleInactive,
    },
  };

  return (
    <DivCellPhone {...props}>
      {firstTimeContext.firstTime ? (
        <motion.div
          variants={variants}
          initial="inactive"
          animate="active"
          transition={{ delay: 4, duration: 3 }}
        >
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </motion.div>
      ) : (
        <div>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              animationData: cellPhone,
              rendererSettings: {},
            }}
            isClickToPauseDisabled={true}
          ></Lottie>
        </div>
      )}
    </DivCellPhone>
  );
};

export default SvgCohete;
