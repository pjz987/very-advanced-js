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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvcmVuZGVyLWRvbS5qcyIsInNyYy9yZW5kZXItbGlzdC5qcyIsInNyYy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCByZW5kZXJEb20gPSByZXF1aXJlKCcuL3JlbmRlci1kb20nKVxuY29uc3QgZGF0YSA9IHsgbGlzdDogW10sIGZpbHRlcjogMCB9XG5yZW5kZXJEb20oZGF0YSlcbiIsImNvbnN0IHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJylcbmNvbnN0IHJlbmRlckxpc3QgPSByZXF1aXJlKCcuL3JlbmRlci1saXN0JylcblxubW9kdWxlLmV4cG9ydHMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaDEuaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCdcbiAgXG4gIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgYWxsLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gIGFsbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZmlsdGVyJylcbiAgYWxsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGF0YS5maWx0ZXIgPSAwXG4gICAgcmVuZGVyTGlzdChkYXRhKVxuICB9XG4gIGNvbnN0IGFsbEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgYWxsTC5pbm5lclRleHQgPSAnQWxsJ1xuXG4gIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpXG4gIGNvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZmlsdGVyJylcbiAgY29tcGxldGVkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZGF0YS5maWx0ZXIgPSAxXG4gICAgcmVuZGVyTGlzdChkYXRhKVxuICB9XG4gIGNvbnN0IGNvbXBsZXRlZEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgY29tcGxldGVkTC5pbm5lclRleHQgPSAnQ29tcGxldGVkJ1xuXG4gIGNvbnN0IGluY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGluY29tcGxldGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJylcbiAgaW5jb21wbGV0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZmlsdGVyJylcbiAgaW5jb21wbGV0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRhdGEuZmlsdGVyID0gMlxuICAgIHJlbmRlckxpc3QoZGF0YSlcbiAgfVxuICBjb25zdCBpbmNvbXBsZXRlTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBpbmNvbXBsZXRlTC5pbm5lclRleHQgPSAnTm90IENvbXBsZXRlZCdcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkaXYuYXBwZW5kQ2hpbGQoYWxsKVxuICBkaXYuYXBwZW5kQ2hpbGQoYWxsTClcbiAgZGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZClcbiAgZGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEwpXG4gIGRpdi5hcHBlbmRDaGlsZChpbmNvbXBsZXRlKVxuICBkaXYuYXBwZW5kQ2hpbGQoaW5jb21wbGV0ZUwpXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZC5pbm5lclRleHQgPSAnQWRkJ1xuICBhZGQub25jbGljayA9ICgpID0+IHVwZGF0ZS5hZGQoaW5wdXQudmFsdWUsIGRhdGEsIHJlbmRlckxpc3QpXG4gIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbiAgYm9keS5hcHBlbmRDaGlsZChoMSlcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWRkKVxuICBib2R5LmFwcGVuZENoaWxkKG9sKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpXG4gIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignb2wnKVxuICBvbC5pbm5lckhUTUwgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi5pbm5lclRleHQgPSBkYXRhLmxpc3RbaV0udGV4dFxuICAgIHRvZG8uc3R5bGUudGV4dERlY29yYXRpb24gPSBkYXRhLmxpc3RbaV0uY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSdcbiAgICB0b2RvLmFwcGVuZENoaWxkKHNwYW4pXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGUuaW5uZXJUZXh0ID0gJ0NvbXBsZXRlJ1xuICAgIGNvbXBsZXRlLm9uY2xpY2sgPSAoKSA9PiB1cGRhdGUuY29tcGxldGUoaSwgZGF0YSlcbiAgICB0b2RvLmFwcGVuZENoaWxkKGNvbXBsZXRlKVxuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ1JlbW92ZSdcbiAgICByZW1vdmUub25jbGljayA9ICgpID0+IHVwZGF0ZS5yZW1vdmUoaSwgZGF0YSlcbiAgICB0b2RvLmFwcGVuZENoaWxkKHJlbW92ZSlcblxuICAgIGlmIChkYXRhLmZpbHRlcikge1xuICAgICAgaWYgKChkYXRhLmZpbHRlciA9PT0gMSAmJiBkYXRhLmxpc3RbaV0uY29tcGxldGVkKSB8fCAoZGF0YS5maWx0ZXIgPT09IDIgJiYgIShkYXRhLmxpc3RbaV0uY29tcGxldGVkKSkpIHtcbiAgICAgICAgb2wuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgIH1cbiAgICB9IGVsc2Ugb2wuYXBwZW5kQ2hpbGQodG9kbylcbiAgfVxufVxuIiwiY29uc3QgcmVuZGVyTGlzdCA9IHJlcXVpcmUoJy4vcmVuZGVyLWxpc3QnKVxuXG5mdW5jdGlvbiBhZGQgKHRvZG8sIGRhdGEpIHtcbiAgZGF0YS5saXN0LnB1c2goe1xuICAgIHRleHQ6IHRvZG8sXG4gICAgY29tcGxldGVkOiBmYWxzZVxuICB9KVxuICByZW5kZXJMaXN0KGRhdGEpXG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlIChpLCBkYXRhKSB7XG4gIGRhdGEubGlzdFtpXS5jb21wbGV0ZWQgPSB0cnVlXG4gIHJlbmRlckxpc3QoZGF0YSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlIChpLCBkYXRhKSB7XG4gIGRhdGEubGlzdC5zcGxpY2UoaSwgMSlcbiAgcmVuZGVyTGlzdChkYXRhKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkOiBhZGQsXG4gIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgcmVtb3ZlOiByZW1vdmVcbn1cbiJdfQ==
