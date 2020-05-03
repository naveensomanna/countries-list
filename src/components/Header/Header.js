import React from "react";
import styles from "./Header.module.scss";
const Header = props => {
  return (
    <header
      className={
        styles.headerWrapper +
        ` ${props.selectedTheme ? styles.darkHeader : ""}`
      }
    >
      <div className={styles.container}>
        <span>Where in the world?</span>
        <span onClick={props.handleToggleTheme}>
          <i class="far fa-moon"></i>
          Dark Mode
        </span>
      </div>
    </header>
  );
};

export default Header;
