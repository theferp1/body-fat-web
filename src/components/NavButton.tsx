interface NavButtonProps {
  children: string;
  icon: React.ReactNode;
}

const NavButton = ({ children, icon }: NavButtonProps) => {
  return (
    <div className="flex gap-[8px] w-fit items-center justify-center hover:cursor-pointer">
      <div className="text-[#5F5B5C] scale-110">{icon}</div>
      <button className="text-[#5F5B5C] text-md font-bold font-sans">
        {children}
      </button>
    </div>
  );
};

export default NavButton;
