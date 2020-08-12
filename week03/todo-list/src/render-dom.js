const update = require('./update')
const renderList = require('./render-list')

module.exports = (data) => {
  const h1 = document.createElement('h1')
  h1.innerText = 'Todo List'
  
  const all = document.createElement('input')
  all.setAttribute('type', 'radio')
  all.setAttribute('name', 'filter')
  all.onclick = () => {
    data.filter = 0
    renderList(data)
  }
  const allL = document.createElement('span')
  allL.innerText = 'All'

  const completed = document.createElement('input')
  completed.setAttribute('type', 'radio')
  completed.setAttribute('name', 'filter')
  completed.onclick = () => {
    data.filter = 1
    renderList(data)
  }
  const completedL = document.createElement('span')
  completedL.innerText = 'Completed'

  const incomplete = document.createElement('input')
  incomplete.setAttribute('type', 'radio')
  incomplete.setAttribute('name', 'filter')
  incomplete.onclick = () => {
    data.filter = 2
    renderList(data)
  }
  const incompleteL = document.createElement('span')
  incompleteL.innerText = 'Not Completed'

  const div = document.createElement('div')
  div.appendChild(all)
  div.appendChild(allL)
  div.appendChild(completed)
  div.appendChild(completedL)
  div.appendChild(incomplete)
  div.appendChild(incompleteL)

  const input = document.createElement('input')
  const add = document.createElement('button')
  add.innerText = 'Add'
  add.onclick = () => update.add(input.value, data, renderList)
  const ol = document.createElement('ol')
  const body = document.querySelector('body')

  body.appendChild(h1)
  body.appendChild(div)
  body.appendChild(input)
  body.appendChild(add)
  body.appendChild(ol)
}
