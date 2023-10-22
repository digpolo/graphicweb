import Image from 'next/image';
import React from 'react'
import { EB_Garamond } from "next/font/google";
import Services from "@/components/services"
import Link from 'next/link';

type cxPage = {
  id: number;
  logo: string
  title: string;
  subtitle: string
  src: string;
  alt: string
  enfoque1: string
  enfoque2: string
  enfoque3: string
  enfoque4: string
  enfoque5: string
  enfoque6: string
};

interface Props {
  card: cxPage;
}

const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
});

const CxPage: React.FC<Props> = ({ card }) => {

  return (
    <div className='bg-white pb-6'>
      <div className='h-screen  bg-[#FFF0D6]'>
      <div className='flex justify-center items-center py-4 md:py-8 '>
      <Link href={'/'}>
        <Image 
        alt='logo hernan jojoa' 
        src={card.logo} 
        width={200} 
        height={300}
        className="text-[#0000FF]"/>
        </Link>
    </div>
        <div className='flex flex-col gap-4 absolute bottom-0 flex-1 m-4'>
          <h1 className='font-medium text-[38px] text-[#0000FF]'>{card.title}</h1>
          <h2 className='text-[#0000FF] text-lg'>{card.subtitle}</h2>
          <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-[#0000FF] border border-[#0000FF] w-[200px]' target="_blank">
            <p className='text-center text-blue font-[16px] text-s'>Contactarme</p>
          </a>
          <Image alt={card.src} src={card.src} width={1000} height={1000} />
        </div>
      </div>
      <div className='bg-white grid grid-col md:grid-cols-2 mx-4'>
        <div className=''>
          <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Áreas de enfoque</h2>
          <ul className='text-black font-extralight flex flex-col gap-4'>
            <li>{card.enfoque1}</li>
            <li>{card.enfoque2}</li>
            <li>{card.enfoque3}</li>
          </ul>
        </div>
        <div>
          <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Características</h2>
          <ul className='text-black font-extralight flex flex-col gap-4'>
            <li>{card.enfoque4}</li>
            <li>{card.enfoque5}</li>
            <li>{card.enfoque6}</li>
          </ul>
        </div>
        </div>
        <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
          <p className='text-center text-black font-[16px] text-s'>Solicitar producto</p>
        </a>
      <Services colorText='black'/>
    </div>
  )
}

export default CxPage