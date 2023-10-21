import CxPage from '@/components/cx-page'
import React from 'react'

const page = () => {
    let customization = {
        id: 1,
        title: "Omnicanalidad para una experiencia coherente en todos los canales",
        subtitle: "Conecta con tus clientes en todas partes, sin importar cómo elijan comunicarse",
        src: "/omnichanel.jpg",
        alt: "cliente usando tecnologia"
    }
  return (
    <div>
        <CxPage card={customization}/>
    </div>
  )
}

export default page