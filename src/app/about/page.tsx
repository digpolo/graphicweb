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

    const bgColor = isScrolled ? 'bg-white  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#004D4D] duration-300 ease-in-out transition-delay-300';

        let products = [
            { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: '16 de diciembre de 2023', hrefa: '/blog/cms-vs-desarrollo-web'},
            { id: 2, alt: "imagen de gafas de realidad virtual", src: '/metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: '29 de noviembre de 2023', hrefa: '/blog/personalizacion' },
            { id: 3, alt: "imagen de chatbot", src: '/chatbot.svg', title: "Omnicanalidad en tecnología: ¿qué es y cómo implementarla?", date: '4 de agosto de 2023', hrefa: '/blog/omnicanalidad' },
        ]

    return (
        <div className='bg-white'>
            <div className=' bg-[#004D4D] '>
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
                    <Link href={'/blog/our-vision'} className='my-10'>
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
                <div className='lg-4  md:flex gap-4'>
                    {products.map(product => {
                        return <CardServices key={product.id} cardProduct={product} />
                    })}
                </div>
            </section>
            <a href='/contacto' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
                <p className='text-center text-black font-[16px] text-s'>Contactarme</p>
            </a>
            <div>
                <Services />
            </div>
            <Footer bgClass='[#FFF0D6]' colorText='[#0000FF]' src='/logo-blue.svg' />

        </div>
    )
}


export default Page