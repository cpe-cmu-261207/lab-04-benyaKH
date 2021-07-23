let currentInput = ''

//input task

//list (ul, li)
const ul = document.getElementById("List")
const fn = document.getElementById("finish")
const All = document.getElementById("All")
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
        //done button
        const done = document.createElement('button')
        done.style.visibility = 'hidden'
        done.innerHTML = 'done'
        done.id = "done"
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
        dlt.id = "dlt"
        dlt.addEventListener('click', () => {
            ul.removeChild(li)
        })
        li.append(done)
        li.append(dlt)
        //animation button
        li.addEventListener('mouseleave', () => {
            done.style.visibility = 'hidden'
            dlt.style.visibility = 'hidden'
        })
        li.addEventListener('mouseover', () => {
            done.style.visibility = 'visible'
            dlt.style.visibility = 'visible'
        })
        //add li to ul
        ul.insertBefore(li, ul.childNodes[0])
    }
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

