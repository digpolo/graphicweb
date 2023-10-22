import Cx from '@/components/cx'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Mission from '@/components/mission'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
  <div className='bg-black text-white'>
    <Header/>
    <Cx/>
    <Mission/>
    <Services colorText='white'/>
    <Footer bgClass='black' colorText='[#FFFFFF]' src='/logo.svg'/>
  </div>
  )
}
