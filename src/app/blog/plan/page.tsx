'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Services from '@/components/services'
import { EB_Garamond } from "next/font/google";
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import webDevelop from '../../../../public/web-develop.png'
import cmsDevelop from '../../../../public/cms-develop.png'
import logo from "../../../../public/logo5.svg"
import ourVision from '../../../../public/our-vision.png'
import CardBlog from '@/components/card-blog'


import readyToPickUp from '../../../public/ready-to-pick-up.png'
import digitalComerce from '../../../public/digital-comerce.png'


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
        logo: '/logo-blue.svg',
        title: "Planificación de la tecnología digital aplicada en negocios de productos y servicios",
        subtitle: "Nuestra misión es garantizar que los negocios de productos y servicios puedan aprovechar los beneficios de la tecnología digital para incrementar su potencial.",
        src: "/customization.jpg",
        alt: "grupo de personas utilizando tecnologia",
        enfoque1: "Mejora la experiencia del cliente",
        enfoque2: "Aumenta las ventas",
        enfoque3: "Reduce el abandono",
        enfoque4: "Datos personalizados",
        enfoque5: "Segmentación avanzada",
        enfoque6: "Diferenciación competitiva"
    }

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bgColor = isScrolled ? 'bg-[#343321]  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#343321] duration-300 ease-in-out transition-delay-300';

    let blogs = [
        { id: 1, title: "ilustración de una persona dejando un pedido", p: "/ready-to-pick-up.png"},
        { id: 2, title: "ilustración de una persona dejando un pedido", p: "/ready-to-pick-up.png"},
        { id: 3, title: "ilustración de una persona dejando un pedido", p: "/ready-to-pick-up.png"},
  
    ]

    return (
        <div className='bg-white'>
            <div className=' bg-[#343321] text-[#E5F1FE]'>
                <div className={`${bgColor} fixed top-0 w-full z-10 text-[]`} >
                    <NavBar logo={logo} color='[#E5F1FE]' bg={bgColor} />
                </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10 '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
                        <div className='flex flex-col'>
                            {/* <span className='text-[#0000FF]'>Acerca de</span> */}
                            <h1 className='font-medium text-[35px] md:text-[60px]     '>{customization.title}</h1>
                        </div>
                        <div>
                            <h2 className=' text-md md:text-4xl pt-10'>{customization.subtitle}</h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center md:flex-row m-4'>                                      
                        <Image alt='composion artistica' src={ourVision} width={2500} height={2500} />
                </div>
            </div> 
           
                {blogs.map(blog => {
                    return <CardBlog key={blog.id} cardBlog={blog} />
                })}
                            
            <Footer bgClass='[#004D4D]' colorText='[#ECFF8C]' src={logo} />

        </div>
    )
}

export default Page