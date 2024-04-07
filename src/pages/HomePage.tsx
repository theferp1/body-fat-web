const HomePage = () => {
  return (
    <div className="z-10 flex flex-col gap-5 w-screen justify-center sm:justify-end pb-16 items-start h-screen px-6 sm:px-10 md:px-12 pt-[80px]">
      <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#434343] w-full sm:w-[500px] md:w-[600px] drop-shadow-lg">
        Body composition analysis through photographs.
      </span>
      <span className="text-[#505050] font-light text-sm  md:text-lg pr-[5%] sm:pr-0 md:pr-0 w-full sm:w-[380px] md:w-[500px]">
        Carefully developed and optimized, it offers a transformative experience
        within the scope of health and wellness.
      </span>
      <button className="px-4 py-[6px] shadow-md bg-[#EFEFEF] font-bold rounded-md appearance-none hover:scale-110 transition-transform duration-100 ease-in">
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
