import { useState } from "react";
import NavButton from "../components/NavButton";
import {
  IconBrandGithubFilled,
  IconBookFilled,
  IconMenuDeep,
  IconMenu2,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navButtons = [
    { name: "Github", icon: <IconBrandGithubFilled /> },
    { name: "Documentation", icon: <IconBookFilled /> },
    { name: "Examples", icon: <IconMenuDeep /> },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <nav
        className={`fixed flex z-50 items-center justify-between  w-screen  h-fit px-6 py-4 sm:px-10 md:px-12 md:py-4`}
      >
        <img
          src="/lapiscoLogo.svg"
          alt="lapisco logo"
          className="cursor-pointer h-11 md:h-12"
          onClick={handleLogoClick}
        />
        <div className="hidden md:justify-between md:w-[400px] md:flex md:h-fit">
          {navButtons.map((button) => (
            <NavButton icon={button.icon}>{button.name}</NavButton>
          ))}
        </div>
        <IconMenu2
          size={30}
          onClick={toggleMenu}
          className=" text-[#5F5B5C] md:hidden"
        />
      </nav>
      <div
        className={`absolute  z-30 flex flex-col items-center justify-center transition-all duration-300 w-full top-[76px]  ${
          isMenuOpen ? " h-48  " : " h-0 "
        }  `}
      >
        <div
          className={` flex gap-6 flex-col  transition-all  duration-75 ${
            isMenuOpen ? "  opacity-100  delay-100 " : " opacity-0   "
          }    `}
        >
          {navButtons.map((button) => (
            <NavButton icon={button.icon}>{button.name}</NavButton>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
