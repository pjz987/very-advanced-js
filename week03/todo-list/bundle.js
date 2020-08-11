(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const renderDom = require('./render-dom')
// const renderList = require('./render-list')
const list = []

renderDom(list)
// setInterval(() => renderList(list), 100)

module.exports = { list: list }

},{"./render-dom":2}],2:[function(require,module,exports){
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

},{"./update":4}],3:[function(require,module,exports){
const update = require('./update')
// const list = require('./index').list

module.exports = (list) => {
  // console.log(list)
  console.log(update)
  const ol = document.querySelector('ol')
  ol.innerHTML = ''
  for (let i = 0; i < list.length; i++) {
    const todo = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = list[i].text
    todo.style.textDecoration = list[i].completed ? 'line-through' : 'none'
    todo.appendChild(span)

    const complete = document.createElement('button')
    complete.innerText = 'Complete'
    complete.onclick = () => update.complete(i, list)
    todo.appendChild(complete)

    const remove = document.createElement('button')
    remove.innerText = 'Remove'
    remove.onclick = () => update.remove(i, list)
    todo.appendChild(remove)

    ol.appendChild(todo)
  }
}

},{"./update":4}],4:[function(require,module,exports){
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

},{"./render-list":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvcmVuZGVyLWRvbS5qcyIsInNyYy9yZW5kZXItbGlzdC5qcyIsInNyYy91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCByZW5kZXJEb20gPSByZXF1aXJlKCcuL3JlbmRlci1kb20nKVxuLy8gY29uc3QgcmVuZGVyTGlzdCA9IHJlcXVpcmUoJy4vcmVuZGVyLWxpc3QnKVxuY29uc3QgbGlzdCA9IFtdXG5cbnJlbmRlckRvbShsaXN0KVxuLy8gc2V0SW50ZXJ2YWwoKCkgPT4gcmVuZGVyTGlzdChsaXN0KSwgMTAwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgbGlzdDogbGlzdCB9XG4iLCJjb25zdCB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpXG4vLyBjb25zdCByZW5kZXJMaXN0ID0gcmVxdWlyZSgnLi9yZW5kZXItbGlzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gKGxpc3QpID0+IHtcbiAgY29uc29sZS5sb2codXBkYXRlKVxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaDEuaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCdcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZC5pbm5lclRleHQgPSAnQWRkJ1xuICBhZGQub25jbGljayA9ICgpID0+IHVwZGF0ZS5hZGQoaW5wdXQudmFsdWUsIGxpc3QpXG4gIGNvbnN0IG9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaDEpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWRkKVxuICBib2R5LmFwcGVuZENoaWxkKG9sKVxufVxuIiwiY29uc3QgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKVxuLy8gY29uc3QgbGlzdCA9IHJlcXVpcmUoJy4vaW5kZXgnKS5saXN0XG5cbm1vZHVsZS5leHBvcnRzID0gKGxpc3QpID0+IHtcbiAgLy8gY29uc29sZS5sb2cobGlzdClcbiAgY29uc29sZS5sb2codXBkYXRlKVxuICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ29sJylcbiAgb2wuaW5uZXJIVE1MID0gJydcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi5pbm5lclRleHQgPSBsaXN0W2ldLnRleHRcbiAgICB0b2RvLnN0eWxlLnRleHREZWNvcmF0aW9uID0gbGlzdFtpXS5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJ1xuICAgIHRvZG8uYXBwZW5kQ2hpbGQoc3BhbilcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb21wbGV0ZS5pbm5lclRleHQgPSAnQ29tcGxldGUnXG4gICAgY29tcGxldGUub25jbGljayA9ICgpID0+IHVwZGF0ZS5jb21wbGV0ZShpLCBsaXN0KVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQoY29tcGxldGUpXG5cbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHJlbW92ZS5pbm5lclRleHQgPSAnUmVtb3ZlJ1xuICAgIHJlbW92ZS5vbmNsaWNrID0gKCkgPT4gdXBkYXRlLnJlbW92ZShpLCBsaXN0KVxuICAgIHRvZG8uYXBwZW5kQ2hpbGQocmVtb3ZlKVxuXG4gICAgb2wuYXBwZW5kQ2hpbGQodG9kbylcbiAgfVxufVxuIiwiY29uc3QgcmVuZGVyTGlzdCA9IHJlcXVpcmUoJy4vcmVuZGVyLWxpc3QnKVxuXG5mdW5jdGlvbiBhZGQgKHRvZG8sIGxpc3QpIHtcbiAgbGlzdC5wdXNoKHtcbiAgICB0ZXh0OiB0b2RvLFxuICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgfSlcbiAgcmVuZGVyTGlzdChsaXN0KVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZSAoaSwgbGlzdCkge1xuICBsaXN0W2ldLmNvbXBsZXRlZCA9IHRydWVcbiAgcmVuZGVyTGlzdChsaXN0KVxufVxuXG5mdW5jdGlvbiByZW1vdmUgKGksIGxpc3QpIHtcbiAgbGlzdC5zcGxpY2UoaSlcbiAgcmVuZGVyTGlzdChsaXN0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkOiBhZGQsXG4gIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgcmVtb3ZlOiByZW1vdmVcbn1cbiJdfQ==
