import { useState } from 'react';
import '../styles/HTML.css';
import ThemeToggle from "../components/ThemeToggle";

const HTML = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const tagsList = [
    "<html> - Butun HTML hujjatni o‘rab turadi. Har bir web sahifa aynan shu teg bilan boshlanadi.",
    "<head> - Meta ma’lumotlar joylashadi. SEO, title, css, script shu yerda yoziladi.",
    "<title> - Brauzer tab qismida ko‘rinadigan sahifa nomi.",
    "<body> - Foydalanuvchiga ko‘rinadigan barcha kontent joylashadi.",
    "<header> - Sahifa yoki bo‘limning yuqori qismi. Odatda logo va navigatsiya joylashadi.",
    "<nav> - Navigatsiya menyu uchun ishlatiladi. SEO uchun muhim semantik teg.",
    "<main> - Sahifaning asosiy kontenti joylashadigan qism. Bir sahifada bitta bo‘lishi kerak.",
    "<section> - Mantiqiy bo‘lim ajratish uchun ishlatiladi.",
    "<article> - Mustaqil kontent (blog post, yangilik, maqola).",
    "<aside> - Yon panel yoki qo‘shimcha ma’lumotlar uchun.",
    "<footer> - Sahifaning pastki qismi. Copyright va qo‘shimcha linklar.",
    "<h1> - <h6> - Sarlavha teglar. <h1> eng muhim va SEO uchun juda ahamiyatli.",
    "<p> - Paragraf yozish uchun ishlatiladi. Matnlarni blok shaklida ajratadi.",
    "<br> - Yangi qatordan boshlash uchun. O‘zini yopuvchi (self-closing) teg. Ya'ni toq teg hisoblanadi.",
    "<hr> - Gorizontal chiziq chizadi va matnlarni ajratadi.",
    "<strong> - Matnni muhim deb belgilaydi (semantik bold).",
    "<b> - Matnni qalin qiladi, lekin semantik ma’noga ega emas.",
    "<em> - Matnga urg‘u beradi (semantik italic).",
    "<i> - Matnni italic qiladi, lekin semantik emas.",
    "<mark> - Matnni belgilaydi (highlight). Belgilangan matn sariq rangda bo'ladi.",
    "<small> - Kichik o‘lchamdagi matn.",
    "<del> - O‘chirilgan matn sifatida ko‘rsatadi.",
    "<ins> - Qo‘shilgan matnni bildiradi.",
    "<sub> - Pastki indeks (H₂O).",
    "<sup> - Yuqori indeks (x²).",
    "<blockquote> - Uzun iqtiboslar uchun ishlatiladi.",
    "<q> - Qisqa iqtibos.",
    "<abbr> - Qisqartma. title atributi bilan to‘liq nomi chiqadi.",
    "<code> - Kod shaklida yozish uchun ishlatiladi.",
    "<pre> - Formatni saqlab qoladi (bo‘sh joy va qatorlar buzilmaydi).",
    "<ul> - Tartibsiz ro‘yxat (nuqtali).",
    "<ol> - Tartibli ro‘yxat (raqamli).",
    "<li> - Ro‘yxat elementi.",
    "<dl> - Ta’rif ro‘yxati.",
    "<dt> - Atama.",
    "<dd> - Atamaning ta’rifi.",
    "<a> - Giperhavola (link) yaratadi. href atributi bilan ishlaydi.",
    "<img> - Rasm qo‘shish uchun. src va alt atributlari bilan ishlatiladi.",
    "<audio> - Audio fayl qo‘shadi.",
    "<video> - Video fayl qo‘shadi.",
    "<source> - Media manbasi ko‘rsatadi.",
    "<iframe> - Boshqa web sahifani joylash imkonini beradi. Misol uchun you tube platformasidan video olib kelib ishlatish uchun ishlatsa bo'ladi.",
    "<table> - Jadval yaratish uchun konteyner.",
    "<tr> - Jadval qatori.",
    "<td> - Oddiy katak.",
    "<th> - Sarlavha katak.",
    "<thead> - Jadval boshi.",
    "<tbody> - Jadval asosiy qismi.",
    "<tfoot> - Jadval pastki qismi.",
    "<caption> - Jadval nomi.",
    "<form> - Foydalanuvchi ma’lumot yuborishi uchun forma.",
    "<input> - Kiritish maydoni (text, password, email, number va boshqalar).",
    "<textarea> - Ko‘p qatorli matn maydoni.",
    "<button> - Tugma.",
    "<select> - Tanlash menyusi.",
    "<option> - Tanlash varianti.",
    "<label> - Input bilan bog‘lanadi.",
    "<fieldset> - Form elementlarini guruhlaydi.",
    "<legend> - Fieldset sarlavhasi.",
    "<div> - Eng ko‘p ishlatiladigan block container.",
    "<span> - Inline container. Bitta teg ichida yozilgan matnlarga alohida style berish imkonini beradi.",
    "<script> - JavaScript kod yozish yoki HTML sahifaga ulash.",
    "<style> - CSS yozish uchun ishlatiladigan teg.",
    "<link> - Tashqi CSS fayl ulash. Ushbu teg orqali boshqa fayllar ham ulash mumkin.",
    "<meta> - Kodirovka, viewport va SEO ma’lumotlari.",
    "<figure> - Rasm, diagramma yoki kod blokini alohida blok sifatida joylashtirish uchun ishlatiladi.",
    "<figcaption> - <figure> ichidagi elementga izoh (caption) yozish uchun.",
    "<details> - Yashirilgan kontent ochib-yopiladigan blok yaratadi.",
    "<summary> - <details> tegi uchun sarlavha vazifasini bajaradi.",
    "<time> - Sana va vaqtni semantik ko‘rsatish uchun ishlatiladi. SEO va accessibility uchun foydali.",
    "<progress> - Jarayon (progress bar) ko‘rsatish uchun.",
    "<meter> - O‘lchov yoki darajani ko‘rsatish uchun (masalan, 70%).",
    "<address> - Muallif yoki tashkilot kontakt ma’lumotlarini ko‘rsatadi.",
    "<noscript> - JavaScript ishlamasa ko‘rinadigan matn.",
    "<output> - Hisob-kitob natijasini ko‘rsatish uchun ishlatiladi (form bilan ishlaydi).",
    "<canvas> - JavaScript yordamida grafika, animatsiya va o‘yinlar yaratish uchun ishlatiladi.",
    "<svg> - Vektor grafikalar yaratish uchun ishlatiladi. Sifat yo‘qolmasdan kattalashadi.",
    "<map> - Rasm ichida clickable hududlar yaratish uchun ishlatiladi.",
    "<area> - <map> ichidagi bosiladigan hududlarni belgilaydi.",
    "<track> - Video yoki audio uchun subtitle va caption qo‘shadi.",
    "<embed> - Tashqi fayl yoki plugin joylashtirish uchun ishlatiladi.",
    "<object> - PDF, media yoki boshqa tashqi resurslarni joylashtirish uchun.",
    "<param> - <object> uchun parametr beradi.",
    "<picture> - Responsive rasm yuklash uchun ishlatiladi.",
    "<portal> - Boshqa sahifani oldindan yuklash va embed qilish uchun eksperimental teg.",
    "<template> - HTML shablon yaratadi. Sahifada ko‘rinmaydi, JS orqali ishlatiladi.",
    "<slot> - Web Component ichida content joylashtirish uchun ishlatiladi.",
    "<dialog> - Modal yoki popup oynalar yaratish uchun semantik teg.",
    "<data> - Matnni mashina o‘qiy oladigan qiymat bilan bog‘laydi.",
    "<datalist> - Input uchun autocomplete variantlar ro‘yxati beradi.",
    "<optgroup> - <select> ichidagi optionlarni guruhlaydi.",
    "<col> - Jadval ustunlari uchun style yoki xususiyat beradi.",
    "<colgroup> - Bir nechta <col> teglarini guruhlaydi.",
    "<cite> - Kitob, maqola yoki manba nomini ko‘rsatadi.",
    "<kbd> - Klaviatura tugmalarini ko‘rsatish uchun ishlatiladi.",
    "<samp> - Dastur natijasini ko‘rsatish uchun ishlatiladi.",
    "<var> - O‘zgaruvchi nomini ko‘rsatadi.",
    "<ruby> - Sharq tillari uchun talaffuz annotatsiyasi qo‘shadi.",
    "<rt> - <ruby> ichidagi talaffuz matni.",
    "<rp> - Ruby text qo‘llab-quvvatlanmaganda ko‘rinadigan qavs.",
    "<bdi> - Matn yo‘nalishini izolyatsiya qiladi.",
    "<bdo> - Matn yozilish yo‘nalishini o‘zgartiradi.",
    "<wbr> - So‘z qayerda bo‘linishi mumkinligini ko‘rsatadi.",
    "<s> - Endi amal qilmaydigan matnni ko‘rsatadi.",
    "<u> - Matn ostiga chiziq chizadi.",
    "<menu> - Buyruqlar yoki menyular ro‘yxatini yaratadi.",
    "<menuitem> - Menu ichidagi item uchun ishlatilgan eski teg.",
    "<portal> - Boshqa web sahifaga seamless o‘tish imkonini beradi.",
    "<base> - Sahifadagi barcha relative URL lar uchun asosiy URL belgilaydi.",
    "<portal> - Eksperimental navigatsiya konteyneri.",
    "<search> - Qidiruv bo‘limini semantik ifodalash uchun ishlatiladigan yangi teg.",
    "<summary> - Details blokining ko‘rinadigan sarlavhasi.",
    "<dialog open> - Ochilgan modal oynani bildiradi.",
    "<input type='color'> - Rang tanlash inputi.",
    "<input type='date'> - Sana tanlash inputi.",
    "<input type='file'> - Fayl yuklash inputi.",
    "<input type='range'> - Slider input.",
    "<input type='radio'> - Bitta variant tanlash uchun.",
    "<input type='checkbox'> - Bir nechta variant tanlash uchun.",
    "<input type='tel'> - Telefon raqam inputi.",
    "<input type='url'> - URL kiritish uchun input.",
    "<input type='search'> - Search input maydoni.",
    "<marquee> - Harakatlanuvchi matn yaratadi (deprecated).",
    "<center> - Elementni markazga joylashtiradi (deprecated).",
    "<font> - Matn shriftini o‘zgartirish uchun ishlatilgan eski teg (deprecated)."
  ];

  const filteredTags = tagsList.filter(tag =>
    tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='HTML__title'> HTML Tags </h1>
      <div className="search__wrapper">
        <input
         className='HTML__input'
         type="search"
         placeholder='Write the Tag Name'
         value={search}
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className='HTML__tags'>
        {filteredTags.length > 0 ? (
          filteredTags.map((tag, index) => (
            <p key={index} className='tags'> {tag} </p>
          ))) : (
          <p className='tags__not__founded'> Tag is not found ❌ </p>
        )}
      </div>
    </div>
  )
}
export default HTML;