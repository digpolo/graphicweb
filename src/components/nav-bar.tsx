'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface colorLogo {
  logo: string
  color: string
  bg: string
}

const NavBar: React.FC<colorLogo> = ({ logo, color, bg }) => {
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

                        <Menu as="div" className="relative inline-block text-left">
                          <div className='flex flex-col'>
                            <Menu.Button className="flex w-full justify-center bg-">
                              Nuestros servicios
                              <ChevronDownIcon
                                className={`mt-1 h-5 w-5 text-${color} hover:text-violet-100`}
                                aria-hidden="true"
                              />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className={`inline-flex  absolute ${bg} mt-10 px-2 py-2  text-center  flex flex-col gap-4`}>
                              <Link href={'/our-services/product'}>Producto</Link>
                              <Link href={'/our-services/commerce'}>Commercio</Link>

                                {/* <Link href={'/tienda-virtual'}>Tienda online</Link> */}
                              </Menu.Items>
                            </Transition>
                          </div>
                        </Menu>
                        <Link href={'/about'}>Acerca de</Link>
                        <Link href={'/blog'}>Blog</Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className={`hidden sm:ml-6 sm:block pb-3 pt-4`}>
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
                    <h2 className={`text-${color}`} aria-hidden="true">Cerrar</h2>
                  ) : (
                    <h2 className={`text-${color}`} aria-hidden="true">Menu</h2>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mx-2">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Menu as="div" className={`px-3 inline-block text-left w-full`}>
                <div className='flex flex-col'>
                  <Menu.Button className="flex w-full">
                    Nuestros servicios
                    <ChevronDownIcon
                      className={`mt-1 ml-1 h-5 w-5 text-${color} hover:text-violet-100`}
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={`inline-flex  ${bg} mt-2  py-2 flex flex-col gap-4`}>
                      <Link href={'/our-services/product'}>Producto</Link>
                      <Link href={'/our-services/commerce'}>Commercio</Link>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block rounded-md px-3 py-2  font-medium  hover:bg-gray-700 hover:text-white   w-full`}
              >
                <Link href={'/about'}>Acerca de</Link>

              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={`block rounded-md px-3 py-2  font-medium  hover:bg-gray-700 hover:text-white   w-full`}
              >
                <Link href={'/blog'}>Blog</Link>

              </Disclosure.Button>


            </div>
            <div className={`hidden sm:ml-6 sm:block pb-3 pt-4`}>
  <Link href="/contacto" className={`flex justify-center py-1 border border-${color} text-${color} w-[130px]`}>
    <p className="font-[16px] text-s">Contáctarme</p>
  </Link>
</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar


// <Disclosure>
// <div className='flex flex-col'>
//   <Disclosure.Button className="py-2 ">
//     Nuestros servicios
//   </Disclosure.Button>
//   <Disclosure.Panel className="text-white flex flex-col gap-4">
//     <Link href={'/tienda-virtual'}>Landing page</Link>
//     <Link href={'/tienda-virtual'}>Tienda online</Link>
//   </Disclosure.Panel>
// </div>
// </Disclosure>



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