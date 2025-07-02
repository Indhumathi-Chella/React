import { createSlice, nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    userAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name,city) {
        return {
          payload: {
            id: nanoid(),
            name,
            city
          },
        };
      },
    },
  },
});

export const {userAdd} = userSlice.actions;
export default userSlice.reducer;
