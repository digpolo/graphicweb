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
import logo from "../../../public/logo-green2.svg"
import ourVision from '../../../public/our-vision.png'
import bussines from '../../../public/bussines.jpg'
import CardServices from '@/components/card-services'

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
        title: "Acerca de",
        subtitle: "En GraphicWeb, nos dedicamos a impulsar la competitividad de las empresas con soluciones tecnológicas innovadoras. Nuestro objetivo es capacitar a las empresas para llegar a nuevos clientes, optimizar su eficiencia operativa y aumentar sus ventas. ",
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

    const bgColor = isScrolled ? 'bg-[#004D4D]  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#004D4D] duration-300 ease-in-out transition-delay-300';

        let products = [
            { id: 1, alt: "ilustración de una persona dejando un pedido", src: "/ready-to-pick-up.png", title: "La manera de potenciar los restaurantes con Ready to pick up", date: 'Dic 24, 2023', hrefa: '/blog/ready-to-pick-up'},
            { id: 2, alt: "imagen de abstracción de icono de carrito de compras", src: '/digital-comerce.png', title: "5 tendencias tecnologicas para este 2024", date: 'Dic 6, 2023', hrefa: '/blog/tech-trends-2024' },
            { id: 3, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: 'Dic 16, 2023', hrefa: '/blog/cms-vs-desarrollo-web'},
            { id: 4, alt: "imagen de gafas de realidad virtual", src: '/metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: 'Nov 29, 2023', hrefa: '/blog/personalizacion' },
            
        ]

    return (
        <div className='bg-white'>
            <div className=' bg-[#004D4D] text-[#ECFF8C]'>
                <div className={`${bgColor} fixed top-0 w-full z-10 text-[#ECFF8C]`} >
                    <NavBar logo={logo} color='[#ECFF8C]' bg={bgColor} />
                </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10 text-[#ECFF8C] '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
                        <div className='flex flex-col'>
                            {/* <span className='text-[#0000FF]'>Acerca de</span> */}
                            <h1 className='font-medium text-[35px] md:text-[60px]  text-[#ECFF8C]   '>{customization.title}</h1>
                        </div>
                        <div>
                            <h2 className='text-[#ECFF8C] text-md md:text-4xl pt-10'>{customization.subtitle}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <div>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                        Nuestra vision para el futuro en negocios de productos y servicios
                    </h2>
                    <p className='pt-10 mb-6'>
                        Nuestra visión para el futuro es garantizar que las empresas de productos y servicios se transformen con soluciones tecnológicas para llegar a nuevos clientes, optimizar su eficiencia operativa y aumentar sus ventas
                    </p>
                    <Link href={'/blog/plan'} className='my-10'>
                        <span className='underline my-10'>Lea nuestro plan para las empresas</span>
                    </Link>
                </div>
                <div>
                    <Image alt='imagen de nuestra vision' src={ourVision} width={1200} height={0} className='py-6' />
                </div>
            </section>
            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid '>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                    Estamos construyendo herramientas tecnológicas en el campo digital para el beneficio de negocios de productos y servicios. Consideramos cumplida nuestra misión si nuestro trabajo ayuda a otros a lograr este resultado
                </h2>
                <Image alt='imagen de nuestra vision' src={bussines} width={1600} height={0} className='py-6' />
            </section>

            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid '>
            <h2 className={`${garamond.variable} font-garamond  text-3xl lg:text-6xl py-4 border-t border-white`} >Nuestros productos</h2>
                <div className='lg-4  md:flex gap-4'>
                    {products.map(product => {
                        return <CardServices key={product.id} cardProduct={product} />
                    })}
                </div>
            </section>
            <Footer bgClass='[#004D4D]' colorText='[#ECFF8C]' src={logo}/>

        </div>
    )
}

export default Page