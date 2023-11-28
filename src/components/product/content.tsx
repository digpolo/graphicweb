import React from 'react'
import { EB_Garamond } from "next/font/google"
import Image from 'next/image'
import orderoniline1 from '../../../public/orderoniline1.png'
import orderoniline2 from '../../../public/orderoniline2.png'
import Footer from '../footer'

const garamond = EB_Garamond({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  variable: '--font-garamond'
});

const Content = () => {
  return (
    <div>
      <div className='mx-4 border-t border-white flex gap-10 items-center grid md:grid-cols-2 pb-20'>
        <h2 className={`${garamond.variable} font-garamond text-4xl lg:text-6xl py-4`} >Mejora la experiencia de tus clientes y aumenta tus ventas con nuestro software de pedidos</h2>
        <p className='text-xl md:text-2xl py-4'>Una solución sencilla y eficaz para que tus clientes hagan sus pedidos desde casa</p>
      </div>
      <section className='grid md:grid-cols-2 flex gap-10 border-t border-black mx-4 '>
        <div className=''>
          <h2 className={`${garamond.variable}  font-garamond text-3xl lg:text-4xl py-6`} >Tus clientes piden online</h2>
          <Image
            alt='imagen a modo de un icono de un cliente haciendo un pedido por celular'
            src={orderoniline1}
            width={500}
            height={1000}
          />
        </div>
        <div>
          <h2 className={`${garamond.variable}  font-garamond text-3xl lg:text-5xl py-6`} >Recibe tus pedidos sin hacer nada</h2>
          <Image
            alt='imagen a modo de un icono de un cliente haciendo un pedido por celular'
            src={orderoniline2}
            width={500}
            height={1000}
          />
        </div>
      </section>
      <section className='my-10 mx-4 border-t border-black flex gap-10 items-center grid md:grid-cols-2 '>
        <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >Potenciomos empresas con el poder del software</h2>
        <div>
          <h3 className='font-black pt-2'>ALta Calidad en diseño web</h3>
          <ul>
            <p>Mediante el diseño incrementamos la experiencia de usuarios para crear experiencias memorables</p>
          </ul>
          <h3 className='font-black pt-2'>Proceso de compra sencillo</h3>
          <p>Una tienda online con un diseño atractivo, fácil de usar y totalmente responsive para cualquier dispositivo. Nuestra prioridad es ofrecer a los usuarios una experiencia de compra sencilla e intuitiva, mediante un diseño optimizado que favorece las compras y garantiza una excelente experiencia de usuario</p>
          <h3 className='font-black pt-2'>Dominio y hosting incluidos </h3>
          <p>Con nosotros, podrás elegir el dominio que mejor identifique a tu empresa y te ayude a posicionarte en los resultados de búsqueda. Además, te asesoraremos en todo el proceso y te ofreceremos el hosting para alojar tu web.</p>
          <h3 className='font-black pt-2'>Catálogo de productos </h3>
          <p>Comercializa tus productos de manera eficiente a través de un catálogo en línea perfectamente organizado, proporcionando a tus clientes información detallada en completas fichas de producto</p>
          <h3 className='font-black pt-2'>Pasarela de pago segura</h3>
          <p>Selecciona las pasarelas de pago que se ajusten perfectamente a tus necesidades y las de tus clientes. Te ofrecemos diversas opciones de pago seguras, proporcionándote la confianza necesaria para que tus usuarios realicen compras desde la comodidad de sus hogares a través de tu tienda online</p>
        </div>
      </section>
      <a href='https://wa.me/573127550201?text=Hola,%20deseo%20solicitar%20un%20producto' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
        <p className='text-center text-black font-[16px] text-s'>Solicitar producto</p>
      </a>    
    </div>
  )
}

export default Content