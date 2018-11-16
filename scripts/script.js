const get_started_button = document.querySelector('.get-start-button');
const logo = document.querySelector('.logo');
const form = document.querySelector('form');

get_started_button.addEventListener('click', () => {
    console.log('yes');
    get_started_button.classList.add('slide-down-button');
    logo.classList.add('logo-zoom-out');
    form.classList.add('slide-up-form');
});




