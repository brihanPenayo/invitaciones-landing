import React from 'react'
import { Options } from '../components/Options/Options'

export const Personalization = () => {
    return (
        <section id='seccion2' className='w-full relative bg-amber-50 min-h-screen grid place-items-left place-content-center'>
            <h1 className='font-display mb-10 text-5xl'>¿Que puedes incluir en tu invitación?</h1>
            <Options/>
        </section>
    )
}