import React from 'react'
import {BeakerIcon, ChartPieIcon} from '@heroicons/react/24/solid'
export const SideBar = () => {
  return (
   <aside className='w-96'>
    <div>
        <h1 className='text-2xl text-center font-semibold drop-shadow-lg mb-5'>

        Material DashBoard
        </h1>
        <hr className='border-2' />
    </div>
    <div className='pl-5'>
    <div className='flex items-center mt-10'>
        <ChartPieIcon className='w-10'/>
        <h1>DashBoard</h1>
    </div>
    </div>
   </aside>
  )
}
