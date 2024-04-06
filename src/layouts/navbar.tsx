import NavButton from "../components/NavButton";
import {
  IconBrandGithubFilled,
  IconBookFilled,
  IconMenuDeep,
} from "@tabler/icons-react";

const Navbar = () => {
  const navButtons = [
    { name: "Github", icon: <IconBrandGithubFilled /> },
    { name: "Documentation", icon: <IconBookFilled /> },
    { name: "Examples", icon: <IconMenuDeep /> },
  ];
  return (
    <nav className="flex items-center justify-between w-screen pt-3 pb-3 pl-6 pr-6 bg-transparent h-fit">
      <img src="/lapiscoLogo.svg" alt="lapisco logo" />
      <div className="flex justify-between w-[400px] h-fit">
        {navButtons.map((button) => (
          <NavButton icon={button.icon}>{button.name}</NavButton>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
