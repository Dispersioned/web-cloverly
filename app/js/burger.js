let burgerIcon = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.header__nav');

burgerIcon.addEventListener('click', function (e) {
	document.querySelector('body').classList.toggle('_lock');

	burgerIcon.classList.toggle('_active');
	burgerBody.classList.toggle('_active');
});
