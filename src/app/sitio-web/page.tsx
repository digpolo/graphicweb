import Content from '@/components/product/content'
import Hero from '@/components/product/hero'
import React from 'react'
import Footer from '@/components/footer'
import Services from '@/components/services'

let product = {
    id: 1,
    logo: 'logo5.svg',
    title: "Sitio-web",
    subtitle: "Una solución sencilla y eficaz para que tus clientes hagan sus pedidos desde casa",
    src: "/orders.jpg",
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
        <Hero card={product} />
        <Content/>
        <Services colorText='black'/>
        <Footer bgClass='white' colorText='black' src='/logo5black.svg' />
    </div>
  )
}

export default Page