import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import { cardData } from './utils';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='text-center py-10 font-bold mt-[50px] mb-[50px]'>
        <h1 className='text-4xl'>Testimonials</h1>
        <Link href={'/'}> Click to Exit</Link>
        <Slider {...settings}>
          {cardData?.map((data) => (
            <div key={data?.id}>
              <Image src={data?.image} alt={data?.title} width={300} height={300} />
              <h1>{data?.title}</h1>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Testimonial