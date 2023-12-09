import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo5black.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center py-4 md:py-8 '>
      <Link href={'/'}>
        <Image
          alt='logo graphic web'
          src={logo}
          width={200}
          height={300}
          className="text-[#0000FF]" />
      </Link>
      <ul>
        <li>
          Página web
        </li>
        <li>
          Tienda online
        </li>
        <li>
          blog
        </li>
      </ul>
    </div>
  )
}

export default NavBar