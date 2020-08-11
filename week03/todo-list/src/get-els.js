const addTodo = require('./add-todo')

const body = document.querySelector('#body')

function inputTodo () {
  const input = document.createElement('input')
  body.appendChild(input)
  return input
}

function addButton () {
  // const body = document.querySelector('body')
  const button = document.createElement('button')
  button.innerText = 'Add'
  button.addEventListener('click', event => {
    addTodo()
  })
  body.appendChild(button)
  return button
}

function todoList () {
  // const body = document.querySelector('body')
  const list = document.createElement('ul')
  body.appendChild(list)
  return list
}

module.exports = {
  input: inputTodo,
  addButton: addButton,
  todoList: todoList
}
