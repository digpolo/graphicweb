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
            <div className='mx-4 border-t border-white flex grid md:grid-cols-2 pb-20'>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-4xl py-4`} >Tecnología e innovación</h2>
                <p className='text-2xl py-4'>Nuestra dedicación para ofrecer una experiencia excepcional al cliente requiere una comprensión profunda de sus necesidades y expectativas, así como una consideración cuidadosa del impacto en su satisfacción y lealtad.</p>
            </div>
            <Image
                alt='clientes utilizando tecnologia'
                src={mission}
                width={2080}
                height={2080} />
        </div>
    )
}

export default Mission


{/* <div className=''>
            <div className='flex grid grid-cols-2'>
                <h2 className={garamond.className} style={{ fontSize: "35px" }}>Tecnología e innovación</h2>

                <p>Nuestra dedicación para ofrecer una experiencia excepcional al cliente requiere una comprensión profunda de sus necesidades y expectativas, así como una consideración cuidadosa del impacto en su satisfacción y lealtad.</p>
            </div>
            <Image
                alt='clientes utilizando tecnologia'
                src={mission}
                width={2080}
                height={2080} />
        </div> */}