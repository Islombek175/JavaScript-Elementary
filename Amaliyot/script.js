let numberOfSeries

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: true,
	start: function () {
		while (
			numberOfSeries == null ||
			numberOfSeries == '' ||
			isNaN(numberOfSeries) ||
			numberOfSeries == undefined
		) {
			numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
		}
	},
	detectingLevel: function () {
		if (numberOfSeries > 10) {
			console.log('Siz serialchi zvezda ekansiz')
		} else if (numberOfSeries >= 5) {
			console.log('Siz classik tamoshabin ekansiz')
		} else if (numberOfSeries < 5) {
			console.log('Kam serial ko’ripsiz')
		}
	},
	setFavouriteSeries: function () {
		for (let i = 0; i < 2; i++) {
			let serie = prompt(`Oxirgi ko’rgan serialingiz? ${1 + i}`, '')
			let grade = +prompt(`Nechi baxo berasiz? ${1 + i}`, '')

			if (serie != '' && serie != null && grade != '' && grade != null) {
				seriesDB.series[serie] = grade
			} else {
				i--
			}
		}
	},
	writeGenres: function () {
		for (let i = 0; i < 3; i++) {
			let genre = prompt(`Yaxshi ko’rgan janringiz? ${1 + i}`, '')

			if (genre != null && genre != '') {
				seriesDB.genres[i] = genre
			} else {
				i--
			}
		}
		seriesDB.genres.forEach((genre, index, arr) => {
			console.log(`Yaxshi ko’rgan janringiz #${1 + index} - ${genre}`)
		})
	},
	visibleDB: function () {
		if (seriesDB.private) {
			seriesDB.private = false
		} else {
			seriesDB.private = true
		}
	},
	showDb: function () {
		if (seriesDB.private) {
			console.log(seriesDB)
		} else {
			console.log('Private!')
		}
	},
}

const movie = Object.create(seriesDB)

console.log(movie)
