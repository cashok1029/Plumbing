import React from "react";
import firstImg from "./Img/mainAboutFirst.svg"
import secondImg from "./Img/mainAboutSecond.svg"



class MainAbout extends React.Component {

    render() {
        return (<div className="mainAbout">
            <div className="mainAbout--text">
                <div className="mainAbout--paragraph"><div className="firstLetter">O</div><div className="firstWord">range </div><div className="mainAbout--paragraph--text"> – немецкая торговая марка. Главный офис и основное производство <div className="mainAbout--paragraphPart"> раcрасположены в Германии. Производим смесители, душевые кабины,<div id="paragraphPart"> ванны и мебель для ванных комнат.</div></div></div></div>
                <div className="mainAbout--paragraph">Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям Украинского рынка.</div>
            </div>
            <div className="mainAbout__withImg">
                <div className="mainAbout__withImg__element">
                    <img src={firstImg} alt="" />
                    <div className="mainAbout__withImg__element--allText">
                        <div className="mainAbout__withImg__element--title">Cобственное производство</div>
                        <div className="mainAbout__withImg__element--text">Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет</div>
                    </div>
                </div>
                <div className="mainAbout__withImg__element">
                    <img className="mainAbout__withImg__element--img" src={secondImg} alt="" />
                    <div id="mainAbout__withImg__element--second" className="mainAbout__withImg__element--allText">
                        <div className="mainAbout__withImg__element--title">Экологичность и доступность</div>
                        <div className="mainAbout__withImg__element--text">Уникальный состав сплава делает продукцию Orange безопасной для потребителя</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MainAbout