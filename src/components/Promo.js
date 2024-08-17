import React from "react";
import promoImg from "./Img/promo.png";

function Promo() {
  return (
    <div className="promo">
      <img src={promoImg} alt="" />
      <div className="promo--text">
        ORANGE – це суворий, ретельно продуманий дизайн та справжні німецькі традиції.
      </div>
    </div>
  );
}

export default Promo;
