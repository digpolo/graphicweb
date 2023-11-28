import React from 'react'
import CardPricing from './card-pricing'

let basic = {
    title: "Pagina web basica",
    items: [
        "Secciones/Pestañas web 5",
        "Dominio personalizado (.com .es .eu .net .org)",
        "Diseño profesional responsivo",
        "Alojamiento web/Hosting",
        "Cuentas de correo corporativas 10",
        "Espacio en disco para cuentas de correo (GB) 12.5",
        "Modificaciones mensuales 2",
        "archivos multimedia 1900",
        "Formulario de contacto 2",
        "Alta en Google Analytics & Search Console",
        "Inclusión de aviso de cookies y textos legales",
        "Enlace a redes sociales",
        "Optimización de SEO",
        "Creación de sitemapas y bobots.txt",
        "Imágenes licenciadas",
        "Enlace a WhatsApp",
        "Panel de control y tablero de estadísticas"
    ]
}

let intermediate = {
    title: "Pagina web intermedia",
    items: [
        "Secciones/Pestañas web 10",
        "Dominio personalizado (.com .es .eu .net .org)",
        "Diseño profesional responsivo",
        "Alojamiento web/Hosting",
        "Cuentas de correo corporativas 10",
        "Espacio en disco para cuentas de correo (GB) 12.5",
        "Modificaciones mensuales 2",
        "Archivos multimedia 1900",
        "Formulario de contacto 2",
        "Alta en Google Analytics & Search Console",
        "Inclusión de aviso de cookies y textos legales",
        "Enlace a redes sociales",
        "Optimización de SEO",
        "Creación de sitemapas y bobots.txt",
        "Imágenes licenciadas",
        "Enlace a WhatsApp",
        "Panel de control y tablero de estadísticas",
        "Diseño Full screen",
        "Instalación de módulo y tablero de estadísticas",
        "Blog"
    ]
}

let advanced = {
    title: "Pagina web avanzada",
    items: [
        "Secciones/Pestañas web 15",
        "Dominio personalizado (.com .es .eu .net .org)",
        "Diseño profesional responsivo",
        "Alojamiento web/Hosting",
        "Cuentas de correo corporativas 10",
        "Espacio en disco para cuentas de correo (GB) 15",
        "Modificaciones mensuales 4",
        "Archivos multimedia 2600",
        "Formulario de contacto 2",
        "Alta en Google Analytics & Search Console",
        "Inclusión de aviso de cookies y textos legales",
        "Enlace a redes sociales",
        "Optimización de SEO",
        "Creación de sitemapas y bobots.txt",
        "Imágenes licenciadas",
        "Enlace a WhatsApp",
        "Panel de control y tablero de estadísticas",
        "Diseño Full screen",
        "Instalación de módulo y tablero de estadísticas",
        "Blog",
        "Integración con MailChimp",
        "Integración de ventanas emergentes/Pop-up",
        "Formulario de suscripción",
        "Área privada",
        "Idioma adicional",
        "Instalación y mantenimiento de certificado SSL (Let´s Encrypt)"
    ]
}

const Pricing = () => {
    return (
        <div className='mx-4 flex justify-between gap-10 border-t border-black'>
            <CardPricing card={basic} />
            <CardPricing card={intermediate} />
            <CardPricing card={advanced} />
        </div>
    )
}

export default Pricing