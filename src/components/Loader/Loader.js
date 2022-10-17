import React from "react";
import { Watch } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Watch color="#5932ea" height={100} width={100} />
    </div>
  );
};

export default Loader;
