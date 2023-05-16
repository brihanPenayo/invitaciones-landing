import React from 'react'

export const Header = () => {
    return (
        <header class="bg-amber-100 fixed top-0 w-screen z-50">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="hidden lg:flex lg:flex-1 lg:justify-start gap-[4rem]">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-2xl font-display leading-7">Estas Invitado</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-[4rem]">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-body leading-7 hover:bg-amber-200">Inicio</a>
                    <a href="#opciones" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-body leading-7 hover:bg-amber-200">Opciones</a>
                    <a href="#activeEvents" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-body leading-7 hover:bg-amber-200">Eventos Activos</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-body leading-7 hover:bg-amber-200">Contacto</a>
                </div>
            </nav>
        </header>
    )
}