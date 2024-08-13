import React from "react";
import tap from "./Img/tap.jpg"
import list from "../components/Img/list.svg"


class Collections extends React.Component {
    render() {
        return (
            <div className="collections">
                <div className="collections__left">
                    <div className="collections--title">Коллекции</div>
                    <div className="collections--text">Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.</div>
                    <a href='#123' className="collections__left--button"><img src={list} alt="" />Все коллекции</a>
                </div>
                <div className="collections__right">
                    <img className="collections__right--img" src={tap} alt="" />
                    <div className="collections__right--title">ARISTO</div>
                    <div className="collections__price">от 4 990 ₽</div>
                </div>
            </div>
        )
    }
}


export default Collections