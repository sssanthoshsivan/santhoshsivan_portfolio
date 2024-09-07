import React from 'react'
import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

function Favourites() {
  return (
    <div>
      <Header />
      <div className='font-extrabold text-9xl screen-xs:text-6xl px-10 my-5 font-sans w-full mt-20'>
        Things I Like ;)
      </div>
      <div className='flex w-full justify-center gap-1 screen-xs:flex-col p-10'>
        {[
          { src: '/f1.jpg', alt: 'f1', title: 'Formula 1', description: '"Formula One (commonly known as Formula 1 or F1) is a type of motorsport. Teams compete in a series of Grand Prix races, held in different countries around the world."' },
          { src: '/ilayaraja.jpg', alt: 'ilayaraja', title: 'Ilayaraja', description: '"Ilayaraja is an Indian composer, conductor-arranger, singer, and songwriter, known for his works predominantly in Tamil cinema."' },
          { src: '/movies.jpg', alt: 'movies', title: 'La La Land', description: `"Here's to the fools who dream"` }
        ].map((item, index) => (
          <div key={index} className='relative group flex-1 aspect-square overflow-hidden'>
            <Image 
              className='object-cover group-hover:grayscale grayscale-0 ease-in-out duration-300 transform group-hover:scale-105 group-hover:blur-sm' 
              src={item.src} 
              alt={item.alt} 
              layout='fill'
            />
            <span className='absolute inset-0 flex flex-col items-center justify-center font-extrabold text-7xl px-4 my-5 font-sans text-white opacity-0 group-hover:opacity-100 ease-in-out duration-300'>
              {item.title}
              <span className='text-sm font-extralight text-white font-josefin p-2 italic'>
                {item.description}
              </span>
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Favourites