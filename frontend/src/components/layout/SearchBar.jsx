import React from "react";
import { useState } from "react";

const SearchBar = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (keyword.trim()) {
        history.pushState(`/search/${keyword}`);
      } else {
        history.pushState("/");
      }
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
        onKeyDown={handleSearch}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
