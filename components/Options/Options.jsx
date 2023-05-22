import React from 'react';
import Fade from 'react-reveal/Fade';

export const Options = () => {
    const OPTIONS =
        [
            "Cuenta regresiva en tiempo real",
            "Ubicación del evento en Maps",
            "Lista de regalos con Enlaces",
            "Fotos y videos",
            'Evento en calendario de Google',
            "Datos de cuentas bancarias para depósito",
            "Confirmación de asistencia",
            "Lista de Invitados"
        ]

    return (
        <Fade bottom cascade collapse >
            <ul className='list-disc list-inside sm:min-h-full'>
                {OPTIONS.map((opt, index) => (
                    <li className='font-body cursor-pointer marker:text-amber-500 text-2xl sm:text-[5.5vmin] leading-[3rem]' key={index}>{opt}</li>
                ))}
            </ul>
        </Fade>
    )
}