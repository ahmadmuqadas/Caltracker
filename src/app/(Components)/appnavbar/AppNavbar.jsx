import React from 'react'
import Image from 'next/image'

import userIcon from './userIcon.svg'


const AppNavbar = () => {
  return (
    <nav className=  'm-auto nav flex justify-between items-center px-3 h-20 bg-blue-500 lg:px-20 max-w-screen-2xl'>
      <div className=""><p className='font-bold text-white text-2xl '>Caltracker</p></div>
      <div className="">
      <Image className='w-10 cursor-pointer'
      src={userIcon}
      alt="Cal Tracker Logo"
      role='button'
    />
        </div>
    </nav>
  )
}

export default AppNavbar
