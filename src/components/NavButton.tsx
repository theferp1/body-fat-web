interface NavButtonProps {
  children: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const NavButton = ({ children, icon, onClick }: NavButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-[8px] w-fit items-center justify-center hover:cursor-pointer hover:-translate-y-1 ease-linear duration-[150ms]"
    >
      <div
        className={` text-[#5F5B5C]
         scale-110`}
      >
        {icon}
      </div>
      <button className={`text-[#5F5B5C] text-md font-bold font-sans`}>
        {children}
      </button>
    </div>
  );
};

export default NavButton;
