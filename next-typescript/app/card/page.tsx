import Link from 'next/link'
import React from 'react'

// sm: Small devices (min-width: 640px)
// md: Medium devices (min-width: 768px)
// lg: Large devices (min-width: 1024px)
// xl: Extra-large devices (min-width: 1280px)
// 2xl: Double extra-large devices (min-width: 1536px)

function TailwindCss() {
  return (
    <div className='h-screen w-full flex justify-center items-center p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 grid-rows-8 h-full w-full gap-4'>
          <div className='col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 xl:col-span-6 row-span-1 sm:row-span-2 md:row-span-2 lg:row-span-6 xl:row-span-6 bg-indigo-400 rounded-3xl flex justify-center items-center'>Feature</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3 row-span-1 lg:row-span-2 xl:row-span-2 bg-indigo-400 rounded-3xl flex justify-center items-center'>Artist</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 row-span-1 lg:row-span-2 xl:row-span-2 bg-indigo-400 rounded-3xl flex justify-center items-center'>Photos</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-2 lg:row-span-4 xl:row-span-4 bg-indigo-400 rounded-3xl flex justify-center items-center'>ArtWork 1</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-2 lg:row-span-4 xl:row-span-4 bg-indigo-400 rounded-3xl flex justify-center items-center'>ArtWork 2</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-8 row-span-1 lg:row-span-2 xl:row-span-2 bg-indigo-400 rounded-3xl flex justify-center items-center'>Contact</div>
          <div className='col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2 row-span-1 lg:row-span-2 xl:row-span-2 bg-indigo-400 rounded-3xl flex justify-center items-center' ><Link href="/">Exit</Link></div>
        </div>
    </div>
  )
}

export default TailwindCss