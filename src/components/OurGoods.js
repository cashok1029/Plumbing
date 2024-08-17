import React from "react";
import OurGoodsImgFirst from "./Img/OurGoodsImgFirst.jpg";
import OurGoodsImgSecond from "./Img/OurGoodsImgSecond.jpg";
import OurGoodsImgThird from "./Img/OurGoodsImgThird.jpg";
import OurGoodsImgFourth from "./Img/OurGoodsImgFourth.jpg";

function OurGoods() {
  return (
    <div className="ourGoods">
      <div className="ourGoods--title">Наша продукція</div>
      <div className="ourGoods__allElements">
        <div className="ourGoods__element">
          <img className="ourGoods__element--img" src={OurGoodsImgFirst} alt="" />
          <div className="ourGoods__element--text">Змішувачі</div>
        </div>
        <div className="ourGoods__element">
          <img className="ourGoods__element--img" src={OurGoodsImgSecond} alt="" />
          <div className="ourGoods__element--text">Меблі</div>
        </div>
        <div className="ourGoods__element">
          <img className="ourGoods__element--img" src={OurGoodsImgThird} alt="" />
          <div className="ourGoods__element--text">Душова програма</div>
        </div>
        <div className="ourGoods__element">
          <img className="ourGoods__element--img" src={OurGoodsImgFourth} alt="" />
          <div className="ourGoods__element--text">Фаянс</div>
        </div>
      </div>
    </div>
  );
}

export default OurGoods;
