import RegistrationInput from "../components/RegistrationInputs";
const GetStarted = () => {
  const inputs = [
    {
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      label: "Number",
      placeholder: "Enter your number",
      type: "text",
    },
    {
      label: "Age",
      placeholder: "Enter your age",
      type: "number",
    },
    {
      label: "Weight",
      placeholder: "Enter your weight",
      type: "number",
    },
    {
      label: "Height",
      placeholder: "Enter your height",
      type: "number",
    },
  ];
  return (
    <div className="z-10 flex flex-col gap-5 w-screen  pb-16  h-screen px-6 sm:px-10 md:px-12 pt-[90px]">
      <span className="font-bold text-2xl sm:text-3xl text-[#434343] drop-shadow-md">
        Registration
      </span>
      <form action="" className="flex flex-col gap-3">
        {inputs.map((input) => (
          <RegistrationInput
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
          />
        ))}
      </form>
    </div>
  );
};

export default GetStarted;
