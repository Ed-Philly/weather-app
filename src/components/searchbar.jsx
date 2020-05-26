import React from "react";
import "./searchbar.css";
const SearchBar = (props) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="search..."
        onChange={props.onChange}
        value={props.searchString}
        onKeyPress={props.onEnter}
      />
    </div>
  );
};

export default SearchBar;
