import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.text = newText;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
