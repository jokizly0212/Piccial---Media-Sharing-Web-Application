const searchBtn_click = document.querySelector('.search-click');
const searchBtn_trigger = document.querySelector('.search-trigger');
const searchInput = document.querySelector('.search-box input');
const closeBtn = document.querySelector('.close-button');

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
    })
})