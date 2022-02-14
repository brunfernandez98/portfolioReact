import styled from "styled-components";

const BottomBar = styled.div`
  position: absolute; //La imagen posicionada de forma absoluta toma la pantalla como referencia
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly; //Centra los elementos DE IGUAL MANERA EN LOS DOS MARGENES
`;
export default BottomBar;
