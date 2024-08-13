import React from "react";
import logo from "./Img/logo.svg"
import search from "./Img/search.svg"
import Search from "./Search";

class HeaderTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isSearchVisible: false }

    }

    searchClick = () => {
        this.setState({ isSearchVisible: !this.state.isSearchVisible })
    }
    render() {
        return (
            <div className="header__top">
                <div className="header__topLeft">
                    <img src={logo} alt="" />
                    <p className="header__topLeft--text">Разработано в Германии. Сделано в Украине.</p>
                </div>
                <div className="header__topRight">
                    <p className="header__topRight--text">+380 95 543 23 45</p>
                    <button onClick={this.searchClick} className="header__topRight--button"><img src={search} alt="" className="header__topRight--img" /></button>
                </div>
                {this.state.isSearchVisible && (
                    <Search />
                )}
            </div>
        )
    }
}

export default HeaderTop