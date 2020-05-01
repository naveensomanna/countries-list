import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
const Search = props => {
  const [searchText, setText] = useState("");
  const handleChange = event => {
    setText(event.target.value);
  };

  useEffect(() => {
    props.filteredCountriesList(searchText);
  }, [searchText]);
  return (
    <input
      type="text"
      placeholder="Search for a country"
      className={styles.search}
      onChange={handleChange}
    />
  );
};

export default Search;
