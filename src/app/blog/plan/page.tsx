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

    let blogs = [
        { id: 1, title: "", p: "Nuestra mision es agregar valor a los negocios mediante la tecnologia digital, desde la estrategia, la ejecución y la medición del impacto, para un servicio que logre transformación en las empresas" },
        { id: 1, title: "", p: "Consideramos la tecnología digital como el motor que impulsa el crecimiento económico a escala global y que, al mismo tiempo, potencia la competitividad entre las empresas. En un mundo donde la conectividad y la innovación son clave, la adopción inteligente de soluciones digitales se convierte en un diferenciador crucial." },
        { id: 2, title: "", p: "Nuestro enfoque estratégico se centra en dos pilares fundamentales: mejorar la eficiencia en las ventas y procesos, y elevar la experiencia del cliente a niveles excepcionales. Creemos que la eficiencia operativa no solo reduce costos, sino que también libera recursos para la innovación y el crecimiento. Asimismo, entendemos que la experiencia del cliente es el corazón de cualquier estrategia empresarial exitosa." },
        { id: 3, title: "", p: "Ofrecemos una mirada estratégica integral que integra a tres actores clave: el usuario, los negocios y el mercado. Este enfoque holístico nos permite diseñar soluciones personalizadas que no solo satisfacen las necesidades presentes de las empresas, sino que también las posicionan para el futuro. A continuación, destacamos algunos aspectos clave de nuestro enfoque:" },
    ]

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
            <div className='border-t mx-4 border-black '>
                {blogs.map(blog => {
                    return <CardBlog key={blog.id} cardBlog={blog} />
                })}
            </div>
            <div className='my-6 mx-4 md:px-80 ml-8 flex flex-col gap-8'>
                <h3>
                    1. Diseño centrado en el usuario
                    <ul>
                        <li>Desarrollamos soluciones que tienen en cuenta las necesidades, expectativas y comportamientos de los usuarios finales.</li>
                        <li>Utilizamos técnicas de diseño centrado en el usuario para crear interfaces intuitivas y experiencias atractivas.</li>
                    </ul>
                </h3>
                <h3>
                    2. Enfoque Empresarial:
                    <ul>
                        <li>Comprendemos a fondo los objetivos y procesos internos de las empresas</li>
                        <li>Diseñamos soluciones que mejoran la eficiencia operativa, facilitan la toma de decisiones y fomentan la innovación.</li>
                    </ul>
                </h3>
                <h4>
                    3. Análisis de Mercado:
                    <ul>
                        <li>Realizamos un análisis detallado del mercado para identificar oportunidades y desafíos.</li>
                        <li>Adaptamos nuestras soluciones para mantener la relevancia en un entorno empresarial en constante cambio.</li>
                    </ul>
                </h4>
                <p>Nuestra misión va más allá de ser simplemente proveedores de tecnología; somos colaboradores estratégicos comprometidos con la transformación integral de las empresas. Creemos en el poder de la tecnología digital para impulsar la innovación, mejorar la eficiencia y elevar la experiencia del cliente. Con nuestra mirada estratégica que integra usuario, negocios y mercado, estamos listos para ser su socio en el viaje hacia el futuro empresarial digital.</p>
            </div>
            <Footer bgClass='[#343321]' colorText='[#E5F1FE]' src={logo} />
        </div >
    )
}

export default Page