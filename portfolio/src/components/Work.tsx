import styled from "styled-components";

interface Props {
  click: boolean;
}

const Work = styled.a<Props>`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute; //La imagen posicionada de forma absoluta toma la pantalla como referencia
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "rgb(0 0 0) 0px 0px 4px" : "")};
  }
`;

export default Work;
