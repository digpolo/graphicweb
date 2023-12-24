import React from 'react'
import CardServices from './card-services'

const Services = () => {
    let products = [
        { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "CMS vs. Diseño Web Personalizado", date: '16 de diciembre de 2023', hrefa: '/blog/cms-vs-desarrollo-web'},
        { id: 2, alt: "imagen de gafas de realidad virtual", src: '/metaverso.svg', title: "¿Cómo la personalización de experiencia impacta negocios?", date: '29 de noviembre de 2023', hrefa: '/blog/personalizacion' },
        { id: 3, alt: "imagen de chatbot", src: '/chatbot.svg', title: "Omnicanalidad en tecnología: ¿qué es y cómo implementarla?", date: '4 de agosto de 2023', hrefa: '/blog/omnicanalidad' },
    ]

    return (
        <div className={`mx-4 `}>
            <h2 className={`font-garamond  text-3xl lg:text-6xl py-4 border-t border-white`} >Últimas actualizaciones</h2>
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