'use client'
import React from 'react'
import Image from 'next/image'
import NavBar from './nav-bar'
import Link from 'next/link'


const Header = () => {
    
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

    const bgColor = isScrolled ? 'bg-black  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-transparent duration-300 ease-in-out transition-delay-300';
    
    return (
        
        <section className='
        px-4'>
        <NavBar />
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-auto gap-10'>
            <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
                <div className='w-full'>
                    <h1 className='font-medium text-xl  lg:text-6xl py-10  md:py-5'>
                    Aumenta tus ventas y mejorar tu reputación de marca con diseño web profesional
                    </h1>
                    <p>
                        Creamos los sitios web de alta calidad  para atraer más clientes, mejorar la convercion y generar más ventas
                    </p>
                    <div className=' py-10 md:py-5 md: flex flex-col md:flex-row gap-4'>
                        <Link  className='bg-[#fff] text-black border border-black text-center w-full py-1' href='/contacto'>
                           Contacto
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-1 sm:h-[calc(100vh-100px)] flex ">
                    <div className=' flex flex-col items-end justify-end'>
                        <Image
                            src='/porcen.svg'
                            alt="porcentaje de incremento de ventas"
                            className="object-contain   rounded-lg"
                            width={150}
                            height={50}
                        />
                        <span className='text-6xl font-black'>64%</span>
                        <span className='text-black'>De aumento del valor medio de los pedidos eléctronicos</span>
                    </div>
                    <Image
                        src='/hero.jpg'
                        alt="empresaria sonriendo"
                        className="object-contain "
                        width={1000}
                        height={1000}
                    />
            </div>
        </div>
    </section>
    )
}

export default Header



{/* <section className=' h-screen sm:h-auto bg-red flex justify-center '>
        <div className='flex flex-col mx-auto max-w-5xl  px-4 gap-6 absolute  bottom-0 mb-6'>
         <h1 className=' text-4xl md:text-5xl '>Soluciones digitales para mejorar la competitividad de tu empresa</h1>  
         <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-blue border w-[200px]' target="_blank">
                       <p className='text-center text-blue font-[16px] '>Contactarme</p>
                        
                 </a>
                 </div>
        </section> */}




// <section className='grid grid-cols-1 sm:grid-cols-2 h-screen sm:h-auto'>
//             <div className='bg-tp-dark col-span-1 h-[calc(20vh)] sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
//                 <div className=' sm:p-8 w-full'>
//                     <ul className='py-6 font-extralight text-[16px]  flex flex-col items-center'>
//                         <li className='py-2'>Diseño de sonrisa</li>
//                         <li className='py-2'>Rehabilitación Oral</li>
//                         <li className='py-2'>Blanqueamiento dental</li>
//                     </ul>
//                     <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' flex justify-center gap-2 text-blue' target="_blank">
//                         <p className='text-center text-blue font-[16px]'>Agenda tu cita</p>
//                         <div className='mt-1'>
                          
//                         </div>
//                     </a>
//                 </div>
//             </div>
//             <div className="col-span-1 h-[calc(40vh)] sm:h-screen sm:h-[calc(100vh-100px)]">
//                 {/* <Image
//                     src={profile}
//                     alt="Dueño de un negocio planificando sus compras por adelantado"
//                     className="object-cover h-full"
//                     width={1000}
//                     height={1000}
//                 /> */}
               
//             </div>

//         </section>