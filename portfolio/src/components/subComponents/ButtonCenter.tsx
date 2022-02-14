import React from "react";
import styled from "styled-components";
import { CenterProps } from "./interfaces";
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
  @keyframes appear {
    0% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }
  -webkit-animation-name: ${(props) => (props.click ? "" : "appear")};
  animation-duration: 7s;
`;

const ButtonCenter = (props: any) => {
  return (
    <ButtonMedia>
      <TextClick {...props}> Click here... </TextClick>
    </ButtonMedia>
  );
};

export default ButtonCenter;
