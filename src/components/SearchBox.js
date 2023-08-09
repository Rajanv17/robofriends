import React from "react";

const SearchBox = ({ searchfield, searchChange, addNew, deleteOne }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name=""
        value={searchfield}
        placeholder="search robots"
        onChange={searchChange}
      />     
      </div>
  );
};

export default SearchBox;
