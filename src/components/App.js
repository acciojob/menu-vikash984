import React, { useState } from "react";
import "./../styles/App.css";

const menuData = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$5.99",
  },
  {
    id: 2,
    name: "Omelette",
    category: "Breakfast",
    image: "https://via.placeholder.com/150",
    price: "$4.99",
  },
  {
    id: 3,
    name: "Burger",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$8.99",
  },
  {
    id: 4,
    name: "Grilled Chicken",
    category: "Lunch",
    image: "https://via.placeholder.com/150",
    price: "$9.99",
  },
  {
    id: 5,
    name: "Vanilla Shake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$3.99",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    category: "Shakes",
    image: "https://via.placeholder.com/150",
    price: "$4.49",
  },
];

const App = () => {
  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("All");

  const handleFilter = (cat) => {
    setCategory(cat);
  };

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h2>Menu</h2>
      <div>
        <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>
          Shakes
        </button>
      </div>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
            className="menu-card"
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
