import { useState } from "react";
import DragInput from "../components/DragInput";
import PreviewImage from "../components/PreviewImage";
import { useMainContext } from "../contexts/MainContext";
import { IconLoader2 } from "@tabler/icons-react";
import axios from "axios";

const PhotoChoose = () => {
  const { file, setAnalyze, error, setError } = useMainContext();
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleAnalyze = async () => {
    if (file) {
      console.log(file);

      if (error) {
      } else {
        setIsLoading(true);
        await uploadFile(file);
      }
    } else {
      console.log("Nenhum arquivo selecionado");
      setAnalyze(false);
    }
  };
  const uploadFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8000/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("Upload bem-sucedido!");
        setTimeout(() => {
          setIsLoading(false);
          setAnalyze(true);
        }, 2000);
      } else {
        setError(true);
        setUploadStatus("Falha no upload.");
      }
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
      alert("Erro ao enviar o arquivo.");
      setUploadStatus("Erro durante o upload.");
      setIsLoading(false);
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
        className="bg-[#5F5B5C] w-fit flex gap-2 hover:scale-105 duration-75 ease-linear px-4 py-1 rounded-lg text-white font-semibold"
      >
        Analyze {isLoading && <IconLoader2 className="animate-spin" />}
      </button>
    </div>
  );
};

export default PhotoChoose;
