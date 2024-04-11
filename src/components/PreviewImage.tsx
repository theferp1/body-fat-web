import { useMainContext } from "../contexts/MainContext";

const PreviewImage = () => {
  const { previewSrc } = useMainContext();
  return (
    <div className="w-[300px] rounded-xl h-[300px] border-2 border-black flex justify-center items-center overflow-hidden ">
      {previewSrc == undefined ? <span>No image selected</span> : ""}
      {previewSrc && (
        <img
          src={previewSrc}
          alt="Preview"
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default PreviewImage;
