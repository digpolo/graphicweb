import CxPage from '@/components/cx-page'
import React from 'react'

const page = () => {
    let customization = {
        id: 1,
        title: "Automatización para liberar tu tiempo y recursos",
        subtitle: "Deja que la IA haga el trabajo pesado, para que puedas centrarte en lo que más importa.",
        src: "/automation.jpg",
        alt: "grupo de personas utilizando computador"
    }
  return (
    <div>
        <CxPage card={customization}/>
    </div>
  )
}

export default page