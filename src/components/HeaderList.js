import React, { useState } from "react";
import list from "../components/Img/list.svg";
import mixer from "../components/Img/mixer.svg";
import furniture from "../components/Img/furniture.svg";
import shower from "../components/Img/shower.svg";
import fayas from "../components/Img/fayas.svg";

function HeaderList() {
  const [open, setOpen] = useState("");

  const handleCompany = () => {
    setOpen((prev) => (prev === "company" ? "" : "company"));
  };

  const handleAbout = () => {
    setOpen((prev) => (prev === "about" ? "" : "about"));
  };

  const handleKatalog = () => {
    setOpen((prev) => (prev === "katalog" ? "" : "katalog"));
  };

  return (
    <div>
      <ul className="header__bottom--list">
        <li className="header__bottom--list--element">
          <button onClick={handleKatalog} className="header__bottom--list--element--button">
            <img
              className={`header__bottom--list--element--img ${open === "katalog" ? "activeKatalog" : "inActiveKatalog"}`}
              src={list}
              alt=""
            />
          </button>
          <span className="header__bottom--list--element--text">Каталог товарів</span>
          <div className="parent__katalog">
            <div className={`katalog  ${open === "katalog" ? "activeKatalog" : "inActiveKatalog"}`}>
              <div className="katalog__element">
                <img src={mixer} alt="" />
                Змішувачі
              </div>
              <div className="katalog__element">
                <img src={furniture} alt="" />
                Меблі
              </div>
              <div className="katalog__element">
                <img src={shower} alt="" />
                Душова програма
              </div>
              <div className="katalog__element">
                <img src={fayas} alt="" />
                Фаянс
              </div>
            </div>
          </div>
        </li>
        <li className="header__bottom--list--element ">
          <button onClick={handleCompany} className="header__bottom--list--element--button">
            <img
              className={`header__bottom--list--element--img ${open === "company" ? "activeAboutCompany" : "inActiveAboutCompany"}`}
              src={list}
              alt=""
            />
          </button>
          <span className="header__bottom--list--element--text">Про компанію</span>
          <div className="parent__aboutCompany">
            <div
              className={`aboutCompany ${open === "company" ? "activeAboutCompany" : "inActiveAboutCompany"}`}
            >
              <p>
                Orange – німецька торгова марка. Головний офіс та основне виробництво розташовані в
                Бурбах в Німеччині. Також у місті Київ Київської області знаходиться наше власне
                виробництво меблів для ванних кімнат за кресленнями та під чуйним контролем
                працівників німецької компанії ORANGE mixers UG.
              </p>
            </div>
          </div>
        </li>
        <li className="header__bottom--list--element">
          <button onClick={handleAbout} className="header__bottom--list--element--button">
            <img
              className={`header__bottom--list--element--img ${open === "about" ? "activeAboutCatalog" : "inActiveAboutCatalog"}`}
              src={list}
              alt=""
            />
          </button>
          <span className="header__bottom--list--element--text">О продукции</span>
          <div className="parent__aboutGoods">
            <div
              className={`aboutGoods ${open === "about" ? "activeAboutCatalog" : "inActiveAboutCatalog"}`}
            >
              <p>
                Orange Сантехніка – це не просто колір, це якість. Виготовлена ​​з найкращих
                матеріалів, наша сантехніка прослужить вам довгі роки. Вибирайте стиль та
                насолоджуйтесь комфортом.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeaderList;
