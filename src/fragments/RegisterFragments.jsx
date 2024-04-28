import React from "react";
import InputFormLabel from "../components/atoms/Input";

const RegisterFragments = () => {
  const dataInput = [
    {
      label: "Nama Lengkap",
      name: "Nama Lengkap",
      placeholder: "Nama Lengkap",
      type: "text",
    },
    {
      label: "Tempat Lahir",
      name: "Tempat Lahir",
      placeholder: "Tempat Lahir",
      type: "text",
    },
    {
      label: "Tanggal Lahir",
      name: "Tanggal Lahir",
      placeholder: "mm/dd/yyyy",
      type: "date",
    },
    {
      label: "Asal Sekolah",
      name: "Asal Sekolah",
      placeholder: "Asal Sekolah",
      type: "text",
    },
    {
      label: "Alamat Rumah",
      name: "Alamat Rumah",
      placeholder: "Alamat Lengkap",
      type: "text",
    },
    {
      label: "Nomor HP/WA",
      name: "Nomor HP/WA",
      placeholder: "62-888-888-888",
      type: "text",
    },
  ];

  return (
    <div className="space-y-6">
      {dataInput.map((input, index) => (
        <InputFormLabel
          key={index}
          label={input.label}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}
    </div>
  );
};

export default RegisterFragments;
