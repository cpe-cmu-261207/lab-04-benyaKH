let currentInput = ''

//input task

//list (ul, li)
const ul = document.createElement('ul')

//add task button
const Addlist = () => {
    const v = document.querySelector('input').value
    const li = document.createElement('li')
	li.innerHTML = v
	ul.append(li)
}
//show everything
document.body.append(ul)
