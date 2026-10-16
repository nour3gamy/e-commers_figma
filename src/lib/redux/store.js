import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "@/lib/redux/usersSlice";
const store = configureStore({
  reducer: {
    usersSlice,
  },
});
export default store;
