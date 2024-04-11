import PhotoChoose from "../layouts/PhotoChoose";
import { useMainContext } from "../contexts/MainContext";

const GetStartedTest = () => {
  const { analyze } = useMainContext();
  return (
    <div className="z-10 flex flex-col gap-10 w-screen  pb-16  h-full px-6 sm:px-10 md:px-12 pt-[100px]">
      <div className="flex flex-col gap-5">
        <span className="font-bold text-2xl sm:text-3xl text-[#434343] drop-shadow-md">
          Body fat percentage
        </span>
        <span className="font-light">
          With just one photo you are able to know your body fat percentage, try
          it now below.
        </span>
      </div>
      {analyze ? <div>teste</div> : <PhotoChoose />}
    </div>
  );
};

export default GetStartedTest;
