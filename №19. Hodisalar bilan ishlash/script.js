const btn = document.querySelector('button'),
	box = document.querySelector('.box'),
	link = document.querySelector('.link'),
	btns = document.querySelectorAll('button')

// Ishlatish tavsiya etilmaydi, faqat ohirgi function() ishga tushadi

// btn.onclick = function () {
// 	console.log(1)
// }

// btn.onclick = function () {
// 	console.log(2)
// }

// -------------------------------------------------

// btn.addEventListener('click', () => {
// 	console.log('First click')
// })

// btn.addEventListener('mouseenter', () => {
// 	console.log('Mouse enter')
// })

// btn.addEventListener('mouseleave', () => {
// 	console.log('Mouse leave')
// })

// -------------------------------------------------

const onClick = (event, text) => {
	// event - juda kerkali bo'ladi
	console.log(event.target)
	event.target.textContent = text
	event.target.style.backgroundColor = 'red'
}

let count = 0
const counter = event => {
	count++
	console.log(count)
	if (count == 4) {
		btn.removeEventListener('click', counter) // eventni olib tashlash
	}
}

// btn.addEventListener('click', counter)
// btn.addEventListener('click', event => onClick(event, 'Button'))

const callback = event => {
	console.log(event.currentTarget)
}

// box.addEventListener('click', event => callback(event))
// btn.addEventListener('click', event => callback(event))

link.addEventListener('click', event => {
	event.preventDefault() // default event ilib tashlash
	console.log('LINK')
})

btns.forEach((item, index) => {
	item.addEventListener(
		'click',
		event => {
			console.log(index + 1)
		},
		{
			once: true, // faqat bir marta ishlaydi
		}
	)
})

const data = document.querySelector('[data-item="red"]'),
	body = document.body

console.log(body.childNodes, 'body children')
console.log(body.firstElementChild, 'body first child')
console.log(body.lastElementChild, 'body last child')

console.log(data.previousElementSibling, 'previous element')
console.log(data.nextElementSibling, 'nex element')
