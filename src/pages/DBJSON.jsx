import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/DBJSON.css";

import { users } from "../data/users";
import { products } from "../data/products";
import { cars } from "../data/cars";
import { posts } from "../data/posts";
import { comments } from "../data/comments";
import { todos } from "../data/todos";
import { quotes } from "../data/quotes";
import { recipes } from "../data/recipes";
import { categories } from "../data/categories";

const DBJSON = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const dbData = [
    {
      category: "Users",
      json: JSON.stringify(users, null, 2),
    },
    {
      category: "Products",
      json: JSON.stringify(products, null, 2),
    },
    {
      category: "Cars",
      json: JSON.stringify(cars, null, 2),
    },
    {
      category: "Posts",
      json: JSON.stringify(posts, null, 2),
    },
    {
      category: "Comments",
      json: JSON.stringify(comments, null, 2),
    },
    {
      category: "Todos",
      json: JSON.stringify(todos, null, 2),
    },
    {
      category: "Quotes",
      json: JSON.stringify(quotes, null, 2),
    },
    {
      category: "Recipes",
      json: JSON.stringify(recipes, null, 2),
    },
    {
      category: "Categories",
      json: JSON.stringify(categories, null, 2),
    }
  ];

  const filteredData = dbData.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);

    Toastify({
      text: "Copied ✅",
      duration: 2000,
      gravity: "top",
      position: "center",
      style: {
        background: "black",
        color: "lime",
        fontWeight: "bold"
      }
    }).showToast();
  };

  return (
    <div>
      <h1 className="DBJSON__title HTML__title"> DB.JSON Collections </h1>
       <div className="search__wrapper">
         <input
          className="DBJSON__input HTML__input"
          type="search"
          placeholder="Search collection..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
         />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
       </div>

      <div className="DBJSON__container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="DBJSON__card" key={item.category}>
              <h2 className="DBJSON__name"> {item.category} </h2>

              <div className="DBJSON__codeBox">
                <pre className="DBJSON__code"> {item.json} </pre>
                <button className="DBJSON__copyBtn" onClick={() => copyToClipboard(item.json)}> Copy </button>
              </div>
            </div>
          ))
        ) : (
          <p className="tags__not__founded"> Category is not found ❌ </p>
        )}
      </div>
    </div>
  );
};
export default DBJSON;