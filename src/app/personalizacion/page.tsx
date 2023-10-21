import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Services from '@/components/services'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
});

const page = () => {
    let customization = {
        id: 1,
        logo: '/logo-blue.svg',
        title: "Personalización excepcional para una experiencia única con cada visitante",
        subtitle: "Conoce a tus clientes a nivel individual y crea experiencias personalizadas que les encantarán.",
        src: "/customization.jpg",
        alt: "grupo de personas utilizando tecnologia",
        enfoque1: "Mejora la experiencia del cliente",
        enfoque2: "Aumenta las ventas",
        enfoque3: "Reduce el abandono",
        enfoque4: "Datos personalizados",
        enfoque5: "Segmentación avanzada",
        enfoque6: "Diferenciación competitiva"
    }

    return (
        <div className='bg-white pb-6'>
        <div className='h-screen  bg-[#FFF0D6]'>
          <div className='flex justify-center items-center py-4 md:py-8 '>
            <Link href={'/'}>
              <Image
                alt='logo hernan jojoa'
                src={customization.logo}
                width={200}
                height={300}
                className="text-[#0000FF]" />
            </Link>
          </div>
          <div className='flex flex-col gap-4 absolute bottom-0 flex-1 m-4'>
            <h1 className='font-medium text-[38px] text-[#0000FF]'>{customization.title}</h1>
            <h2 className='text-[#0000FF] text-lg'>{customization.subtitle}</h2>
            <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-[#0000FF] border border-[#0000FF] w-[200px]' target="_blank">
              <p className='text-center text-[#0000FF] font-[16px] text-s'>Contactarme</p>
            </a>
            <Image alt={customization.src} src={customization.src} width={1000} height={1000} />
          </div>
        </div>
        <div className='bg-white grid grid-col md:grid-cols-2 mx-4'>
          <div className=''>
            <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Áreas de enfoque</h2>
            <ul className='text-black font-extralight flex flex-col gap-4'>
              <li>{customization.enfoque1}</li>
              <li>{customization.enfoque2}</li>
              <li>{customization.enfoque3}</li>
            </ul>
          </div>
          <div>
            <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Características</h2>
            <ul className='text-black font-extralight flex flex-col gap-4'>
              <li>{customization.enfoque4}</li>
              <li>{customization.enfoque5}</li>
              <li>{customization.enfoque6}</li>
            </ul>
          </div>
        </div>
        <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
          <p className='text-center text-black font-[16px] text-s'>Solicitar producto</p>
        </a>
        <Services />
      </div>
    )
}


export default page