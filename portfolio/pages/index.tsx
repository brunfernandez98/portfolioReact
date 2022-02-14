import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { IMyWork } from "../src/models/IMyWork";
import {
  Link,
  Social,
  Logo,
  PowerButton,
  ButtonCenter,
  SvgCohete,
  BottomBar,
} from "../src/components/subComponents/Exports";
import { Contact, About, Blog, Work, Skills } from "../src/components/Exports";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "../context/CursorContext";
import Intro from "../src/components/Intro";
import { motion } from "framer-motion";
import TextH2 from "../src/components/subComponents/TextH2";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;
interface ClickProps {
  click: boolean;
}

const Center = styled.button<ClickProps>`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  align-items: center;
  padding: ${(props) => (props.click ? "12rem" : "0.5rem")};
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  & > :first-child {
    animation: float 5s ease-in-out infinite;
    -webkit-animation-delay: 7s; /* Chrome, Safari, Opera */
    animation-delay: 7s;
  }

  & > :last-child {
    padding-top: 0.2rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;
const PinkDiv = styled.div<ClickProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.panelLeft};
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      setCanClick(true);
    }, 7000);
  }, []);

  const [click, setClick] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const context = useContext(CursorContext);
  const enable = canClick && !click;

  const handleClick = () => {
    setClick(enable);
    context.setCursorColor(enable ? "#8511e4" : "#ff9d9e");
  };

  return (
    <div>
      <Head>
        <title>Florencia Portfolio</title>
        <meta name="description" content="Portfolio Florencia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <PinkDiv click={click} />
        <Container>
          <PowerButton href="/" click={canClick} />
          <Logo theme={click ? "dark" : "light"} />
          <Social theme={click ? "dark" : "light"} />
          <Center click={click}>
            <SvgCohete
              onClick={() => handleClick()}
              width={click ? 200 : 400}
              height={click ? 150 : 400}
              fill="currentColor"
            />
            <ButtonCenter click={canClick} />
          </Center>
          <Link href="mailto:florenciafont2014@gmail.com" passHref>
            <Contact>
              <TextH2 text="Say hi..." />
            </Contact>
          </Link>
          <Link href="/blog" passHref>
            <Blog>
              <TextH2 text="Blog." />
            </Blog>
          </Link>
          <Link href="/work" passHref>
            <Work click={click}>
              <TextH2 text="Work." />
            </Work>
          </Link>
          <BottomBar>
            <Link href="/about" passHref>
              <About click={click}>
                <TextH2 text="About." />
              </About>
            </Link>
            <Link href="/skills" passHref>
              <Skills>
                <TextH2 text="MySkills." />
              </Skills>
            </Link>
          </BottomBar>
        </Container>
        {click ? <Intro /> : null}
      </MainContainer>
    </div>
  );
};
export async function getStaticProps(context: any) {
  const work: IMyWork[] = [
    {
      id: 1,
      name: "Agency Landing Page",
      description:
        "It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.",
      tags: ["react", "gsap", "styledComponents"],
      demo: "https://agency-website-eta.vercel.app/",
      github: "https://github.com/codebucks27/Agency-website",
    },
    {
      id: 2,
      name: "Job listing website",
      description:
        "A Job listing website build in ReactJS. With searching and filtering functionalities.",
      tags: ["react", "sass"],

      demo: "http://react-job-listing-website.codebucks27.vercel.app/",
      github: "https://github.com/codebucks27/react-job-listing-website",
    },
    {
      id: 3,
      name: "Dev.to Clone",
      description:
        "A clone of Dev.to build using ReactJS. With realtime fetching of articles from dev.to using API.",
      tags: ["react", "api", "sass"],

      demo: "http://devto-clone-codebucks27.vercel.app/",
      github: "https://github.com/codebucks27/devto-clone",
    },
    {
      id: 4,
      name: "Sidebar Menu",
      description:
        "A cool looking sidebar menu build using ReactJS and styledComponents.It has really smooth animations.",
      tags: ["react", "styledComponents", "react-router"],

      demo: "https://react-sidebar.vercel.app/",
      github: "https://github.com/codebucks27/react-sidebar",
    },
    {
      id: 5,
      name: "Todo App(React + Redux)",
      description:
        "A todo app build using Redux-toolkit and framer-motion for smooth animations.",
      tags: ["react", "redux", "framer-motion"],

      demo: "http://react-redux-todo-app-git-main-codebucks27.vercel.app/",
      github: "https://github.com/codebucks27/React-Redux-Todo-App",
    },
    {
      id: 6,
      name: "Responsive Navigation Menu",
      description:
        "A reponsive navbar menu component in ReactJS with react-router functionalities. Built from scratch.",
      tags: ["react", "react-router", "css"],

      demo: "http://react-responsive-navbar-codebucks27.vercel.app/",
      github: "https://github.com/codebucks27/React-responsive-navbar",
    },
  ];
  return {
    props: {
      service: work,
    },
  };
}
export default Home;
