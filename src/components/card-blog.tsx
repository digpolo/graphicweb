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
        <section className='my-10 mx-4 border-t border-black flex flex-col gap-10 items-center '>
            <h2 className={`text-3xl lg:text-6xl py-4`} >
               {cardBlog.title}
            </h2>
            <p className='pt-10 mb-6'>
               {cardBlog.p}
            </p>
        </section>
    )
}

export default CardBlog