const renderDom = require('./render-dom')
// const renderList = require('./render-list')
const list = []

renderDom(list)
// setInterval(() => renderList(list), 100)

module.exports = { list: list }
