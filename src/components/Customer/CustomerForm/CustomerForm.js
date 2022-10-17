import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import { addCustomers } from "../../../redux/customers/customers-actions";
import { getCustomers } from "../../../redux/customers/customers-selectors";
import styles from "./CustomerForm.module.scss";

function CustomerForm() {
  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const customers = useSelector(getCustomers);
  const dispatch = useDispatch();

  const customerNameInputId = nanoid();
  const companyInputId = nanoid();
  const phoneNumberInputId = nanoid();
  const emailInputId = nanoid();
  const countryInputId = nanoid();
  const statusInputId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "customerName":
        setCustomerName(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = customerName.toLowerCase();
    const isNameInCustomers = customers.some((customer) =>
      customer.customerName?.toLowerCase().includes(normalizedName)
    );

    if (isNameInCustomers) {
      setCustomerName("");
      setCompany("");
      setPhoneNumber("");
      setEmail("");
      setCountry("");
      setStatus("");
      toast.info(`${customerName} is already in list of customers.`);
    }

    if (!isNameInCustomers) {
      dispatch(
        addCustomers({
          customerName,
          company,
          phoneNumber,
          email,
          country,
          status,
        })
      );

      setCustomerName("");
      setCompany("");
      setPhoneNumber("");
      setEmail("");
      setCountry("");
      setStatus("");
      toast.success(`${customerName} added to customers.`);
    }
  };

  return (
    <form className={styles.CustomerForm} onSubmit={handleSubmit}>
      <label
        className={styles.CustomerForm__label}
        htmlFor={customerNameInputId}
      >
        <input
          className={styles.CustomerForm__input}
          type="text"
          name="customerName"
          value={customerName}
          htmlFor={customerNameInputId}
          onChange={handleChange}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={styles.CustomerForm__label} htmlFor={companyInputId}>
        <input
          className={styles.CustomerForm__input}
          type="text"
          name="company"
          value={company}
          htmlFor={companyInputId}
          onChange={handleChange}
          placeholder="Company"
          required
        />
      </label>

      <label
        className={styles.CustomerForm__label}
        htmlFor={phoneNumberInputId}
      >
        <input
          className={styles.CustomerForm__input}
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          htmlFor={phoneNumberInputId}
          onChange={handleChange}
          placeholder="Number"
          required
        />
      </label>

      <label className={styles.CustomerForm__label} htmlFor={emailInputId}>
        <input
          className={styles.CustomerForm__input}
          type="email"
          name="email"
          value={email}
          htmlFor={emailInputId}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </label>

      <label className={styles.CustomerForm__label} htmlFor={countryInputId}>
        <input
          className={styles.CustomerForm__input}
          type="text"
          name="country"
          value={country}
          htmlFor={countryInputId}
          onChange={handleChange}
          placeholder="Country"
          required
        />
      </label>

      <label className={styles.CustomerForm__label} htmlFor={statusInputId}>
        <input
          className={styles.CustomerForm__input}
          type="text"
          name="status"
          value={status}
          htmlFor={statusInputId}
          onChange={handleChange}
          placeholder="Status: Active or Inactive"
          required
        />
      </label>

      <Button type="submit" variant="outlined">
        Add customer
      </Button>
    </form>
  );
}

export default CustomerForm;
