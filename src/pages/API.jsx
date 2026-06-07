import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/API.css";

const API = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const apiData = [
    {
      name: "JSONPlaceholder Users",
      url: "https://jsonplaceholder.typicode.com/users"
    },
    {
      name: "JSONPlaceholder Posts",
      url: "https://jsonplaceholder.typicode.com/posts"
    },
    {
      name: "JSONPlaceholder Comments",
      url: "https://jsonplaceholder.typicode.com/comments"
    },
    {
      name: "JSONPlaceholder Todos",
      url: "https://jsonplaceholder.typicode.com/todos"
    },
    {
      name: "DummyJSON Products",
      url: "https://dummyjson.com/products"
    },
    {
      name: "DummyJSON Users",
      url: "https://dummyjson.com/users"
    },
    {
      name: "DummyJSON Posts",
      url: "https://dummyjson.com/posts"
    },
    {
      name: "FakeStore Products",
      url: "https://fakestoreapi.com/products"
    },
    {
      name: "REST Countries",
      url: "https://restcountries.com/v3.1/all"
    },
    {
      name: "Open Library Books",
      url: "https://openlibrary.org/search.json?q=javascript"
    }
  ];

  const filteredData = apiData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const copyLink = async (url) => {
    await navigator.clipboard.writeText(url);

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
      <h1 className="API__title HTML__title">
        Free APIs Collection
      </h1>

      <div className="search__wrapper">
        <input
          className="API__input HTML__input"
          type="search"
          placeholder="Search API..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <div className="API__container">
        {filteredData.map((item, index) => (
          <div className="API__card" key={index}>
            <h2 className="API__name">
              {item.name}
            </h2>

            <div className="API__linkBox">
              <code className="API__url">
                {item.url}
              </code>

              <button
                className="API__copyBtn"
                onClick={() => copyLink(item.url)}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;