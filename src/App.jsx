import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import Links from "./pages/Links";
import Shorts from "./pages/Shorts";
import "../src/App.css";
import Footer from "./components/Footer";
import NPM from "./pages/NPM";
import Git from "./pages/Git";
import DBJSON from "./pages/DBJSON";
import API from "./pages/API";

const PrivateRoute = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/" />; 
  }
  return children;
};

const LoginForm = ({ handleSubmit }) => {
  useEffect(() => {
    Toastify({
      text: "Dasturimizga xush kelibsiz !",
      duration: 3500,
      gravity: "top",
      position: "center",
      close: true,
      style: { background: "black", color: "red" , fontWeight : "bold" },
    }).showToast();

    Toastify({
      text: "Assalomu alaykum",
      duration: 3500,
      gravity: "top",
      position: "center",
      close: true,
      style: { background: "black", color: "green" , fontWeight : "bold" },
    }).showToast();
  }, []);

  return (
    <div className="index__body">
      <form className="index__form" onSubmit={handleSubmit}>
        <input className="index__input" name="username" placeholder="Username" />
        <input className="index__input" name="password" type="password" placeholder="Password" />
        <input className="index__input" name="email" type="email" placeholder="Email" />
        <button className="index__btn" type="submit"> Submit </button>
      </form>
    </div>
  );
};

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  function showToast(message, color = "black", duration = 2000) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: `linear-gradient(to right, ${color}, black)`,
        color: "red",
        border: "1px solid red",
        boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)",
        fontWeight : "bold"
      },
    }).showToast();
  }

  function toastMessage(message, color = "black", duration = 2000) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: `linear-gradient(to right, ${color}, black)`,
        color: "green",
        border: "1px solid green",
        boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)",
        fontWeight : "bold"
      },
    }).showToast();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]:;"'<>.,?/~]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

    if (username === "") {
      return showToast("Bo'sh maydonni to'ldiring !");
    }

    if (!usernameRegex.test(username)) {
      return showToast(
        "Username 5–15 harf va raqamdan iborat bo'lishi kerak!"
      );
    }

    if (!passwordRegex.test(password)) {
      return showToast("Invalid password");
    }

    if (!emailRegex.test(email)) {
      return showToast("Invalid email address");
    }

    toastMessage("Tizimga muvaffaqiyatli kirildi!", "black", 2500);

    setTimeout(() => {
      setIsLogged(true);
      navigate("/home");
    }, 2500);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={!isLogged ? <LoginForm handleSubmit={handleSubmit} /> : <Navigate to="/home" />} />
      <Route path="/home" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <Home darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer/> </PrivateRoute>} />
      <Route path="/html" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <HTML darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer/> </PrivateRoute>} />
      <Route path="/css" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <CSS darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer/> </PrivateRoute>} />
      <Route path="/links" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <Links darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer/> </PrivateRoute>} />
      <Route path="/shorts" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <Shorts darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer/> </PrivateRoute>} />
      <Route path="/npm" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <NPM darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer /> </PrivateRoute>} />
      <Route path="/git" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <Git darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer /> </PrivateRoute>} />
      <Route path="/dbjson" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <DBJSON darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer /> </PrivateRoute>} />
      <Route path="/api" element={<PrivateRoute isLogged={isLogged}> <Navbar /> <API darkMode={darkMode} setDarkMode={setDarkMode} /> <Footer /> </PrivateRoute>} />
      <Route path="*" element={<h1 className="error"> Page is not found </h1>} />
    </Routes>
  );
};
export default App;