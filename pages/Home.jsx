import React from 'react'
import LoopEfect from '../components/LoopEfect'
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade'

const Home = () => {
    const TEXTS = [' Fiesta', ' Boda', 's Quinceaños'];
    const IMAGES = ['/assets/img/pexels-fs.webp', '/assets/img/pexels-bd.webp', '/assets/img/pexels-xv.webp']
    const interval = 4000;

    const onScroll = () => {
        const TEXT = document.getElementById("parallax__txt");
        const BACKGROUND = document.getElementById("pexels__bg");
        let scroll = window.scrollY;
        let rate = scroll * 0.5;
        TEXT.style.transform = `translate3d(0px,${rate}px,0px)`
        BACKGROUND.style.transform = `translate3d(0px,${rate * 0.8}px,0px)`
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section className='w-full overflow-hidden z-[0] relative bg-fixex min-h-screen grid place-items-center place-content-center before:content-[""] before:h-full before:w-full before:-z-[8] before:absolute before:bg-amber-50 before:opacity-70'>
            <LoopEfect loopData={IMAGES} isImage={true} interval={interval} />
            <div id="parallax__txt" className='sm:w-[768px] w-[400px] h-full font-display leading-[9vmin] text-[8vmin]'>
                <Fade bottom cascade collapse >
                    <h1>Invitaciones</h1>
                    <h1>Exclusivas</h1>
                    <h1>Para tu
                        <LoopEfect isText={true} loopData={TEXTS} interval={interval} />
                    </h1>
                </Fade>
            </div>
        </section>
    )
}

export default Home