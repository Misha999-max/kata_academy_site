const btnOpen = document.querySelector('.repair__btn-open'),
	hiddenContent = document.querySelector('.repair__lists')

btnOpen.addEventListener('click', () => {
	btnOpen.classList.toggle('repair__btn-close')
	console.log(btnOpen.classList.value)
	if (btnOpen.classList.value === 'repair__btn-open') {
		btnOpen.textContent = 'Показать все'
		hiddenContent.classList.add('repair__lists-hidden')
	} else {
		btnOpen.textContent = 'Скрыть'
		hiddenContent.classList.remove('repair__lists-hidden')
	}
})

// SLICK SLAIDER

window.addEventListener('resize', () => {
	console.log(document.documentElement.clientWidth)

	if (document.documentElement.clientWidth < 760) {
		hiddenContent.classList.add('slick-carousel')

		$('.slick-carousel').slick({
			dots: true,
			infinite: true,
			centerPadding: '30px',
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 760,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		})
	}

	if (document.documentElement.clientWidth > 760) {
		hiddenContent.classList.remove('slick-carousel')
		hiddenContent.classList.remove('slick-slider')
		hiddenContent.classList.remove('slick-initialized')
		hiddenContent.classList.remove('slick-dotted')
	}
})
