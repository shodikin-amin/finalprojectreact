import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat align-center justify-center align-text-center bg-[url('../src/assets/img/backgroundHome.jpg')]">
      <div className="h-[30vh] w-[70vw] mx-auto p-4 rounded-lg bg-gray-200 bg-opacity-80 flex flex-col items-center justify-center text-center ">
        <h2 className="text-5xl font-bold mb-4">Selamat Datang </h2>
        <p className="text-xl">Peserta Didik Baru Tahun Pelajaran 2024</p>
      </div>
      <div className="text-center">
        <Link to={"/register"}>
          <button className="bg-orange-500 px-4 py-2 mt-4 rounded-lg text-lg font-semibold text-decoration-none hover:bg-opacity-80">
            Daftar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
