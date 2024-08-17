import React from "react";
import advantageFirst from "./Img/advantageFirst.svg";
import advantageSecond from "./Img/advantageSecond.svg";
import advantageThird from "./Img/advantageThird.svg";

function Advantages() {
  return (
    <div className="advantages">
      <div className="advantages--title">Наші переваги</div>
      <div className="allAdvantages">
        <div className="advantage">
          <div className="advantage--img">
            <img src={advantageFirst} alt="" />
          </div>
          <div className="advantage--title">Безкоштовне повернення</div>
          <div className="advantage--text">
            Якщо товар вам не підходить, ви можете повернути його протягом 30 днів.
          </div>
        </div>
        <div className="advantage">
          <div className="advantage--img">
            <img src={advantageSecond} alt="" />
          </div>
          <div className="advantage--title">Гарантія 10 років</div>
          <div className="advantage--text">
            Стандарти ISO9001 та подвійний контроль якості гарантують довгострокову бездоганну
            роботу виробів.
          </div>
        </div>
        <div className="advantage">
          <div className="advantage--img">
            <img src={advantageThird} alt="" />
          </div>
          <div className="advantage--title">Безпечна оплата</div>
          <div className="advantage--text">Банківською карткою або готівкою при отриманні.</div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
