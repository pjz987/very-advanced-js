function reduce(array, func, start=null) {
    let doFirst = false;
    let accum
    if (start != null) {
        accum = start;
    } else {
        doFirst = true;
    };
    for (item of array) {
        if (doFirst) {
            accum = item;
        } else {
            accum = func(accum, item);
        }
        doFirst = false;
    };
    return accum;
}
let numArray = [1, 2, 3, 4, 5];
let sum = (accum, value) => accum + value;
console.log(reduce(numArray, sum))
// 15
console.log(reduce(numArray, sum, 6));
// 21





