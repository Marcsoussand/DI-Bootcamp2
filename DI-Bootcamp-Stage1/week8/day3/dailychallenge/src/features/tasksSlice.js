import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      state[day].push(task);
    },
    editTask: (state, action) => {
      const { day, id, text } = action.payload;
      const task = state[day].find((t) => t.id === id);
      if (task) task.text = text;
    },
    deleteTask: (state, action) => {
      const { day, id } = action.payload;
      state[day] = state[day].filter((t) => t.id !== id);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
