import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <span>Where in the world?</span>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
