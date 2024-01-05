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


const Services = () => {
    let products = [
        { id: 1, alt: "ilustración de una persona dejando un pedido", src: "/ready-to-pick-up.png", title: "La manera de potenciar los restaurantes con Ready to pick up", date: 'Dic 24, 2023', hrefa: '/blog/ready-to-pick-up'},
        { id: 2, alt: "imagen de abstracción de icono de carrito de compras", src: '/digital-comerce.png', title: "5 tendencias tecnologicas para este 2024", date: 'Dic 6, 2023', hrefa: '/blog/tech-trends-2024' },
        { id: 3, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: 'Dic 16, 2023', hrefa: '/blog/cms-vs-desarrollo-web'},
        { id: 4, alt: "imagen de gafas de realidad virtual", src: '/metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: 'Nov 29, 2023', hrefa: '/blog/personalizacion' },
        
    ]

    return (
        <div className={`mx-4 `}>
            <h2 className={`${garamond.variable} font-garamond  text-3xl lg:text-6xl py-4 border-t border-white`} >Últimas actualizaciones</h2>
            <div className='lg-4  md:flex gap-4'>
                {products.map(product => {
                    return <CardServices key={product.id} cardProduct={product} />
                })}
            </div>
            {/* <div className='flex flex-col justify-center items-center'>
            <a href='https://wa.me/573127550201?text=Hola,%20Quiero%20solicitar%20un%20producto' className={`my-8 flex items-center justify-center border text-${colorText} border-${colorText} w-[300px]`} target="_blank">
                <p className={`font-[16px] text-${colorText} text-s`}>Conocer más</p>
            </a>
            </div> */}
        </div>
    )
}

export default Services