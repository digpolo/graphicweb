import React from 'react'
import Image from 'next/image'
import mission from '../../public/mission.jpg'
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
        <div>
            <div className='my-10  grid md:grid-cols-2 border-t border-black'>
                <div className='mx-4  flex flex-col py-4 '>
                    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >Impulsamos tu negocio en internet</h2>
                    <p className='text-lg font-extralight py-4'>
                        Somos una empresa de tecnología especialista en diseño web de alta calidad y diseño de tiendas online.Ayudamos a tener:
                    </p>
                    <ul className='py-2 font-extralight'>
                        <li>Presencia en internet</li>
                        <li>Potenciar la visibilidad </li>
                        <li>Mejorar las ventas</li>
                        <li>Posicionamiento SEO </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center pt-10'>
                    <Image
                        alt='clientes utilizando tecnologia'
                        src='/gif.gif'
                        width={280}
                        height={1520}
                    />
                </div>
            </div>
        </div>
    )
}

export default Mission