import React from 'react'

const ActiveEvents = () => {
    return (
        <section id='seccion3' className='w-full relative bg-amber-50 min-h-screen grid place-items-left place-content-center'>
            <h1 className='font-display mb-10 text-5xl'>Invitaciones Activas</h1>
            <div className='p-20 grid gap-14 grid-cols-2'>
                <a href='/carlos'>
                    <img className='w-full max-w-md rounded-md drop-shadow-xl hover:scale-110' src='assets/active-invitations/15Carlos.png'/>
                </a>
                <a href='/AnaliaDanilo'>
                    <img className='w-full max-w-md rounded-md drop-shadow-xl hover:scale-110' src='assets/active-invitations/Analia&Danilo.png'/>
                </a>
            </div>
        </section>
    )
}

export default ActiveEvents