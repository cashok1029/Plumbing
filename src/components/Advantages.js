import React from "react";
import advantageFirst from "./Img/advantageFirst.svg"
import advantageSecond from "./Img/advantageSecond.svg"
import advantageThird from "./Img/advantageThird.svg"


class Advantages extends React.Component {
    render() {
        return (<div className="advantages">
            <div className="advantages--title">Наши преимущества</div>
            <div className="allAdvantages">
                <div className="advantage">
                    <div className="advantage--img"><img src={advantageFirst} alt="" /></div>
                    <div className="advantage--title">Бесплатный возврат</div>
                    <div className="advantage--text">Если товар вам не подходит, вы можете верунть его в течении 30 дней.</div>
                </div>
                <div className="advantage">
                <div className="advantage--img"><img  src={advantageSecond} alt="" /></div>
                    <div className="advantage--title">Гарантия 10 лет</div>
                    <div className="advantage--text">Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.</div>
                </div>
                <div className="advantage">
                <div className="advantage--img"><img  src={advantageThird} alt="" /></div>
                    <div className="advantage--title">Безопасная оплата</div>
                    <div className="advantage--text">Банковской картой или наличными при получении.</div>
                </div>
            </div>
        </div>
        )
    }
}


export default Advantages