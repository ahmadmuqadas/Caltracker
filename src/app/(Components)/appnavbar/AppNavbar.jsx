import React from 'react'
import Image from 'next/image'
import LogoSource from './logo.png';
import userIcon from './userIcon.svg'


const AppNavbar = () => {
  return (
    <nav className='container m-auto nav flex justify-between items-center px-3 h-20 bg-blue-500 lg:px-20'>
      <div className=""><p className='font-bold text-white text-2xl '>Caltracker</p></div>
      <div className="">
      <Image className='w-10'
      src={userIcon}
      alt="Cal Tracker Logo"
    />
        </div>
    </nav>
  )
}

export default AppNavbar
