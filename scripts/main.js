const searchBtn_click = document.querySelector('.search-click');
const searchBtn_trigger = document.querySelector('.search-trigger');
const searchInput = document.querySelector('.search-box input');
const closeBtn = document.querySelector('.close-button');
const indicators = document.querySelectorAll('.carousel-indicators li');
const carousel_slides = document.querySelectorAll('.carousel-item');
const section_list_items = document.querySelector('.list-items');
const menu_bar = document.querySelector('.menu-bar');

let lastScrollTop = window.pageYOffset;
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    menu_bar.style.opacity = "0";
    if(window.pageYOffset >= 100) {
        menu_bar.classList.add('scroll');
        if (scrollTop > lastScrollTop){
            menu_bar.classList.remove('menu-bar-animation');
        } else {
            menu_bar.classList.add('menu-bar-animation');            
        }
    } else {
        menu_bar.classList.remove('scroll');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
 }, false);

searchBtn_click.addEventListener('click', () => {
    searchBtn_click.setAttribute('style', 'opacity: 0; visibility: hidden;');
    searchBtn_trigger.classList.add('magnify-animation');
    searchBtn_trigger.classList.add('magnify-active');
    searchInput.classList.add('expand');
    closeBtn.classList.add('close-button-animation');
});
closeBtn.addEventListener('click', () => {
    searchBtn_click.setAttribute('style', 'opacity: 1; visibility: visible;');
    searchBtn_trigger.classList.remove('magnify-animation');
    searchInput.classList.remove('expand');
    closeBtn.classList.remove('close-button-animation');
    searchInput.classList.add('shrink');
    searchInput.addEventListener('webkitAnimationEnd', () => {
        searchInput.classList.remove('shrink');
    });
});
let slide_interval = setInterval(() => {
    let cur_slide_pos = 0;
    let cur_slide = document.querySelector('.carousel-item.active');
    for(cur_slide_pos = 0; cur_slide = cur_slide.previousElementSibling; cur_slide_pos++){}
    if(cur_slide_pos < carousel_slides.length-1) {
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            indicators[i].classList.remove('active');
        }
        carousel_slides[cur_slide_pos].nextElementSibling.classList.add('active');
        indicators[cur_slide_pos].nextElementSibling.classList.add('active');
    } else {
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            indicators[i].classList.remove('active');
        }
        carousel_slides[0].classList.add('active');
        indicators[0].classList.add('active');
    }
}, 5000);
for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function() {
        clearInterval(slide_interval);
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');            
        }
        this.classList.add('active');
        let active_indicator = this;
        var cur_indicator = 0;
        for (cur_indicator = 0; active_indicator = active_indicator.previousElementSibling; cur_indicator++) {}
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            carousel_slides[cur_indicator].classList.add('active');
        }
    })
}