const btnOpen = document.querySelector('.repair__btn-open'),
	// btnClose = document.querySelector('.repair__btn-close'),
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

// btnClose.addEventListener('click', () => {

// 	btnOpen.classList.remove('btn-hidden')
// 	btnClose.classList.add('btn-hidden')
// })

// SLICK SLAIDER

$('.slick-carousel').slick({
	dots: true,
	infinite: true,
	centerPadding: '30px',
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
})
