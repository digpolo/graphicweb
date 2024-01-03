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
import readyToPickUp from '../../../../public/ready-to-pick-up.png'
import readyToPickUp2 from '../../../../public/ready-to-pick-up2.jpg'
import bussines from '../../../../public/bussines.jpg'
import CardServices from '@/components/card-services'


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
        title: "La manera de potenciar los restaurantes con Ready to pick up",
        subtitle: "",
        src: "/ready-to-pick-up.png",
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

    const bgColor = isScrolled ? 'bg-[#A0522D]  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#A0522D] duration-300 ease-in-out transition-delay-300';

    let products = [
        { id: 1, alt: "ilustración de una persona dejando un pedido", src: "/ready-to-pick-up.png", title: "La manera de potenciar los restaurantes con Ready to pick up", date: 'Dic 24, 2023', hrefa: '/blog/ready-to-pick-up' },
        { id: 2, alt: "imagen de abstracción de icono de carrito de compras", src: '/digital-comerce.png', title: "5 tendencias tecnologicas para este 2024", date: 'Ene 2, 2023', hrefa: '/blog/tech-trends-2024' },
        { id: 3, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: 'Dic 16, 2023', hrefa: '/blog/cms-vs-desarrollo-web' },
        { id: 4, alt: "imagen de gafas de realidad virtual", src: '/metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: 'Nov 29, 2023', hrefa: '/blog/personalizacion' },

    ]

    return (
        <div className='bg-white'>
            <div className=' bg-[#A0522D] text-[#E5F1FF]'>
                <div className={`${bgColor} fixed top-0 w-full z-10 text-[#E5F1FF]`} >
                    <NavBar logo={logo} color='[#E5F1FF]' bg={bgColor} />
                </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10 text-[#ECFF8C] '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pt-40 md:pb-'>
                        <div className='flex flex-col'>
                            {/* <span className='text-[#0000FF]'>Acerca de</span> */}
                            <h1 className='font-medium text-[35px] md:text-[60px]  text-[#E5F1FF]   '>{customization.title}</h1>
                        </div>
                        <div>
                           
                            <div>
                                <Image alt='persona entregando un pedido de comida' src={readyToPickUp} width={1200} height={0} className='py-6' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <div>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                    ¿Por qué es importante Ready to Pick Up?
                    </h2>
                    <p className='pt-10 mb-6'>
                        Ready to Pick Up es mucho más que una simple modalidad de servicio. Se trata de una estrategia integral que abarca desde la optimización de la cocina hasta la experiencia del usuario. En esencia, este enfoque permite a los clientes realizar pedidos en línea y luego recogerlos directamente en el restaurante, eliminando la espera y proporcionando una experiencia más rápida y conveniente.
                    </p>
                </div>
                <div>
                    <Image alt='persona entregando un pedido de comida' src={readyToPickUp2} width={1200} height={0} className='py-6' />
                </div>
            </section>
            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                    Ready to pick up es la manera de impulsar tu negocio
                </h2>
                
                <div>
                    <h3 className='font-black pt-2'>Aumento de las ventas</h3>
                    <ul>
                        <p> Los servicios de comida para llevar y recogida en el local representan una oportunidad de crecimiento para los restaurantes. Ready to pick up ayuda a los restaurantes a llegar a nuevos clientes y aumentar sus ventas.</p>
                    </ul>
                    <h3 className='font-black pt-2'>Mejora de la eficiencia:</h3>
                    <p>Ready to pick up simplifica el proceso de pedidos y recogidas, lo que ayuda a los restaurantes a mejorar su eficiencia y reducir los costes.</p>
                    <h3 className='font-black pt-2'>Mejora de la experiencia del cliente:</h3>
                    <p>Ready to pick up ofrece a los clientes una experiencia sencilla y cómoda, lo que puede contribuir a mejorar su satisfacción y fidelidad.</p>
                </div>
            </section>
            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                Optimización operativa: La clave del éxito
                </h2>
                <div>
                    <p>La implementación de Ready to Pick Up va más allá de simplemente ofrecer una opción de servicio adicional. Requiere una transformación interna que optimice los procesos operativos, desde la gestión de inventario hasta la logística de preparación de pedidos. Al adoptar tecnologías modernas, como sistemas de gestión de pedidos y plataformas de pedidos en línea, los restaurantes pueden agilizar sus operaciones y garantizar una experiencia sin contratiempos para sus clientes.</p>
                    <p>Además, Ready to Pick Up permite a los restaurantes mejorar la precisión de los pedidos y minimizar los errores, ya que la comunicación directa entre el cliente y la cocina se ve facilitada a través de plataformas digitales. Esto no solo aumenta la satisfacción del cliente, sino que también contribuye a construir una reputación positiva en línea.</p>
                </div>
            </section>
            
            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >
                Potencia la experiencia del cliente
                </h2>
                <div>
                    <p>
                    La experiencia del cliente es fundamental en el éxito de cualquier restaurante, y Ready to Pick Up ofrece una oportunidad única para destacar en este aspecto. Personalizar la experiencia del cliente a través de la interfaz de pedidos en línea, ofrecer promociones exclusivas para clientes habituales y garantizar la calidad del servicio son elementos clave para construir una lealtad a largo plazo.
                        </p>
                        <p>
                        En conclusión, Ready to Pick Up se presenta como una estrategia imperativa para potenciar los restaurantes en la era digital. La combinación de eficiencia operativa y una experiencia del cliente inigualable posiciona a los establecimientos gastronómicos en el centro de la revolución digital, asegurando su relevancia y éxito continuo en un mercado en constante evolución.
                        </p>
                        </div>
            </section>


            <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid '>
                <h2 className={`${garamond.variable} font-garamond  text-3xl lg:text-6xl py-4 border-t border-white`} >Nuestros productos</h2>
                <div className='lg-4  md:flex gap-4'>
                    {products.map(product => {
                        return <CardServices key={product.id} cardProduct={product} />
                    })}
                </div>
            </section>
            <Footer bgClass='[#A0522D]' colorText='[#E5F1FF]' src={logo} />

        </div>
    )
}

export default Page