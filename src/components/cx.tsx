import React from 'react'
import Card from './card'

const Cx = () => {
    let cxs = [
        { id: 1, title: "Personalización excepcional para una experiencia única con cada visitante", cta: 'Seguir leyendo', href: 'blog/personalizacion' },
        { id: 2, title: "Omnicanalidad para una experiencia coherente en todos los canales", cta: 'Seguir leyendo', href: 'blog/omnicanalidad' },
        { id: 3, title: "5 tendencias tecnológicas que marcarán el 2024", cta: 'Seguir leyendo', href: 'blog/tech-trends-2024' },
    ]
    return (
        <div className=''>
            <div className='lg-4 md:flex mx-4 gap-10 pt-12'>
                {cxs.map(cx => {
                    return <Card key={cx.id} card={cx} />
                })}
            </div>
        </div>
    )
}

export default Cx