import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ history }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (keyword.trim()) {
        navigate(`/search/${keyword}`);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="form-control sm:hidden xl:inline">
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
