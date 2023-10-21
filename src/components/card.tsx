import Link from 'next/link';
import React from 'react'
type cx = {
    id: number;
    title: string;
    cta: string;
    href: string
};

interface CardProps {
    card: cx; 
}
const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className='py-4'>
        <Link href={card.href} className='hover:cursor-pointer'>
            <h3 className='font-medium text-2xl pb-1'>{card.title}</h3>
            <p className='underline text-lg focus'>{card.cta}</p>
        </Link>
        </div>
    )
}

export default Card


// <div className='py-4'>
//         <a className='hover:cursor-pointer'>
//             <h3 className='font-medium text-2xl pb-1'>{card.title}</h3>
//             <p className='underline text-lg focus'>{card.cta}</p>
//         </a>
//         </div>