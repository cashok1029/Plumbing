import React from "react";
import HeaderList from "./HeaderList";
import HeaderImgSlider from "./HeaderImgSlider";


class HeaderBottom extends React.Component {
    render() {
        return (
            <div className="header__bottom">
                <h1 className="header__bottom--title">Сантехника и мебель для ванной комнаты</h1>
                <HeaderList />
                <HeaderImgSlider />                
                <div className="header__price__parent">
                    <div className="header__price">от 4 990 ₽</div>
                </div>
            </div>
        )
    }
}

export default HeaderBottom