const sideNav = document.getElementById('sideNav');
const openSideNav = () => sideNav.style.display = 'block';
const closeSideNav = () => sideNav.style.display = 'none';

// Navbar Behaviour On Scroll Start
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.top = scrollTop > lastScrollTop ? "-50px" : "0"
    lastScrollTop = scrollTop;
})

// Header Image Control
const headerImgParallax = (e) => {
    document.querySelectorAll('.header__img').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
document.addEventListener("mousemove", headerImgParallax)

// Full Page Image OverLay
const fullPageImg = document.querySelector('.full__page--img');
const showImage = (elm) => {
    fullPageImg.style.display = 'block';
    const fullPageImgDivImg = fullPageImg.querySelector('img')
    fullPageImgDivImg.src = elm.src
}
const hideFullPageImg = () => fullPageImg.style.display = 'none';


// Education List
let EducationLi = education.map(edu => {
    return `<li data-aos="zoom-in-down">
        <h3>${edu.degree}</h3>
        <h4>${edu.session}</h4>
        <p>${edu.text}</p>
    </li>`
})
document.querySelector('.edu__list--card').innerHTML = EducationLi;


// Project List
let projectLi = projects.map(project => {
    return `<li class="project__section--li">
        <div class="project__section--image">
            <img
                src=${`assets/images/`+project.image}
                data-aos="flip-left"
                onclick="showImage(this)"
            >
        </div>
        <div class="project__section--text" data-aos="slide-up">
            <h3>${project.name}</h3>
            
            <p class="project__section--tags">${
                project.tags.map(tag => `<span> ${tag}</span>` )
            }</p>
            
            <p>${project.text}</p>

            <div class="project__section--btns">
                <a href="${project.gitUrl}" target="_blank"><i class="bi bi-github"></i></a>
                <a href="${project.projectUrl}" target="_blank"><i class="bi bi-arrow-up-right-square-fill"></i></a>
            </div>
        </div>
    </li>`
})
document.querySelector('#project__section__ul').innerHTML = projectLi;

// Project Gallery
let projectGal = projectGallery.map(project => {
    return `<div class="${project.gradient} project__rotate__card">
        <div class="project__card">
            <img src=${`assets/images/`+project.image} alt="" onclick="showImage(this)">
            <h3>${project.name}</h3>
            <p class="project__section--tags">${
                project.tags.map(tag => `<span> ${tag}</span>` )
            }</p>
            <div class="project__section--btns">
                <a href="${project.gitUrl}" target="_blank"><i class="bi bi-github"></i></a>
                <a href="${project.projectUrl}" target="_blank"><i class="bi bi-arrow-up-right-square-fill"></i></a>
            </div>
        </div>
    </div>`
}).join('')
document.querySelector('#projectGallery').innerHTML += projectGal;

let projectLinkOnly = projectLink.map(project => {
    return `<a href="${project.url}" target="_blank" class="project__link">
        ${project.txt}
    </a>`
})
document.querySelector('#projectLinks').innerHTML += projectLinkOnly;