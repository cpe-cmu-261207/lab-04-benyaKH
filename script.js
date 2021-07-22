let currentInput = ''

//input task
const input = document.createElement('input')
input.addEventListener( 'input', ev => {
	currentInput = ev.target.value
})

//list (ul, li)
const ul = document.createElement('ul')

//add task button
const btn = document.createElement('button')
btn.innerHTML="Add Task"
btn.addEventListener('click', () => {
	const li = document.createElement('li')
	li.innerHTML = currentInput
	ul.append(li)
})
//show everything
document.body.append(input)
document.body.append(btn)
document.body.append(ul)
