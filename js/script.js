var newsObject = 
[
    {
        id: 1,
        type: "Статьи",
        title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
        date: new Date(2019, 3, 7),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/1.jpg"
    },
    {
        id: 2,
        type: "Новости",
        title: "Манга Dai Dark автора Dorohedoro наконец стартовал!",
        date: new Date(2018, 11, 14),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/2.jpg"
    },
    {
        id: 3,
        type: "Новости",
        title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
        date: new Date(2019, 3, 3),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/3.jpg"
    },
    {
        id: 4,
        type: "Новости",
        title: "Автор 'Акиры' спустя 38 лет выпускает ваншот к своей манге Kibun wa mo senso",
        date: new Date(2019, 3, 3),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/4.jpg"
    },
    {
        id: 5,
        type: "Новости",
        title: "Исаяма Хадзимэ показал финал манги 'Атаки титанов'",
        date: new Date(2018, 10, 19),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/5.jpg"
    },
    {
        id: 6,
        type: "Новости",
        title: "Исаяма Хадзимэ показал финал манги 'Атаки титанов'",
        date: new Date(2018, 10, 19),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/5.jpg"
    }
]

const newsBlock = document.querySelector('.newsBlock');
function formatDate(date) {
    var dd = newsObject[0].date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = newsObject[0].date.getMonth();
    if (mm < 10) mm = '0' + mm;

    var yy = newsObject[0].date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;  
    
    return dd + '.' + mm + '.' + yy;
}

var newBlock = '';
for(let i=0; i<newsObject.length; i++) {
    var newDate = newsObject[0].date;
    newBlock+= `<div><img src="${newsObject[i].img}" alt=""> <div class="shortInfo">
        <p class="newType">${newsObject[i].type}</p>
        <p class="newTitle">
            ${newsObject[i].title}
        </p>
        <div class="newDateAuthor">
            ${formatDate(newDate)} - by <a>${newsObject[i].author}</a>
        </div>
        <div>
            <ul class="shareIn">
                <li>Fb</li>
                <li>Vk</li>
                <li>Tw</li>
            </ul>
        </div>
    </div></div>`;
}
newsBlock.innerHTML = newBlock;
