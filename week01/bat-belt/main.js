const _ = {}

_.each = (array, iteratee) => {
  // console.log(array)
  // console.log(iteratee)
  for (let i=0; i<array.length; i++) {
    let el = array[i];
    // console.log(item)

    iteratee(el, i, array);

  }
  
}

_.map = (array, iteratee) => {
  let newArray = []
  for (let i=0; i<array.length; i++) {
    let el = array[i];
    newArray.push(iteratee(el, i, array))
  }
  return newArray
}

_.filter = (array, predicate) => {
  let newArray = [];
  for (let i=0; i<array.length; i++) {
    let el = array[i]
    if (predicate(el, i, array) === true) {
      newArray.push(el);
    }
  }
  return newArray
}


_.find = (array, predicate) => {
  for (let i=0; i<array.length; i++) {
    let el = array[i];
    if (predicate(el, i, array)) {
      return el
    }
  }
}


_.random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

_.range = (start, stop, step=1) => {
  let array = []
  for (let i=start; i<stop; i+=step) {
    array.push(i);
  }
  return array
}

_.extend = (destination, ...sources) => {
  for (let obj of sources) {
    Object.assign(destination, obj)
  }
  return destination
}

// console.log(_.extend({name: 'moe'}, {age: 50}, {job: 'bar'}))
// // {name: 'moe', age: 50, job: 'bar}
// console.log(_.extend({}))
// {}


_.times = (n, iteratee) => {
  let array = []
  for (let i=0; i<n; i++) {
    array.push(iteratee(i))
  }
  return array
}

// console.log(_.times(3, x => 'hey'))
// [ 'hey', 'hey', 'hey' ]

_.constant = (value) => {
  return () => value
}

// console.log(_.constant)
// var stooge = {name: 'moe'};
// console.log(stooge === _.constant(stooge)());

_.delay = (func, wait, ...args) => {
  // console.log(arguments, 'line36')
  for (let arg of args) {
    setTimeout(func, wait, arg)

  }
}

export default _
