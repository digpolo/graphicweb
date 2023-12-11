import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface colorLogo {
  logo: string
}

const NavBar: React.FC<colorLogo> = ({ logo }) => {
  let titles = ['Página web', 'Tienda virtual', 'Blog']
  return (
    <div className='flex  items-center justify-between py-4 md:py-6 mx-4 '>
      <div className='flex items-center'>
        <Link href={'/'}>
          <Image
            alt='logo graphic web'
            src={logo}
            width={200}
            height={300}
            className=" mr-10 text-[#0000FF]" />
        </Link>
        <ul className='flex gap-6'>
          {titles.map((title, index) => (
            <li key={index}>
               <Link href={`/${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href='/contacto' className=' flex justify-center py-1 text-white border border-white w-[130px]' >
        <p className='font-[16px] text-s'>Contáctarme</p>
      </Link>
    </div>
  )
}

export default NavBar




// <div className='flex  items-center justify-between py-4 md:py-6 mx-4 '>
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
//           <Link href={'/pagina-web'}>
//             <li>
//               Página web
//             </li>
//           </Link>
//           <Link href={'/tienda-online'}>
//             <li>
//               Tienda online
//             </li>
//           </Link>
//           <Link href={'/blog'}>
//             <li>
//               Blog
//             </li>
//           </Link>
//         </ul>
//       </div>
//       <Link href='/contacto' className=' flex justify-center py-1 text-white border border-white w-[130px]' >
//         <p className='font-[16px] text-s'>Contáctarme</p>
//       </Link>
//     </div>