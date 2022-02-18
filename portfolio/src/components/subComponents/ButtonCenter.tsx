import React, { useContext } from "react";
import styled from "styled-components";
import { CenterProps } from "./interfaces";
import { FirstTimeContext } from "../../../context/FirstTimeContext";
const ButtonMedia = styled.div`
  text-decoration: none;
  z-index: 4;
  border: none;
  border-radius: 50%;
  outline: none;
  background: none;
  cursor: pointer;
`;

const TextClick = styled.span<CenterProps>`
  @media only screen and (max-width: 50em) {
    font-size: 1rem;
  }
  visibility: ${(props) => (props.canAppear ? "visible" : "hidden")};
`;

const ButtonCenter = (props: any) => {
  const firstTimeContext = useContext(FirstTimeContext);
  const canAppear = !firstTimeContext.firstTime || props.click;

  return (
    <ButtonMedia>
      <TextClick canAppear={canAppear}> Click here... </TextClick>
    </ButtonMedia>
  );
};

export default ButtonCenter;
