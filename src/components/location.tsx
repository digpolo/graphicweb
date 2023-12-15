import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Location = () => {
    return (
        <div className='mt-16'>
            <div className='w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.2689432038817!2d-74.05092931998644!3d4.676142550184563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba5413e676b%3A0xb554fa8be67b3d01!2sCounity%20-%20Coworking%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1699812568609!5m2!1ses!2sco" width="1820" height="450" loading="lazy" className='w-full' ></iframe>
            </div>
            {/* <address className='flex flex-col gap-2 not-italic py-10'>
                <div className='flex gap-4'>
                    <FaLocationDot />
                    <p>Cra. 13 # 93-35, Chapinero</p>
                </div>
                <p className='pl-8'>Bogotá, Colombia</p>
                <div className='flex gap-4'>
                    <BsFillTelephoneFill />
                    <p>+57 3127550201</p>
                </div>
                <div className='flex gap-4'>
                    <MdEmail />
                    <p>negocios@thegraphicweb.com</p>
                </div>
            </address> */}
        </div>
    )
}

export default Location