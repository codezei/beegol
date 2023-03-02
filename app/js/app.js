
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	stickyHeader ()
	mobMenuToggle ()
})

function stickyHeader () {
	let header = document.querySelector('.header')

	if (document.body.getBoundingClientRect().top < 0) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}
	
	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}
		
	})
}

function mobMenuToggle () {
	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector(btn.dataset.toggle)
	let header = document.querySelector('.header')
		btn.addEventListener('click', function (e) {
			btn.classList.toggle('active')
			menu.classList.toggle('active')
			header.classList.toggle('active')
		})
}