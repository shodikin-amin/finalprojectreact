import InputFormLabel from "../components/atoms/Input/index";
import IndexButton from "../components/atoms/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterAccoutFragment = () => {
  const [title, setTitle] = useState("Daftar Akun");

  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.konfirmasiPassword.value) {
      setErrorMessage("Konfirmasi Password tidak sesuai");
    } else {
      localStorage.setItem("email", e.target.email.value);
      localStorage.setItem("password", e.target.password.value);
      console.log(e.target.email.value, e.target.password.value);
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    document.title = title;
  }, [setTitle]);

  return (
    <form onSubmit={handleRegister}>
      <InputFormLabel label="Email" name="email" placeholder="Example@example.com" type="email" />
      <InputFormLabel label="Password" name="password" placeholder="Password" type="password" />
      <InputFormLabel label="Konfirmasi Password" name="konfirmasiPassword" placeholder="Konfirmasi Password" type="password" />
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
      <div className="text-sm text-end my-2">
        <Link to="/reset-password" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Lupa password?
        </Link>
      </div>
      <div>
        <IndexButton name="Daftar" />
      </div>
    </form>
  );
};

export default RegisterAccoutFragment;
