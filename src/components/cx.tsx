import React from 'react'
import Card from './card'

const Cx = () => {
    let cxs = [
        { id: 1, title: "Personalización excepcional para una experiencia única con cada visitante", cta: 'Seguir leyendo', href: '/personalizacion' },
        { id: 2, title: "Omnicanalidad para una experiencia coherente en todos los canales", cta: 'Seguir leyendo', href: '/omnicanalidad' },
        { id: 3, title: "Automatización para liberar tu tiempo y recursos", cta: 'Seguir leyendo', href: '/automatizacion' },
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