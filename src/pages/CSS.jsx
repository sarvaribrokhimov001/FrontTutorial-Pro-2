import { useState } from 'react';
import '../styles/CSS.css';
import ThemeToggle from '../components/ThemeToggle';

const CSS = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const cssList = [
    "color - Matn rangini o‘zgartiradi.",
    "background - Orqa fonni belgilaydi (rang, rasm va boshqalar).",
    "background-color - Orqa fon rangini belgilaydi.",
    "background-image - Orqa fonga rasm qo‘yadi.",
    "background-size - Fon o‘lchamini belgilaydi.",
    "background-position - Fon joylashuvini belgilaydi.",
    "width - Element kengligi.",
    "height - Element balandligi.",
    "max-width - Maksimal kenglik.",
    "min-width - Minimal kenglik.",
    "margin - Tashqi bo‘shliq.",
    "padding - Ichki bo‘shliq.",
    "border - Chegara (qalinlik, turi, rang).",
    "border-radius - Burchaklarni yumaloqlaydi.",
    "box-shadow - So‘ya beradi.",
    "text-align - Matnni tekislaydi (left, center, right).",
    "font-size - Matn o‘lchami.",
    "font-weight - Matn qalinligi.",
    "font-family - Shrift turi.",
    "line-height - Qator balandligi.",
    "letter-spacing - Harflar orasidagi masofa.",
    "display - Element ko‘rinish turi (block, inline, flex).",
    "position - Joylashuv turi (static, relative, absolute, fixed).",
    "top - Yuqoridan masofa (position bilan ishlaydi).",
    "left - Chapdan masofa.",
    "right - O‘ngdan masofa.",
    "bottom - Pastdan masofa.",
    "overflow - Sig‘magan kontentni boshqaradi.",
    "z-index - Element ustma-ust joylashuv tartibi.",
    "opacity - Shaffoflik darajasi.",
    "cursor - Sichqoncha ko‘rinishini o‘zgartiradi.",
    "transition - O‘tish animatsiyasi.",
    "transform - Elementni aylantirish, kattalashtirish.",
    "animation - Animatsiya berish.",
    "flex - Flex element o‘lchami.",
    "flex-direction - Flex yo‘nalishi.",
    "justify-content - Flex ichidagi elementlarni gorizontal tekislash.",
    "align-items - Flex ichidagi elementlarni vertikal tekislash.",
    "gap - Elementlar orasidagi masofa.",
    "grid-template-columns - Grid ustunlarini belgilaydi.",
    "grid-template-rows - Grid qatorlarini belgilaydi.",
    "object-fit - Rasm joylashuvini boshqaradi.",
    "list-style - Ro‘yxat belgisi turi.",
    "visibility - Element ko‘rinishini boshqaradi.",
    "white-space - Matnning qatorga tushishini boshqaradi.",
    "background-repeat - Fon rasmi qaytarilish holatini boshqaradi.",
    "background-attachment - Fon scroll bilan harakatlanishini boshqaradi.",
    "border-top - Yuqori chegara.",
    "border-bottom - Pastki chegara.",
    "border-left - Chap chegara.",
    "border-right - O‘ng chegara.",
    "border-collapse - Jadval borderlarini birlashtiradi.",
    "outline - Tashqi chiziq beradi.",
    "outline-offset - Outline bilan element orasidagi masofa.",
    "box-sizing - Width va height hisoblash usulini belgilaydi.",
    "resize - Element o‘lchamini o‘zgartirish imkonini beradi.",
    "filter - Blur, brightness va boshqa effektlar beradi.",
    "backdrop-filter - Element orqasidagi fonni filter qiladi.",
    "clip-path - Elementning ko‘rinadigan qismini kesadi.",
    "aspect-ratio - Element nisbatini saqlaydi.",
    "scroll-behavior - Scroll harakatini silliq qiladi.",
    "scroll-snap-type - Scroll snapping holatini belgilaydi.",
    "user-select - Matnni belgilash imkonini boshqaradi.",
    "pointer-events - Sichqoncha eventlarini boshqaradi.",
    "caret-color - Input cursor rangini o‘zgartiradi.",
    "accent-color - Checkbox va radio rangini o‘zgartiradi.",
    "appearance - Browser default style ni boshqaradi.",
    "content - Pseudo element ichiga kontent qo‘shadi.",
    "quotes - Quote belgilarini boshqaradi.",
    "table-layout - Jadval ustun o‘lchamlarini boshqaradi.",
    "caption-side - Jadval caption joylashuvini belgilaydi.",
    "empty-cells - Bo‘sh katak ko‘rinishini boshqaradi.",
    "vertical-align - Inline yoki table elementlarni vertikal tekislaydi.",
    "word-spacing - So‘zlar orasidagi masofa.",
    "word-break - Uzun so‘zlarni bo‘lish usuli.",
    "word-wrap - Matnni qatorga tushirishni boshqaradi.",
    "text-transform - Matnni uppercase/lowercase qiladi.",
    "text-decoration - Matnga underline, line-through beradi.",
    "text-shadow - Matnga soya beradi.",
    "text-overflow - Sig‘magan matnni ellipsis (...) qiladi.",
    "direction - Matn yo‘nalishini belgilaydi.",
    "writing-mode - Matn yozilish yo‘nalishini o‘zgartiradi.",
    "columns - Multi-column layout yaratadi.",
    "column-gap - Column orasidagi masofa.",
    "column-rule - Column orasidagi chiziq.",
    "float - Elementni chap yoki o‘ngga suradi.",
    "clear - Float ta’sirini tozalaydi.",
    "isolation - Element stacking context yaratadi.",
    "mix-blend-mode - Element ranglarini aralashtiradi.",
    "perspective - 3D ko‘rinish chuqurligi beradi.",
    "perspective-origin - Perspective boshlanish nuqtasi.",
    "transform-origin - Transform markazini belgilaydi.",
    "transition-delay - Transition kechikishi.",
    "transition-duration - Transition davomiyligi.",
    "transition-property - Transition qilinadigan property.",
    "transition-timing-function - Transition tezligi usuli.",
    "animation-name - Animation nomi.",
    "animation-duration - Animation davomiyligi.",
    "animation-delay - Animation kechikishi.",
    "animation-iteration-count - Animation necha marta ishlashi.",
    "animation-direction - Animation yo‘nalishi.",
    "animation-fill-mode - Animation tugagandan keyingi holat.",
    "animation-play-state - Animation pause/play holati.",
    "flex-wrap - Flex elementlarni qatorga tushiradi.",
    "flex-grow - Flex element kengayish darajasi.",
    "flex-shrink - Flex qisqarish darajasi.",
    "align-self - Bitta flex elementni alohida tekislaydi.",
    "order - Flex element tartibini o‘zgartiradi.",
    "place-items - Grid itemlarni tekislaydi.",
    "place-content - Grid content joylashuvini boshqaradi.",
    "grid-column - Grid ustun joylashuvi.",
    "grid-row - Grid qator joylashuvi.",
    "grid-area - Grid area nomi yoki joylashuvi.",
    "grid-auto-flow - Grid avtomatik joylashuv yo‘nalishi.",
    "grid-gap - Grid elementlar orasidagi masofa.",
    "place-self - Grid elementni individual joylashtiradi.",
    "inset - Top/right/bottom/left qisqartmasi.",
    "overflow-x - Gorizontal overflow boshqaruvi.",
    "overflow-y - Vertikal overflow boshqaruvi.",
    "scrollbar-width - Scrollbar qalinligini boshqaradi.",
    "scroll-margin - Scroll offset beradi.",
    "scroll-padding - Scroll ichki offset beradi.",
    "mask-image - Elementga mask qo‘llaydi.",
    "mask-size - Mask o‘lchamini boshqaradi.",
    "will-change - Browserga qaysi property o‘zgarishini oldindan bildiradi."
  ];

  const filteredCSS = cssList.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='CSS__title HTML__title'> CSS Properties </h1>
      <div className="search__wrapper">
        <input 
         className='CSS__input HTML__input' 
         type="search" 
         placeholder='Write the CSS Property' 
         value={search} 
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className='CSS__properties HTML__tags'>
        {filteredCSS.length > 0 ? (
          filteredCSS.map((item, index) => (
            <p key={index} className='property tags'> {item} </p>
          ))) : (
          <p className='property tags__not__founded'> Property is not found ❌</p>
        )}
      </div>
    </div>
  );
}
export default CSS;