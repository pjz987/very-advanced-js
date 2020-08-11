const renderList = require('./render-list')

function add (todo, list) {
  list.push({
    text: todo,
    completed: false
  })
  renderList(list)
}

function complete (i, list) {
  list[i].completed = true
  renderList(list)
}

function remove (i, list) {
  list.splice(i)
  renderList(list)
}

module.exports = {
  add: add,
  complete: complete,
  remove: remove
}
