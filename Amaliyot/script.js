const numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}

for (let i = 0; i < 2; i++) {
	let serie = prompt(`Oxirgi ko’rgan serialingiz? ${1 + i}`, '')
	let grade = +prompt(`Nechi baxo berasiz? ${1 + i}`, '')

	if (serie != '' && serie != null && grade != '' && grade != null) {
		seriesDB.series[serie] = grade
		console.log('DONE!')
	} else {
		i--
	}
}

if (numberOfSeries < 5) {
	console.log('Kam serial ko’ripsiz')
} else if (numberOfSeries >= 5 || numberOfSeries <= 10) {
	console.log('Siz classik tamoshabin ekansiz')
} else if (numberOfSeries > 10) {
	console.log('Siz serialchi zvezda ekansiz')
}

console.log(seriesDB)
