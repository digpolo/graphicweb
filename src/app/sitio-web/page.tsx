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
  title: "PAGINA WEB",
  subtitle: "Ofrecemos páginas web profesionales diseñadas para potenciar tu presencia a nivel global, impulsando el alcance de tus productos y servicios.",
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
          <h3 className='font-black pt-2'>Diseño web profesional</h3>
          <p>¿Quieres que tu página web transmita una imagen profesional y actual de tu empresa? Contáctanos y un diseñador web profesional se encargará de crearla a medida de tus necesidades.</p>
          <h3 className='font-black pt-2'>Responsivo y autogestionable</h3>
          <p>Tu nueva pagina web será responsive y se adaptará a cualquier pantalla, para que tus clientes puedan navegar por ella con facilidad. Además, podrás gestionarla fácilmente desde el panel de control.</p>
          <h3 className='font-black pt-2'>Experiencia de usuario y usabilidad</h3>
          <p>¿Quieres que tu página web sea atractiva, fácil de navegar y que convierta? Con nosotros, tus visitantes podrán encontrar lo que buscan de forma rápida y sencilla, lo que aumentará las conversiones y mejorará la experiencia de usuario.</p>
          <h3 className='font-black pt-2'>Dominio y hosting incluidos</h3>
          <p> Con nosotros, podrás elegir el dominio que mejor identifique a tu empresa y te ayude a posicionarte en los resultados de búsqueda. Además, te asesoraremos en todo el proceso y te ofreceremos el hosting para alojar tu web. ¡No te preocupes por nada, nosotros nos encargamos!</p>
          <h3 className='font-black pt-2'>Cuentas de correo corporativo</h3>
          <p>Nuestras soluciones de diseño web incluyen la implementación de correos corporativos. Proyecta una imagen corporativa profesional y genera confianza en todas tus comunicaciones mediante el uso de cuentas de correo personalizadas asociadas a tu dominio. Ejemplos incluyen: ventas@tudominio.com, info@tudominio.com o mario@tudominio.com</p>
          <h3 className='font-black pt-2'>Modificaciones gratuitas</h3>
          <p>Disfruta de modificaciones gratuitas mensuales para asegurarte de que tu sitio siempre refleje tus preferencias y esté actualizado. Podrás realizar ajustes no estructurales, actualizar textos y elementos multimedia para mantener tu web al día.</p>
        </div>
      </section>
      <Services colorText='black' />
      <Footer bgClass='white' colorText='black' src='/logo5black.svg' />
    </div>
  )
}

export default Page