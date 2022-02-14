import React from "react";
import styled from "styled-components";
import { darkTheme } from "../Theme";

interface Props {
  theme: string;
}
const LogoCustom = styled.h1<Props>`
  display: inline-block;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const Logo = (props: Props) => {
  return <LogoCustom {...props}>FF</LogoCustom>;
};

export default Logo;
