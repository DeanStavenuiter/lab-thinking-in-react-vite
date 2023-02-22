import React from "react";
import { useState } from "react";

const SearchBar = ({ jsonData, setProducts }) => {
  const [searchInput, setSearchInput] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setProducts(() => {
      if (e.target.value === "") {
        return jsonData;
      } else {
        return jsonData.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
      }
    });
  };

  const handleChecked = (e) => {
    setCheck(e.target.checked);
    setProducts(() => {
      if (!check) {
        return jsonData.filter((item) => item.inStock === true);
      } else {
        return jsonData;
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      <label>
        check to only see products in stock
        <input type="checkbox" value={check} onChange={handleChecked} />
      </label>
      <label>
        <input
          placeholder="search a product"
          value={searchInput}
          type="text"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
