import CxPage from '@/components/cx-page'
import React from 'react'

const page = () => {
    let customization = {
        id: 1,
        title: "Automatización para liberar tu tiempo y recursos",
        subtitle: "Deja que la IA haga el trabajo pesado, para que puedas centrarte en lo que más importa.",
        src: "/automation.jpg",
        alt: "grupo de personas utilizando computador",
        enfoque1: "Respuesta inmediata",
        enfoque2: "Disponibilidad 24/7",
        enfoque3: "Ahorra tiempo Reduce los errores Mejora la eficiencia",
        enfoque4: "Eficiencia",
        enfoque5: "Reducción de errores",
        enfoque6: "Automatización de tareas repetitivas"
    }
  return (
    <div>
        <CxPage card={customization}/>
    </div>
  )
}

export default page