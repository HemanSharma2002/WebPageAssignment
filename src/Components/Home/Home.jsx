import React from 'react'
import Card from '../Card/Card'
import { AdjustRounded, AutoGraphRounded, BarChartRounded, CoPresentRounded, FlashOn, GroupRounded, ReplayCircleFilledOutlined, TagRounded, Thunderstorm } from '@mui/icons-material'

export default function () {
  return (
    <div className=' h-full w-full my-3 '>
        {/* Intro */}
        <div className=' flex flex-col py-4 items-center text-center px-2 md:px-10 bg-[url("C:\Projects\Frontend\Start\Assignment\src\assets\Untitled design.png")] '>
            <div className=' font-semibold text-blue-500 my-3'>
                SOLUTIONS
              </div>
              <div>
                  <div className=' flex md:flex-row flex-col text-6xl font-bold my-3 '>
                      <p className='px-2 text-blue-800'>Calendly </p>
                      <p className=' text-blue-950'>for the work you do</p>
                  </div>
                  <div className=' text-gray-700 my-5 text-xl'>
                      <p>Across a range of uses, Calendly helps people and teams build</p>
                      <p>
                          efficiency,professionalism, and results into the work they do
                      </p>
                  </div>
              </div>
              <div >
                  <button className='bg-blue-800 text-white px-4 py-2 rounded-3xl my-3 hover:bg-blue-600'>Contact sales</button>
            </div>
        </div>
        
        <div className='text-center py-2'>
            <p className=' text-blue-500 font-semibold p'>SOLUTIONS</p>
            <p  className=' text-blue-950 text-2xl font-semibold py-2'>Calendly can solve your specific pain points</p>
        </div>
        {/* cards */}
        <div className='flex flex-wrap justify-center gap-3 md:px-52 px-2 '>
            <Card logo={<AdjustRounded/>} title={"Sales"} description={"Calendly can solve your specific pain points Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they're in peak buying mode."}/>
             <Card logo={<GroupRounded/>} title={"Recruting"} description={"Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups."}/>
             <Card logo={<CoPresentRounded/>} title={"Education"} description={"Control your office hours, and empower students and parents to schedule appointments easily."}/>
             <Card logo={<BarChartRounded/>} title={"Revenue Operation"} description={"Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting."}/>
             <Card logo={<FlashOn/>} title={"Marketing"} description={"Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction."}/>
             <Card logo={<AutoGraphRounded/>} title={"Customer Sucess"} description={"Offer exceptional support: Yourclients will be delighted with one-click scheduling and increased responsiveness."}/>
        </div>
        {/* Easy Booking section */}
        <div className=' bg-blue-950 w-full flex flex-col items-center text-center text-white py-10 my-5'>
                <h1 className='font-bold text-4xl my-2'>
                    Easy access for easy bookings
                </h1>
                <div className=' my-3'>
                    <p>
                        Share your Calendly link right from your browser, so you can schedule meetings
                    </p>
                    <p>
                        without the back-and-forth
                    </p>
                </div>
                <div className=' my-3 duration-150'>
                    <button className=' px-5 mx-3 rounded-3xl bg-blue-700 py-2 cursor-pointer hover:bg-blue-600 hover:underline'>Start for free</button>
                    <button className=' px-5 mx-3 rounded-3xl border-2 border-white py-2 cursor-pointer hover:underline '>Talk with sales</button>
                </div>
            </div>
        </div>
    )
}
