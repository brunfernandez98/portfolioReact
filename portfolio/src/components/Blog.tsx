import styled from "styled-components";

const Blog = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute; //La imagen posicionada de forma absoluta toma la pantalla como referencia
  top: 50%;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  transform: rotate(90deg) translate(-50%, -50%);
`;

export default Blog;
