import ContactForm from '@/components/contact-form'
import NavBar from '@/components/nav-bar'
import React from 'react'
import Footer from '@/components/footer'
import Location from '@/components/location'


const Page = () => {
    return (
        <div className='mx-4'>
            <NavBar />
            <div className='mx-4 mx-auto max-w-6xl text-center'>
                <h1 className='font-medium text-2xl py-2'>Contacta con nosotros</h1>
                <p>Si quieres pedirnos presupuesto para tu proyecto, solicitarnos más información sobre alguno de nuestros servicios o comentarnos algo, ¡somos todo oídos! Tan sólo rellena este formulario con tu petición</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-10'>
                <ContactForm />
                <Location/>
            </div>
            <Footer bgClass='white' colorText='black' src='logo5black.svg' /> 
        </div>
    )
}

export default Page