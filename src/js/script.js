'use strict';

const tabNum = document.querySelectorAll('.launch__item-num');
const tabTitle = document.querySelectorAll('.launch__item-title');
// console.log(tabTitle);
const tabDesc = document.querySelectorAll('.launch__item-desc');
// console.log(tabDesc);
const tabsParent = document.querySelector('.launch__wrapper');
// console.log(tabsParent);

function hideTabDesc() {
    tabDesc.forEach((item) => {
        item.style.display = 'none';
    })

    tabTitle.forEach((item) => {
        item.classList.remove('launch__item-title_active');
    });

    tabNum.forEach((item) => {
        item.classList.remove('launch__item-num_active');
    });
}

hideTabDesc();

function showDesc(i = 0) {
    tabDesc[i].style.display = 'block';
    tabTitle[i].classList.add('launch__item-title_active');
    tabNum[i].classList.add('launch__item-num_active');
}

showDesc();

tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('launch__item-title')) {
        tabTitle.forEach((item, i) => {
            if (target == item) {
                hideTabDesc();
                showDesc(i);
                console.log(target);
                console.log(item);
            }
        });
    }
});

//slider

const slides = document.querySelectorAll('.review__item');
let slideIndex = 0;

const prevBtn = document.querySelector('.review__slider-prev');
const nextBtn = document.querySelector('.review__slider-next');

console.log(slides);

function initSlider() {
    if (slides.length > 0) {
        slides.forEach((item) => {
            item.classList.add('review__item_hidden');
        });
        slides[slideIndex].classList.add('review__item_active');
        slides[slideIndex].classList.remove('review__item_hidden');
    }
}

initSlider();

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0
    } else if (index <= 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((item) => {
        item.classList.remove('review__item_active');
        item.classList.add('review__item_hidden');
    });
    slides[slideIndex].classList.add('review__item_active');
    slides[slideIndex].classList.remove('review__item_hidden');
}

function prev() {
    slideIndex--;
    showSlide(slideIndex);
}

function next() {
    slideIndex++;
    showSlide(slideIndex);
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);


const profitList = document.querySelector('.profit__list');
console.log(profitList);

const profitListItem = document.querySelectorAll('.profit__list li');
console.log(profitListItem);

function initProfit() {
    profitListItem.forEach(item => {
        item.style.borderBottom = 'none';
    });
    profitListItem[0].style.borderBottom = '2px solid #009387';
}

initProfit();

profitList.addEventListener('click', function (e) {
    let target = e.target.closest('li');
    if (target && target.getAttribute('data-name') == 'company') {
        profitListItem.forEach((item, i) => {
            if (target == item) {
                profitListItem.forEach(item => {
                    item.style.borderBottom = 'none';
                });
                profitListItem[i].style.borderBottom = '2px solid #009387';
            }

        });
    }
});

// profitListItem.forEach(item => {
//     console.log(item.getAttribute('data-name'));
// });


