import React from 'react';
import IndexButton from "../components/atoms/Button";

const BurgerFragment1 = () => {
  return (
    <div className='p-4 flex flex-col justify-between h-screen'>
      <img
        src="./src/assets/img/logo/asqolanlogo.png"
        className="size-20 m-3 md:size-24 md:m-6"
        alt="Asqolan Logo"
      />
      <div className='flex flex-col gap-6'>
        <a href="" className='font-bold text-2xl'>Gallery</a>
        <a href="" className='font-bold text-2xl'>Profil</a>
        <a href="" className='font-bold text-2xl'>Pendaftaran</a>
      </div>
      <div className='flex-row m-4 space-y-4'>
        <IndexButton name="Login"/>
        <IndexButton name="Kembali ke Beranda"/>
      </div>
    </div>
  );
};

export default BurgerFragment1;

