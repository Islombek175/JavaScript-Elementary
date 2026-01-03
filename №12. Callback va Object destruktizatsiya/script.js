// Callback - bu bitta function bajarilgandan keyin bajariladigan function

const greeting = Callback => {
	console.log('Hello!')

	Callback()
}

function question() {
	console.log('How are you?')
}

greeting(question)

// ------Object destructuring------

// Itteratsiya

const person = {
	name: 'Islombek',
	age: 16,
	isMarried: false,
	hobbies: {
		sport: 'football',
		games: 'Cyberpunk 2077',
	},
	sayHello: function () {
		console.log(`Hello ${this.name}!`) // this.name - shu Object ni ichidagi name
	},
}

person.sayHello()

const {name, age, hobbies: {sport, games}, sayHello} = person

console.log(games);


console.log(Object.keys(person)) // nchta key borligini hisoblash

// for in - faqat Object uchun
// for of - faqat Array uchun

for (let key in person) {
	if (typeof person[key] === 'object') {
		for (let i in person[key]) {
			console.log(`Property: ${i}, Value: ${person[key][i]}`)
		}
	}
	console.log(`Property: ${key}, Value: ${person[key]}`)
}
