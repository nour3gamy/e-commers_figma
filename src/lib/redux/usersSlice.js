import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstname: null,
  lastname: null,
  username: null,
  email: null,
  password: null,
  image: null,
  loggedin: null,
};
const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.firstname = payload.firstname;
      state.lastname = payload.lastname;
      state.username = payload.username;
      state.email = payload.email;
      state.password = payload.password;
      state.image = payload.image;
      state.loggedin = payload.loggedin;
    },
    logout: () => initialState,
  },
});
export default usersSlice.reducer;
export const { login, logout } = usersSlice.actions;
