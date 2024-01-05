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
        
       <section className={` h-screen  bg-cover  bg-center  flex justify-center `} 
       style={{ backgroundImage: 'url("header.jpg")' , }}
     >
        <div className={` ${bgColor} fixed top-0 w-full z-10`} >
        <NavBar logo='logo5.svg' color='' bg={bgColor}/>
        </div>

        <div className='flex flex-col mx-auto max-w-5xl  px-4 gap-6 absolute  bottom-0 mb-6'>
         <h1 className=' text-4xl md:text-6xl '>  Aumenta tus ventas y mejorar tu reputación de marca con el poder de la tecnología</h1>  
         <p>
                        
                        Atrae más clientes, mejorar la convercion y generar más ventas
                 </p>
                 <Link  className='bg-transparent  border border-white border-2 text-center text-lg  rounded w-32 px-1 py-1' href='/contacto'>
                           Contactar
                  </Link>
                 </div>
        </section>
    )
}

export default Header







////////////////////////////\
// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import NavBar from './nav-bar'
// import Link from 'next/link'


// const Header = () => {
    
//     const [isScrolled, setIsScrolled] = React.useState(false);

//     const handleScroll = () => {
//         if (window.scrollY > 0) {
//             setIsScrolled(true);
//         } else {
//             setIsScrolled(false);
//         }
//     };

//     React.useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const bgColor = isScrolled ? 'bg-black  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-transparent duration-300 ease-in-out transition-delay-300';
    
//     return (
        
//         <section className='
//         px-4'>
//         <NavBar />
//         <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-auto gap-10'>
//             <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
//                 <div className='w-full'>
//                     <h1 className='font-medium text-xl  lg:text-6xl py-10  md:py-5'>
//                     Aumenta tus ventas y mejorar tu reputación de marca con diseño web profesional
//                     </h1>
//                     <p>
//                         Creamos los sitios web de alta calidad  para atraer más clientes, mejorar la convercion y generar más ventas
//                     </p>
//                     <div className=' py-10 md:py-5 md: flex flex-col md:flex-row gap-4'>
//                         <Link  className='bg-[#fff] text-black border border-black text-center w-full py-1' href='/contacto'>
//                            Contacto
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-span-1 sm:h-[calc(100vh-100px)] flex ">
//                     <div className=' flex flex-col items-end justify-end'>
//                         <Image
//                             src='/porcen.svg'
//                             alt="porcentaje de incremento de ventas"
//                             className="object-contain   rounded-lg"
//                             width={150}
//                             height={50}
//                         />
//                         <span className='text-6xl font-black'>64%</span>
//                         <span className='text-black'>De aumento del valor medio de los pedidos eléctronicos</span>
//                     </div>
//                     <Image
//                         src='/hero.jpg'
//                         alt="empresaria sonriendo"
//                         className="object-contain "
//                         width={1000}
//                         height={1000}
//                     />
//             </div>
//         </div>
//     </section>
//     )
// }

// export default Header