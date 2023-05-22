import React from 'react'
import { Options } from '../components/Options/Options'

export const Personalization = () => {
    return (
        <section id='opciones' className='relative bg-amber-50 sm:min-h-full sm:pt-14 sm:px-8 pt-[8rem] grid place-items-left place-content-center'>
            <h1 className='font-display mb-10 text-5xl sm:text-[10vmin]'>¿Que puedes incluir en tu invitación?</h1>
            <Options/>
        </section>
    )
}