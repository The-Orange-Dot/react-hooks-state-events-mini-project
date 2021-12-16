import React from "react";

function CategoryFilter({ categories, tasksFiltered }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            value={category}
            onClick={(e) => tasksFiltered(e)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
