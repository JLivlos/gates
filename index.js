window.addEventListener("scroll", function (e) {    
    if (window.pageYOffset != 0) {
        document.querySelector('.header').classList.add('header_scrolled');
    } else {
        document.querySelector('.header').classList.remove('header_scrolled');
    };  
})

//BURGER
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__menu__ul');
const overlay = document.querySelector('.overlay');
const burgerItems = Array.from(document.querySelectorAll('.header__menu__item'));

burgerIcon.addEventListener('click', (e) => {
    if (!burgerMenu.classList.contains('header__menu__ul_active')) {
        openBurgermenu();
    } else {
        closeBurgerMenu();
    };
});

overlay.addEventListener('click', closeBurgerMenu);

burgerMenu.addEventListener('click', (e) => {
if (!e.target.classList.contains('header__menu__ul__li_active')) closeBurgerMenu();
});

//GATES

const secGatesBtn = document.querySelector('.gates__variants__item__btn__sec-gates');
const secGatesInfo = document.querySelector('.gates__variants__sec-gates__info');
const swingGatesBtn = document.querySelector('.gates__variants__item__btn__swing-gates');
const swingGatesInfo = document.querySelector('.gates__variants__swing-gates__info');
const slidingGatesBtn = document.querySelector('.gates__variants__item__btn__sliding-gates');
const slidingGatesInfo = document.querySelector('.gates__variants__sliding-gates__info');
const rollBtn = document.querySelector('.gates__variants__item__btn__roll');
const rollInfo = document.querySelector('.gates__variants__roll__info');
const gatesImg = document. querySelector('.gates__right__img');
const gatesBlock = document.querySelector('.gates__variants');
const gates =Array.from(document.querySelectorAll('.gates__variants__item'));

gatesBlock.addEventListener('click', (e) => {
    if (!e.target.classList.contains('gates__variants__item__btn')
    && !e.target.classList.contains('gates__variants__item')) return;
     
    let item;   
    if (e.target.classList.contains('gates__variants__item__btn')) {        
        if (e.target.classList.contains('gates__variants__item__btn__sec-gates')) item = document.querySelector('.gates__variants__sec-gates');
        if (e.target.classList.contains('gates__variants__item__btn__swing-gates')) item = document.querySelector('.gates__variants__swing-gates');
        if (e.target.classList.contains('gates__variants__item__btn__sliding-gates')) item = document.querySelector('.gates__variants__sliding-gates');
        if (e.target.classList.contains('gates__variants__item__btn__roll')) item = document.querySelector('.gates__variants__roll');
    } else if (e.target.classList.contains('gates__variants__item')) {
        item=e.target;         
    };
        if (item.classList.contains('gates__variants__item_active')) {
            item.classList.remove('gates__variants__item_active');
            if (item.classList.contains('gates__variants__sec-gates')) closeGates(secGatesBtn, secGatesInfo);
            if (item.classList.contains('gates__variants__swing-gates')) closeGates(swingGatesBtn, swingGatesInfo);
            if (item.classList.contains('gates__variants__sliding-gates')) closeGates(slidingGatesBtn, slidingGatesInfo);
            if (item.classList.contains('gates__variants__roll')) closeGates(rollBtn, rollInfo);
            setDefaultImg();
        } else {
            gates.forEach(gate => {               
            gate.classList.remove('gates__variants__item_active');            
        });
        closeGates(secGatesBtn, secGatesInfo);
        closeGates(swingGatesBtn, swingGatesInfo);
        closeGates(slidingGatesBtn, slidingGatesInfo);
        closeGates(rollBtn, rollInfo);
        setSectionImg();
        item.classList.add('gates__variants__item_active');        
        if (item.classList.contains('gates__variants__sec-gates')) {
            openGates(secGatesBtn, secGatesInfo);
            setSectionImg()
        };
        if (item.classList.contains('gates__variants__swing-gates')) {
            openGates(swingGatesBtn, swingGatesInfo);
            setSwingImg();
        };
        if (item.classList.contains('gates__variants__sliding-gates')) {
            openGates(slidingGatesBtn, slidingGatesInfo);
            setSlidingImg();
        };
        if (item.classList.contains('gates__variants__roll')) {
            openGates(rollBtn, rollInfo);
            setRollImg();
        };   
    };
});


//CONTACTS, SOCIAL MEDIA
document.querySelector('.header').addEventListener('click', () => {    
    scrollUp();        
});

