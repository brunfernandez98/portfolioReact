import React from "react";
import styled from "styled-components";
import Link from "next/link";
import pointerAnimation from "../../assets/animation/pointerAnimation.json";
import Lottie from "react-lottie";

const Palette = styled.button`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  border: none;
  outline: none;
  background: none;
  padding: 0.2rem;

  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

type PowerButtonProps = {
  href: string;
  click: boolean;
};

const PowerButton = ({ href, click }: PowerButtonProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pointerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const eventListeners: any = [
    {
      eventName: "complete",
      callback: () => {},
    },
  ];
  return (
    <div>
      <Link href={href} passHref>
        <Palette onMouseEnter={eventListeners.callback}>
          {click && (
            <Lottie
              options={defaultOptions}
              height={100}
              width={100}
              eventListeners={eventListeners}
            />
          )}
        </Palette>
      </Link>
    </div>
  );
};

export default PowerButton;
