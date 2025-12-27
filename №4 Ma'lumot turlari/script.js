//
// 1. Number
// 2. String
// 3. Boolean true/false
// 4. null
// 5. undefined

let age = 16
console.log(age, typeof age)

console.log('--------------------')

const name = 'Islombek'
console.log(name, typeof name)

console.log('--------------------')

let isMarried = false
let canSwim = true
console.log(isMarried, canSwim, typeof isMarried, typeof canSwim)

console.log('--------------------')

let fridge
console.log(fridge, typeof fridge)

console.log('--------------------')

let job = null
console.log(job, typeof job)

console.log('--------------------')

//
// Object - Kompleks ma'lumot turlari
// 1. Array
// 2. Function
// 3. Object
// 4. Muntazam iboralar
// 5. Error

const person = {
	// property: value
	name: 'Islombek',
	age: 16,
	isMarried: false,
	job: null,
	hobby: {
		sport: 'football',
		game: 'S.T.A.L.K.E.R.',
	},
}

console.log(person, typeof person)

console.log('--------------------')

//					  0				1					2				 3				4
let colors = ['red', 'yellow', 'green', 'black', 'white']

console.log(colors, typeof colors)
console.log(colors[1]);
