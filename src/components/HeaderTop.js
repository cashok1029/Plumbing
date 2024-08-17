import React, { useState } from "react";
import logo from "./Img/logo.svg";
import search from "./Img/search.svg";
import Search from "./Search";

function HeaderTop() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="header__top">
      <div className="header__topLeft">
        <img src={logo} alt="" />
        <p className="header__topLeft--text">Розроблено у Німеччині. Зроблено в Україні.</p>
      </div>
      <div className="header__topRight">
        <p className="header__topRight--text">+380 95 543 23 45</p>
        <button onClick={handleClick} className="header__topRight--button">
          <img src={search} alt="" className="header__topRight--img" />
        </button>
      </div>
      {open && <Search />}
    </div>
  );
}

export default HeaderTop;
