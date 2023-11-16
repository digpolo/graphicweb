import ContactForm from '@/components/contact-form'
import NavBar from '@/components/nav-bar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/footer'
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Page = () => {
    return (
        <div className='mx-4'>
            <NavBar />
            <div className='mx-4 mx-auto max-w-6xl text-center'>
                <h1 className='font-medium text-2xl py-2'>Contacta con nosotros</h1>
                <p>Si quieres pedirnos presupuesto para tu proyecto, solicitarnos más información sobre alguno de nuestros servicios o comentarnos algo, ¡somos todo oídos! Tan sólo rellena este formulario con tu petición</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <ContactForm title='Formulario de contacto' description='Rellena nuestro formulario y nos pondremos en contacto contigo' />
                <div className='mt-16'>
                    <div className='w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.2689432038817!2d-74.05092931998644!3d4.676142550184563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba5413e676b%3A0xb554fa8be67b3d01!2sCounity%20-%20Coworking%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1699812568609!5m2!1ses!2sco" width="1820" height="450" loading="lazy" className='w-full' ></iframe>
                    </div>
                    <address className='flex flex-col gap-2 not-italic py-10'>
                        <div className='flex gap-4'>
                            <FaLocationDot />
                            <p>Cra. 13 # 93-35, Localidad de Chapinero</p>
                        </div>
                        <p>110221 Bogotá, Colombia</p>
                        <div className='flex gap-4'>
                            <BsFillTelephoneFill />
                            <p>+57 3127550201</p>
                        </div>
                        <div className='flex gap-4'>
                            <MdEmail/>
                            <p>info@graphicweb.com</p>
                        </div>
                    </address>
                </div>
            </div>
            {/* <Footer bgClass='white' colorText='black' src='logo5black.svg' /> */}
        </div>
    )
}

export default Page