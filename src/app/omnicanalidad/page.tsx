import CxPage from '@/components/cx-page'
import React from 'react'

const page = () => {
    let customization = {
        id: 1,
        title: "Omnicanalidad para una experiencia coherente en todos los canales",
        subtitle: "Conecta con tus clientes en todas partes, sin importar cómo elijan comunicarse",
        src: "/omnichanel.jpg",
        alt: "cliente usando tecnologia",
        enfoque1: "Mejora la satisfacción del cliente",
        enfoque2: "Aumenta la lealtad del cliente",
        enfoque3: "Reduce los costes de marketing",
        enfoque4: "Integración con múltiples canales",
        enfoque5: "Datos unificados",
        enfoque6: "Mayor competitividad"
    }
  return (
    <div>
        <CxPage card={customization}/>
    </div>
  )
}

export default page