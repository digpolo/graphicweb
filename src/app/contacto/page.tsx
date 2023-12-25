'use client'
import ContactForm from '@/components/contact-form'
import NavBar from '@/components/nav-bar'
import React from 'react'
import Footer from '@/components/footer'
import Location from '@/components/location'


const Page = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bgColor = isScrolled ? 'bg-white  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-transparent duration-300 ease-in-out transition-delay-300';

    return (
        <div className='bg-white flex flex-col'>
            <div className={` ${bgColor} fixed top-0 w-full z-10 text-black`} >
                <NavBar logo='logo5black.svg' color='black' bg={bgColor}/>
            </div>
            <div>
                <div className='mx-4 mx-auto max-w-6xl text-center'>
                    <h1 className='font-medium text-2xl pt-20'>Contacta con nosotros</h1>
                    {/* <p>Si quieres pedirnos presupuesto para tu proyecto, solicitarnos más información sobre alguno de nuestros servicios o comentarnos algo, ¡somos todo oídos! Tan sólo rellena este formulario con tu petición</p> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-10'>
                    <ContactForm />
                    <Location />
                </div>
            </div>
            <Footer bgClass='white' colorText='black' src='logo5black.svg' />
        </div>
    )
}

export default Page