import React from 'react'
import Image from 'next/image'
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
});


const Mission = () => {
    return (
        
            <div className='my-10 mx-4  grid md:grid-cols-2 border-t border-black'>
                <div className='  flex flex-col py-4 '>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >Impulsamos tu negocio en internet</h2>
                    <p className='text-lg font-extralight py-4'>
                    Somos una empresa de tecnología pionera en   y desarrollo web de alta calidad para fortalecer organizaciones.
Nuestro foco se pone en:
                    </p>
                    <ul className={`${garamond.variable} font-garamond text-3xl  py-2 font-extralight`}>
                        <li>Presencia en internet</li>
                        <li>Potenciar la visibilidad </li>
                        <li>Mejorar las ventas</li>
                        <li>Posicionamiento SEO </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center pt-10'>
                    <Image
                        alt='clientes utilizando tecnologia'
                        src='/mission2.jpg'
                        width={2180}
                        height={1520}
                    />
                </div>
            </div>
      
    )
}

export default Mission