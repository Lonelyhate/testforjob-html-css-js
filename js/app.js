const offerBtns = document.querySelectorAll('.offers-main__item');
const inner = document.querySelector('.inner');
const offersMain = document.querySelector('.offers-main');
const title = document.querySelector('.inner-top__title');
const offersInfo = document.querySelectorAll('.offers-main__info')

const offerTitles = [
    'Услуги по ремонту <br> <span class="stroke-text">в Москве и Московской области</span>',
    'Виды работ по ремонту <br> <span class="stroke-text">в Москве и Московской области</span>',
    'Дизайн интерьера <br> <span class="stroke-text">в Москве и Московской области</span>',
    'Ремонт помещений <br> <span class="stroke-text">в Москве и Московской области</span>'
];

offerBtns.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        inner.style.backgroundImage = `url('./img/offers/${index + 1}.jpg')`;
        offersMain.style.backgroundImage = '';
        title.innerHTML = offerTitles[index];
        document.body.classList.add('active');
        btn.children[1].classList.add('active')
    });

    btn.addEventListener('mouseleave', () => {
        inner.style.backgroundImage = '';
        offersMain.style.backgroundImage = "url('./img/offers-main/1.jpg')";
        title.innerHTML =
            'Ремонт <span class="stroke-text">и</span> дизайн <span class="stroke-text">в Москве и Московской области</span>';
        document.body.classList.remove('active');
        btn.children[1].classList.remove('active')
    });
});

//header

const leftMap = document.querySelector('.header__address')
const leftLink = document.querySelectorAll('.header__links')[0]
const rightLink = document.querySelectorAll('.header__links')[1]
const rightMap = document.querySelector('.header__call')
const menu = document.querySelector('.menu')
const headerContent = document.querySelector('.header__content')
let visable = false

leftLink.addEventListener('mouseenter', () => {
    menu.classList.add('menu_bottom')
    leftMap.classList.add('header__address_bottom')
    rightMap.classList.remove('call_top')
})
    
rightLink.addEventListener('mouseenter', () => {
    menu.classList.add('menu_top')
    rightMap.classList.add('call_top')
    leftMap.classList.remove('header__address_bottom')
})

headerContent.addEventListener('mouseleave', () => {
    menu.classList.remove('menu_bottom')
    menu.classList.remove('menu_top')
    leftMap.classList.remove('header__address_bottom')
    rightMap.classList.remove('call_top')
})

