const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
let burgerMenu = document.getElementById('#options');
const burgerMenuElements = document.querySelectorAll('.nav-option-onburger');

function burgerMenuClose() {
	burgerMenu.style.left = '100%';
}

burgerBtn.addEventListener('click', () => {
	burgerMenu.style.left = '0';
});
closeBtn.addEventListener('click', burgerMenuClose);
burgerMenuElements.forEach(element => {
	element.addEventListener('click', burgerMenuClose);
});
