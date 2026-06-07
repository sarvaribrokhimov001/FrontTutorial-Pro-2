import "../styles/ThemeToggle.css";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="theme__btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};
export default ThemeToggle;