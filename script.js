const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const body = document.querySelector('body');

function changeToLight() {
    body.classList.remove('dark');
    body.classList.add('light');
}

function changeToDark() {
    body.classList.remove('light');
    body.classList.add('dark');
}