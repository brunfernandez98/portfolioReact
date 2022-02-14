import Link from "./Link";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Linkedin, Twitter, Whatsapp } from "./AllSvg";
import { darkTheme } from "../Theme";

interface Props {
  theme: string;
}

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

const Line = styled.span<Props>`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
`;

const Social = ({ theme }: Props) => {
  return (
    <Icon>
      <div>
        <Link
          href="https://uy.linkedin.com/in/florencia-font-90a3541b2"
          passHref
        >
          <div>
            <Twitter
              width={25}
              height={25}
              fill={theme === "dark" ? darkTheme.text : darkTheme.body}
            ></Twitter>
          </div>
        </Link>
      </div>
      <div>
        <Link href="https://wa.link/3ykzgg" passHref>
          <div>
            <Whatsapp
              width={25}
              height={25}
              fill={theme === "dark" ? darkTheme.text : darkTheme.body}
            ></Whatsapp>
          </div>
        </Link>
      </div>
      <div>
        <Link href="" passHref>
          <div>
            <Linkedin
              width={25}
              height={25}
              fill={theme === "dark" ? darkTheme.text : darkTheme.body}
            ></Linkedin>
          </div>
        </Link>
      </div>
      <div>
        <Link href="" passHref>
          <div>
            <Facebook
              width={25}
              height={25}
              fill={theme === "dark" ? darkTheme.text : darkTheme.body}
            ></Facebook>
          </div>
        </Link>
      </div>

      <Line theme={theme} />
    </Icon>
  );
};

export default Social;
