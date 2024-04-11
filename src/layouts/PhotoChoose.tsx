import DragInput from "../components/DragInput";
import PreviewImage from "../components/PreviewImage";
import { useMainContext } from "../contexts/MainContext";

const PhotoChoose = () => {
  const { file, setAnalyze } = useMainContext();
  const handleAnalyze = () => {
    if (file) {
      console.log(file);
      setAnalyze(true);
    } else {
      console.log("Nenhum arquivo selecionado");
      setAnalyze(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 pb-10 sm:h-full lg:gap-6 lg:pb-5 sm:gap-11">
      <div className="flex flex-col items-center justify-center w-full gap-10 sm:flex-row sm:gap-6 lg:gap-10 md:justify-center md:gap-10s">
        <DragInput />
        <PreviewImage />
      </div>
      <button
        onClick={handleAnalyze}
        className="bg-[#5F5B5C] w-fit hover:scale-105 duration-75 ease-linear px-4 py-1 rounded-lg text-white font-semibold"
      >
        Analyze
      </button>
    </div>
  );
};

export default PhotoChoose;
