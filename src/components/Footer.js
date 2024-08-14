import React, { useState, useEffect } from 'react';
import FooterTop from "./FooterTop";
import footerBottom from "./Img/footerBottom.svg"

function Footer() {
    const [isUp, setIsUp] = useState(false);
    const [isRotate, setIsRotate] = useState(false)

    useEffect(() => {
        const element = document.querySelector('.footerBottom--button')
        if (isRotate) {
            element.style.animation = 'rotateTo 1s ease-in-out forwards';
        } else {
            element.style.animation = 'rotateFrom 1s ease-in-out forwards';
        }
    }, [isRotate])

    useEffect(() => {
        const element = document.getElementById('myBox');
        if (isUp) {
            element.style.animation = 'moveUp 1s ease-in-out forwards';
        } else {
            element.style.animation = 'moveDown 1s ease-in-out forwards';
        }
    }, [isUp]);

    const handleClick = () => {
        setIsUp(!isUp);
        setIsRotate(!isRotate)
    };

    return (<footer className="footer">
        <div id="myBox" className="box"><FooterTop /></div>
        <div className="footerBottom">
            <button onClick={handleClick} className={`footerBottom--button ${isRotate} ? 'rotate' : '' `}><img src={footerBottom} alt="" /></button>
    </div>
    </footer >
    );
}

export default Footer