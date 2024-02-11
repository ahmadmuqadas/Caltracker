import Image from 'next/image'
import React from 'react'
import imageSource from './workout.png'
import Arrow from './arrow.svg'
import Link from 'next/link'


const Hero = () => {
  return (
    <main className=' container flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start lg:pt-20 lg:m-auto max-w-screen-2xl'>
      <div className='px-3 pt-10 flex flex-col items-center lg:pl-20 lg:items-start lg:flex-1'>
        <h4  className='font-semibold text-center '>Best Calorie Tracker Platform</h4>
        <h1 className='font-semibold text-center text-6xl lg:text-left'>Track your Calorie consumption and burn<span className='font-bold text-orange-400'> with CalTracker</span></h1>
        <h2 className='text-center pt-4'>The best motivational app to achieve your dream Body make new Habits and More!</h2>
        <button className=' flex gap-1 p-2 mt-10 px-10 bg-purple-900 text-white shadow-lg shadow-slate-400'>Track For Free!
        <Image
        src={Arrow}
        alt='cal tracker avatar image'
        />
</button>

</div>
      <div className='px-3 my-10 w-96 lg:pr-20 lg:flex-2'>
        <Image
        src={imageSource}
        alt='cal tracker avatar image'
        style={{
            width: '100%'
        }}
        />
      </div>

       
    </main>
  )
}

export default Hero