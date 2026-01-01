// ------STRING METHODS------

const text = 'Hello World!'
const password = '		qwerty 			'
// length is property
console.log('Matnning uzinligi:', text.length)

// Methods
console.log('Indexdagi xarf #1:', text.charAt(1))
console.log('Indexdagi xarf #2:', text[1])
console.log('Katta xarflar bilan chiqarish:', text.toUpperCase())
console.log('Kichik xarflar bilan chiqarish:', text.toLowerCase())
console.log('Matnni kesish #1:', text.slice(1, -6))
console.log('Matnni kesish #2:', text.substring(1, 5))
console.log('Boshi va oxiridan probellarni olib tashlash:', password.trim())
console.log('Boshidan space olib tashlash:', password.trimStart())
console.log('Oxiridan space olib tashlash:', password.trimEnd())

console.log('------------------------------')

console.log(password)

console.log(text)

// ------NUMBER METHODS------
const number = 5.16
const width = '216.83px'

console.log(Math.round(number)) // Eng yaqin son
console.log(Math.floor(number)) // Nuqtadan keyin kesib tashash
console.log(parseInt(width)) // String -> butun son
console.log(parseFloat(width)) // String -> Number

console.log(number)
