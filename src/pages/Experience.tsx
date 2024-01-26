import React from 'react'
import CardExperience from '../components/CardExperience';

import { FcGoogle } from "react-icons/fc";

export const Experience = () => {
  return (
    <div className='bg-black w-screen h-screen flex flex-col items-center pt-16'>
      <h1 className='text-2xl text-white'>My<strong> Experience</strong></h1>
      <div className='mt-10'>
        <CardExperience title='Maquetador Web' description='ajsdkfklja  jaksdjfja a jfjasldfjla dfsdfasdfasdfasdfasdfasdfadsf sadfasdf  jdlkjflkja' icon={FcGoogle} size={30} data='Nov 2019 - Present' />
      </div>
      <div className='mt-10 bg-gray-900'>
        <CardExperience title='Maquetador Web' description='ajsdkfklja  jaksdjfja a jfjasldfjla dfsdfasdfasdfasdfasdfasdfadsf sadfasdf  jdlkjflkja' icon={FcGoogle} size={30} data='Nov 2019 - Present' />
      </div>
      <div className='mt-10'>
        <CardExperience title='Maquetador Web' description='ajsdkfklja  jaksdjfja a jfjasldfjla dfsdfasdfasdfasdfasdfasdfadsf sadfasdf  jdlkjflkja' icon={FcGoogle} size={30} data='Nov 2019 - Present' />
      </div>
    </div>
  )
}
