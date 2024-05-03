import React from 'react';

const DaftarGuruContainer = () => {
  return (
    <div className="tblGuru">
      <h2 className="text-center font-bold text-2xl text-white mb-4">Daftar Guru</h2>
      <table className="w-full bg-[#006666] rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-[#004d4d] text-white uppercase font-semibold text-sm">Nama</th>
            <th className="py-2 px-4 bg-[#004d4d] text-white uppercase font-semibold text-sm">Mata Pelajaran</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Imam Fauzi, S.Pd.</td>
            <td className="py-3 px-4">Matematika & IPA</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Yusrina Rahmatillah, S.S.</td>
            <td className="py-3 px-4">Bahasa Inggris</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Rina Andriani, S.Tr.S.</td>
            <td className="py-3 px-4">IPS & Seni Budaya</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Laeli Ramadhaniati, S.Pd.</td>
            <td className="py-3 px-4">Bahasa Indonesia & Prakarya</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Muhammad Ma'shum</td>
            <td className="py-3 px-4">Tahfidz</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Arief Zaki</td>
            <td className="py-3 px-4">Fiqih & Hadist</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Alfiansyah. S.H.</td>
            <td className="py-3 px-4">Bahasa Arab</td>
          </tr>
          <tr className="bg-white text-gray-700">
            <td className="py-3 px-4">Ahlil Mubarok, S.Pd.</td>
            <td className="py-3 px-4">Fiqih & Hadist</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DaftarGuruContainer;