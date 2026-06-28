import { useState } from "react";
import "./Menu.css";

import MenuCard from "./MenuCard";
import menu from "./MenuData";

function Menu() {

  const categories = [
    "All",
    "Hot Coffee",
    "Cold Coffee",
    "Espresso",
    "Latte",
    "Cappuccino",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredMenu = menu.filter((item) => {
    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="menu-page">

      {/* Header */}

      <div className="menu-header">

        <h1>Our Menu</h1>

        <p>
          Crafted with passion. Served with elegance.
        </p>

      </div>

      {/* Search */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search coffee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Categories */}

      <div className="categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>

      {/* Cards */}

      <div className="menu-grid">

        {filteredMenu.map((item) => (

          <MenuCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </section>
  );
}

export default Menu;