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



