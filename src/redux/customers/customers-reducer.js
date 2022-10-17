import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addCustomers, changesFilter } from "./customers-actions";
import { customers } from "../../customers";

const items = createReducer(customers, {
  [addCustomers]: (state, action) => [...state, action.payload],
});

const filter = createReducer("", {
  [changesFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
