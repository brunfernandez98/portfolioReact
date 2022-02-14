import React, { useState, createContext } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import styled from "styled-components";
import { mouseAnimation } from "./MousePositionInterface";
import { variants } from "./ButtonVariant";


interface CursorProps {
  cursorcolor: string;
}

const Circle = styled(motion.div)<CursorProps>`
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
  background-color: ${(props: CursorProps) => props.cursorcolor};
  border-radius: 50%;
  pointer-events: none;
  text-align: center;
  font-size: 16px;
`;

export const Cursor = ({ children, cursorcolor }: any) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = React.useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const mousePosition: mouseAnimation = {
    mouseXPosition: mouse.x!,
    mouseYPosition: mouse.y!,
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
    <div>
      <div ref={ref}>
        <Circle
          ref={ref}
          variants={variants(mousePosition, cursorcolor)}
          animate={cursorVariant}
          transition={spring}
          cursorcolor={cursorcolor}
        >
          <span className="cursorText">{cursorText}</span>
        </Circle>
        {children}
      </div>
    </div>
  );
};
