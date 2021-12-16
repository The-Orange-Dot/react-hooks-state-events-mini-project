import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });
// console.log(TASKS);

function App() {
  const [isFiltered, setIsFiltered] = useState("All");
  const [addItem, setAddItem] = useState(TASKS);

  const tasksFiltered = (event) => {
    setIsFiltered(event.target.value);
    event.target.className = "selected";
  };

  //Adds New Tasks to list when "Add task" is submitted
  const onTaskFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text:
        event.target[0].value.charAt(0).toUpperCase() +
        event.target[0].value.slice(1),
      category: event.target[1].value,
    };
    const newTasks = [...addItem, newTask];
    setAddItem(newTasks);
    event.target[0].value = "";
    console.log(newTasks);
  };

  //Deletes task when X is pressed
  const deleteTask = (event) => {
    console.log(event.target.parentNode.children[1].textContent);

    const deletedItem = addItem.filter((item) => {
      return item.text !== event.target.parentNode.children[1].textContent;
    });
    setAddItem(deletedItem);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasksFiltered={tasksFiltered} />
      <NewTaskForm
        key={CATEGORIES.index}
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={addItem}
        isFiltered={isFiltered}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
