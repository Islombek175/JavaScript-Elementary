const promoAdv = document.querySelector('.promo__adv'),
	promoGenre = document.querySelector('.promo__genre'),
	promoBg = document.querySelector('.promo__bg'),
	seriesList = document.querySelector('.promo__interactive-list')

promoAdv.style.display = 'none'
promoGenre.innerText = 'COMEDY'
promoBg.style.cssText = 'background-image: url(./img/1.jpg)'

const seriesDB = {
	series: [
		'OMAR',
		'THE FINAL LEGACY',
		'ERTUGRUL',
		'MAGNIFICENT CENTURY',
		'GREAT SELJUKS: GUARDIANS...',
	],
}

seriesList.innerHTML = ''

seriesDB.series.forEach((serie, index) => {
	seriesList.innerHTML += `<li class="promo__interactive-item">${
		1 + index
	}. ${serie} <div class="delete"></div></li>`
})
