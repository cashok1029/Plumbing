import React from "react";
import promotionFirst from "./Img/promotionFirst.png"
import promotionSecond from "./Img/promotionSecond.png"
import promotionThird from "./Img/promotionThird.png"
import promotionFourth from "./Img/promotionFourth.png"

class Promotion extends React.Component {

    render() {
        return (<div className="promotion">
            <div className="promotion--title">Акционные товары</div>
            <div className="promotion__AllElements">
                <div className="promotion__element">
                    <img src={promotionFirst} alt="" />
                    <div className="promotion__element--discount">-15%</div>
                    <div className="promotion__element--text">O-mebel зеркальный шкаф со светом Лотос</div>
                    <div className="promotion__element--price">5 990 ₽</div>
                    <div className="promotion__element--oldPrice">6 499 ₽</div>
                </div>
                <div className="promotion__element">
                    <img src={promotionSecond} alt="" />
                    <div className="promotion__element--text">Orange Berti M17-021cr однорычажный смеситель для раковины без донного клапана</div>
                    <div className="promotion__element--price">4 090 ₽</div>
                </div>
                <div className="promotion__element">
                    <img src={promotionThird} alt="" />
                    <div className="promotion__element--text">Orange Berti M17-100cr однорычажный ванно-душевой смеситель</div>
                    <div className="promotion__element--price">5 490 ₽</div>
                </div>
                <div className="promotion__element">
                    <img src={promotionFourth} alt="" />
                    <div className="promotion__element--discount">-12%</div>
                    <div className="promotion__element--text">Ручной душ O-Shower OS05</div>
                    <div className="promotion__element--price">1 100 ₽</div>
                    <div className="promotion__element--oldPrice">1 990 ₽</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Promotion