import Cx from '@/components/cx'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomeSection from '@/components/home-section'
import Mission from '@/components/mission'
import Services from '@/components/services'
import Image from 'next/image'

const sections = [
  {
    id: 1,
    title: "Diseño web",
    p: "Somos una empresa de tecnología especialista en diseño web de alta calidad y diseño de tiendas online.",
    list: [
      ' ✓ Diseño web profesional',
      ' ✓ Responsive y autogestionable',
      ' ✓ Experiencia de usuario y usabilidad',
      ' ✓ Dominio y hosting incluidos',
      ' ✓ Cuentas de correo corporativo',
      ' ✓ Modificaciones gratuitas',
    ],
    src: "/demo2.gif",
    alt: "persona utilizando tecnología"
  },
  {
    id: 2,
    title: "Tiendas online",
    p: "Nuestra dedicación para ofrecer una experiencia excepcional al cliente requiere una comprensión profunda de sus necesidades y expectativas, así como una consideración cuidadosa del impacto en su satisfacción y lealtad.",
    list: [
      ' ✓ Diseñador de tienda online experto',
      ' ✓ Proceso de compra sencillo',
      ' ✓ Dominio y hosting incluidos ',
      ' ✓ Catálogo de productos',
      ' ✓ Pasarela de pago segura',
      ' ✓ Modificaciones gratuitas'
    ],
    src: "/demo1.gif",
    alt: "persona utilizando tecnología"
  }
]

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <Header />
      {/* <Mission /> */}
      
      {sections.map(section => {
        return <HomeSection key={section.id} card={section} />
      })}
<Cx />
      {/* <Services colorText='white'/> */}
      <Footer bgClass='black' colorText='[#FFFFFF]' src='/logo.svg' />
    </div>
  )
}



// ' ✓ Presencia en internet',
//       ' ✓ Potenciar la visibilidad',
//       ' ✓ Mejorar las ventas',
//       ' ✓ Posicionamiento SEO'