import Cx from '@/components/cx'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomeSection from '@/components/home-section'
import Mission from '@/components/mission'
import Services from '@/components/services'


const sections = [
  {
    id: 1,
    title: "Sitio web",
    p: "Creamos tu sitio web profesional que te ayude a vender más y a convertirte en una marca líder en tu sector",
    cta: "/pagina-web",
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
    p: "Aprovecha el veneficio de llegar a una audiencia global, reducir costos operativos y proporcionar una mejor experiencia de compra para tus clientes",
    cta: "/tienda-virtual",
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
    <div className='bg-black text-white'>
      <Header />
      <Services colorText='white'/> 
      <Mission/>


  {sections.map(section => {
        return <HomeSection key={section.id} card={section} />
      })} 
      <Cx />

      <Footer bgClass='black' colorText='[#FFFFFF]' src='/logo5.svg' />
    </div>
  )
}