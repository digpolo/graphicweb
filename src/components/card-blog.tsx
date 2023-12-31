import React from 'react'

type Blog = {
    id: number
    title: string;
    p: string
}

interface BlogProps {
    cardBlog: Blog;
}

const CardBlog: React.FC<BlogProps>= ({cardBlog}) => {
    return (
        <section className='my-6 mx-4 md:px-80 '>
            <h2 className={`text-xl font-bold `} >
               {cardBlog.title}
            </h2>
            <p className=' mb-6'>
               {cardBlog.p}
            </p>
        </section>
    )
}

export default CardBlog