let currentInput = ''

//input task

//list (ul, li)
const ul = document.getElementById("List")
const fn = document.getElementById("finish")
const All = document.getElementById("All")
const Addt = document.getElementById("myBtn")
//storge

document.addEventListener('DOMContentLoaded',   getTask)
Addt.addEventListener('click', addTask)
ul.addEventListener('click', DeleteCheck)

function addTask(event){
    // stop web form submitting
    const v = document.querySelector('input').value
    if (v === '') {
        alert("You don't have things to do  huh!?")
    }
    else{
        const tsk = document.createElement('div')
        tsk.classList.add('task')
        const li = document.createElement('div')
            li.classList.add('W-task')
        li.innerHTML = v
         // list => todo div
        // add todo => local storage
        const Allbtn = document.createElement('div')
        Allbtn.classList.add('All-btn')
        const done = document.createElement('button')
        done.style.visibility = 'hidden'
        done.innerHTML = 'done'
        done.classList.add('done-btn')
        done.addEventListener('click', () => {
            const dn = document.createElement('div')
            dn.classList.add('done-task')
            dn.innerText = v
            dn.style.textDecoration = "line-through"
            fn.insertBefore(dn, fn.childNodes[0])
            ul.removeChild(tsk)
            removeLocalTodos(li)
            saveLocalDone(fn.firstElementChild)

        })
        //delete button
        const dlt = document.createElement('button')
        dlt.style.visibility = 'hidden'
        dlt.innerHTML = 'delete'
        dlt.classList.add('dlt-btn')
        dlt.addEventListener('click', () => {
            ul.removeChild(tsk)
            removeLocalTodos(tsk)
        })
        Allbtn.append(done)
        Allbtn.append(dlt)
        tsk.append(li)
        tsk.append(Allbtn)
        //animation button
        tsk.addEventListener('mouseleave', () => {
            done.style.visibility = 'hidden'
            dlt.style.visibility = 'hidden'
        })
        tsk.addEventListener('mouseover', () => {
            done.style.visibility = 'visible'
            dlt.style.visibility = 'visible'
        })
        ul.insertBefore(tsk, ul.childNodes[0])
        saveLocalTodo(v)
        event.preventDefault()
    }
    
}

function DeleteCheck(event) {
    const item = event.target

    if (item.classList[0] === 'dlt-btn') {
        const todo = item.parentElement

        // add animation
        todo.classList.add('fall')
        removeLocalTodos(todo)
        todo.remove();


    }
    else if (item.classList[0] === 'done-task') {
        const doneitem = item.parentElement;

        doneitem.classList.replace('task', 'fn')
        removeLocalTodos(doneitem)
        saveLocalDone(doneitem.firstElementChild)
        doneitem.remove();
        // doneitem => doneList
        fn.prepend(doneitem.firstElementChild)

    }
}

function saveLocalDone(doneitem) {
    let dones;
    // if don't have locoal storage = create an array
    if (localStorage.getItem('dones') === null) {
        dones = [];
    }
    // if have locoal storage = reload it
    else {
        dones = JSON.parse(localStorage.getItem('dones'))
    }
    dones.push(doneitem.innerText)
    localStorage.setItem('dones', JSON.stringify(dones))
}

function    getTask() {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    let dones
    if (localStorage.getItem('dones') === null) {
        dones = [];
    }
    else {
        dones = JSON.parse(localStorage.getItem('dones'))
    }

    
    todos.forEach(function(todo){
        // create todo div
        const li = document.createElement('div')
        li.classList.add('task')
        li.innerHTML = todo

        const Allbtn = document.createElement('div')
        Allbtn.classList.add('All-btn')
       //done-btn
        const done = document.createElement('button')
        done.style.visibility = 'hidden'
        done.innerHTML = 'done'
        done.classList.add('done-btn')
        done.addEventListener('click', () => {
            const dn = document.createElement('div')
            dn.innerText = v
            dn.style.textDecoration = "line-through"
            fn.insertBefore(dn, fn.childNodes[0])
            ul.removeChild(li)
        })
        //delete button
        const dlt = document.createElement('button')
        dlt.style.visibility = 'hidden'
        dlt.innerHTML = 'delete'
        dlt.classList.add('dlt-btn')
        dlt.addEventListener('click', () => {
            ul.removeChild(li)

        })
        Allbtn.append(done)
        Allbtn.append(dlt)
        li.append(Allbtn)
        //animation button
        li.addEventListener('mouseleave', () => {
            done.style.visibility = 'hidden'
            dlt.style.visibility = 'hidden'
        })
        li.addEventListener('mouseover', () => {
            done.style.visibility = 'visible'
            dlt.style.visibility = 'visible'
        })
        ul.insertBefore(li, ul.childNodes[0])
    })
    
}

function removeLocalTodos(todo) {
    let todos = JSON.parse(localStorage.getItem('todos'))
    const itemIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(itemIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}

//press enter
const pressEnter = (event) => {
    if (event.code === 'Enter')
        document.getElementById("myBtn").click()
}
//localStorage

//show everything
document.body.append(ul)
document.body.append(fn)
