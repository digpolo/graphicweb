import Image from 'next/image';
import React from 'react'
import NavBar from './nav-bar';
type cxPage = {
  id: number;
  title: string;
  subtitle: string
  src: string;
  alt: string
};

interface Props {
  card: cxPage;
}

const CxPage: React.FC<Props> = ({ card }) => {

  return (
    <div className='h-screen bg-[#FFF0D6] '>
      <div className='-blue'>
        <NavBar />
      </div>
      <div className='flex flex-col gap-4 absolute bottom-0 flex-1 m-4'>
        <h1 className='font-medium text-[38px] text-[#0000FF]'>{card.title}</h1>
        <h2 className='text-[#0000FF] text-lg'>{card.subtitle}</h2>
        <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' text-[#0000FF] border border-[#0000FF] w-[200px]' target="_blank">
          <p className='text-center text-blue font-[16px] text-s'>Contactarme</p>
        </a>
      <Image alt={card.src} src={card.src} width={1000} height={1000} />
      </div>
    </div>
  )
}

export default CxPage