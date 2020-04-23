import React from "react";
import styles from "./styles.module.css";

function Toolbar(props) {
  return <div className={styles.nav}>{props.children}</div>;
}

export default Toolbar;
