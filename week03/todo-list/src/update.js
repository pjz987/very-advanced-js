const renderList = require('./render-list')
// const browserify = require('browserify')

function add (todo, data) {
  data.list.push({
    text: todo,
    completed: false
  })
  renderList(data)
}

function complete (i, data) {
  data.list[i].completed = true
  renderList(data)
}

function remove (i, data) {
  data.list.splice(i, 1)
  renderList(data)
}

module.exports = {
  add: add,
  complete: complete,
  remove: remove
}
