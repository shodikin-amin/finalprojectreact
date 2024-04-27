import React from "react";
import InputButton from "../components/atoms/InputButton";
import InputForm from "../components/atoms/InputForm";
import RegisterContainer from "../components/molecules/RegisterContainer";

const RegisterLayout = () => {
  const dataInput = [
    { name: "Nama lengkap", placeholder: "Nama Lengkap", type: "text" },
    { name: "Tempat Lahir", placeholder: "Tempat Lahir", type: "text" },
    { name: "Tanggal Lahir", placeholder: "mm/dd/yyyy", type: "date" },
    { name: "Asal Sekolah", placeholder: "Asal Sekolah", type: "text" },
    { name: "Alamat Rumah", placeholder: "Alamat lengkap", type: "text" },
    { name: "Nomor HP/WA", placeholder: "62-888-88888", type: "text" },
  ];

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center h-screen">
      <div>
        <RegisterContainer />
      </div>
      <div className="flex-row space-y-8">
        <h1 className="flex font-bold text-2xl text-center md:text-left">
          Pendaftaran Calon Peserta Didik Tahun Pelajaran 2024
        </h1>
        <div className="space-y-6">
          {dataInput.map((input, index) => (
            <InputForm
              key={index}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
        </div>
        <div className="flex justify-center space-x-10">
          <InputButton name="Daftar" />
          <InputButton name="Home" />
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
