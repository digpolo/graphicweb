import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/logo.svg'

interface CustomBackgroundProps {
    bgClass: string;
    colorText: string
    src: string
}

const Footer: React.FC<CustomBackgroundProps> = ({ bgClass, colorText, src }) => {
    return (
        <section className={`p-6 mt-10 bg-${bgClass} text-${colorText}`}>
            <div className=' mx-auto grid grid-cols-1 md:grid-cols-5 max-w-10xl gap-10'>
                <div className='flex flex-col items-center mt-10'>
                    <a href="/" >
                        <Image
                            alt='logo graphic web'
                            src={src}
                            width={200}
                            height={300}
                        />
                    </a>
                </div>
                <div>
                    <h2 className='py-3 font-black text-[16px]'>Experiencia del cliente</h2>
                    <ul className='gap-3 flex flex-col font-light'>
                    <li>
                            <Link href='/our-services/product'>
                                Producto
                            </Link>
                        </li>
                        <li>
                            <Link href='/our-services/commerce'>
                            Commercio
                            </Link>
                        </li>
                        {/* <li>
                            <Link href='/tienda-virtual'>
                                Blog
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <h2 className='py-3 font-black text-[16px]'>Contacto</h2>
                    <ul className='gap-3 flex flex-col font-light'>
                    <li>
                            <Link href='https://maps.app.goo.gl/4i884VCEheYm7Xwz5' target='blanck'>
                                Cra. 13 # 93-35, Localidad de Chapinero
                                Bogotá, Colombia
                            </Link>
                        </li>
                        <li>
                            <Link href='mailto:negocios@thegraphicweb.com'>
                            negocios@thegraphicweb.com
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='py-3 font-black text-[16px]'>Siguenos</h2>
                    <ul className='gap-3 flex flex-col font-thin'>
                        <li className='font-light'>
                            <Link href="https://www.instagram.com/graphicweb/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/graphicweb0" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='py-3 font-black text-[16px] '>Informaci&oacute;n de inter&eacute;s</h2>
                    <ul className='grid grid-cols-1 gap-3 flex justify-between'>
                        <li><Link href="/politica-de-privacidad">Política de privacidad</Link></li>
                        <li><Link href="/terminos-y-condiciones">Terminos y condiciones</Link></li>
                        <li><Link href="/politica-de-cookies">Politicas de cookies </Link></li>
                    </ul>
                </div>
            </div>
            <div className='mx-auto text-x mt-12 mb-6 text-left max-w-5xl text-center'>Todos los derechos reservados - GraphicWeb &copy; 2023</div>
        </section>
    )
}

export default Footer;