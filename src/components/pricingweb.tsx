'use client'
import CardPricing from './card-pricing'
import React, { Component,  } from "react";
import Slider from "react-slick";
import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin-ext"],
    variable: '--font-garamond'
  });

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

export default class SimpleSlider extends Component {
   
    render() {
        const settings = {
            
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow:  3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            

        };
        return (
            <div className='border-t border-black px-4'>
                <h2 className={`${garamond.variable} font-garamond text-3xl lg:text-6xl py-4`} >¿Cuáles son nuestros planes para la creación de tienda online?</h2>
                <Slider {...settings}>
                    <CardPricing card={basic} />
                    <CardPricing card={intermediate} />
                    <CardPricing card={advanced} />
                </Slider>
            </div>
        )
    }
}