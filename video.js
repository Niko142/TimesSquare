const header = document.querySelector('.york')
const butt = document.querySelector('.nav_button');
const logo = document.querySelector('.header_logo');
const content = document.querySelector('.about_content');
const prev = document.querySelector('button.prev');
const next = document.querySelector('button.next');
let counter = 0;
const offsetMax = 480;

const sliderData = [
    {title: 'Rockefeller Center', image: '/img_video/Roller_Scate.webp', description: `During the holiday season, Rockefeller Center is home to the city’s ginormous Christmas tree and the ice skating rink placed perfectly below it. We know most people go here to don their winter skates, which is acceptable by any means. But when it’s not in season, there’s also another option: indoor roller skating.`},
    {title: 'Brodway', image: '/img_video/Broadway.jpg', 
        description: `There really is only one city to experience the best live theatre and it’s New York. 
        When you’re visiting Times Square, you’re right within the theater mecca. 
        You can have your choice of a Broadway musical, such as “Hamilton” or an Off-Broadway show like “Little Shop of Horrors.”`},
    {title: 'Empire State Building', image: '/img_video/Empire_State.jpg', 
        description: `If you really want to see the city, you have to see it from the Empire State Building. 
        Head up to the 86th floor where there is an open-air observation deck that boasts 360-degree views of New York and more. 
        Some days, if the weather permits, you can also see the surrounding areas, including getting peeks of Jersey and Delaware.`},
    {title: 'Bryant Park', image: '/img_video/Bryant_park.webp', 
        description: `Bryan Park a massive strip of greenery located in the middle of 40th and 42nd Streets. 
        It’s a great spot to sit on the lawn to catch some sun or enjoy a cold beverage under an umbrella. 
        It’s also home to the summer movie night series where films are projected on a large screen for free!`},
]

//Делаем первоначальное окно неактивным
header.classList.toggle('active');

logo.addEventListener('click', () => window.location.reload());

butt.addEventListener('click', function(){
    header.classList.toggle('active');
})



//Выводим элементы слайдера
render(sliderData);

next.addEventListener('click', function() {
    counter += offsetMax;
    content.style.transform = `translateX(-${counter}px)`;
    console.log(counter)
})

prev.addEventListener('click', function() {
    counter -= offsetMax;
    if(counter > 0) {
        content.style.transform = `translateX(-${(counter)}px)`;
    }
    else {
        content.style.transform = `translateX(${(Math.abs(counter))}px)`;
    }
    console.log(counter)
})

function render(arr) {
    content.innerHTML = '';
    content.insertAdjacentHTML('afterbegin', arr.map((item, ind) => ViewSliderData(ind, item.image, item.title, item.description)).join(''));
}

function ViewSliderData(id, image, title, desc) {
    return `
        <div class='slider_component' data-id = ${id}>
            <img src = ${image} alt='Изображение'/>
            <h3>${title}</h3>
            <span>${desc}</span>
        </div>
    `
}