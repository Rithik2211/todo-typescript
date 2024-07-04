import Link from 'next/link'
import React from 'react'
import { cardData } from './utils';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className='flex flex-col text-center py-10 font-bold'>
        <h1 className='text-4xl mb-5'>Testimonials</h1>
        <Link href={'/'} className='mb-5 text-blue-500'> Click to Exit</Link>
        <div className='flex justify-center flex-wrap gap-5 p-2 w-full '>
            {
              cardData?.map(data => 
              <div key={data?.id} className='bg-indigo-100 rounded-2xl w-72 h-96'>
                <Image src={data?.image} alt="data" width={300} height={300} className='rounded-t-2xl object-cover' />
                <div className='p-4'>
                  <h1 className='text-xl mt-4'>{data?.title}</h1>
                  <h2 className='text-lg'>{data?.body}</h2>
                  <button className='text-blue-500 pt-4 pb-4'>Click for Review</button>
                </div>
              </div>
              )
            }
        </div>
    </div>
  )
}

export default Testimonial