import React from 'react'
import Card from './card'

const Cx = () => {
    let cxs = [
        { id: 1, title: "Personalización excepcional para una experiencia única con cada visitante", cta: 'Conozca la experiencia personalizada' },
        { id: 2, title: "Omnicanalidad para una experiencia coherente en todos los canales", cta: 'Explora todos los canales' },
        { id: 3, title: "Automatización para liberar tu tiempo y recursos", cta: 'Explora tu potencial' },
    ]
    return (
        <div className='lg-4 md:flex mx-4 gap-10'>
            {cxs.map(cx => {
                return <Card key={cx.id} card={cx} />
            })}
        </div>
    )
}

export default Cx