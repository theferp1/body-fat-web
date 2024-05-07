import { useState } from "react";
import { IconFileUpload } from "@tabler/icons-react";
import { useMainContext } from "../contexts/MainContext";
import axios from "axios";

const DragInput = () => {
  const [dragOver, setDragOver] = useState(false);
  //const [previewSrc, setPreviewSrc] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const { setFile, setPreviewSrc, setError } = useMainContext();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      handleFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      handleFile(selectedFile);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      console.log("Selected image file:", file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result as string;
        setPreviewSrc(dataURL);
      };
      setError(false);
    } else {
      setError(true);
      setErrorMessage("File is not an image");
    }
  };

  return (
    <div
      className={`w-full h-[250px] sm:w-[250px] rounded-xl sm:h-[250px] lg:w-[300px] lg:h-[300px] border-2 border-black flex flex-col gap-3 justify-center items-center ${
        dragOver ? "bg-gray-200" : ""
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <IconFileUpload size={60} stroke={1.2} />
      <span className="font-medium sm:text-sm">
        Drag & drop your photo here or
      </span>
      <input
        className="file:rounded-md file:hover:bg-[#575455] duration-75 ease-linear hover:scale-110 file:bg-[#5F5B5C] file:cursor-pointer file:px-2 file:py-1 file:text-white file:font-semibold file:border-0 text-transparent  w-[100px]"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <span className="">{errorMessage}</span>
    </div>
  );
};

export default DragInput;
