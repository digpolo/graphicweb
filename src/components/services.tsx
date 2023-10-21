import React from 'react'
import CardServices from './card-services'
import cx from '../../public/ai.svg'
import metaverso from '../../public/metaverso.svg'
import chatbot from '../../public/chatbot.svg'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
});

const Services = () => {
    let products = [
        { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "Experiencia del cliente", },
        { id: 2, alt: "imagen de gafas de realidad virtual", src: 'metaverso.svg', title: "Metaverso" },
        { id: 3, alt: "imagen de chatbot", src: 'chatbot.svg', title: "Chatbot" },
    ]

    return (
        <div className=' mx-4'>
             <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4 border-t border-white`} >Productos</h2>
            
            <div className='lg-4  md:flex gap-10'>
            {products.map(product => {
                return <CardServices key={product.id} cardProduct={product} />
            })}
            </div>
           
            
        </div>
    )
}

export default Services