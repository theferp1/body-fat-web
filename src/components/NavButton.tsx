interface NavButtonProps {
  children: string;
  icon: React.ReactNode;
  isMenuOpen: boolean;
}

const NavButton = ({ children, icon, isMenuOpen }: NavButtonProps) => {
  return (
    <div className="flex gap-[8px] w-fit items-center justify-center hover:cursor-pointer hover:-translate-y-1 ease-linear duration-[150ms]">
      <div
        className={` ${
          isMenuOpen ? "text-[#E9E9E9]" : "text-[#5F5B5C]"
        } scale-110`}
      >
        {icon}
      </div>
      <button
        className={`${
          isMenuOpen ? "text-[#E9E9E9]" : "text-[#5F5B5C]"
        } text-md font-bold font-sans`}
      >
        {children}
      </button>
    </div>
  );
};

export default NavButton;
