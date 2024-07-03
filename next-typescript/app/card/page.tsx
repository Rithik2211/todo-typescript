import Link from 'next/link'
import React from 'react'

function TailwindCss() {
  return (
    <div className='h-screen w-full flex justify-center items-center p-6'>
        <div className='grid h-full w-full grid-cols-10 grid-rows-4 gap-4'>
          <div className='col-span-6 row-span-3 bg-indigo-500 rounded-3xl flex justify-center items-center'>Feature</div>
          <div className='col-span-2 row-span-1 bg-indigo-500 rounded-3xl flex justify-center items-center'>Artist</div>
          <div className='col-span-2 row-span-1 bg-indigo-500 rounded-3xl flex justify-center items-center'>Photos</div>
          <div className='col-span-2 row-span-2 bg-indigo-500 rounded-3xl flex justify-center items-center'>ArtWork 1</div>
          <div className='col-span-2 row-span-2 bg-indigo-500 rounded-3xl flex justify-center items-center'>ArtWork 2</div>
          <div className='col-span-6 row-span-1 bg-indigo-500 rounded-3xl flex justify-center items-center'>Contact</div>
          <div className='col-span-4 row-span-1 bg-indigo-500 rounded-3xl flex justify-center items-center' ><Link href="/">Exit</Link></div>
        </div>
    </div>
  )
}

export default TailwindCss