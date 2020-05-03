import React, { useState } from "react";
import styles from "./DropDown.module.scss";
const DropDown = props => {
  const [filteredValue, setFiltered] = useState("Filter by Region");
  const [showDropdown, setDropDown] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClick = () => {
    setDropDown(!showDropdown);
  };

  const handleSelect = region => {
    setFiltered(region);
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => res.json())
      .then(result => {
        result.length > 0 && props.handleSelectedRegion(result);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        className={
          styles.select + ` ${props.selectedTheme ? styles.darkBg : ""}`
        }
        onClick={handleClick}
      >
        <span className={styles.selectedValue}>
          {filteredValue} <i class="fas fa-angle-down"></i>
        </span>
        {showDropdown && (
          <ul className={styles.lists}>
            {regions.map(region => (
              <li onClick={() => handleSelect(region)}>{region}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
