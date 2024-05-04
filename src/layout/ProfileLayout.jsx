import React from 'react'
import Nav from '../components/molecules/Nav'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'
import DaftarGuruContainer from '../components/molecules/DaftarGuruContainer'
import StrukturOrganisasi from '../components/molecules/StrukturOrganisasiContainer'


const ProfileLayout = () => {
  return (
    <div>
      <Nav />
      <StrukturOrganisasi/>
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
    </div>
  )
}

export default ProfileLayout
