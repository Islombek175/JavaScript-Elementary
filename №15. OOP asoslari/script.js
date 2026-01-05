const suvCars = {
	weight: 5000,
	length: 3,
	speed: function () {
		return '100km/h'
	},
}

const nexia = {
	weight: 4000,
}

// #1
nexia.__proto__ = suvCars

console.log(nexia.length)
console.log(nexia.speed())

const matiz = {
	weight: 3000,
	length: 2.5,
}

// #2
Object.setPrototypeOf(matiz, suvCars)

console.log(matiz)

// #3

const damas = Object.create(suvCars)

console.log(damas)
