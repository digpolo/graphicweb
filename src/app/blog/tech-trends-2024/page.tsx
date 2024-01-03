'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Services from '@/components/services'
// import { EB_Garamond } from "next/font/google";
import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import webDevelop from '../../../../public/web-develop.png'
import cmsDevelop from '../../../../public/cms-develop.png'
import logo from "../../../../public/logo5-pink.svg"
import digitalCommerce from '../../../../public/digital-comerce.png'
import CardBlog from '@/components/card-blog'


import readyToPickUp from '../../../public/ready-to-pick-up.png'
import digitalComerce from '../../../public/digital-comerce.png'


// const garamond = EB_Garamond({
//     display: "swap",
//     weight: ["400", "500", "600", "700"],
//     style: ["normal", "italic"],
//     subsets: ["latin-ext"],
//     variable: '--font-garamond'
// });

const Page = () => {
    let customization = {
        id: 1,
        logo: '/logo-blue.svg',
        title: "Tendencias Tecnológicas para Negocios de Productos y Servicios",
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
        { id: 1, title: "", p: "En el vertiginoso mundo de la tecnología, las empresas que adoptan las últimas tendencias son las que prosperan. En el ámbito del desarrollo de software, estas tendencias no solo impulsan la eficiencia operativa, sino que también abren nuevas oportunidades para la innovación y la mejora continua. En este artículo, exploraremos algunas de las tendencias tecnológicas más relevantes para negocios de productos y servicios en el actual panorama empresarial." },
        { id: 2, title: "1. Inteligencia Artificial (IA) y Machine Learning (ML):", p: "La IA y el ML se han convertido en pilares fundamentales para la toma de decisiones estratégicas. Desde la personalización de experiencias de usuario hasta la optimización de procesos internos, las aplicaciones de estas tecnologías son vastas. Los algoritmos de aprendizaje automático pueden analizar grandes cantidades de datos para ofrecer predicciones precisas, ayudando a las empresas a entender mejor a sus clientes y a tomar decisiones más informadas." },
        { id: 3, title: "2. Internet de las Cosas (IoT):", p: "La conexión de dispositivos a través de Internet ha revolucionado la forma en que interactuamos con el mundo. En el ámbito empresarial, el IoT permite la recopilación de datos en tiempo real, facilitando el monitoreo de productos y servicios. Desde el seguimiento de inventarios hasta la optimización de la cadena de suministro, el IoT ofrece oportunidades para mejorar la eficiencia y la calidad." },
        { id: 4, title: "3. Edge Computing:", p: "La necesidad de procesar datos más rápidamente ha llevado al surgimiento del edge computing. Al llevar el procesamiento de datos más cerca de la fuente, las empresas pueden reducir la latencia y mejorar la velocidad de respuesta. Esto es especialmente beneficioso para negocios que dependen de la velocidad y la agilidad, como aquellos que ofrecen servicios en tiempo real." },
        { id: 5, title: "4. Blockchain:", p: "La confianza y la transparencia son cruciales en cualquier negocio. Blockchain proporciona una infraestructura segura y descentralizada para gestionar transacciones y registros. Desde la trazabilidad de productos hasta la gestión de contratos inteligentes, las aplicaciones de blockchain están transformando la manera en que se realizan las transacciones comerciales." },
        { id: 6, title: "5. Experiencia del Usuario (UX) y Diseño Centrado en el Usuario:", p: "En un mundo cada vez más digital, la experiencia del usuario es un diferenciador clave. Las empresas exitosas se centran en diseñar interfaces intuitivas y experiencias fluidas para sus clientes. El diseño centrado en el usuario no solo se aplica a la interfaz de usuario, sino también a la usabilidad de los productos y servicios." },
        { id: 7, title: "", p: "El mundo empresarial está en constante evolución, y aquellos que adoptan las tendencias tecnológicas emergentes son los que se destacan. La inteligencia artificial, el Internet de las Cosas, el edge computing, blockchain y un enfoque centrado en el usuario son elementos clave para impulsar el éxito en los negocios de productos y servicios. Al integrar estas tecnologías de manera estratégica, las empresas pueden no solo mantenerse al día con la competencia, sino también liderar la innovación en sus respectivos sectores." },

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

    const bgColor = isScrolled ? 'bg-[#193718]  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#193718] duration-300 ease-in-out transition-delay-300';

    return (
        <div className='bg-white'>
            <div className=' bg-[#193718] text-[#E5F1FE]'>
                <div className={`${bgColor} fixed top-0 w-full z-10 text-[#FF8BFF]`} >
                    <NavBar logo={logo} color='[#FF8BFF]' bg={bgColor} />
                </div>
                <div className='flex flex-col gap-4 flex-1 m-4 pb-10 text-[#FF8BFF]'>
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
                    <Image alt='composion artistica' src={digitalCommerce} width={2500} height={2500} />
                </div>
            </div>
            <div className='border-t mx-4 border-black '>
                {blogs.map(blog => {
                    return <CardBlog key={blog.id} cardBlog={blog} />
                })}
            </div>
            <Footer bgClass='[#193718]' colorText='[#FF8BFF]' src={logo} />
        </div >
    )
}

export default Page