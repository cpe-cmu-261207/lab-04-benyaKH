let currentInput = ''

//input task

//list (ul, li)
const ul = document.getElementById("List")
//click
const Addlist = () => {
    const v = document.querySelector('input').value
    if (v === '') {
        alert("You don't have things to do  huh!?")
    }
    else {
        const li = document.createElement('div')
        li.id = "task"
        li.innerHTML = v
        //create done and delete
        const done = document.createElement('button')
        done.innerHTML = 'done'
        done.id = "done"
        done.addEventListener('click', () => {
            li.style.textDecoration = "line-through"
        })
        const dlt = document.createElement('button')
        dlt.innerHTML = 'delete'
        dlt.id = "dlt"
        dlt.addEventListener('click', () => {
            ul.removeChild(li)
        })
        li.append(done)
        li.append(dlt)
        //add li to ul
        ul.insertBefore(li, ul.childNodes[0])
    }
}
//press enter
const pressEnter = (event) => {
    if (event.code === 'Enter')
        document.getElementById("myBtn").click()
}
//click done
//show everything
document.body.append(ul)
