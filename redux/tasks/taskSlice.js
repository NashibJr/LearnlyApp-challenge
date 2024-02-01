import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  tasks: [
    {
      id: Math.round(Math.random() * 1000000),
      title: "task 1",
      description: "This is task number 1",
      date: "2024-02-11",
      status: "pending",
    },
    {
      id: Math.round(Math.random() * 1000000),
      title: "task 5",
      description: "This is task number 5",
      date: "2023-01-01",
      status: "completed",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    createTask: (state, action) => {
      const { title, description, date } = action.payload;
      const newTask = {
        id: Math.round(Math.random() * 1000000),
        title,
        description,
        date,
        status: "pending",
      };

      state.tasks.push(newTask);
    },

    editTask: (state, actions) => {
      const { id, title, description, date } = actions.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (!existingTask) {
        return state.tasks;
      }
      existingTask.title = title;
      existingTask.description = description;
      existingTask.date = date;
    },

    updateStatus: (state, actions) => {
      const date_ = new Date();
      const dateObject = {
        year: date_.getFullYear(),
        month: date_.getMonth() + 1,
        day: date_.getDate(),
      };
      state.tasks.map(
        (task) =>
          (task.status = !moment(
            `${dateObject.year}-${dateObject.month}-${dateObject.day}`,
            "YYYY-MM-DD"
          ).isAfter(task.date)
            ? "pending"
            : "completed")
      );
    },
  },
});

export const { createTask, editTask, updateStatus } = taskSlice.actions;

export default taskSlice;
