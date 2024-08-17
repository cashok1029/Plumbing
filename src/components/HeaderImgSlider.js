import React, { useEffect, useState } from "react";
import headerImg from "./Img/headerImg.png"
import headerImgDuche from "./Img/Duche.png"
import headerImgDucheSecond from "./Img/DucheSecond.png"

function HeaderImgSlider() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])

    return (<div className='parrent__slider'>
        <div className={`headerImg--slider ${active ? 'spine' : ''}`}>
            <img id="firstSlide" className="header--img" src={headerImg} alt="" />
            <img id="secondSlide" className="header--img" src={headerImgDuche} alt="" />
            <img id="thirdSlide" className="header--img" src={headerImgDucheSecond} alt="" />
            <img className="header--img" src={headerImg} alt="" />
        </div>
    </div>)
}


export default HeaderImgSlider