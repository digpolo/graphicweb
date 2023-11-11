import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type services = {
    id: number;
    alt: string
    src: string
    title: string;
    description: string
    hrefa: string
    

};

interface CardServiceProps {
    cardProduct: services;
}
const CardServices: React.FC<CardServiceProps> = ({ cardProduct }) => {
    return (
        <div className='py-4'>
            <Link href={cardProduct.hrefa}>
                <Image alt={cardProduct.alt} src={cardProduct.src} width={1000} height={1000} />
                
                    <h3 className='font-medium text-xl pb-1 py-2'>{cardProduct.title}</h3>
                    <p>{cardProduct.description}</p>
                
            </Link>
        </div>
    )
}

export default CardServices