import React from 'react'
import Image from 'next/image';

import Logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <div className='flex justify-between items-center h-20 px-5'>
      <div className=''>

      <Image src={Logo} alt="logo" width={180} height={100} />
      </div>
      <div className='w-[40%] text-right'>
        <h3 className='text-sm font-semibold'>&copy; 2024, All rights reserved.</h3>
      </div>
    </div>
  )
}
