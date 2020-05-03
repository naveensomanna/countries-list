import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import Search from "../Search/Search";
import DropDown from "../DropDown/DropDown";
const Home = props => {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFiltered] = useState([]);
  //on mount fetch all countries list
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        setCountries([...result]);
        setFiltered([...result]);
      });
  }, []);

  const filteredCountriesList = name => {
    let filtered;
    if (name.trim()) {
      filtered = countries.filter(item =>
        item.name.toLowerCase().includes(name.trim().toLowerCase())
      );
      setCountries([...filtered]);
    } else {
      setCountries([...filteredData]);
    }
  };

  const handleSelectedRegion = lists => {
    setCountries(lists ? [...lists] : [...filteredData]);
  };

  return (
    <section className={styles.homeWrapper}>
      <div className={styles.filterWrapper}>
        <Search
          filteredCountriesList={filteredCountriesList}
          selectedTheme={props.selectedTheme}
        />
        <DropDown
          handleSelectedRegion={handleSelectedRegion}
          selectedTheme={props.selectedTheme}
        />
      </div>
      <div className={styles.listWrapper}>
        {countries.map((item, index) => (
          <Link
            to={`/details/${item.name}`}
            className={props.selectedTheme ? styles.darkThemeItem : styles.item}
            key={index}
          >
            <img src={item.flag} alt="flag" />
            <div className={styles.details}>
              <p className={styles.name}>{item.name}</p>
              <span className={styles.subTitle}>Population: </span>
              <span className={styles.subName}>{item.population}</span>
              <br />
              <span className={styles.subTitle}>Region: </span>
              <span className={styles.subName}>{item.region}</span>
              <br />
              <span className={styles.subTitle}>Capital: </span>
              <span className={styles.subName}>{item.capital}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
