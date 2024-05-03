import React from 'react'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'

const ProfileLayout = () => {
  return (
    <div>
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
    </div>
  )
}

export default ProfileLayout