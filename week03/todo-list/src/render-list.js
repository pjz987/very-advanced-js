module.exports = (data) => {
  const update = require('./update')
  const ol = document.querySelector('ol')
  ol.innerHTML = ''

  for (let i = 0; i < data.list.length; i++) {
    const todo = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = data.list[i].text
    todo.style.textDecoration = data.list[i].completed ? 'line-through' : 'none'
    todo.appendChild(span)

    const complete = document.createElement('button')
    complete.innerText = 'Complete'
    complete.onclick = () => update.complete(i, data)
    todo.appendChild(complete)

    const remove = document.createElement('button')
    remove.innerText = 'Remove'
    remove.onclick = () => update.remove(i, data)
    todo.appendChild(remove)

    if (data.filter) {
      if ((data.filter === 1 && data.list[i].completed) || (data.filter === 2 && !(data.list[i].completed))) {
        ol.appendChild(todo)
      }
    } else ol.appendChild(todo)
  }
}
