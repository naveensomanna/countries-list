import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./Country.module.scss";
const Country = props => {
  const [details, setdetails] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}?fullText=true`)
      .then(res => res.json())
      .then(result => {
        setdetails([...result]);
      });
  }, []);

  const {
    flag,
    name,
    nativeName,
    region,
    population,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    borders = []
  } = details[0] || [];
  const detailsList = [
    { title: "Native Name:", value: nativeName },
    { title: "Population:", value: population },
    { title: "Region: ", value: region },
    { title: "Sub Region: ", value: subregion },
    { title: "Capital: ", value: capital }
  ];
  return (
    <div className={styles.container}>
      <button
        className={
          styles.backButton + ` ${props.selectedTheme ? styles.darkbg : ""}`
        }
        onClick={() => history.goBack()}
      >
        <i class="fas fa-arrow-left"></i>
        <span> Back</span>
      </button>
      <section className={styles.detailsWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <img src={flag} alt="flag" />
          </div>
          <div
            className={
              styles.details +
              ` ${props.selectedTheme ? styles.darkbgElements : ""}`
            }
          >
            <section>
              <p className={styles.name}>{name}</p>
              <div className={styles.subDetails}>
                <div className={styles.leftSection}>
                  {detailsList.map((item, index) => (
                    <div key={index}>
                      <span className={styles.subTitle}>{item.title}</span>
                      <span className={styles.value}> {item.value}</span>
                      <br />
                    </div>
                  ))}
                </div>
                <div className={styles.rightSection}>
                  <span className={styles.subTitle}>Top Level Domain: </span>
                  <span className={styles.value}>
                    {topLevelDomain && topLevelDomain[0]}
                  </span>
                  <br />
                  <span className={styles.subTitle}>Currencies: </span>
                  <span className={styles.value}>
                    {currencies && currencies[0].code}
                  </span>
                  <br />
                </div>
              </div>
            </section>
            <div className={styles.borders}>
              <span className={styles.subTitle}>Border Countries: </span>
              <span className={styles.borderCountries}>
                {borders.map((country, index) => (
                  <span className={styles.borderCountry} key={index}>
                    {country}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
