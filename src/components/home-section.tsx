import React from 'react'
import Image from 'next/image'
import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
})

type HomeSection = {
  title: string;
  p: string;
  list: string[];
  src: string;
  alt: string;
};

interface CardProps {
  card: HomeSection;
}

const HomeSection: React.FC<CardProps> = ({ card }) => {
  return (
    <div>
      <div className='my-10 mx-4'>
        <div className='border-t border-white flex grid md:grid-cols-2 py-4'>
          <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >{card.title}</h2>
          <div>
            <p className='text-2xl py-4'>{card.p}</p>
            <p className='underline text-lg focus'>Explorar más</p>
          </div>
        </div>
        <div className='flex justify-center items-center grid md:grid-cols-2 gap-10 py-4'>
          <ul className='flex flex-col gap-6 font-light'>
            {card.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Image
            alt={card.alt}
            src={card.src}
            width={980}
            height={2080}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection