import React from "react";

import styles from "./header.module.css";

export const Header = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.mainTitle}> {title} </h1>
      <p className={styles.subTitle}>What's New Today</p>
    </div>
  );
};
