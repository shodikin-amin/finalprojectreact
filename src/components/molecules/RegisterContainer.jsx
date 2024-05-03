import React from "react";

const RegisterContainer = () => {
  return (
    <div className="flex w-[350px] h-[250px] md:w-[450px] md:h-[600px]">
      <img
        src=".\src\assets\img\logo\asqolanlogo.png"
        className="absolute size-20 m-3 md:size-24 md:m-6"
      ></img>
      <h1 className="absolute mx-24 my-6 font-bold md:text-2xl md:ml-[130px] md:mt-[50px]">
        SMP ISLAM ASQOLAN <br></br>BOARDING SCHOOL
      </h1>
      <img
        src=".\src\assets\sekolah3.jpg"
        className="object-cover size-full rounded-xl shadow-2xl border-2 border-slate-200"
      ></img>
    </div>
  );
};

export default RegisterContainer;
