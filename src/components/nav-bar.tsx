import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center py-4 md:py-8 '>
      <Link href={'/'}>
        <Image 
        alt='logo hernan jojoa' 
        src={logo} 
        width={200} 
        height={300}
        className="text-[#0000FF]"/>
        </Link>
    </div>
  )
}

export default NavBar