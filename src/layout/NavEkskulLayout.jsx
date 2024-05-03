import React from 'react'
import DataEkskul from '../components/data/DataEkskul'

const NavEkskulLayout = ({navItems, filterItem, setItem}) => {
  return (
    <div className='text-center mt-5'>
        <ul className='inline-flex justify-center gap-10 bg-[#ACFFE3] w-fit p-2 rounded-md shadow-lg'>
            <li className='list-none mx-2' onClick={() => setItem(DataEkskul)}>All</li>
        {navItems.map(val => (
            <li className='list-none mx-2' onClick={() => filterItem(val)}>{val}</li>
        ))}
        </ul>
    </div>
  )
}

export default NavEkskulLayout
