import Content from '@/components/product/content'
import Hero from '@/components/product/hero'
import React from 'react'
import Footer from '@/components/footer'
import CardPricing from '@/components/card-pricing'
import Location from '@/components/location'
import ContactForm from '@/components/contact-form'
import Pricing from '@/components/pricingshop'

let product = {
    id: 1,
    logo: 'logo5.svg',
    title: "TIENDA VIRTUAL",
    subtitle: "Una solución sencilla y eficaz para que tus clientes hagan sus pedidos desde casa",
    src: "/orders.jpg",
    alt: "cliente usando tecnologia",
    enfoque1: "Mejora la satisfacción del cliente",
    enfoque2: "Aumenta la lealtad del cliente",
    enfoque3: "Reduce los costes de marketing",
    enfoque4: "Integración con múltiples canales",
    enfoque5: "Datos unificados",
    enfoque6: "Mayor competitividad",
    shouldImg: true,
  shouldContact: true
  }

  let basic = {
    title: "Tiena virtual basica",
    items: [
      "Secciones/Pestañas web 5",
      "Dominio personalizado (.com .es .eu .net .org)",
      "Diseño profesional responsivo",
      "Alojamiento web/Hosting",
      "Cuentas de correo corporativas 10",
      "Modificaciones mensuales 4",
      "Alta en Google Analytics & Search Console",
      "Inclusión de aviso de cookies y textos legales",
      "Enlace a redes sociales",
      "Imágenes licenciadas",
      "Enlace a WhatsApp",
      "Panel de control y tablero de estadísticas",
      "Diseño Full screen",
      "Instalación de módulo y tablero de estadísticas",
      "Blog",
      "Integración de ventanas emergentes/Pop-up",
      "Área privada",
      "Instalación y mantenimiento de certificado SSL",
      "Productos 200",
      "Métodos de Pago: PayPal Transferencia,contrareembolso",
      "Categoría y atributos",
      "Transportista",
      
    ]
}

let intermediate = {
    title: "Tienda virtual intermedia",
    items: [
      "Secciones/Pestañas web 7",
      "Dominio personalizado (.com .es .eu .net .org)",
      "Diseño profesional responsivo",
      "Alojamiento web/Hosting",
      "Cuentas de correo corporativas 30",
      "Modificaciones mensuales 4",
      "Alta en Google Analytics & Search Console",
      "Inclusión de aviso de cookies y textos legales",
      "Enlace a redes sociales",
      "Imágenes licenciadas",
      "Enlace a WhatsApp",
      "Panel de control y tablero de estadísticas",
      "Diseño Full screen",
      "Instalación de módulo y tablero de estadísticas",
      "Blog",
      "Integración de ventanas emergentes/Pop-up",
      "Área privada",
      "Instalación y mantenimiento de certificado SSL",
      "Productos 500",
      "Métodos de Pago: PayPal Transferencia,contrareembolso, Redsys",
      "Categoría y atributos",
      "Transportista",
      "Idioma 1",
      
    ]
}

let advanced = {
    title: "Tiensa virtual avanzada",
    items: [
        "Secciones/Pestañas web 10",
        "Dominio personalizado (.com .es .eu .net .org)",
        "Diseño profesional responsivo",
        "Alojamiento web/Hosting",
        "Cuentas de correo corporativas 30",
        "Modificaciones mensuales 4",
        "Alta en Google Analytics & Search Console",
        "Inclusión de aviso de cookies y textos legales",
        "Enlace a redes sociales",
        "Imágenes licenciadas",
        "Enlace a WhatsApp",
        "Panel de control y tablero de estadísticas",
        "Diseño Full screen",
        "Instalación de módulo y tablero de estadísticas",
        "Blog",
        "Integración de ventanas emergentes/Pop-up",
        "Área privada",
        "Instalación y mantenimiento de certificado SSL",
        "Productos 1000",
        "Métodos de Pago: PayPal Transferencia,contrareembolso, Redsys",
        "Categoría y atributos",
        "Transportista",
        "Idioma 2",
        "Chat",
        "Multitienda"

    ]
}

const Page = () => {
  return (
    <div>
        <Hero card={product} />
        <Content/>
        <div className='mx-4'>
        {/* <Pricing /> */}
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-10'>
        <ContactForm />
        <Location />
      </div>        
        <Footer bgClass='white' colorText='black' src='/logo5black.svg' />
    </div>
  )
}

export default Page