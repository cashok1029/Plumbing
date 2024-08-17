import React from "react";
import tap from "./Img/tap.jpg";
import list from "../components/Img/list.svg";

function Collections() {
  return (
    <div className="collections">
      <div className="collections__left">
        <div className="collections--title">Колекції</div>
        <div className="collections--text">
          Чуттєвість та елегантність, пуризм та ексклюзивність, а може затишок та романтичність?
          Наші колекції, розроблені кращими дизайнерами галузі, допоможуть вам створити саме ту
          атмосферу ванної кімнати, яку ви завжди шукали.
        </div>
        <a href="#123" className="collections__left--button">
          <img src={list} alt="" />
          Усі колекції
        </a>
      </div>
      <div className="collections__right">
        <img className="collections__right--img" src={tap} alt="" />
        <div className="collections__right--title">ARISTO</div>
        <div className="collections__price">від 4 990 ₴</div>
      </div>
    </div>
  );
}

export default Collections;
