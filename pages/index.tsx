import IService from "../models/serviceInterface";
import ServicesCard from "../components/ServicesCard";
import { RiChat3Line } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { services } from "../models/services";
import * as Icons from "react-icons";
import type { NextPage } from "next";

const Home: NextPage = (service: any) => {
  if (!service) return <div>Loading...</div>;
  const parsingValues = JSON.parse(service.service);
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Hi, I am Florencia, I am 21 years old, I am an entrepreneur, I have a
        company called brightBrands. I am currently studying graphic design in
        BIOS.
      </h5>
      <div className="p-4 mt-5 -ml-6 -mr-6 bg-gradient-to-r from-orange-200 to-cyan-100 ">
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am doing
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {parsingValues.map((oneService: IService) => (
            <div
              key={oneService.title}
              className="duration-500 ease-in-out transform bg-white rounded-lg lg:col-span-1 hover:scale-105"
            >
              <ServicesCard key={oneService.title} service={oneService} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const services: IService[] = [
    {
      title: "Social network management",
      about:
        "can build a beautiful and scalable SPA using HTML,CSS and React.js",
      Icon: "FaPalette",
    },
    {
      title: "Social network management",
      about:
        "can build a beautiful and scalable SPA using HTML,CSS and React.js",
      Icon: "FaPalette",
    },
    {
      title: "User experience",
      about:
        "I improve performance up to visual design, web pages have to be structured to create a pleasant browsing experience",
      Icon: "FaUsers",
    },
    {
      title: "Social network management",
      about:
        "can build a beautiful and scalable SPA using HTML,CSS and React.js",
      Icon: "FaPalette",
    },
  ];
  return {
    props: {
      service: JSON.stringify(services),
    },
  };
};
export default Home;
