import React from 'react'
import Image from 'next/image';
type services = {
    id: number;
    alt: string
    src: string
    title: string;
   
};

interface CardServiceProps {
    cardProduct: services; 
}
const CardServices: React.FC<CardServiceProps> = ({ cardProduct }) => {
    return (
        <div className='py-4'>
            <Image alt={cardProduct.alt} src={cardProduct.src} width={1000} height={1000}/>
        <a className='hover:cursor-pointer'>
            <h3 className='font-medium text-xl pb-1 py-2'>{cardProduct.title}</h3>
            
        </a>
        </div>
    )
}

export default CardServices