import Link from "next/link";
import styled from "styled-components";

const Contact = styled(Link)`
    color: ${(props) => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`;

export default Contact;
