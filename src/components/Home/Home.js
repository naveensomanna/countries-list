import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Search from "../Search/Search";
const Home = () => {
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
  return (
    <section className={styles.homeWrapper}>
      <Search filteredCountriesList={filteredCountriesList} />
      <div className={styles.listWrapper}>
        {countries.map((item, index) => (
          <div className={styles.item} key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
