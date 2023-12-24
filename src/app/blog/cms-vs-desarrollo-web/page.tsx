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
import logo from "../../../../public/logo-blue.svg"

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
        title: "Landing Pages: CMS vs. Desarrollo Web",
        subtitle: "Las landing pages son páginas web diseñadas para convertir visitantes en clientes potenciales. Son una parte esencial de cualquier estrategia de marketing digital y pueden ser muy efectivas para aumentar las conversiones.",
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

    const bgColor = isScrolled ? 'bg-white  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#FFF0D6] duration-300 ease-in-out transition-delay-300';


    return (
        <div className='bg-white'>
            <div className=' bg-[#FFF0D6] '>
                <div className={`${bgColor} fixed top-0 w-full z-10 text-[#0000FF]`} >
                    <NavBar logo={logo} color='[#0000FF]' />
                </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
                        <h1 className='font-medium text-[35px] md:text-[60px]  text-[#0000FF] pr-10'>{customization.title}</h1>
                        <div>
                            <h2 className='text-[#0000FF] text-md md:text-4xl pt-10'>{customization.subtitle}</h2>

                            <p className='my-10 text-[#0000FF]'>
                                Descargarga el ebook para ver las ultimas actualizaciones de cómo crear una experiencia de cliente única y memorable.
                            </p>
                            <a href='/ebooks/ebook-graphicweb.pdf' download="graphicweb.pdf" className='my-8 flex justify-center py-1 text-[#0000FF] border border-[#0000FF] w-[300px]' target="_blank">
                                <p className='font-[16px] text-s'>Descargar ebook</p>
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:flex-row'>
                        <div className='text-center'>
                            <span className='text-lg font-bold'>Desarrollo web profesional</span>
                            <Image alt='icono de diseño web personalizado' src={webDevelop} width={500} height={500} />
                        </div>
                        <span className='text-[100px] m-4 border-2 border-dashed border-gray-500 rounded-full w-[170px] h-[170px] flex justify-center text-center'>vs</span>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-lg font-bold'>CMS</span>
                            <Image alt='icono de diseño cms' src={cmsDevelop} width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white grid grid-col md:grid-cols-2 mx-4 gap-4'>
                <div>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Desarollo web</h2>
                    <p>
                        El diseño web personalizado es el proceso de crear una página web desde cero, utilizando código personalizado. Esta opción ofrece un mayor control sobre el diseño y el funcionamiento de tu landing page.
                    </p>
                    <h4 className='font-black pt-2'>Ventajas del desarrollo web personalizado</h4>
                    <ul className='text-black font-light flex flex-col gap-4'>
                        <li>
                            Ofrece un control total sobre el diseño y el funcionamiento de tu landing page.
                        </li>
                        <li>
                            Es más escalable que los CMS, especialmente si tienes un gran volumen de tráfico.
                        </li>
                        <li>
                            Puede ser más atractivo y profesional que las landing pages creadas con un CMS.
                        </li>
                    </ul>
                    <h4 className='font-black pt-2'>Deventajas del desarrollo web personalizado</h4>
                    <ul className='text-black font-light flex flex-col gap-4'>
                        <li>
                            Es más complejo y requiere conocimientos de programación.
                        </li>
                        <li>
                            Puede ser más caro que utilizar un CMS.
                        </li>
                        <li>
                            El desarrollo web profesional puede llevar más tiempo que utilizar un CMS. Esto se debe a que el desarrollo web profesional requiere más planificación, diseño y codificación.
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >CMS</h2>
                    <p>Un CMS, o sistema de gestión de contenido, es una plataforma que te permite crear y gestionar contenido web sin necesidad de conocimientos de programación. Existen muchos CMS populares disponibles, como WordPress, Wix y Squarespace.</p>
                    <h4 className='font-black pt-2'>Ventajas de utilizar un CMS</h4>
                    <ul className='text-black font-extralight flex flex-col gap-4'>
                        <li>
                            - Son relativamente fáciles de usar, incluso para personas sin conocimientos de programación.
                        </li>
                        <li>
                            - Son flexibles y te permiten personalizar tu landing page según tus necesidades.
                        </li>
                        <li>
                            - Existen muchos temas y plugins disponibles que pueden ayudarte a crear una landing page profesional.
                        </li>
                    </ul>
                    <h4 className='font-black pt-2'>Desventajas de utilizar un CMS</h4>
                    <ul className='text-black font-light flex flex-col gap-4'>
                        <li>
                            - Pueden ser menos flexibles que el diseño web personalizado.
                        </li>
                        <li>
                            - Pueden ser más difíciles de escalar, especialmente si tienes un gran volumen de tráfico.
                        </li>
                        <li>
                            - Seguridad: Los CMS pueden ser vulnerables a los ataques cibernéticos. Esto se debe a que los CMS suelen utilizar código abierto, lo que significa que está disponible para que cualquiera lo vea y lo modifique.
                        </li>
                        <li>
                            - Los CMS pueden ser limitados en cuanto a la cantidad de personalización que permiten.
                        </li>
                        <li>
                            - El soporte para CMS puede ser limitado. Esto se debe a que los CMS son utilizados por millones de personas en todo el mundo, lo que puede dificultar que los desarrolladores de CMS proporcionen soporte personalizado. Si necesita ayuda con su página web, es posible que tenga que recurrir a la comunidad en línea para obtener ayuda.
                        </li>
                    </ul>
                </div>
            </div>
            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >¿Cuál es la mejor opción para ti?
                </h2>
                <div>
                    <p className='pt-10'>La mejor opción para ti dependerá de tus necesidades específicas. Si buscas una opción fácil de usar y flexible, un CMS puede ser una buena opción. Si buscas un mayor control sobre el diseño y el funcionamiento de tu landing page, el diseño web personalizado puede ser la mejor opción.

                        En última instancia, la mejor manera de decidir cuál es la mejor opción para ti es experimentar con ambas. Crea una landing page con un CMS y otra con diseño web personalizado y compara los resultados.</p>
                </div>
            </section>
            <a href='/contacto' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
                <p className='text-center text-black font-[16px] text-s'>Contactarme</p>

            </a>
            <div>
                <Services  />
            </div>
            <Footer bgClass='[#FFF0D6]' colorText='[#0000FF]' src='/logo-blue.svg' />

        </div>
    )
}


export default Page