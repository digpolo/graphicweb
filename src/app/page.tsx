import Cx from '@/components/cx'
import Header from '@/components/header'
import Mission from '@/components/mission'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
  <div>
    <Header/>
    <Cx/>
    <Mission/>
    <Services/>
  </div>
  )
}
