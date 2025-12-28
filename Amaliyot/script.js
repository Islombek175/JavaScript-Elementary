const numberOfSeries = +prompt('Nechta serial ko’rdingiz?', 0)

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: false,
}

const serie1 = prompt('Oxirgi ko’rgan serialingiz?', '')
const grade1 = +prompt('Nechi baxo berasiz?', '')

const serie2 = prompt('Oxirgi ko’rgan serialingiz?', '')
const grade2 = +prompt('Nechi baxo berasiz?', '')

seriesDB.series[serie1] = grade1
seriesDB.series[serie2] = grade2

console.log(seriesDB)
