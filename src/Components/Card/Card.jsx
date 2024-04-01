import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import React from 'react'

export default function Card({logo,title,description}) {
  return (
    <div className=' border-2 border-gray-200  shadow-md p-5 h-[300px]  text-gray-700  w-[360px] rounded-md flex flex-col relative'>
        <div className='text-blue-800 my-1'>{logo}</div>
        <div className=' my-1'>
            <h1 className='font-bold my-2'>{title}</h1>
            <p>{description}</p>
        </div>
        <div className=' flex flex-row py-5 absolute bottom-3 hover:underline cursor-pointer '>
            <p className=' text-blue-800 font-semibold'>Learn more </p>
            <ChevronRight className='text-blue-800 pt-1' />
        </div>
    </div>
  )
}
