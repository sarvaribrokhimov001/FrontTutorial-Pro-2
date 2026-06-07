import { useState } from 'react';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle';

const Home = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const checkMatch = (text) => {
    if (search === "") return false;
    return text.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <div>
      <header>
        <h1 className='home__title'> Welcome to our Website </h1>
        <div className="search__wrapper">
          <input 
           className='search__input home__input' 
           type="search" 
           placeholder='Write your choosing section' 
           value={search}
           onChange={(e) => setSearch(e.target.value)} />

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className='home__description__container'>
          <h3 className='home__description__title'> Assalomu alaykum hurmatli foydalanuvchilar 😇 </h3>
          <p className='home__description'> Ushbu loyiha FrontEnd dasturlashni o‘rganayotganlar uchun maxsus yaratilgan. </p>

          {search !== "" && (
            <div className='home__sections'>
              <h4 className='home__sections__title'> Sections </h4>

              <div className='home__section'>
                {checkMatch("LOGIN") && (
                  <li> <Link className='home__section__link' to="/app"> LOGIN </Link> </li>
                )}

                {checkMatch("HOME") && (
                  <li> <Link className='home__section__link' to="/home"> HOME </Link> </li>
                )}

                {checkMatch("HTML") && (
                  <li> <Link className='home__section__link' to="/html"> HTML </Link> </li>
                )}

                {checkMatch("CSS") && (
                  <li> <Link className='home__section__link' to="/css"> CSS </Link> </li>
                )}

                {checkMatch("LINKS") && (
                  <li> <Link className='home__section__link' to="/links"> LINKS </Link> </li>
                )}

                {checkMatch("SHORTS") && (
                  <li> <Link className='home__section__link' to="/shorts"> SHORTS </Link> </li>
                )}

                {checkMatch("NPM") && (
                  <li> <Link className='home__section__link' to="/npm"> NPM </Link> </li>
                )}

                {checkMatch("GIT") && (
                  <li> <Link className='home__section__link' to="/git"> GIT </Link> </li>
                )}

                {checkMatch("DBJSON") && (
                  <li> <Link className='home__section__link' to="/dbjson"> dbJSON </Link> </li>
                )}

                {checkMatch("API") && (
                  <li> <Link className='home__section__link' to="/api"> API </Link> </li>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
export default Home;