import React from 'react'
import Nav from '../components/molecules/Nav'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'
import DaftarGuruContainer from '../components/molecules/DaftarGuruContainer'
import StrukturOrganisasi from '../components/molecules/StrukturOrganisasiContainer'
import TentangKami from '../components/molecules/TentangKamiContainer'


const ProfileLayout = () => {
  return (
    <div>
      <Nav />
      <div className='container p-5'>
      <TentangKami/>
      <StrukturOrganisasi/>
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
    </div>
    </div>
  )
}

export default ProfileLayout
