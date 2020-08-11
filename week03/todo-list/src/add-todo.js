const list = document.querySelector('ol')

function completeTodo (todo) {
  todo.style.textDecoration = 'line-through'
}

function removeTodo (todo) {
  list.removeChild(todo)
}

function addTodo () {
  const input = document.querySelector('input')
  const todo = document.createElement('li')
  todo.innerText = input.value

  const complete = document.createElement('button')
  complete.innerText = 'Complete'
  complete.addEventListener('click', event => {
    completeTodo(todo)
  })
  todo.appendChild(complete)

  const remove = document.createElement('button')
  remove.innerText = 'Remove'
  remove.addEventListener('click', event => {
    removeTodo(todo)
  })
  todo.appendChild(remove)

  list.appendChild(todo)
}

module.exports = addTodo
