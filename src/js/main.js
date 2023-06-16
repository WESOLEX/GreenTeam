const searchBtns = document.querySelectorAll('.fa-magnifying-glass');
const closeBtns = document.querySelectorAll('.fa-xmark');
const servicesShadow = document.querySelectorAll('.services-shadow');

searchBtns.forEach(searchBtn => {
	searchBtn.addEventListener('click', () => {
		console.log(searchBtn);
		searchBtn.parentElement.classList.add('big');
		searchBtn.nextElementSibling.classList.add('show');
		servicesShadow.forEach(serviceShadow => {
			serviceShadow.classList.add('show');
		});
		searchBtn.classList.add('hide');
		document.body.classList.add('hide-scroll');
	});
});

closeBtns.forEach(closeBtn => {
	closeBtn.addEventListener('click', () => {
		closeBtn.parentElement.classList.remove('big');
		closeBtn.previousElementSibling.classList.remove('hide');
		servicesShadow.forEach(serviceShadow => {
			serviceShadow.classList.remove('show');
		});
		closeBtn.classList.remove('show');
		document.body.classList.remove('hide-scroll');
	});
});
