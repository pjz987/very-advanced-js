(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const renderDom = require('./render-dom')
const data = { list: [], filter: 0 }
renderDom(data)

},{"./render-dom":2}],2:[function(require,module,exports){
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

},{"./render-list":3,"./update":4}],3:[function(require,module,exports){
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

},{"./update":4}],4:[function(require,module,exports){
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

},{"./render-list":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvcmVuZGVyLWRvbS5qcyIsInNyYy9yZW5kZXItbGlzdC5qcyIsInNyYy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHJlbmRlckRvbSA9IHJlcXVpcmUoJy4vcmVuZGVyLWRvbScpXG5jb25zdCBkYXRhID0geyBsaXN0OiBbXSwgZmlsdGVyOiAwIH1cbnJlbmRlckRvbShkYXRhKVxuIiwiY29uc3QgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKVxuY29uc3QgcmVuZGVyTGlzdCA9IHJlcXVpcmUoJy4vcmVuZGVyLWxpc3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoMS5pbm5lclRleHQgPSAnVG9kbyBMaXN0J1xuICBcbiAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBhbGwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgYWxsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaWx0ZXInKVxuICBhbGwub25jbGljayA9ICgpID0+IHtcbiAgICBkYXRhLmZpbHRlciA9IDBcbiAgICByZW5kZXJMaXN0KGRhdGEpXG4gIH1cbiAgY29uc3QgYWxsTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBhbGxMLmlubmVyVGV4dCA9ICdBbGwnXG5cbiAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb21wbGV0ZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgY29tcGxldGVkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaWx0ZXInKVxuICBjb21wbGV0ZWQub25jbGljayA9ICgpID0+IHtcbiAgICBkYXRhLmZpbHRlciA9IDFcbiAgICByZW5kZXJMaXN0KGRhdGEpXG4gIH1cbiAgY29uc3QgY29tcGxldGVkTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBjb21wbGV0ZWRMLmlubmVyVGV4dCA9ICdDb21wbGV0ZWQnXG5cbiAgY29uc3QgaW5jb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgaW5jb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKVxuICBpbmNvbXBsZXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaWx0ZXInKVxuICBpbmNvbXBsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGF0YS5maWx0ZXIgPSAyXG4gICAgcmVuZGVyTGlzdChkYXRhKVxuICB9XG4gIGNvbnN0IGluY29tcGxldGVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGluY29tcGxldGVMLmlubmVyVGV4dCA9ICdOb3QgQ29tcGxldGVkJ1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRpdi5hcHBlbmRDaGlsZChhbGwpXG4gIGRpdi5hcHBlbmRDaGlsZChhbGxMKVxuICBkaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkKVxuICBkaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkTClcbiAgZGl2LmFwcGVuZENoaWxkKGluY29tcGxldGUpXG4gIGRpdi5hcHBlbmRDaGlsZChpbmNvbXBsZXRlTClcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYWRkLmlubmVyVGV4dCA9ICdBZGQnXG4gIGFkZC5vbmNsaWNrID0gKCkgPT4gdXBkYXRlLmFkZChpbnB1dC52YWx1ZSwgZGF0YSwgcmVuZGVyTGlzdClcbiAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBib2R5LmFwcGVuZENoaWxkKGgxKVxuICBib2R5LmFwcGVuZENoaWxkKGRpdilcbiAgYm9keS5hcHBlbmRDaGlsZChpbnB1dClcbiAgYm9keS5hcHBlbmRDaGlsZChhZGQpXG4gIGJvZHkuYXBwZW5kQ2hpbGQob2wpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJylcbiAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvbCcpXG4gIG9sLmlubmVySFRNTCA9ICcnXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBzcGFuLmlubmVyVGV4dCA9IGRhdGEubGlzdFtpXS50ZXh0XG4gICAgdG9kby5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGRhdGEubGlzdFtpXS5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJ1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoc3BhbilcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb21wbGV0ZS5pbm5lclRleHQgPSAnQ29tcGxldGUnXG4gICAgY29tcGxldGUub25jbGljayA9ICgpID0+IHVwZGF0ZS5jb21wbGV0ZShpLCBkYXRhKVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQoY29tcGxldGUpXG5cbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZS5pbm5lclRleHQgPSAnUmVtb3ZlJ1xuICAgIHJlbW92ZS5vbmNsaWNrID0gKCkgPT4gdXBkYXRlLnJlbW92ZShpLCBkYXRhKVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQocmVtb3ZlKVxuXG4gICAgaWYgKGRhdGEuZmlsdGVyKSB7XG4gICAgICBpZiAoKGRhdGEuZmlsdGVyID09PSAxICYmIGRhdGEubGlzdFtpXS5jb21wbGV0ZWQpIHx8IChkYXRhLmZpbHRlciA9PT0gMiAmJiAhKGRhdGEubGlzdFtpXS5jb21wbGV0ZWQpKSkge1xuICAgICAgICBvbC5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgfVxuICAgIH0gZWxzZSBvbC5hcHBlbmRDaGlsZCh0b2RvKVxuICB9XG59XG4iLCJjb25zdCByZW5kZXJMaXN0ID0gcmVxdWlyZSgnLi9yZW5kZXItbGlzdCcpXG4vLyBjb25zdCBicm93c2VyaWZ5ID0gcmVxdWlyZSgnYnJvd3NlcmlmeScpXG5cbmZ1bmN0aW9uIGFkZCAodG9kbywgZGF0YSkge1xuICBkYXRhLmxpc3QucHVzaCh7XG4gICAgdGV4dDogdG9kbyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gIH0pXG4gIHJlbmRlckxpc3QoZGF0YSlcbn1cblxuZnVuY3Rpb24gY29tcGxldGUgKGksIGRhdGEpIHtcbiAgZGF0YS5saXN0W2ldLmNvbXBsZXRlZCA9IHRydWVcbiAgcmVuZGVyTGlzdChkYXRhKVxufVxuXG5mdW5jdGlvbiByZW1vdmUgKGksIGRhdGEpIHtcbiAgZGF0YS5saXN0LnNwbGljZShpLCAxKVxuICByZW5kZXJMaXN0KGRhdGEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZCxcbiAgY29tcGxldGU6IGNvbXBsZXRlLFxuICByZW1vdmU6IHJlbW92ZVxufVxuIl19
