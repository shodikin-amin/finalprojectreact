import React, { useState } from "react";
import InputFormLabel from "../components/atoms/Input";
import IndexButton from "../components/atoms/Button";
import { Result } from "antd";
import RegisterContainer from "../components/molecules/RegisterContainer";

const RegisterFragments = () => {
  const [formData, setFormData] = useState({
    "Nama Lengkap": "",
    "Tempat Lahir": "",
    "Tanggal Lahir": "",
    "Asal Sekolah": "",
    "Alamat Rumah": "",
    "Nomor HP/WA": "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim data ke database di sini
      console.log("Data yang akan dikirim:", formData);
      // Reset formulir setelah pengiriman berhasil
      setFormData({
        "Nama Lengkap": "",
        "Tempat Lahir": "",
        "Tanggal Lahir": "",
        "Asal Sekolah": "",
        "Alamat Rumah": "",
        "Nomor HP/WA": "",
      });
      setIsSuccess(true); // Set isSuccess menjadi true setelah pengiriman berhasil
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };

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
    <>
      {isSuccess ? (
        <>
          <Result
            status="success"
            title="Pendaftaran Berhasil!"
            subTitle="Data Anda telah berhasil terkirim."
          />
          <IndexButton type="button" name="Home" />
        </>
      ) : (
        <div className="flex space-x-10">
          <RegisterContainer />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="flex font-bold text-hijau1 text-2xl text-center md:text-left">
              Pendaftaran Calon Peserta Didik Tahun Pelajaran 2024
            </h1>
            {dataInput.map((input, index) => (
              <InputFormLabel
                key={index}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={formData[input.name]}
                onChange={handleChange}
              />
            ))}
            <div className="flex justify-center space-x-10 px-4 md:px-0">
              <IndexButton type="button" name="Home" />
              <IndexButton type="submit" name="Daftar" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterFragments;
