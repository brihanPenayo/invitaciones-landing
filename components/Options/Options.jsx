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
            <ul className='list-disc list-inside'>
                {OPTIONS.map((opt, index) => (
                    <li className='font-body cursor-pointer text-2xl leading-[3rem]' key={index}>{opt}</li>
                ))}
            </ul>
        </Fade>
    )
}