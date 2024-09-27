const btnOpen = document.querySelector('.repair__btn-open'),
	btnClose = document.querySelector('.repair__btn-close'),
	hiddenContent = document.querySelector('.repair__lists')

btnOpen.addEventListener('click', () => {
	hiddenContent.classList.remove('repair__lists-hidden')
	btnOpen.classList.add('btn-hidden')
	btnClose.classList.remove('btn-hidden')
})

btnClose.addEventListener('click', () => {
	hiddenContent.classList.add('repair__lists-hidden')
	btnOpen.classList.remove('btn-hidden')
	btnClose.classList.add('btn-hidden')
})

// SLICK SLAIDER

$('.slick-carousel').slick({
	dots: true,
	infinite: true,
	centerPadding: '30px',
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
})
