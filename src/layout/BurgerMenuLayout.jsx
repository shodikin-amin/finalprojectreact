import React from 'react'
import BurgerFragment1 from '../fragments/BurgerFragment1'
import BurgerFragment2 from '../fragments/BurgerFragment2'
import BurgerFragments3 from '../fragments/BurgerFragment3'

const BurgerMenuLayout = () => {
  return (
    <div className='flex'>
        <div className='flex-1'>
      <BurgerFragment1 />
        </div>
        <div className='flex-1'>
      <BurgerFragment2 />
        </div>
        <div className='flex-1'>
      <BurgerFragments3 />
        </div>
    </div>
  )
}

export default BurgerMenuLayout
