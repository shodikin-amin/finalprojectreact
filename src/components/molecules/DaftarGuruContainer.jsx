import React from 'react';

const DaftarGuruContainer = () => {
  const gurus = [
    {
      nama: 'Imam Fauzi, S.Pd.',
      mapel: 'Matematika & IPA',
    },
    {
      nama: 'Yusrina Rahmatillah, S.S.',
      mapel: 'Bahasa Inggris',
    },
    {
      nama: 'Rina Andriani, S.Tr.S.',
      mapel: 'IPS & Seni Budaya',
    },
    {
      nama: 'Laeli Ramadhaniati, S.Pd.',
      mapel: 'Bahasa Indonesia & Prakarya',
    },
    {
      nama: 'Muhammad Ma\'shum',
      mapel: 'Tahfidz',
    },
    {
      nama: 'Arief Zaki',
      mapel: 'Fiqih & Hadist',
    },
    {
      nama: 'Alfiansyah. S.H.',
      mapel: 'Bahasa Arab',
    },
    {
      nama: 'Ahlil Mubarok, S.Pd.',
      mapel: 'Fiqih & Hadist1',
    },
  ];

  return (
    <div className="container  mx-auto items-center justify-center">
      <h2 className="text-center font-bold text-2xl text-hijau1 my-4">Daftar Guru</h2>
      <table className="w-full bg-[#006666] rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-[#004d4d] text-white uppercase font-semibold text-sm">Nama</th>
            <th className="py-2 px-4 bg-[#004d4d] text-white uppercase font-semibold text-sm">Mata Pelajaran</th>
          </tr>
        </thead>
        <tbody>
          {gurus.map((guru) => (
            <tr key={guru.nama} className="bg-white text-gray-700">
              <td className="py-3 px-10">{guru.nama}</td>
              <td className="py-3 px-10">{guru.mapel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarGuruContainer;
