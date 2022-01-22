import React from "react";
import styled from "styled-components";
import { Painter } from "../components/AllSvg";

const Palette = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  
  &:hover{
    background-color: #e60c9dc5;
    box-shadow: 0 0 0.5rem rgba(0,255,0,0,0,4);
  }
`;

const PowerButton = () => {
  return (
    <div>
      <Palette>
        <Painter width={32} height={32}></Painter>
      </Palette>
    </div>
  );
};

export default PowerButton;
