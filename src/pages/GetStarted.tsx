import RegistrationInput from "../components/RegistrationInputs";
const GetStarted = () => {
  const inputs = [
    {
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      postfix: undefined,
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      postfix: undefined,
    },
    {
      label: "Number",
      placeholder: "Enter your number",
      type: "text",
      postfix: undefined,
    },
    {
      label: "Age",
      placeholder: "Enter your age",
      type: "number",
      postfix: undefined,
    },
    {
      label: "Weight",
      placeholder: "Enter your weight",
      type: "number",
      postfix: "kg",
    },
    {
      label: "Height",
      placeholder: "Enter your height",
      type: "number",
      postfix: "cm",
    },
  ];
  return (
    <div className="z-10 flex flex-col gap-5 w-screen  pb-16  h-screen px-6 sm:px-10 md:px-12 pt-[130px]">
      <span className="font-bold text-2xl sm:text-3xl text-[#434343] drop-shadow-md">
        Registration
      </span>
      <form
        action=""
        className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-8 md:w-[50%] "
      >
        {inputs.map((input) => (
          <RegistrationInput
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            type={input.type}
            postfix={input.postfix}
          />
        ))}
      </form>
    </div>
  );
};

export default GetStarted;
