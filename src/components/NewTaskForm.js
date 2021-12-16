import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const catOption = categories.map((category, index) => {
    if (category !== "All") {
      return (
        <option key={index} value={category}>
          {category}
        </option>
      );
    }
  });

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">{catOption}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
