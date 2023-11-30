import React from 'react'

type itemsProps  ={
    title: string;
    items: string[];
  }
  
  interface Props {
    card: itemsProps
  }
  
const CardPricing: React.FC<Props> = ({ card }) => {
  return (
    <div className='py-10'>
        <h2 className='font-black py-2'>{card.title}</h2>
        {card.items.map((item, index)=>(
            <p className='py-2 border-t'>{item}</p>
        ))}
    </div>
  )
}

export default CardPricing