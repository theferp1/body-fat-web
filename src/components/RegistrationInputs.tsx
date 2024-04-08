import { useState } from "react";

interface RegistrationInputsProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  label: string;
  postfix?: string | undefined;
}

const RegistrationInput = ({
  type,
  placeholder,
  label,
  postfix,
}: RegistrationInputsProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setIsFocused(false);
    }
  };
  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="flex flex-col gap-1 px-1 pb-1 h-fit border-b-2 border-[#FC7825]"
    >
      <label
        htmlFor={label}
        className={`font-medium transition-transform duration-150 ease-linear ${
          isFocused ? "translate-y-0" : "translate-y-5"
        } `}
      >
        {label}
      </label>
      <div className="flex">
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          className="text-sm overflow-hidden w-full text-ellipsis whitespace-nowrap placeholder-transparent px-1 focus:placeholder-[#9CA3AF] bg-transparent appearance-none focus:outline-none "
        />
        {postfix != undefined ? (
          <span
            className={`px-1 text-sm ${
              isFocused ? "text-black" : "text-transparent"
            }`}
          >
            {postfix}
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RegistrationInput;
