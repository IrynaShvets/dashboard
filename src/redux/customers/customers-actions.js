import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addCustomers = createAction(
  "customers/add",
  ({ customerName, company, phoneNumber, email, country, status }) => ({
    payload: {
      id: nanoid(),
      customerName,
      company,
      phoneNumber,
      email,
      country,
      status,
    },
  })
);

export const changesFilter = createAction("customers/changeFilter");
