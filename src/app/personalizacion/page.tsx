import CxPage from '@/components/cx-page'
import React from 'react'

const page = () => {
    let customization = {
        id: 1,
        title: "Personalización excepcional para una experiencia única con cada visitante",
        subtitle: "Conoce a tus clientes a nivel individual y crea experiencias personalizadas que les encantarán.",
        src: "/customization.jpg",
        alt: "grupo de personas utilizando tecnologia",
        enfoque1: "Mejora la experiencia del cliente",
        enfoque2: "Aumenta las ventas",
        enfoque3: "Reduce el abandono",
        enfoque4: "Datos personalizados",
        enfoque5: "Segmentación avanzada",
        enfoque6: "Diferenciación competitiva"
    }

    return (
        <div>
            <CxPage card={customization} />
        </div>
    )
}


export default page