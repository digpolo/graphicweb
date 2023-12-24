'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

interface colorLogo {
  logo: string
  color: string
}

const NavBar: React.FC<colorLogo> = ({ logo, color }) => {
  let titles = ['Página web', 'Tienda virtual', 'Blog']
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-4 ">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href={'/'} className="flex-shrink-0">
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                    width={'100'}
                    height={'100'}
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <ul className='flex gap-6'>

                      <li className='flex gap-6 items-center'>
                        <Link href={'/pagina-web'}>Página web</Link>
                        <Link href={'/tienda-virtual'}>Tienda online</Link>
                        <Link href={'/blog'}>Blog</Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <Link href='/contacto' className={`flex justify-center py-1  border border-${color} w-[130px]`} >
                  <p className='font-[16px] text-s'>Contáctarme</p>
                </Link>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2  hover:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <h2 className="text-white" aria-hidden="true">Cerrar</h2>
                  ) : (
                    <h2 className="text-white" aria-hidden="true">Menu</h2>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md  px-3 py-2 text-base font-medium text-white"
              >
                <Link href={'/pagina-web'}>Página web</Link>

              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Link href={'/tienda-virtual'}>Tienda online</Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Link href={'/blog'}>Blog</Link>

              </Disclosure.Button>

            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">

              <Link href='/contacto' className=' flex justify-center py-1 text-white border border-white w-[130px] mx-4' >
                <p className='font-[16px] text-s'>Contáctarme</p>
              </Link>

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar



// import Image from 'next/image'
// import React from 'react'
// import Link from 'next/link'

// interface colorLogo {
//   logo: string
// }

// const NavBar: React.FC<colorLogo> = ({ logo }) => {
//   let titles = ['Página web', 'Tienda virtual', 'Blog']
//   return (
//     <div className='flex  items-center justify-between py-4 md:py-6 mx-4 '>
//       <div className='flex items-center'>
//         <Link href={'/'}>
//           <Image
//             alt='logo graphic web'
//             src={logo}
//             width={200}
//             height={300}
//             className=" mr-10 text-[#0000FF]" />
//         </Link>
//         <ul className='flex gap-6'>
//           {titles.map((title, index) => (
//             <li key={index}>
//                <Link href={`/${title.toLowerCase().replace(/\s+/g, '-')}`}>
//               {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Link href='/contacto' className=' flex justify-center py-1 text-white border border-white w-[130px]' >
//         <p className='font-[16px] text-s'>Contáctarme</p>
//       </Link>
//     </div>
//   )
// }

// export default NavBar