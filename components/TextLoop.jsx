import React, { useState, useEffect } from 'react';
import './TextLoop.css';

const TextLoop = ({ texts, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const intervalId = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsVisible(true);
            }, 500);
        }, interval);

        return () => clearInterval(intervalId);
    }, [texts, interval]);

    return (
        <>
            {isVisible && <span className="font-display text-7xl text-loop__text">{texts[currentIndex]}</span>}
        </>
    );
};

export default TextLoop;
