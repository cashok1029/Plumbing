import React from "react";

function Search() {
  return (
    <div className="search">
      <h2 className="search--title">Що ви шукаєте?</h2>
      <input className="search--input" placeholder="Раковина для ванної кімнати..." />
      <div className="search--button__parent">
        <button className="search--button">Шукати</button>
      </div>
    </div>
  );
}

export default Search;
