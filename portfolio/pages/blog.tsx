import React from "react";
import styled from "styled-components";
import Logo from "../src/components/subComponents/Logo";
import PowerButton from "../src/components/subComponents/PowerButton";
import Social from "../src/components/subComponents/Social";
import BlogComponent from "../src/components/BlogComponent";
import { IMyPlan } from "../src/models/IMyPlan";
import { InferGetStaticPropsType } from "next";

const MainContainer = styled.div`
  background-image: url("plan.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <MainContainer>
        <Container>
          <Logo theme="light" />
          <PowerButton click={true} />
          <Social theme="light" />
          <Center>
            <Grid>
              {props.service?.map(
                (item: { id: React.Key | null | undefined }) => (
                  <BlogComponent key={item.id} />
                )
              )}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </div>
  );
};
export async function getStaticProps() {
  const work: IMyPlan[] = [
    {
      id: 1,
      name: "Agency Landing Page",
      description:
        "It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.",
      price: 300,
    },
    {
      id: 2,
      name: "Job listing website",
      description:
        "A Job listing website build in ReactJS. With searching and filtering functionalities.",
      price: 300,
    },
    {
      id: 3,
      name: "Dev.to Clone",
      description:
        "A clone of Dev.to build using ReactJS. With realtime fetching of articles from dev.to using API.",
      price: 300,
    },
    {
      id: 4,
      name: "Sidebar Menu",
      description:
        "A cool looking sidebar menu build using ReactJS and styledComponents.It has really smooth animations.",
      price: 300,
    },
    {
      id: 5,
      name: "Todo App(React + Redux)",
      description:
        "A todo app build using Redux-toolkit and framer-motion for smooth animations.",
      price: 300,
    },
    {
      id: 6,
      name: "Responsive Navigation Menu",
      description:
        "A reponsive navbar menu component in ReactJS with react-router functionalities. Built from scratch.",
      price: 300,
    },
  ];
  return {
    props: {
      service: work,
    },
  };
}
export default blog;
