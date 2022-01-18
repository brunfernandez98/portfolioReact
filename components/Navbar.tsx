import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-orange">{name}</span>
      </a>
    </Link>
  ) : null;
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    } else if (pathname === "/resume") {
      setActiveItem("Resume");
    } else if (pathname === "/projects") {
      setActiveItem("Projects");
    } else if (pathname === "/contact") {
      setActiveItem("Contact");
    }
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-2xl font-bold border-b-4 text-orange border-orange md:text-2x1">{activeItem}</span>
      <div className="flex space-x-8 text-lg ">
      <NavItem
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="About"
        route="/"
      />
      <NavItem
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="Resume"
        route="/resume"
      />
      <NavItem
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        name="Projects"
        route="/projects"
      />
    </div>
    </div>
  );
};

export default NavBar;
