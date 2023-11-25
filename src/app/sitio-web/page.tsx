import Content from '@/components/product/content'
import Hero from '@/components/product/hero'
import React from 'react'
import Footer from '@/components/footer'
import Services from '@/components/services'
import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
});

let product = {
    id: 1,
    logo: 'logo5.svg',
    title: "SITIO WEB",
    subtitle: "Paginas web profesionales para potenciar tu presencia de manera global he incrementar el alcace de tus prodcutos y servicios",
    src: "/website.jpg",
    alt: "cliente usando un computador empatizando con el producto que ofrecemos",
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
        <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
        <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >Potenciomos empresas con el poder del software</h2>
        <div>
          <h3 className='font-black pt-2'>Mejora la eficiencia</h3>
          <ul>
            <li>- Reduce el tiempo que los empleados pasan atendiendo pedidos por teléfono o en persona.</li>
            <li>- Genera informes detallados sobre las ventas y el comportamiento de los clientes.</li>
            <li>- Automatiza tareas como la gestión de inventario y el procesamiento de pagos.</li>
          </ul>
          <h3 className='font-black pt-2'>Aumento de ventas</h3>
          <ul>
            <li>- Facilita que los clientes realicen pedidos desde cualquier lugar.</li>
            <li>- Ofrece una amplia gama de opciones de comida y bebida.</li>
            <li>- Ofrece promociones y descuentos.</li>
          </ul>
          <h3 className='font-black pt-2'>Ahorro de dinero</h3>
          <ul>
            <li>- Reduce los costos de marketing y publicidad.</li>
            <li>- Reduce los costos de procesamiento de pedidos.</li>
          </ul>
          <h3 className='font-black pt-2'>Potenciamos la experiencia del consumidor</h3>
          <ul>
            <li>- Tu marca siempre visible</li>
            <li>- Experiencias memorable</li>
            <li>- Aumento de la felicidad del consumidor</li>
          </ul>
        </div>
      </section>
        <Services colorText='black'/>
        <Footer bgClass='white' colorText='black' src='/logo5black.svg' />
    </div>
  )
}

export default Page