const update = require('./update')
// const list = require('./index').list

module.exports = (list) => {
  // console.log(list)
  console.log(update)
  const ol = document.querySelector('ol')
  ol.innerHTML = ''
  for (let i = 0; i < list.length; i++) {
    const todo = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = list[i].text
    todo.style.textDecoration = list[i].completed ? 'line-through' : 'none'
    todo.appendChild(span)

    const complete = document.createElement('button')
    complete.innerText = 'Complete'
    complete.onclick = () => update.complete(i, list)
    todo.appendChild(complete)

    const remove = document.createElement('button')
    remove.innerText = 'Remove'
    remove.onclick = () => update.remove(i, list)
    todo.appendChild(remove)

    ol.appendChild(todo)
  }
}
