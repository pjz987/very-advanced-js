const update = require('./update')
// const renderList = require('./render-list')

module.exports = (list) => {
  console.log(update)
  const h1 = document.createElement('h1')
  h1.innerText = 'Todo List'
  const input = document.createElement('input')
  const add = document.createElement('button')
  add.innerText = 'Add'
  add.onclick = () => update.add(input.value, list)
  const ol = document.createElement('ol')
  const body = document.querySelector('body')
  body.appendChild(h1)
  body.appendChild(input)
  body.appendChild(add)
  body.appendChild(ol)
}
