import Content from '@/components/product/content'
import Hero from '@/components/product/hero'
import React from 'react'
import Footer from '@/components/footer'
import { EB_Garamond } from "next/font/google"
import CardBlog from '@/components/card-blog'

const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
});

let product = {
    id: 1,
    logo: 'logo5.svg',
    title: "COMMERCE",
    subtitle: "Actualice su experiencia de comercio en línea ahora mismo para satisfacer las necesidades de los clientes del futuro.",
    src: "/imgCommerce.jpg",
    alt: "Imagen de multitud de personas consumiento en time square",
    enfoque1: "Mejora la satisfacción del cliente",
    enfoque2: "Aumenta la lealtad del cliente",
    enfoque3: "Reduce los costes de marketing",
    enfoque4: "Integración con múltiples canales",
    enfoque5: "Datos unificados",
    enfoque6: "Mayor competitividad",
    shouldImg: true,
    shouldContact: true
}

let blogs = [
    { id: 1, title: "", p: " Es esencial que las empresas se adapten ágilmente a las cambiantes expectativas de los clientes y brinden experiencias de comercio omnicanal coherentes e inolvidables. Contar con ecosistemas de comercio digital preparados para el futuro se vuelve crucial para atraer y retener clientes, siendo la única vía para alcanzar el éxito." },
    { id: 2, title: "Estrategia de Comercio Digital", p: " Somos una entidad a nivel mundial especializada en estrategia, tecnología y transformación empresarial, respaldada por experiencias optimizadas para el comercio digital. Nuestra gama de servicios nos posibilita llevar a cabo implementaciones e iniciativas integrales de comercio digital, abarcando el diseño, desarrollo y consultoría." },
    { id: 3, title: "Experiencias comerciales diseñadas", p: "El enfoque de diseño de nuestra empresa se basa en una comprensión profunda del comportamiento de los consumidores y de sus procesos de compra. Nuestro equipo de diseñadores tiene la experiencia necesaria para crear experiencias que satisfagan las necesidades de los clientes en cualquier etapa de su viaje, ya sea que estén comprando un producto, recibiendo atención médica, adquiriendo regalos corporativos o incluso un par de zapatos." },
    { id: 4, title: "Ofertas para el ámbito de comercio en línea.", p: " Proporcionamos soluciones comerciales adaptadas a cada a las necesidades de cada negocio. Estamos capacitados para colaborar en la creación integral de soluciones, rescatar tiendas en situaciones críticas, realizar transiciones de plataformas en sistemas existentes y mantener a las empresas al día con las últimas tendencias comerciales." },
    { id: 5, title: "Red de comercio interconectada.", p: "En calidad de destacado socio comercial a nivel global, poseemos una comprensión profunda de las complejidades del entorno comercial y una experiencia experta para asegurar experiencias comerciales integradas y eficientes. Tenemos la capacidad de integrar diversas plataformas y servicios, haciendo uso de soluciones de vanguardia, tales como PIM, sistemas de gestión de pedidos, programas de fidelización y automatización de marketing." },
    { id: 6, title: "Apoyo Integral para el Éxito Empresarial", p: " Proporcionamos diversos servicios de soporte administrado, abarcando desde alojamiento hasta desarrollo gestionado y más. Estos servicios están meticulosamente diseñados para atender las exigencias de cualquier empresa, independientemente de su dimensión o complejidad, facilitando así el florecimiento del negocio." },

]


const Page = () => {
    return (
        <div className=''>
            <Hero card={product} />
            <section>
                <div className='border-t border-black '>
                    {blogs.map(blog => {
                        return <CardBlog key={blog.id} cardBlog={blog} />
                    })}
                </div>
            </section>
            <Footer bgClass='white' colorText='black' src='/logo5black.svg' />
        </div>
    )
}

export default Page