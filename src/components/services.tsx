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
        { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "Experiencia del cliente", },
        { id: 2, alt: "imagen de gafas de realidad virtual", src: 'metaverso.svg', title: "Metaverso" },
        { id: 3, alt: "imagen de chatbot", src: 'chatbot.svg', title: "Chatbot" },
    ]

    return (
        <div className={`mx-4 `}>
            <h2 className={`${garamond.variable} text-[${colorText}] font-garamond text-3xl lg:text-6xl py-4 border-t border-white`} >Productos</h2>
            <div className='lg-4  md:flex gap-10'>
                {products.map(product => {
                    return <CardServices key={product.id} cardProduct={product} />
                })}
            </div>
            <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className={`my-8 flex justify-center border text-${colorText} border-${colorText} w-[300px]`} target="_blank">
                <p className={`font-[16px] text-${colorText} text-s`}>Solicitar producto</p>
            </a>
        </div>
    )
}

export default Services