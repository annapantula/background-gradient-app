const cssEl = document.querySelector('.css');
const color1El = document.querySelector('#color1');
const color2El = document.querySelector('#color2');
const bodyEl = document.querySelector('#gradient');

cssEl.textContent = bodyEl.style.background;

function setGradient() {
    bodyEl.style.background = `linear-gradient(to right, ${color1El.value} , ${color2El.value})`;
    cssEl.textContent = bodyEl.style.background;
}
color1El.addEventListener('input', setGradient)

color2El.addEventListener('input', setGradient)