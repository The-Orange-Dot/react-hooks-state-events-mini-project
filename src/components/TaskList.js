import React from "react";
import Task from "./Task";

function TaskList({ tasks, isFiltered, deleteTask }) {
  const filteredTasks =
    isFiltered === "All"
      ? tasks
      : tasks.filter((task) => {
          return isFiltered === task.category;
        });
  const renderTasks = filteredTasks.map((task, index) => {
    return (
      <div className="tasks" key={index}>
        <Task
          key={task.index}
          text={task.text}
          category={task.category}
          deleteTask={deleteTask}
        />
      </div>
    );
  });

  return renderTasks;
}

export default TaskList;
