import React, { useState } from "react";
import list from "../components/Img/list.svg"
import mixer from "../components/Img/mixer.svg"
import furniture from "../components/Img/furniture.svg"
import shower from "../components/Img/shower.svg"
import fayas from "../components/Img/fayas.svg"


function HeaderList() {
    const [activeCompany, setActiveCompany] = useState(false)
    const [activeAboutCatalog, setActiveAboutCatalog] = useState(false)
    const [activeKatalog, setActiveKatalog] = useState(false)

    const aboutCompanyClick = () => {
        setActiveCompany(prev => !prev)
    }

    const aboutKatalogVisible = () => {
        setActiveAboutCatalog(prev => !prev)
    }

    const katalog = () => {
        setActiveKatalog(prev => !prev)
    }

    return (
        <div>
            <ul className="header__bottom--list">
                <li className="header__bottom--list--element"><button onClick={katalog} className="header__bottom--list--element--button"><img className={`header__bottom--list--element--img ${activeKatalog ? "activeKatalog" : "inActiveKatalog"}`} src={list} alt="" /></button><span className="header__bottom--list--element--text">Каталог товаров</span>
                    <div className="parent__katalog">
                        <div className={`katalog  ${activeKatalog ? "activeKatalog" : "inActiveKatalog"}`}>
                            <div className="katalog__element"><img src={mixer} alt="" />Смесители</div>
                            <div className="katalog__element"><img src={furniture} alt="" />Мебель</div>
                            <div className="katalog__element"><img src={shower} alt="" />Душевая программа</div>
                            <div className="katalog__element"><img src={fayas} alt="" />Фаянс</div>
                        </div>
                    </div></li>
                <li className="header__bottom--list--element "><button onClick={aboutCompanyClick} className="header__bottom--list--element--button"><img className={`header__bottom--list--element--img ${activeCompany ? "activeAboutCompany" : "inActiveAboutCompany"}`} src={list} alt="" /></button><span className="header__bottom--list--element--text">О компании</span><div className="parent__aboutCompany">
                    <div className={`aboutCompany ${activeCompany ? "activeAboutCompany" : "inActiveAboutCompany"}`}>
                        <p>Orange - немецкая торговая марка. Главный офис и основное производство расположены в городе Бурбах в Германии. Также в городе Киев Киевской области находится наше собственное производство мебели для ванных комнат по чертежам и под чутким контролем сотрудников немецкой компании ORANGE mixers UG.</p>
                    </div>
                </div></li>
                <li className="header__bottom--list--element"><button onClick={aboutKatalogVisible} className="header__bottom--list--element--button"><img  className={`header__bottom--list--element--img ${activeAboutCatalog ? "activeAboutCatalog" : "inActiveAboutCatalog"}`} src={list} alt="" /></button><span className="header__bottom--list--element--text">О продукции</span><div className="parent__aboutGoods">
                    <div className={`aboutGoods ${activeAboutCatalog ? "activeAboutCatalog" : "inActiveAboutCatalog"}`}>
                        <p>Orange Сантехника - это не просто цвет, это качество. Изготовленная из лучших материалов, наша сантехника прослужит вам долгие годы. Выбирайте стиль и наслаждайтесь комфортом.</p>
                    </div>
                </div></li>
            </ul>
        </div>
    )
}

export default HeaderList