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
      <a href='https://wa.me/573127550201?text=Hola,%20deseo%20solicitar%20un%20producto' className=' text-[#0000FF] flex justify-center items-center border border-black  h-[50px] my-8 mx-4' target="_blank">
        <p className='text-center text-black font-[16px] text-s'>Solicitar producto</p>
      </a>    
    </div>
  )
}

export default Content