import { useState } from "react";

interface RegistrationInputsProps {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  label: string;
}

const RegistrationInput = ({
  type,
  placeholder,
  label,
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
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className="text-sm placeholder-transparent focus:placeholder-[#9CA3AF] bg-transparent appearance-none focus:outline-none "
      />
    </div>
  );
};

export default RegistrationInput;
