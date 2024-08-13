import React, { useEffect } from "react";
import headerImg from "./Img/headerImg.png"
import headerImgDuche from "./Img/Duche.png"
import headerImgDucheSecond from "./Img/DucheSecond.png"

function HeaderImgSlider() {
    useEffect(() => {
        const slider = document.getElementById('slider')
        slider.style.animation = "slider 20s ease infinite"
    })

    return (<div className="parrent__slider">
        <div id="slider" className="headerImg--slider">
            <img id="firstSlide" className="header--img" src={headerImg} alt="" />
            <img id="secondSlide" className="header--img" src={headerImgDuche} alt="" />
            <img id="thirdSlide" className="header--img" src={headerImgDucheSecond} alt="" />
            <img className="header--img" src={headerImg} alt="" />
        </div>
    </div>)
}


export default HeaderImgSlider