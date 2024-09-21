window.addEventListener("scroll", function (e) {    
    if (window.pageYOffset != 0) {
        document.querySelector('.header').classList.add('header_scrolled');
    } else {
        document.querySelector('.header').classList.remove('header_scrolled');
    };  
})

const orderBtn = document.querySelector('.order-btn');
const orderSection = document.getElementById('order');
orderBtn.addEventListener('click', (e) => {
    orderSection.scrollIntoView();
});

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
        } else {
            gates.forEach(gate => {               
            gate.classList.remove('gates__variants__item_active');            
        });
        closeGates(secGatesBtn, secGatesInfo);
        closeGates(swingGatesBtn, swingGatesInfo);
        closeGates(slidingGatesBtn, slidingGatesInfo);
        closeGates(rollBtn, rollInfo);        
        item.classList.add('gates__variants__item_active');        
        if (item.classList.contains('gates__variants__sec-gates')) {
            openGates(secGatesBtn, secGatesInfo);            
        };
        if (item.classList.contains('gates__variants__swing-gates')) {
            openGates(swingGatesBtn, swingGatesInfo);            
        };
        if (item.classList.contains('gates__variants__sliding-gates')) {
            openGates(slidingGatesBtn, slidingGatesInfo);            
        };
        if (item.classList.contains('gates__variants__roll')) {
            openGates(rollBtn, rollInfo);            
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

//SELECT
const select = document.querySelector('.order__form-options');
const orderText = document.querySelector('.order__form-message');
let selectedOption = {'message': '0', 'type': 'Секционные ворота'}

select.onchange = function getSelectedValue(e) {
    setOrderTemplates(e.target.value);
}

async function setOrderTemplates(i) {
    const templates = 'templates.json';
    const res = await fetch(templates);
    const data = await res.json();    

    orderText.value = data[i].text;
    selectedOption.message = data[i].text;
    selectedOption.type = data[i].type;
}
setOrderTemplates(0);

//FORM

const myForm = document.querySelector('.order__form');
const orderRes = document.querySelector('.order__result');

myForm.addEventListener('submit', function (event) {    
    event.preventDefault();     
    const formData = new FormData(myForm);
    formData.set('type', selectedOption.type);
    if (orderText.value == selectedOption.message) {        
        formData.set('message', '');     }


  fetch('https://ppst.by/bot/gates_gate_2e35df893c1969b02c709fde06ea42db.php', {
    method: 'POST',    
    body: formData,
  })    
    .then((response) => {               
      return response.json();  
    }).then(function(data) {        
        if (data.status == 'success') {
        document.querySelector('.send-btn').style.display = 'none';
        document.querySelector('.recaptcha').style.display = 'none';
        orderRes.style.display = 'block';
        orderRes.innerHTML = data.message;
      } else if (data.status == 'error') {
        if (grecaptcha) {
            grecaptcha.reset();
          };
          orderRes.style.display = 'block';
          orderRes.innerHTML = data.message;
          orderRes.style.color = 'red';
      };     
    })
    .catch((error) => {      
      console.error(error);
      if (grecaptcha) {
        grecaptcha.reset();
      };
      orderRes.style.display = 'block';    
      orderRes.innerHTML = 'Что-то пошло не так, попробуйте позже.'
      orderRes.style.color = 'red';
    });
  });

//PHONE VALIDATION

const phoneInput = document.querySelector('.order__form-phone');
phoneInput.oninput = (e) => {  
    const cursorPosition = phoneInput.selectionStart - 1;
    const hasInvalidCharacters = phoneInput.value.match(/[^0-9+ ()-]/);
  
    if (!hasInvalidCharacters) return;
    
    // Replace all non-digits:
    phoneInput.value = phoneInput.value.replace(/[^0-9+ ()-]/g, '');
    
    // Keep cursor position:
    phoneInput.setSelectionRange(cursorPosition, cursorPosition);
  };