import NavButton from "../components/NavButton";
import {
  IconBrandGithubFilled,
  IconBookFilled,
  IconMenuDeep,
  IconMenu2,
} from "@tabler/icons-react";

const Navbar = () => {
  const navButtons = [
    { name: "Github", icon: <IconBrandGithubFilled /> },
    { name: "Documentation", icon: <IconBookFilled /> },
    { name: "Examples", icon: <IconMenuDeep /> },
  ];
  return (
    <nav className="flex items-center justify-between w-screen px-6 py-4 bg-transparent md:px-12 md:py-4 h-fit">
      <img src="/lapiscoLogo.svg" alt="lapisco logo" />
      <div className="hidden md:justify-between md:w-[400px] md:h-fit md:flex">
        {navButtons.map((button) => (
          <NavButton icon={button.icon}>{button.name}</NavButton>
        ))}
      </div>
      <IconMenu2 size={30} className="text-[#5F5B5C] md:hidden" />
    </nav>
  );
};

export default Navbar;
