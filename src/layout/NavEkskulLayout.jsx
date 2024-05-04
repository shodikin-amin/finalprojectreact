import React, { useEffect, useRef, useState } from 'react'
import DataEkskul from '../components/data/DataEkskul'


const NavEkskulLayout = ({navItems, filterItem, setItem}) => {
  // const {selectedBtn} = useState(0)
   const firstBtnRef = useRef()

   useEffect(() => {
     firstBtnRef.current
   }, )

  console.log(navItems)
  console.log(filterItem)
  return (
    <div className='text-center mt-5'>
        <ul className='inline-flex justify-center gap-10 bg-[#ACFFE3] w-fit p-2 rounded-md shadow-lg'>
        {navItems.map((val) => (
            <li
              key={val.id} 
              onClick={() => filterItem(val)}
              className='list-none mx-2 hover:font-bold'>{val}
              </li>
        ))}
        </ul>
    </div>
  )
}

export default NavEkskulLayout
