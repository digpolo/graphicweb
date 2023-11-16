import React from 'react'
import Input from './input'
import TextArea from './text-area'

interface ContactForm {
    title: string
    description: string
}

const ContactForm = (props: ContactForm) => {
    return (
        <div className='flex flex-col  justify-between  mx-4 mx-auto max-w-xl px-4'>
            <h2 className='py-10 font-semibold text-[30px]'>{props.title}</h2>
            <p>{props.description}</p>
            <Input label='Nombre y apellido' placeholder='Nombre y apellido' />
            <Input label='Email' placeholder='Email' />
            <Input label='Celular' placeholder='Celular' />
            <TextArea label='Motivo de consulta' placeholder='¡Me interesa! Quiero más información' />
            <div className='flex gap-4'>
                <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label>Me gustaria registrarme con mi dirección de correo eléctronico para recibir el boletín con actualizaciones, recursos valiosos y consejos útiles.</label>
            </div>
            <button className='bg-[#333339] text-white py-4 rounded-lg my-14 font-medium text-lg  py-10'>
                Enviar
            </button>
        </div>
    )
}

export default ContactForm