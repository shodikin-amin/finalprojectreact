import React from 'react';

function StrukturOrganisasi() {
    const positions = [
        { name: "Kepala Sekolah", person: "Alfiansyah, S.H." },
        { name: "Waka Kurikulum", person: "Rina Andriani, S.Tr.T." },
        { name: "Waka Kesiswaan", person: "Ahmad Hari Rafsanjani, S.Kom." },
        { name: "Waka Humas", person: "Rastina, S.S." },
        { name: "Waka Asrama", person: "Muhammad Ayub" },
        { name: "Tata Usaha", person: "Rastina, S.S." },
        { name: "Bendahara", person: "Shodikin Amin, S.Kom" },
        { name: "Wali Kelas VII", person: "Rastina, S.S." },
        { name: "Wali Kelas VIII", person: "Rastina, S.S." },
        { name: "Wali Kelas IX", person: "Ahmad Hari Rafsanjani, S.Kom." },
    ];

    return (
        <div className="container  mx-auto items-center justify-center">
            <h2 className="text-center font-bold text-2xl text-hijau1 my-4">Struktur Organisasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {positions.map((position, index) => (
                <div key={index} className="bg-teal-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-4">{position.name} - {position.person}</h3>
                </div>
            ))}
        </div>
        </div>
    );
}

export default StrukturOrganisasi;