import React from "react";
import OurGoodsImgFirst from "./Img/OurGoodsImgFirst.jpg"
import OurGoodsImgSecond from "./Img/OurGoodsImgSecond.jpg"
import OurGoodsImgThird from "./Img/OurGoodsImgThird.jpg"
import OurGoodsImgFourth from "./Img/OurGoodsImgFourth.jpg"



class OurGoods extends React.Component {
    
    render() {
        return (<div className="ourGoods">
            <div className="ourGoods--title">Наша продукция</div>
            <div className="ourGoods__allElements">
                <div className="ourGoods__element">
                    <img className="ourGoods__element--img" src={OurGoodsImgFirst} alt="" />
                    <div className="ourGoods__element--text">Смесители</div>
                </div>
                <div className="ourGoods__element">
                    <img className="ourGoods__element--img" src= {OurGoodsImgSecond} alt="" />
                    <div className="ourGoods__element--text">Мебель</div>
                </div>
                <div className="ourGoods__element">
                    <img className="ourGoods__element--img" src={OurGoodsImgThird} alt="" />
                    <div className="ourGoods__element--text">Душевая программа</div>
                </div>
                <div className="ourGoods__element">
                    <img className="ourGoods__element--img" src={OurGoodsImgFourth} alt="" />
                    <div className="ourGoods__element--text">Фаянс</div>
                </div>
                
            </div>
        </div>
        )
    }
}

export default OurGoods