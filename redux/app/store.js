import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../tasks/taskSlice";

const store = configureStore({
  reducer: taskSlice.reducer,
});

export default store;
