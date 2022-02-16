"use strict"

const showNav = () => {
    const left__navbar__wrapper = document.querySelector('.left__navbar__wrapper');
    left__navbar__wrapper.style.display = 'block';
}

const leftAnchorNav = document.querySelectorAll('.left__navbar__list-lg__div');
for (let i = 0; i < leftAnchorNav.length; i++) {
    let anchor = leftAnchorNav[i].querySelectorAll('a');
    for (let j = 0; j < anchor.length; j++) {
        let span = anchor[j].querySelector('span');
        if (span.innerHTML.length > 18) {
            span.innerHTML = span.innerHTML.slice(0, 18) + '...';
        }
    }
}

const video__item__title = document.querySelectorAll('.video__title');
for (let i = 0; i < video__item__title.length; i++) {
    // console.log(video__item__title[i].innerHTML);
    if (video__item__title[i].innerHTML.length > 45) {
        video__item__title[i].innerHTML = video__item__title[i].innerHTML.slice(0, 45) + '...';
    }
}