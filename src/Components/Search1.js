import React from 'react'
import "./Search.css"
function Search1({search}) {
  // console.log(onChangeHandler);
  return (
    <div>
        <input
        className="header__searchInput"
        type='search'
        onChange={search}
    />
    </div>
)
}
export default Search1;