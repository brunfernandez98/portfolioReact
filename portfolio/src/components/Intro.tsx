import React from "react";
import styled from "styled-components";
import Me from "../assets/HiAvatar.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;
  bottom: 0 !important;
  width: 100% !important;

  div > span {
    position: absolute !important;
    transform: translate(-50%, 0%) !important;
    bottom: 0 !important;
    width: 100% !important;
    left: 50%;
  }
  * > img {
    height: auto !important;
    width: 100% !important;
  }
  @media (max-width: 50em) {
    align-items: center;
    * > img {
      width: 70% !important;
      transform: translate(-50%, -50%) !important;
    }
    div > span {
      position: absolute !important;
      transform: translate(-50%, -50%) !important;
    }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`;
const SubBoxLeft = styled(SubBox)`
  @media (max-width: 50em) {
    width: 100%;
    height: 50%;
  }
`;
const SubBoxRight = styled(SubBox)``;

const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Box = styled(motion.div)`
  @media screen and (max-width: 1200em) {
    width: 65vw;
  }
  @media screen and (max-width: 60em) {
    width: 70vw;
  }
  @media (max-width: 50em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  @media only screen and (max-width: 50em) {
    background: linear-gradient( to bottom,${(props) => props.theme.panelLeft} 50%,
    ${(props) => props.theme.panelLeft} 50% ) 2px 0px / 2px 100% no-repeat,
linear-gradient( to bottom ,${(props) => props.theme.body} 50%,
    ${(props) => props.theme.body} 50% ) 2px 0px / 2px 100% no-repeat,
linear-gradient( to bottom ,${(props) => props.theme.body} 50%,
    ${(props) => props.theme.body} 50% ) 2px 0px / 2px 100% right;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.panelLeft};
    border-left: ${(props) => props.theme.body};
    border-right: none;
        
    background-repeat: no-repeat;
     &:after {
       border-right-color: aliceblue;
     }
  }

  left: 50%;
  top: 50%;

  display: flex;
  position: absolute;
  transform: translate(-50%, -50%);
  height: 70vh
  width: 65vw;
  margin: 0 auto;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.panelLeft} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.panelLeft} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.panelLeft};
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: "0" }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBoxLeft>
        <Text>
          <h1>Hi, </h1>
          <h3>I&rsquo; m Florencia.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </Text>
      </SubBoxLeft>
      <SubBoxRight>
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div>
            <Image src={Me} alt="Profile Pic" />
          </div>
        </Container>
      </SubBoxRight>
    </Box>
  );
};

export default Intro;
