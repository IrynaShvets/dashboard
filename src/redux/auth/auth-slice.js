import { createSlice } from "@reduxjs/toolkit";
import operations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operations.register.pending](state, action) {
      state.loading = true;
      state.error = null;
    },
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [operations.register.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [operations.logIn.pending](state, action) {
      state.loading = true;
      state.error = null;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [operations.logIn.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [operations.logOut.pending](state, action) {
      state.loading = true;
      state.error = null;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [operations.logOut.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    [operations.fetchCurrentUser.pending](state, action) {
      state.loading = true;
      state.error = null;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [operations.fetchCurrentUser.rejected](state, action) {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
