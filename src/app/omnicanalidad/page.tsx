'use client'
import CxPage from '@/components/cx-page'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Services from '@/components/services'
import { EB_Garamond } from "next/font/google"
import Footer from '@/components/footer'


const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
});
const Page = () => {
  let customization = {
    id: 1,
    logo: 'logo.svg',
    title: "Omnicanalidad para una experiencia coherente en todos los canales",
    subtitle: "Conecta con tus clientes en todas partes, sin importar cómo elijan comunicarse",
    src: "/omnichanel.jpg",
    alt: "cliente usando tecnologia",
    enfoque1: "Mejora la satisfacción del cliente",
    enfoque2: "Aumenta la lealtad del cliente",
    enfoque3: "Reduce los costes de marketing",
    enfoque4: "Integración con múltiples canales",
    enfoque5: "Datos unificados",
    enfoque6: "Mayor competitividad"
  }


  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = isScrolled ? 'bg-black transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#0000FF] duration-300 ease-in-out transition-delay-300';


  return (
    <div className='bg-white'>
      <div className='  bg-[#0000FF]'>
        <div className='fixed top-0 w-full z-10'>
          <div className={` flex justify-center items-center py-4 md:py-8 ${bgColor}`}>
            <Link href={'/'}>
              <Image
                alt='logo graphic web'
                src={customization.logo}
                width={200}
                height={300}
                className="text-[#0000FF]" />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 flex-1 m-4 pb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
            <h1 className='font-medium text-[35px] md:text-[60px]  text-white pr-10'>{customization.title}</h1>
            <div>
              <h2 className='text-white text-md md:text-4xl pt-10'>{customization.subtitle}</h2>
              <a href='https://wa.me/573127550201?text=Hola,%20deseo%20solicitar%20un%20producto' className='my-8 flex justify-center py-1 text-white border border-white w-[300px]' target="_blank">
                <p className='font-[16px] text-s'>Solicitar producto</p>
              </a>
            </div>
          </div>
          <Image
            alt={customization.src}
            src={customization.src}
            width={2500}
            height={2500}
          />
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
      <a href='https://wa.me/573127550201?text=Hola,%20deseo%20solicitar%20un%20producto' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
        <p className='text-center text-black font-[16px] text-s'>Solicitar producto</p>
      </a>
      <Services colorText='black' />
      <Footer bgClass='[#0000FF]' colorText='white' src='/logo.svg' />
    </div>
  )
}

export default Page