import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ title }) => <h3 className={styles.Title}>{title}</h3>;
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
