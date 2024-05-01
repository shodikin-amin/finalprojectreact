import { Card } from 'antd'
import React from 'react'

const CardEkskul = ({item}) => {
  return (
    <div className='container p-10'>
      <div className='row justify-content-center'>
        {item.map((val) => (
          <div key={val.id} className='flex mb-7 gap-7'>
            <div className='rounded-lg w-1/4'>
              <img src={val.img1} alt='image container' className='h-80 rounded-lg object-cover object-center'/>
            </div>
            <div className='w-3/4 row'>
              <div>
                <div className='text-lg font-bold'>{val.name}</div>
                <div className='mt-2'>{val.description}</div>
              </div>
              <div className='flex justify-between mt-3'>
                <img src={val.img1} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
                <img src={val.img2} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
                <img src={val.img3} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardEkskul
