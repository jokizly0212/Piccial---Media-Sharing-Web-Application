const get_started_button = document.querySelector('.get-start-button');
const logo = document.querySelector('.logo');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

get_started_button.addEventListener('click', () => {
    get_started_button.classList.add('slide-down-button');
    logo.classList.add('logo-zoom-out');
    form.classList.add('slide-up-form');
});
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
})




