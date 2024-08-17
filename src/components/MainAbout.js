import React from "react";
import firstImg from "./Img/mainAboutFirst.svg";
import secondImg from "./Img/mainAboutSecond.svg";

function MainAbout() {
  return (
    <div className="mainAbout">
      <div className="mainAbout--text">
        <div className="mainAbout--paragraph">
          <div className="firstLetter">O</div>
          <div className="firstWord">range </div>
          <div className="mainAbout--paragraph--text">
            {" "}
            - Німецька торгова марка. Головний офіс та основне виробництво{" "}
            <div className="mainAbout--paragraphPart">
              {" "}
              розташовані в Німеччині. Виробляємо змішувачі, душові кабіни,
              <div id="paragraphPart"> ванни та меблі для ванних кімнат.</div>
            </div>
          </div>
        </div>
        <div className="mainAbout--paragraph">
          Ми пропонуємо якісну продукцію німецького виробництва, яка повністю адаптована до реалій
          українського ринку.
        </div>
      </div>
      <div className="mainAbout__withImg">
        <div className="mainAbout__withImg__element">
          <img src={firstImg} alt="" />
          <div className="mainAbout__withImg__element--allText">
            <div className="mainAbout__withImg__element--title">Власне виробництво</div>
            <div className="mainAbout__withImg__element--text">
              Високий рівень технологій дозволяє гарантувати якість продукції протягом 10 років
            </div>
          </div>
        </div>
        <div className="mainAbout__withImg__element">
          <img className="mainAbout__withImg__element--img" src={secondImg} alt="" />
          <div
            id="mainAbout__withImg__element--second"
            className="mainAbout__withImg__element--allText"
          >
            <div className="mainAbout__withImg__element--title">Екологічність та доступність</div>
            <div className="mainAbout__withImg__element--text">
              Унікальний склад сплаву робить продукцію Orange безпечною для споживача.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAbout;
