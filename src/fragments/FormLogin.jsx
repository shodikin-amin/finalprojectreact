import InputFormLabel from "../components/atoms/Input/index";
import IndexButton from "../components/atoms/Button";

const FormLoginFragment = () => {
  const dataInput = [
    {
      label: "Email",
      name: "Email",
      placeholder: "Example@example.com",
      type: "email",
    },
    {
      label: "Password",
      name: "Password",
      placeholder: "Password",
      type: "password",
    },
  ];
  return (
    <form>
      {dataInput.map((input, index) => (
        <InputFormLabel
          key={index}
          label={input.label}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}
      <div className="text-sm text-end my-2">
        <a
          href="#"
          className="font-semibold text-blue-600 hover:text-md hover:font-bold"
        >
          Lupa password?
        </a>
      </div>
      <div>
        <IndexButton name="Sign in" />
      </div>
    </form>
  );
};

export default FormLoginFragment;
