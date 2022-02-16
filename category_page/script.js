var slides = document.querySelectorAll('.mast__blog__card__slide');
var btns = document.querySelectorAll('.mast__blog__card__slide_nav');
var currentSlide = 1;

const manualNav = (manual) => {
	slides.forEach ( (slide) => {
		slide.classList.remove('active');

		btns.forEach ( (btn) => {
			btn.classList.remove('active');
		} )
	} )

	slides[manual].classList.add('active');
	btns[manual].classList.add('active');
}

// works on onClick circle
btns.forEach ( (btn, i) => {
	btn.addEventListener( "click", () => {
		manualNav(i);
		currentSlide = i;
	} )
} )

// auto works image with nav
repeater = () => {
	let active = document.getElementsByClassName('active');
	let i = 1;

	repeat = () => {
		setTimeout( () => {
			[...active].forEach( (activeSlide) => {
				activeSlide.classList.remove('active');
			} )

			slides[i].classList.add('active');
			btns[i].classList.add('active');
			i++;

			if (slides.length == i) {
				i = 0;
			}
			if (i >= slides.length) {return;}
			repeat();
		}, 6000 )
	}
	repeat();
}
repeater();