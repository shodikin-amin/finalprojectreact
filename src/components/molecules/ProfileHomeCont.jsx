import React from 'react'

const ProfileHome = () => {
  return (
    <div>
      <div className='flex justify-end gap-44 mt-10'>
        <div>
          <img src='./src/assets/img/siswa.png' alt='image container' className='h-80'/>
        </div>
        <div>
          <div className='bg-white w-fit p-10 rounded-s-xl text-justify shadow-2xl border-solid border-2'>
            <h3 className='font-bold text-xl'>Visi</h3>
            <ul>
              <li>Terciptanya Generasi Unggul di Bidang Quran, Keilmuan, dan Karakter</li>
            </ul>

            <h3 className='mt-5 font-bold text-xl'>Misi</h3>
            <ul>
              <li>1. Mencetak peserta didik yang memahami Al - Qur'an dengan baik</li>
              <li>2. Menjadikan Al - Qur'an sebagai karakter dan kepribadian peserta didik</li>
              <li>3. Melahirkan peserta didik yang hafal serta bisa membaca Al - Qur'an dengan baik</li>
              <li>4. Menyiapkan peserta didik yang berilmu dan berwawasan</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
          <div className='bg-[#006666] w-fit my-5 p-10 rounded-e-xl text-center shadow-2xl'>
            <h3 className='font-bold text-xl text-white'>Program Unggulan</h3>
            <ul className='text-white text-justify list-disc ms-24 me-24'>
              <li>Hafidz Qur'an 15 Juz</li>
              <li>Mahir Berbahasa Arab dan Inggris</li>
              <li>Berakhlak Qur'ani</li>
              <li>Paham Kitab Kuning</li>
              <li>Handal IT</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ProfileHome