document.querySelector('.header__phone__icon'). addEventListener('click', () => {
    window.open('tel:+375295997769', '_self');
});

document.querySelector('.contacts__phone'). addEventListener('click', () => {
    window.open('tel:+375295997769', '_self');
});

document.querySelector('.footer__instagram'). addEventListener('click', () => {
    window.open('https://www.instagram.com/', '_blank');
});
document.querySelector('.footer__vk'). addEventListener('click', () => {
    window.open('https://www.vk.com/', '_blank');
});
document.querySelector('.footer__odnokl'). addEventListener('click', () => {
    window.open('https://www.ok.ru/', '_blank');
});
document.querySelector('.footer__facebook'). addEventListener('click', () => {
    window.open('https://www.facebook.com/', '_blank');
});
document.querySelector('.footer__tiktok'). addEventListener('click', () => {
    window.open('https://www.tiktok.com/', '_blank');
});

//FUNCTIONS

function openBurgermenu() {
    burgerMenu.classList.add('header__menu__ul_active');
        burgerIcon.classList.add('burger_close');
        overlay.classList.add('overlay_active');
        document.body.classList.add('body_no-scroll');
};

function closeBurgerMenu() {
    burgerMenu.classList.remove('header__menu__ul_active');
    burgerIcon.classList.remove('burger_close');
    overlay.classList.remove('overlay_active');
    document.body.classList.remove('body_no-scroll');
};

function openGates(btn, info) {
    btn.classList.add('gates__variants__item__btn_active');    
    info.classList.add('gates__variants__info_active');
};

function closeGates(btn, info) {
    btn.classList.remove('gates__variants__item__btn_active');
    info.classList.remove('gates__variants__info_active');
};

//SET IMGs

function setSectionImg() {
    gatesImg.classList.add('gates__right__img_section');
    gatesImg.classList.remove('gates__right__img_swing');
    gatesImg.classList.remove('gates__right__img_sliding');
    gatesImg.classList.remove('gates__right__img_roll');
};

function setSwingImg() {
    gatesImg.classList.add('gates__right__img_swing');
    gatesImg.classList.remove('gates__right__img_section');
    gatesImg.classList.remove('gates__right__img_sliding');
    gatesImg.classList.remove('gates__right__img_roll');
};

function setSlidingImg() {
    gatesImg.classList.add('gates__right__img_sliding');
    gatesImg.classList.remove('gates__right__img_section');
    gatesImg.classList.remove('gates__right__img_swing');
    gatesImg.classList.remove('gates__right__img_roll');
};

function setRollImg() {
    gatesImg.classList.add('gates__right__img_roll');
    gatesImg.classList.remove('gates__right__img_section');
    gatesImg.classList.remove('gates__right__img_swing');
    gatesImg.classList.remove('gates__right__img_sliding');
};

function setDefaultImg() {
    gatesImg.classList.remove('gates__right__img_roll');
    gatesImg.classList.remove('gates__right__img_section');
    gatesImg.classList.remove('gates__right__img_swing');
    gatesImg.classList.remove('gates__right__img_sliding');
};

function scrollUp() {
    document.querySelector('.header').addEventListener('click', (e) => {                
    if (e.target.classList.contains('header__phone__icon')||
        e.target.classList.contains('header__phone__text')||
        e.target.classList.contains('header__menu__ul')||
        e.target.classList.contains('burger')||
        e.target.classList.contains('header__menu__link')||
        burgerMenu.classList.contains('header__menu__ul_active'))
        {
            return;
        }    
        window.scrollTo(0, 0);    
     });
};

//SLIDER
const prev = document.querySelector('.gallery__slider__left');
const next = document.querySelector('.gallery__slider__right');
const items = document.querySelector('.gallery__items');
const slider = document.querySelector('.gallery__items__visible');
let counter = 1;
let offset = 0;

prev.addEventListener('click', () => {
    if (counter == 1) {
        counter = window. innerWidth <= 550 ? 21 : 3;        
        offset = slider.offsetWidth * (counter - 1);                 
    } else {
        counter = --counter;  
        offset = offset - slider.offsetWidth;              
    }; 
    items.style.left = `-${offset}px`;
});

next.addEventListener('click', () => {
    if (counter == 3 && window. innerWidth > 550 || counter == 21 ) {
        counter = 1;
        offset = 0;         
        items.style.left = `-${offset}`;                    
    } else {
        counter = ++counter;
        offset = offset + slider.offsetWidth;       
        items.style.left = `-${offset}px`;    
    };     
});