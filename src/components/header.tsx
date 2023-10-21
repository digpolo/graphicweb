'use client'
import React from 'react'
import Image from 'next/image'
import NavBar from './nav-bar'


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
        
       <section className={` h-screen  bg-cover  sm:h-auto  flex justify-center `} 
       style={{ backgroundImage: 'url("header.jpg")' , backgroundPosition: '-70px 0'  }}
     >
        <div className={` ${bgColor} fixed top-0 w-full z-10`} >
        <NavBar/>
        </div>

        <div className='flex flex-col mx-auto max-w-5xl  px-4 gap-6 absolute  bottom-0 mb-6'>
         <h1 className=' text-4xl md:text-5xl '>Soluciones digitales para mejorar la competitividad de tu empresa</h1>  
         <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-blue border w-[200px]' target="_blank">
                       <p className='text-center text-blue font-[16px] '>Contactarme</p>
                        
                 </a>
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