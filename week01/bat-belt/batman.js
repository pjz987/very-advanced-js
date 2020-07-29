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
    
    var onceFunc = (func) => {
        return func

    }
    return onceFunc
}

var plus10 = _.once((x) => x + 10)

console.log(plus10(10));
console.log(plus10(11));
console.log(plus10(12));


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