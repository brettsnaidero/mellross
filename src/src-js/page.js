svg4everybody();

// Toggler
let togglerElements = document.querySelectorAll('.toggler');
Array.from(togglerElements).forEach( item => {
	let attr = item.getAttribute('data-toggleplz');
	let toggleMe = document.getElementById(attr);
	item.addEventListener('click', event => {
		event.preventDefault;
		item.classList.toggle('toggled');
		toggleMe.classList.toggle('show');
	});
})
