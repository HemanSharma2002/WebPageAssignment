import { ChevronLeft, Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='md:px-10 px-2 flex flex-wrap justify-between'>
                {/* first part */}
                <div className='  w-[450px] flex flex-col items-start'>
                    <div className=' my-5'>
                        <p className='text-3xl font-bold'>Easy</p>
                        <p className='text-3xl font-bold text-blue-800'>ahead</p>
                    </div>
                    <div className=' my-5 text-gray-700'>
                        <p>
                            We take the work out of connecting with others so you can accomplish more.
                        </p>
                    </div>
                    <div className=' my-5 w-full flex flex-row justify-between border-gray-400 border-2 rounded-lg p-2'>
                        <p>English</p>
                        <ChevronLeft className='-rotate-90'/>
                    </div>
                    <div className=' flex flex-row my-5'>
                        <div className=' w-40 '>
                            <img src="https://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/image" alt="" />
                        </div>
                        <div className=' w-32 mx-10 my-[8px]'>
                            <img src="https://core.redlion.com/sites/default/files/inline-images/apple-app-store-logo.jpg" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row my-5'>
                        <p className='mx-4 md:mr-8 cursor-pointer'><Twitter /></p>
                        <p className='mx-4 md:mx-8 cursor-pointer'><Facebook /></p>
                        <p className='mx-4 md:mx-8 cursor-pointer'><Instagram /></p>
                        <p className='mx-4 md:mx-8 cursor-pointer'><LinkedIn /></p>
                        <p className='mx-4 md:mx-8 cursor-pointer'><YouTube /></p>
                    </div>

                </div>
                {/* second */}
                <div className='  flex flex-col md:items-start  '>
                    <div>
                        <h1  className=' text-xl font-bold py-4'>About</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>About Calendly</p>
                            <p className=' text-gray-700 my-3'>Contact Sales</p>
                            <p className=' text-gray-700 my-3'>Newsroom</p>
                            <p className=' text-gray-700 my-3'>Careers</p>
                            <p className=' text-gray-700 my-3'>Security</p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-xl font-bold py-4'>Support</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>Help Center</p>
                            <p className=' text-gray-700 my-3'>Video Tutorials</p>
                            <p className=' text-gray-700 my-3'>Cookie Settings</p>
                        </div>
                    </div>

                </div>
                {/* Third */}
                <div className='  flex flex-col md:items-start  '>
                    <div>
                        <h1  className=' text-xl font-bold py-4'>Solutions</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>Customer Sucess</p>
                            <p className=' text-gray-700 my-3'>Sales</p>
                            <p className=' text-gray-700 my-3'>Recruting</p>
                            <p className=' text-gray-700 my-3'>Information Technology</p>
                            <p className=' text-gray-700 my-3'>Marketing</p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-xl font-bold py-4'>Add-Ons</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>Download from Chrome</p>
                            <p className=' text-gray-700 my-3'>Download for Firefox</p>
                        </div>
                    </div>

                </div>
                {/* fourth  */}
                <div className='  flex flex-col md:items-start  '>
                    <div>
                        <h1  className=' text-xl font-bold py-4'>Popular Features</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>Embed Calendly</p>
                            <p className=' text-gray-700 my-3'>Avilability</p>
                            <p className=' text-gray-700 my-3'>Sending Notifications</p>
                            <p className=' text-gray-700 my-3'>Use Calendly Mobile</p>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-xl font-bold md:mt-11 py-4'>Developers</h1>
                        <div>
                            <p className=' text-gray-700 my-3'>Developer Tools</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className=' flex flex-row justify-between md:px-10 px-1 py-2'>
                <div className=' text-gray-700'>
                    <p>Copyrights Calendy 2022</p>
                </div>
                <div className=' text-gray-700'>
                    <p>Privacy / Terms and Condition</p>
                </div>
            </div>
        </div>
    )
}
