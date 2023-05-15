import React, { useState, useEffect } from 'react';
import './LoopEfect.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const LoopEfect = ({ loopData, interval, isText, isImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const intervalId = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % loopData.length);
                setIsVisible(true);
            }, 500);
        }, interval);

        return () => clearInterval(intervalId);
    }, [loopData, interval]);

    return (
        <>
            {isVisible && isText && <Flip bottom cascade><span className="font-display text-[8vmin] text-loop__text">{loopData[currentIndex]}</span></Flip>}
            {isVisible && isImage && <Fade bottom><img id='pexels__bg' src={loopData[currentIndex]} className='blur-[2px] text-loop__text top-0 absolute -z-10' alt={`Imagen de fondo numero ${currentIndex + 1}`} /></Fade>}
        </>
    );
};

export default LoopEfect;
