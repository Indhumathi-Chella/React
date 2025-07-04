import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import userSlice from "../features/userSlice";
import todoSlice from "../features/todoSlice";
import delayLogger from "../middleware/delayLogger";

const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
    todo: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(delayLogger)
});
export default store;
