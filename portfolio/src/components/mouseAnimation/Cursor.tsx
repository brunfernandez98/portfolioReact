import React, { useState, createContext, useContext } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import styled from "styled-components";
import { mouseAnimation } from "./MousePositionInterface";
import { variants } from "./ButtonVariant";
import { CursorContext } from "../../../context/CursorContext";

export const CursorContextTwo = createContext({});


const Circle = styled(motion.div)`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 10px;
  width: 10px;
  background-color: #1e91d6;
  border-radius: 200px;
  pointer-events: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

export const Cursor = ({children}:any) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursor, setCursor] = useState<any>({ active: true });
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const mousePosition: mouseAnimation = {
    mouseXPosition: mouse.x,
    mouseYPosition: mouse.y,
  };

  if (mouse.x !== null) {
    mousePosition.mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mousePosition.mouseYPosition = mouse.clientY;
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(_event: any) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(_event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(_event: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(_event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <CursorContextTwo.Provider value={[cursor, setCursor]} >
    <Circle
      variants={variants(mousePosition)}
      animate={cursorVariant}
      transition={spring}
    >
     {children}
    </Circle>
    </CursorContextTwo.Provider>
  );
};
