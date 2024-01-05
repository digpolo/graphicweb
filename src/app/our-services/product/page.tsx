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
    title: "PRODUCTO",
    subtitle: "Colaboramos con nuestros clientes para abordar sus desafíos, generando valor tanto para ellos como para sus organizaciones, desde la planificación estratégica hasta la comercialización del producto.",
    src: "/product.jpg",
    alt: "Imagen de un cohete despegando",
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
    { id: 1, title: "Optimizando Estrategias Empresariales: Estudios de Mercado, Modelos de Negocios y Desarrollo de Productos", p: "Nos centramos en realizar investigaciones de mercado y establecer estructuras de negocios que asistan a las empresas en la identificación de estrategias para la captación de clientes y productos. Este enfoque busca cerrar la brecha entre la estrategia comercial de las empresas y los problemas identificados. Los gestores de productos colaboran con las empresas para descubrir los problemas fundamentales de los usuarios, desarrollar soluciones efectivas, implementar prácticas de desarrollo de productos, establecer estructuras organizativas para los productos, mejorar la gobernanza de los productos y definir estrategias de comercialización." },
    { id: 1, title: "Gestión y Distribuición de Productos", p: "Una colaboración sólida en el desarrollo de productos se logra cuando los responsables están plenamente comprometidos, trabajando con stakeholders, clientes y equipos de desarrollo para establecer metas y una visión clara. Al obtener éxitos en cada fase, creamos soluciones específicas basadas en el valor prioritario." },
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