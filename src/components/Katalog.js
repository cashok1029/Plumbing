import React from "react";
import mixer from "../components/Img/mixer.svg"
import furniture from "../components/Img/furniture.svg"
import shower from "../components/Img/shower.svg"
import fayas from "../components/Img/fayas.svg"


class Katalog extends React.Component {
    render() {
        return (
            <div className="parent__katalog">
                <div id="headerKatalog" className="katalog">
                    <div className="katalog__element"><img src={mixer} alt="" />Смесители</div>
                    <div className="katalog__element"><img src={furniture} alt="" />Мебель</div>
                    <div className="katalog__element"><img src={shower} alt="" />Душевая программа</div>
                    <div className="katalog__element"><img src={fayas} alt="" />Фаянс</div>
                </div>
            </div>
        )
    }
}


export default Katalog