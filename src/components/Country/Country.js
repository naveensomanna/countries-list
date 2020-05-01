import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./Country.module.scss";
const Country = () => {
  const [details, setdetails] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}`)
      .then(res => res.json())
      .then(result => {
        setdetails([...result]);
      });
  }, []);

  console.log(details);
  const { flag, name } = details[0] || [];
  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => history.goBack()}>
        Back
      </button>
      <section className={styles.detailsWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <img src={flag} alt="flag" />
          </div>
          <div className={styles.details}>
            <p>{name}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
