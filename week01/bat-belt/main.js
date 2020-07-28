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


export default _
