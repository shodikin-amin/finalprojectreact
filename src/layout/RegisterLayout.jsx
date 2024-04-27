import React from 'react'
import InputButton from '../components/atoms/InputButton'
import InputForm from '../components/atoms/InputForm'
import RegisterContainer from '../components/molecules/RegisterContainer'

const RegisterLayout = () => {
  return (
    <div>

        <h1>Pendaftaran Calon Peserta Didik
Tahun Pelajaran 2024</h1>
        <RegisterContainer/>
        <InputForm name="Nama lengkap"/>
        <InputForm name="Tempat Lahir"/>
        <InputForm name="Tanggal Lahir" type="date"/>
        <InputForm name="Asal Sekolah"/>
        <InputForm name="Alamat Rumah"/>
        <InputForm name="Nomor HP/WA"/>
        <InputButton name="Daftar"/>
        <InputButton name="Home"/>
    </div>
  )
}

export default RegisterLayout
