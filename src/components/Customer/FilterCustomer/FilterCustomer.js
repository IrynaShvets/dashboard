import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../../redux/customers/customers-selectors";
import { changesFilter } from "../../../redux/customers/customers-actions";
import styles from "./FilterCustomer.module.scss";

const FilterCustomer = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.FilterCustomer}>
      <img
        className={styles.FilterCustomer__icon}
        src={require("../../../images/search.svg").default}
        alt="search"
      />
      <input
        className={styles.FilterCustomer__input}
        type="text"
        value={value}
        placeholder="Search"
        onChange={(e) => dispatch(changesFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default FilterCustomer;
