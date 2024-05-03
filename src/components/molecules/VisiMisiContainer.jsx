import React from 'react'

const VisiMisiContainer = () => {
  return (
    <div className='bg-[#006666] p-5'>
      <h1 className='text-center font-bold text-3xl text-white'>Visi dan Misi</h1>
      <h1 className='text-center font-bold text-3xl text-white'>SMP ISLAM ASQOLAN</h1>
      <div className='flex justify-center'>
        <div className='bg-white w-fit my-5 p-10 rounded-xl text-justify shadow-2xl'>
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
  )
}

export default VisiMisiContainer
