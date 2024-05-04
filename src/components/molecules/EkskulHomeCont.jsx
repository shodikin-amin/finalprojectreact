import React, { useState } from 'react'
import ImageCard from '../atoms/Card/ImageCard'
import DataEkskul from '../data/DataEkskul'

const EkskulHomeCont = () => {
  const[item,setItem] = useState(DataEkskul)

  return (
    <div className='bg-[#006666] p-1'>
      <h1 className='text-center text-3xl text-white font-bold mt-10'>Ekstrakulikuler</h1>
      <ImageCard item={item}/>
    </div>
  )
}

export default EkskulHomeCont
