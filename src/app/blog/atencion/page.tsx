import Footer from '@/components/footer'
import Hero from '@/components/product/hero'
import Services from '@/components/services'
import React from 'react'

let product = {
    id: 1,
    logo: 'logo5.svg',
    title: "ATENCION 24/7",
    subtitle: "Programación de chat de WhatsApp para brindar una mejor atención al cliente",
    src: "/atencion.jpg",
    alt: "cliente usando tecnologia",
    enfoque1: "Mejora la satisfacción del cliente",
    enfoque2: "Aumenta la lealtad del cliente",
    enfoque3: "Reduce los costes de marketing",
    enfoque4: "Integración con múltiples canales",
    enfoque5: "Datos unificados",
    enfoque6: "Mayor competitividad"
  }

const Page = () => {
  return (
    <div>
        <Hero card={product}/>
        <Services colorText='black'/>
        <Footer bgClass='white' colorText='black' src='logo5black.svg'/>
    </div>
  )
}

export default Page