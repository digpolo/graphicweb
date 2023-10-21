import React from 'react'
import CardServices from './card-services'
import cx from '../../public/ai.svg'
import metaverso from '../../public/metaverso.svg'
import chatbot from '../../public/chatbot.svg'

const Services = () => {
    let products = [
        { id: 1, alt: "imagen de clientes", src: "/cx.svg", title: "Experiencia del cliente",},
        { id: 2, alt: "imagen de gafas de realidad virtual", src: 'metaverso.svg', title: "Metaverso"},
        { id: 3, alt: "imagen de chatbot", src: 'chatbot.svg', title: "Chatbot" },
    ]
    
    return (
        <div className='lg-4 md:flex mx-4 gap-10'>
            {products.map(product => {
                return <CardServices key={product.id} cardProduct={product} />
            })}
        </div>
    )
}

export default Services