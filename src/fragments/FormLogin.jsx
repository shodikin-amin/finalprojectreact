import InputFormLabel from "../components/atoms/Input/index";

const FormLoginFragment = () => {
  const dataInput = [
    { label: "Email", name: "Email", placeholder: "Example@example.com", type: "email" },
    { label: "Password", name: "Password", placeholder: "Password", type: "password" },
  ];
  return (
    <form>
      {dataInput.map((input, index) => (
        <InputFormLabel key={index} label={input.label} name={input.name} placeholder={input.placeholder} type={input.type} />
      ))}
      <div className="text-sm text-end my-2">
        <a href="#" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Lupa password?
        </a>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-green-primer px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormLoginFragment;
