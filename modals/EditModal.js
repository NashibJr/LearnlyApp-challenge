"use client";

import React from "react";
import Modal from "./Modal";
import Input from "@/components/Input";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "@/redux/tasks/taskSlice";

const EditModal = ({ open, handleClose, id }) => {
  const tasks = useSelector((state) => state.tasks);
  const task_ = tasks.find((task) => task.id === id);
  const [task, setTask] = React.useState({
    title: "",
    description: "",
    date: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };
  const onConfirm = () => {
    const { title, description, date } = task;
    dispatch(editTask({ id, title, description, date }));
    handleClose();
  };

  React.useEffect(() => {
    setTask({
      title: task_?.title,
      description: task_?.description,
      date: task_?.date,
    });
  }, [id]);

  return (
    <Modal
      open={open}
      title="Edit task"
      handleClose={handleClose}
      onConfirm={onConfirm}
    >
      <form>
        <Input
          type="text"
          name="title"
          value={task.title ?? ""}
          placeholder="Title"
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          value={task.date ?? ""}
          placeholder="Due"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={task.description ?? ""}
          onChange={handleChange}
          className="border border-[#f3f3f3] rounded-md mt-3 outline-none p-3 w-full"
          placeholder="Content"
          rows={4}
        ></textarea>
      </form>
    </Modal>
  );
};

export default EditModal;
