import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <h2 className="search--title">Что вы ищете?</h2>
                <input className="search--input" placeholder="Раковина для ванной комнаты..." />
                <div className="search--button__parent"><button className="search--button">Искать</button></div>
            </div>
        )
    }
}

export default Search