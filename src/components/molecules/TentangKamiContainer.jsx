import React from 'react';
import TentangKamiCard from '../atoms/Card/TentangKamiCard';

const TentangKami = () => {
  const latarBelakangContent = [
    "Berdasarkan kondisi pendidikan sekolah dasar khususnya daerah Samarinda Kalimantan Timur yang masih sangat membutuhkan terus perbaikan dan peningkatan kualitas materi dalam hal ini bidang ke ISLAMAN",
    "Tingginya animo dan permintaan masyarakat yang mulai mencari sekolah-sekolah pada jenjang sekolah dasar yang benar-benar menggunakan kurikulum berdasarkan Al Quran dan Sunnah Rasulullah SAW",
    "Orang tua selaku masyarakat yang mulai banyak memahami pentingnya keilmuan keIslaman yang baik sudah dipelajari dan difahamkan kepada anak sejak dini.",
    "Sebagai usaha yang diharapkan dapat menghadirkan generasi-generasi yang kokoh keimanan sejak kecil dalam menghadapi era moderenisasi, globalisasi baik ekonomi, sosial dan budaya.",
    "Keinginan yang besar masyarakat Samarinda untuk menghadirkan Generasi Robbani"
  ];

  return (
    <div className="container  mx-auto items-center justify-center">
      <h2 className="text-center font-bold text-2xl text-hijau1 my-4">Tentang Kami</h2>
    <TentangKamiCard 
      title="Pendahuluan"
      content={[
        "Islam mengenal lembaga pendidikan semenjak awal turunnya wahyu kepada Nabi Muhammad SAW di sebuah gua melalui Malaikat Jibril AS. Karena pada hakekatnya proses turunnya atau pemberian wahyu adalah merupakan institusi pendidikan Islam pertama dengan guru besar Nabi Muhammad SAW. Beliau mengumpulkan sekumpulan kecil pengikutnya yang percaya kepadanya untuk belajar Islam secara diam-diam. Di rumah inilah Beliau mengajarkan ayat- ayat Al Quran dan membentuk idiologinya sesuai dengan ajaran Islam yang mulia itu."
      ]}
    />
    <TentangKamiCard 
      title="Latar Belakang"
      content={latarBelakangContent}
    />
    
  </div>
  );
}

export default TentangKami;