import InputFormLabel from "../components/atoms/Input/index";
import IndexButton from "../components/atoms/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormResetPassword = () => {
  const [title, setTitle] = useState("Reset Password");

  useEffect(() => {
    document.title = title;
  }, [setTitle]);

  const dataInput = [
    {
      label: "Email",
      name: "Email",
      placeholder: "Example@example.com",
      type: "email",
    },
  ];
  return (
    <form>
      {dataInput.map((input, index) => (
        <InputFormLabel key={index} label={input.label} name={input.name} placeholder={input.placeholder} type={input.type} />
      ))}
      <div className="text-sm text-end mt-4 mb-4">
        <IndexButton name="Reset Password" />
      </div>
    </form>
  );
};

export default FormResetPassword;
