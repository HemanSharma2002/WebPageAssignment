import { ArrowDownward, Cancel, ChevronLeft, CloseRounded, Menu, X } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            {/* desktop view */}
            <nav className=' px-2 flex flex-row md:px-10 py-5 justify-between'>
                <div className='flex flex-row'>
                    <div className='w-14'><img src="data:image/png;base64,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" alt="" /></div>
                    <div className='text-3xl text-blue-800 font-semibold'>Calendly</div>
                </div>
                <div className='py-[5px] hidden md:block'>
                    <ul className=' flex flex-row font-semibold'>
                        <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-1 hover:text-white duration-75 cursor-pointer '>Individual</li>
                        <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-1 hover:text-white duration-75 cursor-pointer '>Teams</li>
                        <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-1 hover:text-white duration-75  cursor-pointer'>Enterprise</li>
                        <li className='flex flex-row px-4 hover:bg-blue-800 rounded-3xl py-1 group hover:text-white duration-75 cursor-pointer '>
                            <p className=' font-semibold'>Product</p>
                            <ChevronLeft fontSize='' className=' -rotate-90 mt-[6px] group-hover:rotate-90 duration-75' />
                        </li>
                        <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-1 hover:text-white duration-75 cursor-pointer '>Pricing</li>
                        <li className='flex flex-row px-4 group hover:bg-blue-800 rounded-3xl py-1 group hover:text-white duration-75 cursor-pointer '>
                            <p className=' font-semibold'>Resources</p>
                            <ChevronLeft fontSize='' className=' -rotate-90 mt-[6px] group-hover:rotate-90 duration-75 ' />
                        </li>
                    </ul>
                </div>
                <div className={` font-semibold flex flex-row `}>
                    <p className='py-2 mx-3 cursor-pointer md:block hidden'>Login</p>
                    <p className=' bg-blue-800 text-white py-2 md:px-5 px-2 rounded-sm md:rounded-3xl md:block hidden hover:bg-blue-600 cursor-pointer w-32 text-center'>Get started</p>
                    <div className='md:hidden duration-300' onClick={() => {
                        setMenu(!menu)
                    }}>
                        <p className={`${menu?"hidden":"block"}`}><Menu fontSize='large' className={`m-1 `} /></p>
                        <p className={`${!menu?"hidden":"block"}`}><CloseRounded fontSize='large' className={`m-1 `} /></p>
                    </div>
                </div>
            </nav>
            {/* Mobile view */}
            <div className={` bg-white w-full h-screen absolute right-0 rounded-l-lg ${menu?" block":" hidden"} md:hidden z-10 fixed top-14 duration-300`}>
                <ul className=' flex flex-col font-semibold pt-4'>
                    <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-4 hover:text-white duration-75 cursor-pointer '>Individual</li>
                    <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-4 hover:text-white duration-75 cursor-pointer '>Teams</li>
                    <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-4 hover:text-white duration-75  cursor-pointer'>Enterprise</li>
                    <li className='flex flex-row px-4 hover:bg-blue-800 rounded-3xl py-4 group hover:text-white duration-75 cursor-pointer '>
                        <p className=' font-semibold'>Product</p>
                        <ChevronLeft fontSize='' className=' -rotate-90 mt-[6px] group-hover:rotate-90 duration-75' />
                    </li>
                    <li className=' font-semibold px-4 hover:bg-blue-800 rounded-3xl py-4 hover:text-white duration-75 cursor-pointer '>Pricing</li>
                    <li className='flex flex-row px-4 group hover:bg-blue-800 rounded-3xl py-4 group hover:text-white duration-75 cursor-pointer '>
                        <p className=' font-semibold'>Resources</p>
                        <ChevronLeft fontSize='' className=' -rotate-90 mt-[6px] group-hover:rotate-90 duration-75 ' />
                    </li>
                </ul>
                <div className=' font-semibold flex flex-col items-center'>
                    <p className='py-2 mx-3 cursor-pointer'>Login</p>
                    <p className=' bg-blue-800 text-white py-2 md:px-5 px-2 rounded-sm md:rounded-3xl hover:bg-blue-600 cursor-pointer w-32 text-center'>Get started</p>
                </div>
            </div>
        </div>
    )
}
