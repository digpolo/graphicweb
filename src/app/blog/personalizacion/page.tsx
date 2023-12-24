'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Services from '@/components/services'
import { EB_Garamond } from "next/font/google";
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import logo from '../../../../public/logo-blue.svg'

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
        title: "Omnicanalidad en tecnología: ¿qué es y cómo implementarla?",
        subtitle: "En un mundo cada vez más competitivo, las empresas se esfuerzan por ofrecer una experiencia de cliente excepcional. La personalización es una de las tendencias más importantes en este ámbito, ya que permite a las empresas adaptar sus productos y servicios a las necesidades y preferencias individuales de los clientes.",
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
        
        <div className=''>
            <div className=' bg-[#FFF0D6] '>
            <div className={` ${bgColor} fixed top-0 w-full z-10 text-[#0000FF]`} >
                <NavBar logo={logo} color='[#0000FF]'/>
            </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
                        <div className='flex flex-col'>
                        <span className='text-[#0000FF]'>Blog</span>
                        <h1 className='font-medium text-[35px] md:text-[60px]  text-[#0000FF] pr-10'>{customization.title}</h1>
                        </div>
                        <div>
                            <h2 className='text-[#0000FF] text-md md:text-4xl pt-10'>{customization.subtitle}</h2>

                            <p className='my-10 text-[#0000FF]'>
                                Descargarga el ebook para ver las ultimas actualizaciones de Cómo crear una experiencia de cliente única y memorable.
                            </p>
                            <a href='/ebooks/ebook-graphicweb.pdf' download="graphicweb.pdf" className='my-8 flex justify-center py-1 text-[#0000FF] border border-[#0000FF] w-[300px]' target="_blank">
                                <p className='font-[16px] text-s'>Descargar ebook</p>
                            </a>
                        </div>
                    </div>

                    <Image
                        alt={customization.src}
                        src={customization.src}
                        width={2500}
                        height={200}
                    />
                </div>
            </div>
            <div className='bg-white grid grid-col md:grid-cols-2 mx-4 gap-4'>
                <div className=''>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} > La personalización de la experiecia del cliente agrega valor en tu negocio</h2>
                    <ul className='text-black font-extralight flex flex-col gap-4'>
                        <li>
                            <strong>Mejora la satisfacción del cliente</strong>: Los clientes están más satisfechos cuando sienten que las empresas entienden sus necesidades y preferencias. La personalización puede ayudar a las empresas a crear una experiencia más personalizada y relevante para cada cliente.
                        </li>
                        <li>
                            <strong>Aumenta la lealtad del cliente</strong>: Los clientes satisfechos son más propensos a repetir negocios con una empresa. La personalización puede ayudar a las empresas a crear relaciones más sólidas con sus clientes y aumentar la lealtad.
                        </li>
                        <li>
                            <strong>Reduce los costes</strong>: La personalización puede ayudar a las empresas a optimizar sus procesos y reducir los costes. Por ejemplo, la personalización puede ayudar a las empresas a dirigir sus esfuerzos de marketing a los clientes más propensos a comprar sus productos o servicios.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-black text-black my-6`} >Cómo implementar la personalización en tu empresa</h2>
                    <p>
                        Para implementar la personalización excepcional, las empresas deben recopilar datos sobre sus clientes. Estos datos pueden incluir información demográfica, historial de compras, intereses y preferencias. Las empresas pueden utilizar estos datos para crear perfiles de clientes y adaptar sus productos y servicios en consecuencia.
                    </p>
                    <p>
                        Existen muchas maneras de personalizar la experiencia del cliente. Algunas técnicas comunes incluyen:
                    </p>
                    <ul className='text-black font-extralight flex flex-col gap-4'>
                        <li>
                            <strong>Recomendaciones personalizadas</strong>: Las empresas pueden utilizar la personalización para recomendar productos y servicios que sean relevantes para las necesidades y preferencias de los clientes.
                        </li>
                        <li>
                            <strong>Contenido personalizado</strong>: Las empresas pueden utilizar la personalización para crear contenido que sea relevante para los intereses de los clientes.
                        </li>
                        <li>
                            <strong>Ofertas personalizadas</strong>: Las empresas pueden utilizar la personalización para ofrecer ofertas especiales que sean atractivas para los clientes individuales.
                        </li>
                    </ul>
                </div>
                <section className='py-10'>
                    <p>
                        La personalización excepcional es una herramienta poderosa que puede ayudar a las empresas a generar valor para su negocio. Al recopilar datos sobre sus clientes y adaptar sus productos y servicios en consecuencia, las empresas pueden crear una experiencia de cliente más personalizada, satisfactoria y rentable.
                    </p>
                    <p className='my-10'>
                        Descargarga el ebook para ver las ultimas actualizaciones de Cómo crear una experiencia de cliente única y memorable.
                    </p>
                </section>

            </div>
            <a href='/ebooks/ebook-graphicweb.pdf' download="graphicweb.pdf" className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
                <p className='text-center text-black font-[16px] text-s'>Descargar ebook</p>

            </a>
            <Services  />

            <Footer bgClass='[#FFF0D6]' colorText='[#0000FF]' src='/logo-blue.svg' />

        </div>
    )
}


export default Page