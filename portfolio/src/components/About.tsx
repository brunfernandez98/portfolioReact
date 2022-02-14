import styled from "styled-components";
interface Props {
  click: boolean;
}

const About = styled.a<Props>`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

export default About;
