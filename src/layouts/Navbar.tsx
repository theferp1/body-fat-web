import { useState, useEffect } from "react";
import NavButton from "../components/NavButton";
import {
  IconBrandGithubFilled,
  IconBookFilled,
  IconMenuDeep,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMainContext } from "../contexts/MainContext";

export interface NavButtonData {
  name: string;
  icon: JSX.Element;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToMain, scrollToDocumentation } = useMainContext();
  const navButtons: NavButtonData[] = [
    { name: "Github", icon: <IconBrandGithubFilled /> },
    { name: "Documentation", icon: <IconBookFilled /> },
    { name: "Examples", icon: <IconMenuDeep /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      scrollToMain();
    } else {
      navigate("/");
    }
  };

  const handleSelectFunction = (button: NavButtonData) => {
    if (button.name === "Documentation") {
      scrollToDocumentation();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed flex z-50 items-center justify-between transition-all ${
          isScrolled || isMenuOpen
            ? "bg-[#dad6d7] duration-[250ms]"
            : "bg-transparent duration-[350ms]"
        }   w-screen h-fit px-6 py-4 sm:px-10 md:px-12 md:py-4`}
      >
        <img
          src="/lapiscoLogo.svg"
          alt="lapisco logo"
          className={`cursor-pointer h-11 md:h-12 `}
          onClick={handleLogoClick}
        />

        <div className="hidden md:justify-between md:w-[400px] md:flex md:h-fit">
          {navButtons.map((button) => (
            <NavButton
              onClick={() => handleSelectFunction(button)}
              key={button.name}
              icon={button.icon}
            >
              {button.name}
            </NavButton>
          ))}
        </div>
        {isMenuOpen ? (
          <IconX
            size={30}
            onClick={toggleMenu}
            className={`text-[#5F5B5C] md:hidden`}
          />
        ) : (
          <IconMenu2
            size={30}
            onClick={toggleMenu}
            className={`text-[#5F5B5C]  md:hidden `}
          />
        )}
      </nav>
      <div
        className={`fixed  z-30 flex flex-col left-0 items-center justify-center transition-all duration-300 w-screen top-[76px]  ${
          isMenuOpen ? " h-48 bg-[#dad6d7]" : " h-0 bg-transparent "
        }  `}
      >
        <div
          className={` flex gap-6 flex-col  transition-all  duration-75 ${
            isMenuOpen ? "  opacity-100  delay-100 " : " opacity-0   "
          }    `}
        >
          {navButtons.map((button) => (
            <NavButton
              onClick={() => handleSelectFunction(button)}
              key={button.name}
              icon={button.icon}
            >
              {button.name}
            </NavButton>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
