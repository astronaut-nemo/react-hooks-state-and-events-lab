import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // States
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Event Handlers
  function handleCategoryChange(event){
    // console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }

  // Components
  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All"){
      return true;
    }
    return item.category === selectedCategory;
  });

  // Render
  return (
    <div className="ShoppingList">
      {/* Filter */}
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* Items List */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
