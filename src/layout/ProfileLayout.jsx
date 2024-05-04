import React from 'react'
import Nav from '../components/molecules/Nav'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'
import DaftarGuruContainer from '../components/molecules/DaftarGuruContainer'


const ProfileLayout = () => {
  return (
    <div>
      <Nav />
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
    </div>
  )
}

export default ProfileLayout
