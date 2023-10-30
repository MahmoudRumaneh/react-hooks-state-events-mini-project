import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDelete = (task) => {
    onDelete(task);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
