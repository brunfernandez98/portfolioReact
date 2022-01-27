import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {Facebook, Github, Linkedin, Twitter, Whatsapp} from "./AllSvg";

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    & > *:not(:last-child) {
        margin: 0.5rem 0;
    }
`;
const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${(props) => props.theme.text};
`;

const Social = () => {
    return (
        <Icon>
            <div>
                <Link
                    href={"https://uy.linkedin.com/in/florencia-font-90a3541b2"}
                    passHref>
                    <Twitter
                        width={25}
                        height={25}
                        fill="currentColor"></Twitter>
                </Link>
            </div>
            <div>
                <Link href={"https://wa.link/3ykzgg"} passHref>
                    <Whatsapp
                        width={25}
                        height={25}
                        fill="currentColor"></Whatsapp>
                </Link>
            </div>
            <div>
                <Link href={""} passHref>
                    <Linkedin
                        width={25}
                        height={25}
                        fill="currentColor"></Linkedin>
                </Link>
            </div>
            <div>
                <Link href={""} passHref>
                    <Facebook
                        width={25}
                        height={25}
                        fill="currentColor"></Facebook>
                </Link>
            </div>

            <div>
                <Link href={""} passHref>
                    <Github width={25} height={25} fill="currentColor"></Github>
                </Link>
            </div>

            <Line />
        </Icon>
    );
};

export default Social;
