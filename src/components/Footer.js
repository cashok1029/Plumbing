import React, { useState } from "react";
import footerBottom from "./Img/footerBottom.svg";
import logo from "./Img/logo.svg"
import list from "./Img/list.svg"
import email from "./Img/footerMail.svg"
import phone from "./Img/footerPhone.svg"
import social from "./Img/footerSocial.svg"

function Footer() {
    const [active, setActive] = useState(false);


    const handleClick = () => {
        setActive(prev => !prev)
    };

    return (
        <footer className="footer">
            <div className={`footerTop ${active ? "active" : "inActive"}`}>
                <img className="footerTop__logo" src={logo} alt="" />
                <div className="footerTop__about">
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Про компанію</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Співробітництво</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Покупцям</div>
                </div>
                <div className="footerTop__about">
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Де придбати</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Сервісне обслуговування</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Контакти</div>
                </div>
                <div className="footerTop__questions">
                    <div className="footerTop__questions--title">Чи є питання?</div>
                    <div className="footerTop__questions__element"><img src={email} alt="" />hello@orangemixers.ru</div>
                    <div className="footerTop__questions__element"><img src={phone} alt="" />+380 (95) 43 23 45</div>
                </div>
                <div className="footerTop__social">
                    <div className="footerTop__social--element">Ми у соцмережах</div>
                    <img src={social} alt="" />
                </div>
                <div className="footerTop__bottom">
                    <div className="footerTop__bottom--text">© 2019 Orange Mixers</div>
                    <div className="footerTop__bottom--element">Розроблено в bitberry.ua</div>
                </div>
            </div>
            <div className="footerBottom">
                <button
                    onClick={handleClick}
                    className={`footerBottom--button ${active ? "active" : "inActive"}`}>
                    <img src={footerBottom} alt="" />
                </button>
            </div>
        </footer>
    );

}

export default Footer;
