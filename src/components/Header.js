import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeaderTop />
                <HeaderBottom />
            </header>
        )
    }
}


export default Header