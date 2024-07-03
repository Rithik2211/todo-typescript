import Link from 'next/link'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='text-center py-10 font-Poppins'>
        <h5 className='text-4xl'>Testimonials</h5>
        <Link href={'/'}> Click to Exit</Link>
    </div>
  )
}

export default Testimonial