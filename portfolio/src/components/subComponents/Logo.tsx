import React from "react";
import styled from "styled-components";

const LogoCustom = styled.h1`
    display: inline-block;
    color: ${(props) => props.theme.text};
    font-family: "Pacifico", cursive;
`;

const Logo = () => {
    return <LogoCustom>FF</LogoCustom>;
};

export default Logo;
