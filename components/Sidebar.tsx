import Image from "next/image";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const SideBar = () => {
  return (
    <div>
      <Image
        width={128}
        height={128}
        src="/images/avatar.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-orange">Florencia </span>
        Font
      </h3>
      <p className="px-2 py-2 my-3 bg-gray-200 rounded-full">
        Social Network Managment
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-orange md:w-full">
        <a href="">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiOutlineWhatsApp className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Montevideo,Uruguay</span>
        </div>
        <p className="my-2">florenciaFont@gmail.com</p>
        <p className="my-2">097460149</p>
        {/* email button */}
        <button
          onClick={() => window.open("mailto:florenciafont2014@gmail.com")}
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange to-blue-400 focus:outline-none"
        >
          Email us
        </button>
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange to-blue-400">
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default SideBar;
