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
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for a country"
        className={
          styles.search + ` ${props.selectedTheme ? styles.darkBg : ""}`
        }
        onChange={handleChange}
      />
      <i class="fas fa-search"></i>
    </div>
  );
};

export default Search;
