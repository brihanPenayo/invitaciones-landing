import React from 'react'
import Fade from 'react-reveal/Fade';

export const Options = () => {
    const OPTIONS =
        [
            "Nombre y cantidad de Invitados",
            "Enlace a ubicación de Evento",
            "Cuenta regresiva en tiempo real",
            "Enlace a lista de regalos",
            "Fotos y videos dependiendo del plan",
            '"Save the Date" mediante calendario',
            "Cuenta de ahorro para depósito bancario",
            "Confirmaciones de asistencia",
            "Y mucho mas!"
        ]

    return (
        <Fade bottom cascade big collapse >
            <ul className='list-disc list-inside'>
                {OPTIONS.map((opt, index) => (
                    <li className='font-body cursor-pointer text-2xl leading-[3rem]' key={index}>{opt}</li>
                ))}
            </ul>
        </Fade>
    )
}