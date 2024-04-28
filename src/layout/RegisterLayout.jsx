import React from "react";
import RegisterContainer from "../components/molecules/RegisterContainer";
import RegisterFragments from "../fragments/RegisterFragments";
import IndexButton from "../components/atoms/Button";

const RegisterLayout = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center h-screen">
      <div>
        <RegisterContainer />
      </div>
      <div className="flex-row space-y-8">
        <h1 className="flex font-bold text-hijau1 text-2xl text-center md:text-left">
          Pendaftaran Calon Peserta Didik Tahun Pelajaran 2024
        </h1>
        <div className="space-y-6 px-4 md:px-0">
          <RegisterFragments />
        </div>
        <div className="flex justify-center space-x-10 px-4 md:px-0 ">
          <IndexButton name="Daftar" />
          <IndexButton name="Home" />
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
