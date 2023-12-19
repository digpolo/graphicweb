import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Location = () => {
    return (
        <div className='mt-16'>
            <div className='w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d576.76938750024!2d-74.04998451571396!3d4.675757339222344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9ea2ca9e27%3A0x519fdbe66d10b917!2sGraphicWeb!5e0!3m2!1ses-419!2sco!4v1703025482321!5m2!1ses-419!2sco" width="600" height="450" className="border:0;"  loading="lazy"></iframe>
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