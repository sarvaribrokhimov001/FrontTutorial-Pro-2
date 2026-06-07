import { useState } from 'react';
import '../styles/Links.css';
import ThemeToggle from '../components/ThemeToggle';

const Links = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const linksList = [
    { name: "Google", url: "https://www.google.com" },
    { name: "DeveloperMozilla", url: "https://developer.mozilla.org" },
    { name: "W3Schools", url: "https://www.w3schools.com" },
    { name: "ReactOfficialDoc", url: "https://react.dev" },
    { name: "FlexboxFroggy", url: "https://flexboxfroggy.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "ChatGPT", url: "https://chatgpt.com/" },
    { name: "Heroicons", url: "https://heroicons.dev/" },
    { name: "RemixIcon", url: "https://remixicon.com/" },
    { name: "CSSGradient", url: "https://cssgradient.io/" },
    { name: "Figma", url: "https://www.figma.com/" },
    { name: "EmmetCheatSheet", url: "https://docs.emmet.io/cheat-sheet/" },
    { name: "Notion", url: "https://aboard-antimony-7dd.notion.site/Standard-Course-8b7210e955a141dbb749fe8f3c887781" },
    { name: "Coddy", url: "https://coddy.tech/journeys/javascript/fundamentals" },
    { name: "GoogleFontsHelper" , url: "https://gwfh.mranftl.com/fonts" },
    { name: "Axios" , url: "https://www.npmjs.com/package/axios" },
    { name: "Claude" , url: "https://claude.ai/new" },
    { name: "Concurrently" , url: "https://www.npmjs.com/package/concurrently" },
    { name: "ReactRedux" , url: "https://www.npmjs.com/package/react-redux?activeTab=versions" },
    { name: "Redux" , url: "https://www.npmjs.com/package/redux" },
    { name: "ReduxToolKit" , url: "https://redux-toolkit.js.org/" },
    { name: "TailwindCSS" , url: "https://tailwindcss.com/docs/installation/using-vite" },
    { name: "ReactRouter" , url: "https://reactrouter.com/" },
    { name: "ReactRouterDOM" , url: "https://www.npmjs.com/package/react-router-dom" },
    { name: "ReactHotToast" , url: "https://react-hot-toast.com/docs" },
    { name: "ToastifyJS" , url: "https://apvarun.github.io/toastify-js/" },
    { name: "ReactToastify" , url: "https://fkhadra.github.io/react-toastify/introduction/" },
    { name: "Mimo" , url: "https://mimo.org/" },
    { name: "OjIlmHub" , url: "https://oj.ilmhub.uz/problem" },
    { name: "ASCIITable" , url: "https://www.ascii-code.com/" },
    { name: "OnlineGDB" , url: "https://www.onlinegdb.com/login?next=%2Fmyfiles" },
    { name: "HTMLValidator" , url: "https://validator.w3.org/nu/#textarea" },
    { name: "BrowserDefaultStyles" , url: "https://browserdefaultstyles.com/" },
    { name: "NormalizeCSS" , url: "https://necolas.github.io/normalize.css/8.0.1/normalize.css" },
    { name: "AutoPrefixerCSS" , url: "https://autoprefixer.github.io/ru/" },
    { name: "MinifierCSS" , url: "https://www.toptal.com/developers/cssminifier" },
    { name: "FlexboxTricks" , url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    { name: "FlexCheatsheets" , url: "https://yoksel.github.io/flex-cheatsheet/" },
    { name: "Vercel" , url: "https://vercel.com/login?next=%2Fleader4" },
    { name: "MonkeyType" , url: "https://monkeytype.com/" },
    { name: "CSSTransform" , url: "https://css-transform.moro.es/" },
    { name: "DribbbleDesign", url: "https://dribbble.com/" },
    { name: "MobbinDesign", url: "https://mobbin.com/" },
    { name: "UIVerseDesign", url: "https://uiverse.io/" },
    { name: "CoolorsDesign", url: "https://coolors.co/" },
    { name: "HaikeiDesign", url: "https://haikei.app/" },
    { name: "UndrawIllustrations", url: "https://undraw.co/illustrations" },
    { name: "StorysetImages", url: "https://storyset.com/" },
    { name: "FontAwesome", url: "https://fontawesome.com/" },
    { name: "LucideIcons", url: "https://lucide.dev/" },
    { name: "Icons8", url: "https://icons8.com/" },
    { name: "UnsplashImages", url: "https://unsplash.com/" },
    { name: "PexelsImages", url: "https://www.pexels.com/" },
    { name: "Vite", url: "https://vitejs.dev/" },
    { name: "NextJS", url: "https://nextjs.org/" },
    { name: "MaterialUI", url: "https://mui.com/" },
    { name: "ChakraUI", url: "https://chakra-ui.com/" },
    { name: "ReactIcons", url: "https://react-icons.github.io/react-icons/" },
    { name: "FramerMotion", url: "https://www.framer.com/motion/" },
    { name: "TanstackQuery", url: "https://tanstack.com/query/latest" },
    { name: "Postman", url: "https://www.postman.com/" },
    { name: "Hoppscotch", url: "https://hoppscotch.io/" },
    { name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com/" },
    { name: "FakeStoreAPI", url: "https://fakestoreapi.com/" },
    { name: "OpenWeatherAPI", url: "https://openweathermap.org/api" },
    { name: "Render", url: "https://render.com/" },
    { name: "AnimateCSS", url: "https://animate.style/" },
    { name: "Glassmorphism", url: "https://glassmorphism.com/" },
    { name: "Neumorphism", url: "https://neumorphism.io/" },
    { name: "CubicBezier", url: "https://cubic-bezier.com/" },
    { name: "Animista", url: "https://animista.net/" },
    { name: "PerplexityAI", url: "https://www.perplexity.ai/" },
    { name: "BlackboxAI", url: "https://www.blackbox.ai/" },
    { name: "Regex101", url: "https://regex101.com/" },
    { name: "CanIUse", url: "https://caniuse.com/" },
    { name: "RoadmapDevelopers", url: "https://roadmap.sh/" },
    { name: "Netlify", url: "https://www.netlify.com/" },
    { name: "Railway", url: "https://railway.app/" },
    { name: "Cloudflare", url: "https://www.cloudflare.com/" },
  ];

  const filteredLinks = linksList.filter(link =>
    link.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='Links__title HTML__title'> Useful Links </h1>
      <div className="search__wrapper">
        <input 
         className='Links__input HTML__input' 
         type="search" 
         placeholder='Search the Link Name' 
         value={search} 
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className='All__links'>
        <ul>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link, index) => (
              <li key={index}>
                <a className="Links__link" href={link.url} target="_blank" rel="noopener noreferrer"> {link.name} </a>
              </li>
            ))) : (
            <li className='link__notfound tags__not__founded'> Link is not found ❌ </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Links;