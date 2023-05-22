import React from 'react'
import { Fade } from 'react-reveal'

const ActiveEvents = () => {
    return (
        <section id='activeEvents' className='relative bg-amber-50 sm:py-14 sm:px-8 py-[8rem] grid place-items-left place-content-center'>
            <h1 className='font-display mb-10 grid place-items-center sm:text-[10vmin] text-5xl'>Invitaciones Activas</h1>
            <div className='lg:p-20 grid gap-14 grid-cols-2'>
                <Fade >
                <a href='/carlos'>
                    <img className='w-full max-w-md rounded-md drop-shadow-xl transition-transform ease-in-out duration-200 hover:scale-105' src='assets/active-invitations/15Carlos.png'/>
                </a>
                </Fade>
                <Fade>
                <a href='https://bodas.coding-py.com/AnaliaDanilo'>
                    <img className='w-full max-w-md rounded-md drop-shadow-xl transition-transform ease-in-out duration-200 hover:scale-105' src='assets/active-invitations/Analia&Danilo.png'/>
                </a>
                </Fade>
            </div>
        </section>
    )
}

export default ActiveEvents