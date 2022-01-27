import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {Painter} from "./AllSvg";

const Palette = styled.div`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    padding: 0.3rem;

    width: 7.5rem;
    height: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 8px 6px rgba(255, 0, 0, 0.3);
        border-radius: 50%;
        border-width: thin;
        border-style: solid;
    }
    & > *:first-child {
        text-decoration: none;
        color: inherit;
    }
`;

type PowerButtonProps = {
    href: string;
};

const PowerButton = ({href}: PowerButtonProps) => {
    return (
        <div>
            <Link href={href} passHref>
                <Palette>
                    <Painter width={164} height={164}></Painter>
                </Palette>
            </Link>
        </div>
    );
};

export default PowerButton;
