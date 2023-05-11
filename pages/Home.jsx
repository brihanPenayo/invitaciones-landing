import React from 'react'
import TextLoop from '../components/TextLoop'
import { Header } from '../components/Header/Header';

const Home = () => {
    const texts = [' Fiesta', ' Boda', 's Quinceaños'];
    const interval = 4000;
    return (
        <section className='w-full bg-amber-50 min-h-screen grid place-items-center place-content-center'>
            <Header />
            <div className='w-[768px]'>
                <h1 className='font-display text-7xl'>Invitaciones</h1>
                <h1 className='font-display text-7xl'>Exclusivas</h1>
                <h1 className='font-display text-7xl'> para tu<TextLoop texts={texts} interval={interval} /></h1>
            </div>
        </section>
    )
}

export default Home