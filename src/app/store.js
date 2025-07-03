import { configureStore } from "@reduxjs/toolkit";
import postSlice from '../features/postSlice'
import userSlice from '../features/userSlice'
import todoSlice from "../features/todoSlice";

const store = configureStore({
    reducer: {
        posts : postSlice,
        users : userSlice,
        todo : todoSlice,
    }
})
export default stor