import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
const Home = () => {
  const [countries, setCountries] = useState([]);

  //on mount fetch all countries list
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        setCountries([...result]);
      });
  }, []);
  return (
    <section className={styles.homeWrapper}>
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
