import React, { useState, useEffect } from 'react';
import './LoopEfect.css';
import Flip from 'react-reveal/Flip';
// import Fade from 'react-reveal/Fade';

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
            }, 200);
        }, interval);

        return () => clearInterval(intervalId);
    }, [loopData]);

    return (
        <>
            {isVisible && isText && <Flip bottom cascade><span className="font-display text-[8vmin] sm:text-[11vmin] loop__effect">{loopData[currentIndex]}</span></Flip>}
            {isImage &&
                <div className="conten blur-[2px] text-loop__text top-0 absolute -z-10">
                    {
                        loopData.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className={index === currentIndex ? 'active' : ''}
                            />
                        ))}
                </div>}
        </>
        //<Fade bottom><img id='pexels__bg' src={loopData[currentIndex]} className='blur-[2px] text-loop__text top-0 absolute -z-10' alt={`Imagen de fondo numero ${currentIndex + 1}`} /></Fade>
    );
}

export default LoopEfect;