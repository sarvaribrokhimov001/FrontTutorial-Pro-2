import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../styles/NPM.css";
import ThemeToggle from "../components/ThemeToggle";

const NPM = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const npmList = [
    {
      name: "Axios",
      command: "npm i axios",
      description: "API bilan ishlash uchun ishlatiladi."
    },

    {
      name: "React Router DOM",
      command: "npm i react-router-dom",
      description: "React sahifalar orasida routing qilish uchun."
    },

    {
      name: "Redux Toolkit",
      command: "npm i @reduxjs/toolkit",
      description: "State management uchun eng mashhur kutubxona."
    },

    {
      name: "Tailwind CSS",
      command: "npm i tailwindcss @tailwindcss/vite",
      description: "Tez va zamonaviy CSS framework."
    },

    {
      name: "Toastify JS",
      command: "npm i toastify-js",
      description: "Beautiful toast notification chiqarish uchun."
    },

    {
      name: "React Icons",
      command: "npm i react-icons",
      description: "Turli xil icon paketlari."
    },

    {
      name: "Framer Motion",
      command: "npm i framer-motion",
      description: "Animatsiyalar yaratish uchun."
    },

    {
      name: "React Hot Toast",
      command: "npm i react-hot-toast",
      description: "React toast notification package."
    },

    {
      name: "Concurrently",
      command: "npm i concurrently",
      description: "Bir nechta serverni bir vaqtda ishga tushirish."
    },

    {
      name: "UUID",
      command: "npm i uuid",
      description: "Unique ID yaratish uchun."
    },

    {
      name: "Lodash",
      command: "npm i lodash",
      description: "JavaScript utility functions."
    },

    {
      name: "Formik",
      command: "npm i formik",
      description: "Form bilan ishlashni osonlashtiradi."
    },

    {
      name: "Yup",
      command: "npm i yup",
      description: "Form validation qilish uchun."
    },

    {
      name: "Swiper",
      command: "npm i swiper",
      description: "Responsive slider/carousel yaratish."
    },

    {
      name: "Chart JS",
      command: "npm i chart.js react-chartjs-2",
      description: "Diagramma va statistik chartlar."
    },

    {
      name: "JSON Server",
      command: "npm i json-server",
      description: "Fake backend va local API yaratish uchun ishlatiladi."
    },

    {
      name: "NPM Install",
      command: "npm i",
      description: "Project ichidagi barcha dependencylarni o‘rnatadi."
    },

    {
      name: "Vite Dev Server",
      command: "npm run dev",
      description: "Vite development serverni ishga tushiradi."
    },

    {
      name: "Start Project",
      command: "npm start",
      description: "React yoki Node projectni ishga tushirish uchun."
    },

    {
      name: "React Redux",
      command: "npm i react-redux",
      description: "Redux state managementni React bilan bog‘laydi."
    },

    {
      name: "Redux",
      command: "npm i redux",
      description: "Global state management kutubxonasi."
    },

    {
      name: "React Toastify",
      command: "npm i react-toastify",
      description: "Beautiful toast notificationlar chiqarish uchun."
    },

    {
      name: "Zustand",
      command: "npm i zustand",
      description: "Yengil va tez state management kutubxonasi."
    },

    {
      name: "Bootstrap",
      command: "npm i bootstrap",
      description: "Responsive CSS framework."
    },

    {
      name: "React Query",
      command: "npm i react-query",
      description: "API data fetch, caching va synchronization uchun."
    },

    {
      name: "Heroicons",
      command: "npm i @heroicons/react",
      description: "React uchun professional SVG iconlar."
    },

    {
      name: "Tabler Icons React",
      command: "npm i @tabler/icons-react",
      description: "React uchun zamonaviy icon kutubxonasi."
    },

    {
      name: "React Hook Form",
      command: "npm i react-hook-form",
      description: "Performance yaxshi bo‘lgan form management kutubxonasi."
    },

    {
      name: "TanStack Query",
      command: "npm i @tanstack/react-query",
      description: "API caching va server state management uchun."
    },

    {
      name: "React Helmet",
      command: "npm i react-helmet",
      description: "Document title va meta taglarni boshqarish."
    },

    {
      name: "Day JS",
      command: "npm i dayjs",
      description: "Date va time bilan ishlash uchun yengil kutubxona."
    },

    {
      name: "Moment JS",
      command: "npm i moment",
      description: "Sana va vaqt formatlash uchun."
    },

    {
      name: "clsx",
      command: "npm i clsx",
      description: "Conditional className yozishni osonlashtiradi."
    },

    {
      name: "Sass",
      command: "npm i sass",
      description: "SCSS/SASS ishlatish uchun."
    },

    {
      name: "React Spinners",
      command: "npm i react-spinners",
      description: "Loading spinner componentlari."
    },

    {
      name: "Lottie React",
      command: "npm i lottie-react",
      description: "JSON animatsiyalar ishlatish uchun."
    },

    {
      name: "Firebase",
      command: "npm i firebase",
      description: "Authentication, database va hosting xizmatlari."
    },

    {
      name: "Socket IO Client",
      command: "npm i socket.io-client",
      description: "Realtime chat va websocket ulanishlari uchun."
    },

    {
      name: "EmailJS",
      command: "npm i @emailjs/browser",
      description: "Frontend orqali email yuborish."
    },

    {
      name: "AOS",
      command: "npm i aos",
      description: "Scroll animationlar uchun."
    },

    {
      name: "React CountUp",
      command: "npm i react-countup",
      description: "Animated counter yaratish."
    },

    {
      name: "GSAP",
      command: "npm i gsap",
      description: "Professional animation kutubxonasi."
    },

    {
      name: "Three JS",
      command: "npm i three",
      description: "3D graphics va web animationlar."
    },

    {
      name: "React Player",
      command: "npm i react-player",
      description: "Video va media player component."
    },

    {
      name: "Markdown Preview",
      command: "npm i react-markdown",
      description: "Markdown render qilish."
    },

    {
      name: "Prism JS",
      command: "npm i prismjs",
      description: "Code syntax highlighting."
    },

    {
      name: "React Syntax Highlighter",
      command: "npm i react-syntax-highlighter",
      description: "Kodlarni chiroyli ko‘rsatish."
    },

    {
      name: "i18next",
      command: "npm i react-i18next i18next",
      description: "Multi language (translation) qo‘shish."
    },

    {
      name: "Zod",
      command: "npm i zod",
      description: "Type-safe validation library."
    }
  ];

  const filteredNPM = npmList.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.command.toLowerCase().includes(search.toLowerCase())
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
        fontWeight: "bold",
      },
    }).showToast();
  };

  return (
    <div>
      <h1 className="NPM__title HTML__title"> Useful NPM Packages </h1>
      <div className="search__wrapper">
        <input
         className="NPM__input HTML__input"
         type="search"
         placeholder="Search npm package"
         value={search}
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
   </div>

      <div className="NPM__container">
        {filteredNPM.length > 0 ? (
          filteredNPM.map((item, index) => (
            <div className="NPM__card" key={index}>
              <h2 className="NPM__name"> {item.name} </h2>
              <p className="NPM__description"> {item.description} </p>

              <div className="NPM__commandBox">
                <code className="NPM__command"> {item.command} </code>
                <button className="NPM__copyBtn" onClick={() => copyToClipboard(item.command)}> Copy </button>
              </div>
            </div>
          ))
        ) : (
          <p className="tags__not__founded"> Package is not found ❌ </p>
        )}
      </div>
    </div>
  );
};
export default NPM;