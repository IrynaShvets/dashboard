import React from "react";
import { useSelector } from "react-redux";
import { getVisibleCustomers } from "../../../redux/customers/customers-selectors";
import styles from "./CustomerList.module.scss";
import "../../../styles/_pagination.scss";
import usePagination from "../../../helpers/usePagination";

const CustomerList = () => {
  const customers = useSelector(getVisibleCustomers);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: customers.length,
  });

  return (
    <div className={styles.CustomerList}>
      <table className={styles.CustomerList__table}>
        <thead>
          <tr className={styles.CustomerList__tableRowHead}>
            <th className={styles.CustomerList__tableHeading}>Customer Name</th>
            <th className={styles.CustomerList__tableHeading}>Company</th>
            <th className={styles.CustomerList__tableHeading}>Phone Number</th>
            <th className={styles.CustomerList__tableHeading}>Email</th>
            <th className={styles.CustomerList__tableHeading}>Country</th>
            <th className={styles.CustomerList__tableHeading}>Status</th>
          </tr>
        </thead>

        {customers
          ?.slice(firstContentIndex, lastContentIndex)
          .map(
            ({
              id,
              customerName,
              company,
              phoneNumber,
              email,
              country,
              status,
            }) => (
              <tbody className={styles.CustomerList__tableBody} key={id}>
                <tr className={styles.CustomerList__tableRowBody}>
                  <td
                    className={styles.CustomerList__tableData}
                    style={{ width: "19.4%" }}
                  >
                    {customerName}
                  </td>
                  <td
                    className={styles.CustomerList__tableData}
                    style={{ width: "14.8%" }}
                  >
                    {company}
                  </td>
                  <td
                    className={styles.CustomerList__tableData}
                    style={{ width: "17.6%" }}
                  >
                    {phoneNumber}
                  </td>
                  <td
                    className={styles.CustomerList__tableData}
                    style={{ width: "23.4%" }}
                  >
                    {email}
                  </td>
                  <td
                    className={styles.CustomerList__tableData}
                    style={{ width: "15.8%" }}
                  >
                    {country}
                  </td>

                  {status === "Active" && (
                    <td style={{ width: "9%" }}>
                      <span
                        className={styles.CustomerList__tableDataStatusActive}
                      >
                        Active
                      </span>
                    </td>
                  )}

                  {status === "Inactive" && (
                    <td style={{ width: "9%" }}>
                      <span
                        className={styles.CustomerList__tableDataStatusInactive}
                      >
                        Inactive
                      </span>
                    </td>
                  )}
                </tr>
              </tbody>
            )
          )}
      </table>

      <div className="CustomerList__pagination">
        <p className="CustomerList__pagination-text">
          Showing data 1 to 8 of {customers.length} entries
        </p>
        <div className="CustomerList__pagination-buttons">
          <button
            onClick={prevPage}
            className={`page ${page === 1 && "page--disabled"}`}
          >
            <svg
              className="CustomerList__pagination-icon"
              width="5"
              height="7"
              viewBox="0 0 5 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" />
            </svg>
          </button>
          <button
            onClick={() => setPage(1)}
            className={`page ${page === 1 && "page--disabled"}`}
          >
            1
          </button>
          {gaps.before ? (
            <div className="CustomerList__pagination-dots">
              <span className="CustomerList__pagination-dotsSpan">...</span>
            </div>
          ) : null}

          {gaps.paginationGroup.map((el) => (
            <button
              onClick={() => setPage(el)}
              key={el}
              className={`page ${page === el ? "page--active" : ""}`}
            >
              {el}
            </button>
          ))}
          {gaps.after ? (
            <div className="CustomerList__pagination-dots">
              <span className="CustomerList__pagination-dotsSpan">...</span>
            </div>
          ) : null}
          <button
            onClick={() => setPage(totalPages)}
            className={`page ${page === totalPages && "page--disabled"}`}
          >
            {totalPages}
          </button>
          <button
            onClick={nextPage}
            className={`page ${page === totalPages && "page--disabled"}`}
          >
            <svg
              className="CustomerList__pagination-icon"
              width="5"
              height="7"
              viewBox="0 0 5 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
