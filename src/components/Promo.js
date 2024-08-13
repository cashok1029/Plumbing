import React from "react";
import promoImg from "./Img/promo.png"

class Promo extends React.Component {
    render() {
        return (<div className="promo">
            <img src={promoImg} alt="" />
            <div className="promo--text">ORANGE – это строгий, тщательно продуманный дизайн и подлинные немецкие традиции.</div>
        </div>
        )
    }
}


export default Promo