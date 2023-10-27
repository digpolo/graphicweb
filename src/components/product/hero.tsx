import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EB_Garamond } from "next/font/google";

type cxPage = {
    id: number;
    logo: string
    title: string;
    subtitle: string
    src: string;
    alt: string
    enfoque1: string
    enfoque2: string
    enfoque3: string
    enfoque4: string
    enfoque5: string
    enfoque6: string
  }
  
  interface Props {
    card: cxPage;
  }
  
  const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
  });

const Hero: React.FC<Props> = ({ card }) => {
    
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = isScrolled ? 'bg-white  transition-all duration-300 ease-in-out transition-delay-300' : 'bg-[#FEE6FF] duration-300 ease-in-out transition-delay-300';


  return (
    <div>
        <div className='bg-white'>
      <div className='  bg-[#0000FF]'>
        <div className='fixed top-0 w-full z-10'>
          <div className={` flex justify-center items-center py-4 md:py-8 ${bgColor}`}>
            <Link href={'/'}>
              <Image
                alt='logo graphic web'
                src={card.logo}
                width={200}
                height={300}
                className="text-[#0000FF]" />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 flex-1 m-4 pb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 pt-60 md:pb-20'>
            <h1 className='font-medium text-[35px] md:text-[60px]  text-white pr-10'>{card.title}</h1>
            <div>
              <h2 className='text-white text-md md:text-4xl pt-10'>{card.subtitle}</h2>
              <a href='https://wa.me/573127550201?text=Hola,%20deseo%20solicitar%20un%20producto' className='my-8 flex justify-center py-1 text-white border border-white w-[300px]' target="_blank">
                <p className='font-[16px] text-s'>Solicitar producto</p>
              </a>
            </div>
          </div>
          <Image
            alt={card.src}
            src={card.src}
            width={2500}
            height={2500}
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero