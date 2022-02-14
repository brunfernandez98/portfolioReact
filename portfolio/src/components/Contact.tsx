import styled from "styled-components";

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute; //La imagen posicionada de forma absoluta toma la pantalla como referencia
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

export default Contact;