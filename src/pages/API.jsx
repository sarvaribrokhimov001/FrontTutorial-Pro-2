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
    name: "JSONPlaceholder Albums",
    url: "https://jsonplaceholder.typicode.com/albums"
  },
  {
    name: "JSONPlaceholder Photos",
    url: "https://jsonplaceholder.typicode.com/photos"
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
    name: "DummyJSON Comments",
    url: "https://dummyjson.com/comments"
  },
  {
    name: "DummyJSON Recipes",
    url: "https://dummyjson.com/recipes"
  },
  {
    name: "DummyJSON Quotes",
    url: "https://dummyjson.com/quotes"
  },
  {
    name: "DummyJSON Todos",
    url: "https://dummyjson.com/todos"
  },
  {
    name: "DummyJSON Carts",
    url: "https://dummyjson.com/carts"
  },
  {
    name: "FakeStore Products",
    url: "https://fakestoreapi.com/products"
  },
  {
    name: "FakeStore Categories",
    url: "https://fakestoreapi.com/products/categories"
  },
  {
    name: "OpenLibrary JavaScript Books",
    url: "https://openlibrary.org/search.json?q=javascript"
  },
  {
    name: "OpenLibrary React Books",
    url: "https://openlibrary.org/search.json?q=react"
  },
  {
    name: "REST Countries",
    url: "https://restcountries.com/v3.1/all"
  },
  {
    name: "Pokemon List",
    url: "https://pokeapi.co/api/v2/pokemon"
  },
  {
    name: "Pokemon Pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu"
  },
  {
    name: "Random Dog Image",
    url: "https://dog.ceo/api/breeds/image/random"
  },
  {
    name: "Random Cat Image",
    url: "https://api.thecatapi.com/v1/images/search"
  },
  {
    name: "GitHub Users",
    url: "https://api.github.com/users"
  },
  {
    name: "GitHub Repositories",
    url: "https://api.github.com/repositories"
  },
  {
    name: "Universities API",
    url: "http://universities.hipolabs.com/search?country=United+States"
  },
  {
    name: "Astronomy Picture of Day",
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  },
  {
    name: "Random Users",
    url: "https://randomuser.me/api/"
  },
  {
    name: "Random Quotes",
    url: "https://dummyjson.com/quotes/random"
  },
  {
    name: "Programming Jokes",
    url: "https://official-joke-api.appspot.com/jokes/programming/random"
  },
  {
    name: "TVMaze Shows",
    url: "https://api.tvmaze.com/shows"
  },
  {
    name: "TVMaze Search",
    url: "https://api.tvmaze.com/search/shows?q=batman"
  },
  {
    name: "CoinGecko Coins",
    url: "https://api.coingecko.com/api/v3/coins/list"
  },
  {
    name: "Currency Rates",
    url: "https://open.er-api.com/v6/latest/USD"
  },
  {
    name: "Open Meteo Forecast",
    url: "https://api.open-meteo.com/v1/forecast?latitude=41.31&longitude=69.24&current_weather=true"
  },
  {
    name: "Spaceflight News",
    url: "https://api.spaceflightnewsapi.net/v4/articles/"
  },
  {
    name: "Anime List",
    url: "https://api.jikan.moe/v4/anime"
  },
  {
    name: "Manga List",
    url: "https://api.jikan.moe/v4/manga"
  },
  {
    name: "Rick And Morty Characters",
    url: "https://rickandmortyapi.com/api/character"
  },
  {
    name: "Meals API",
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  },
  {
    name: "Cocktails API",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  },
  {
    name: "ReqRes Users",
    url: "https://reqres.in/api/users?page=1"
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
      <h1 className="API__title HTML__title"> Free APIs Collection </h1>
      <div className="search__wrapper">
        <input
          className="search__input API__input HTML__input"
          type="search"
          placeholder="Search API..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

    <div className="API__container">
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div className="API__card" key={index}>
            <h2 className="API__name"> {item.name} </h2>

            <div className="API__linkBox">
              <code className="API__url"> {item.url} </code>
              <button className="API__copyBtn" onClick={() => copyLink(item.url)}> Copy </button>
            </div>
          </div>
        ))
      ) : (
        <p className="tags__not__founded"> API is not found ❌ </p>
      )}
    </div>
  </div>
  );
};
export default API;