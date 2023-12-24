import React from 'react'
import Hero from '../../components/product/hero'
import Services from '../../components/services'
import Footer from '@/components/footer'
import logo from '../../../public/logo5black.svg'

let product = {
    id: 1,
    logo: '/logo5.svg',
    title: "BLOG",
    subtitle: "",
    src: "/website.jpg",
    alt: "cliente usando un computador empatizando con el producto que ofrecemos",
    enfoque1: "Mejora la satisfacción del cliente",
    enfoque2: "Aumenta la lealtad del cliente",
    enfoque3: "Reduce los costes de marketing",
    enfoque4: "Integración con múltiples canales",
    enfoque5: "Datos unificados",
    enfoque6: "Mayor competitividad",
    shouldImg: false,
    shouldContact: false
  }
  

const Page = () => {
  return (
    <div>
        <Hero card={product} />
        <Services />
        <Footer bgClass='white' colorText='black' src={logo}/>
    </div>
  )
}

export default Page