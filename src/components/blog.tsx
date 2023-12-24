import React from 'react'
import CardServices from './card-services'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
});

interface Props {
    colorText: string
}

const Services: React.FC<Props> = ({ colorText }) => {
    let products = [
        { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: '16 de diciembre de 2023', hrefa: './blog/cms-vs-desarrollo-web'},
        { id: 2, alt: "imagen de gafas de realidad virtual", src: 'metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: '29 de noviembre de 2023', hrefa: './blog/personalizacion' },
        { id: 3, alt: "imagen de chatbot", src: 'chatbot.svg', title: "ATENCION 24/7", date: 'Programación de chat de WhatsApp para brindar una mejor atención al cliente', hrefa: './atencion' },
    ]

    return (
        <div className={`mx-4 `}>
            <h2 className={`${garamond.variable} text-[${colorText}] font-garamond text-3xl lg:text-6xl py-4 border-t border-white`} >Últimas actualizaciones</h2>
            <div className='lg-4  md:flex gap-10'>
                {products.map(product => {
                    return <CardServices key={product.id} cardProduct={product} />
                })}
            </div>
            <div className='flex flex-col justify-center items-center'>
            <a href='/contacto' className={`my-8 flex items-center justify-center border text-${colorText} border-${colorText} w-[300px]`} target="_blank">
                <p className={`font-[16px] text-${colorText} text-s`}>Conocer más</p>
            </a>
            </div>
        </div>
    )
}

export default Services