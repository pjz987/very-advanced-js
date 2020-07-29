const _ = {}

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

_.delay = (func, wait, ...arguments) => {
  // console.log(arguments, 'line36')
  for (let arg of arguments) {
    setTimeout(func, wait, arg)

  }
}

const delayFunc = (arg) => {
  // console.log(args, 'line44')
  console.log(arg)

  // for (let arg of args) {
  // }
}
// delayFunc(1,2,3)
_.delay(delayFunc, 1500, 1, 2, 3)







// export default _
