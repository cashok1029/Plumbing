import React from "react";
import HeaderList from "./HeaderList";
import HeaderImgSlider from "./HeaderImgSlider";

function HeaderBottom() {
  return (
    <div className="header__bottom">
      <h1 className="header__bottom--title">Сантехніка та меблі для ванної кімнати</h1>
      <HeaderList />
      <HeaderImgSlider />
      <div className="header__price__parent">
        <div className="header__price">від 4 990 ₴</div>
      </div>
    </div>
  );
}

export default HeaderBottom;
