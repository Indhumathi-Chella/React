import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchTodo.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
    })
    .addCase(fetchTodo.rejected, (state, action) => {
        state.status = "error";
        state.error =  action.error.message;
    });
  },
});


export default todoSlice.reducer;