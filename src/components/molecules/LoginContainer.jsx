import React from "react";

const LoginContainer = (props) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
      <img className="mx-auto w-[8em]" src="./src/assets/img/logo/asqolanlogo.png" alt="SMP ISLAM ASQOLAN BOARDING SCHOOL" />
      <h1 className="mt-10 text-center text-3xl font-bold text-green-primer">SMP ISLAM ASQOLAN</h1>
      <h1 className="text-center text-3xl font-bold  text-green-primer">BOARDING SCHOOL</h1>
      <h2 className="text-center text-2xl font-bold pt-4">{props.title}</h2>
      <p className="text-sm font-medium text-center mb-4">Silakan masukan Email dan Password Anda</p>
    </div>
  );
};

export default LoginContainer;
