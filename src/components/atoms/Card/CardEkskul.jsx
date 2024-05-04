import { Card } from 'antd'
import React, { useState } from 'react'

const CardEkskul = ({item}) => {
  const [showMore, setShowMore] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className='container p-10'>
      <div className='row justify-content-center'>
        {item.map((val) => (
          <div key={val.id} className='flex mb-10 gap-7'>
            <div className='rounded-lg w-1/4'>
              <img src={val.img1} alt='image container' className='h-80 rounded-lg object-cover object-center'/>
            </div>
            <div className='w-3/4 row'>
              <div>
                <div className='text-lg font-bold'>{val.name}</div>
                <div className='mt-2 text-justify'>
                  {showMore? val.description: `${val.description.substring(0, 400)}`}
                  <button onClick={() => {setShowMore(!showMore)}} className='ms-2 text-blue-600'>
                    {showMore? "Show less" : "Show more..."}
                  </button>
                </div>
              </div>
              <div className='flex justify-between mt-3'>
                <div className='hover:scale-105 hover:border-[#006666] hover:border-2 hover:rounded-lg'>
                  <img src={val.img1} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
                </div>
                <div className='hover:scale-105 hover:border-[#006666] hover:border-2 hover:rounded-lg'>
                  <img src={val.img2} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
                </div>
                <div className='hover:scale-105 hover:border-[#006666] hover:border-2 hover:rounded-lg'>
                  <img src={val.img3} alt='image container' className='h-40 w-52 object-cover object-center rounded-lg'/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardEkskul
