import React, { useEffect, useState } from "react";
import list from "../components/Img/list.svg"
import AboutCompany from "./AboutCompany";
import AboutGoods from "./AboutGoods";
import Katalog from "./Katalog";


function HeaderList() {
    const [isListElementRotate, setIsListElementRotate] = useState(false)
    const [isListElementRotateSecond, setIsListElementRotateSecond] = useState(false)
    const [isListElementRotateThird, setIsListElementRotateThird] = useState(false)
    const [isAboutCompanyVisible, setIsAboutCompanyVisible] = useState(false)
    const [isAboutGoodsVisible, setIsAboutGoodsVisible] = useState(false)
    const [isKatalogVisible, setIsKatalogVisible] = useState(false)

    useEffect(() => {
        const element = document.getElementById('list__img')
        if (isListElementRotate) {
            element.style.animation = 'rotateListTo 1s forwards';
        } else {
            element.style.animation = 'rotateListFrom 1s  forwards';
        }
    })
    useEffect(() => {
        const element = document.getElementById('list__imgSecond')
        if (isListElementRotateSecond) {
            element.style.animation = 'rotateListTo 1s forwards';
        } else {
            element.style.animation = 'rotateListFrom 1s  forwards';
        }
    })
    useEffect(() => {
        const element = document.getElementById('list__imgThird')
        if (isListElementRotateThird) {
            element.style.animation = 'rotateKatalogTo 1s forwards';
        } else {
            element.style.animation = 'rotateKatalogFrom 1s  forwards';
        }
    })

    useEffect(() => {
        const element = document.getElementById('aboutGoods')
        if (isKatalogVisible) {
            element.style.animation = 'visibleList 1s forwards';
        } else {
            element.style.animation = 'closeList 1s ease-in-out forwards';
        }
    })

    useEffect(() => {
        const element = document.getElementById('aboutCompany')
        if (isAboutCompanyVisible) {
            element.style.animation = 'visibleAbout 1s forwards';
        } else {
            element.style.animation = 'closeAbout ease-in-out 1s forwards';
        }
    })
    useEffect(() => {
        const element = document.getElementById('headerKatalog')
        if (isAboutGoodsVisible) {
            element.style.animation = 'visibleKatalog 1s forwards';
        } else {
            element.style.animation = 'closeKatalog ease-in-out 1s forwards';
        }
    })

    const aboutCompanyClick = () => {
        setIsAboutCompanyVisible(!isAboutCompanyVisible)
        setIsListElementRotate(!isListElementRotate)
    }

    const aboutKatalogVisible = () => {
        setIsKatalogVisible(!isKatalogVisible)
        setIsListElementRotateSecond(!isListElementRotateSecond)
    }

    const katalog = () => {
        setIsListElementRotateThird(!isListElementRotateThird)
        setIsAboutGoodsVisible(!isAboutGoodsVisible)
    }

    return (
        <div>
            <ul className="header__bottom--list">
                <li className="header__bottom--list--element"><button onClick={katalog} className="header__bottom--list--element--button"><img id="list__imgThird" className="header__bottom--list--element--img" src={list} alt="" /></button><span className="header__bottom--list--element--text">Каталог товаров</span><Katalog /></li>
                <li className="header__bottom--list--element"><button onClick={aboutCompanyClick} className="header__bottom--list--element--button"><img id="list__img" className="header__bottom--list--element--img" src={list} alt="" /></button><span className="header__bottom--list--element--text">О компании</span><AboutCompany /></li>
                <li className="header__bottom--list--element"><button onClick={aboutKatalogVisible} className="header__bottom--list--element--button"><img id="list__imgSecond" className="header__bottom--list--element--img" src={list} alt="" /></button><span className="header__bottom--list--element--text">О продукции</span><AboutGoods /></li>
            </ul>
        </div>
    )
}

export default HeaderList