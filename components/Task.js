import React from "react";
import Card from "./Card";
import { RiEditLine } from "react-icons/ri";

const Task = ({ openEditModal, title, description, dueDate, status }) => {
  return (
    <Card>
      <div className="flex justify-between">
        <h2 className="font-bold opacity-90 text-xl">{title}</h2>
        <p
          className={`p-[2px] text-[10px] h-[20px] w-[60px] text-center rounded-md font-semibold ${
            status === "pending"
              ? "text-orange-400 bg-orange-50"
              : "text-green-400 bg-green-50"
          }`}
        >
          {status}
        </p>
      </div>
      <p className="text-sm opacity-75 mt-1">{description}</p>
      <div className="flex justify-between mt-5">
        <p className="font-semibold text-xs opacity-65">Due date: {dueDate}</p>
        <RiEditLine
          className="opacity-65 cursor-pointer"
          onClick={openEditModal}
        />
      </div>
    </Card>
  );
};

export default Task;
