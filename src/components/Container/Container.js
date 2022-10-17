import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
