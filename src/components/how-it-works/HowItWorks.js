import Image from 'next/image'
import React from 'react'
import plant from '../../../public/assets/how-it-works/plant.png'

const HowItWorks = () => {
  return (
    <div>
        <h2 className=' text-[44px] font-medium'>How it works ?</h2>
        <div className='w-full flex flex-row'>
            <div className='flex flex-col'>
                <Image src={plant} alt="plant" />
            </div>

        </div>
    </div>
  )
}

export default HowItWorks