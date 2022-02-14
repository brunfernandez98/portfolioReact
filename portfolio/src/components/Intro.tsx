import React from "react";
import styled from "styled-components";
import Me from "../assets/HiAvatar.png";
import Image from "next/image";

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic > span {
    position: absolute !important;

    bottom: 0 !important;
    transform: translate(-50%, 0%) !important;
    width: 100% !important;
    height: auto !important;
  }
  .image {
    position: absolute !important;
    width: 100% !important;
    bottom: 0 !important;
    left: 50% !important;
  }
`;
const SubBoxLeft = styled(SubBox)``;
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
const Box = styled.div`
  left: 50%;
  top: 50%;

  display: flex;
  position: absolute;
  transform: translate(-50%, -50%);
  height: 55vh;
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
    <Box>
      <SubBoxLeft>
        <Text>
          <h1>Hi, </h1>
          <h3>I'm Florencia</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </Text>
      </SubBoxLeft>
      <SubBoxRight>
        <div className="pic">
          <Image src={Me} className="image" alt="Profile Pic" />
        
        </div>
      </SubBoxRight>
    </Box>
  );
};

export default Intro;
