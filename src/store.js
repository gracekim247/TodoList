import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/api/todoslice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
