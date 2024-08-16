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
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />О компании</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Сотрудничество</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Покупателям</div>
                </div>
                <div className="footerTop__about">
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Где купить</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Сервисное обслуживание</div>
                    <div className="footerTop__about__element"><img className="footer__list--img" src={list} alt="" />Контакты</div>
                </div>
                <div className="footerTop__questions">
                    <div className="footerTop__questions--title">Есть вопросы?</div>
                    <div className="footerTop__questions__element"><img src={email} alt="" />hello@orangemixers.ru</div>
                    <div className="footerTop__questions__element"><img src={phone} alt="" />+380 (95) 43 23 45</div>
                </div>
                <div className="footerTop__social">
                    <div className="footerTop__social--element">Мы в соцсетях</div>
                    <img src={social} alt="" />
                </div>
                <div className="footerTop__bottom">
                    <div className="footerTop__bottom--text">© 2019 Orange Mixers</div>
                    <div className="footerTop__bottom--element">Разработано в bitberry.ru</div>
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
