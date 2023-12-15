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
        <div className='my-10 '>
            <div className='mx-4 border-t border-white flex grid md:grid-cols-2 pb-20 gap-10'>
                <h2 className={`${garamond.variable} font-garamond text-4xl py-4`} >Ofrecemos una mirada estratégica que integra: usuarios, negocio y mercado. Generamos valor en los negocios</h2>
                <ul className={`text-xl  py-2 font-extralight`}>
                    <h2 className='font-bold'>Nos especializamos en: </h2>
                    <li>Diseño de producto</li>
                    <li>Diseño de servicios</li>
                    <li>Diseño experiencia de cliente(CX)</li>
                </ul>
            </div>
            <Image
                alt='clientes utilizando tecnologia'
                src="/mission2.jpg"
                width={2080}
                height={2080} />
        </div>
    )
}

export default Mission



{/* <div className='my-10 mx-4  grid md:grid-cols-2 border-t border-black'>
<div className='  flex flex-col py-4 '>
    <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >Impulsamos tu negocio en internet</h2>
    <p className='text-lg font-extralight py-4'>
    
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
</div> */}