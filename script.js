let currentInput = ''

//input task

//list (ul, li)
const ul = document.getElementById("List")
ul.style.flexDirection = "column-reverse"
//add task button 
const Addlist = () => {
    const v = document.querySelector('input').value
    if (v === '') {
        alert("You don't have things to do  huh!?")
    }
    else {
        const li = document.createElement('div')
        li.innerHTML = v
        ul.append(li)
    }
}
//press enter
const pressEnter = (event) => {
    if(event.code === 'Enter')
    document.getElementById("myBtn").click()
}
    //show everything
    document.body.append(ul)
