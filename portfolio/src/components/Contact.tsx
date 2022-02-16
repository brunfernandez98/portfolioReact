import styled from "styled-components";
import React from "react";

type Props = { children: React.ReactNode; click: boolean };
type Ref = HTMLAnchorElement;

const Contact = styled.a<Props>`
  color: ${(props) => props.theme.text};
  position: absolute; //La imagen posicionada de forma absoluta toma la pantalla como referencia
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: ${(props) => (props.click ? "rgb(0 0 0) 0px 0px 4px" : "")};
  }
`;

export default Contact;
