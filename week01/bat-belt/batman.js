const _ = {}

// _.compose = (...functions) => {
//     let returnFunc
//     for (let i=functions.length-1; i>-1; i--) {
//         let func = functions[i];
//         if (i === functions.length-1) {
//             returnFunc = func
//         } else {
            
//             returnFunc = returnFunc(func)
//         }
//     }
//     return returnFunc
// }

_.compose = (f, g) => {
    return function(arg) {
        return f(g(arg))
    }
}

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
console.log(welcome('moe'));

_.once = (func) => {

    var onceFunc = (used=false) => {
        if (!used) {
            func(arg)
            // var twiceFunc = (arg, used=true) => {
            //     if (!used) {
            //         func(arg)
            //     }
            // }
            // return twiceFunc
            
        }
        // used = true
    }
    let outFunc = onceFunc(true)
    return outFunc
}

var sayHi = _.once(() => console.log('hi'))

sayHi();
sayHi();


_.debounce = (func, wait) => {
    // func()
    let start = new Date()
    let debouncedFunc = () => {
        let end = new Date()
        if (end.getTime() - start.getTime() >= wait) {
            func()
        }
    }
    return debouncedFunc
}

sayHey5 = _.debounce(() => console.log('hey'), 5000)

setTimeout(sayHey5, 3000)
setTimeout(sayHey5, 4000)
setTimeout(sayHey5, 5000)
setTimeout(sayHey5, 6000)
setTimeout(sayHey5, 7000)