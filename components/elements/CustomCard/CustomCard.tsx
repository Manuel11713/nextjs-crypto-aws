import React from "react";
import styles from "./CustomCard.module.css";

export const CustomCard = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
