var redux = require('redux');

console.log('Starting redux example');


// state passed is the value before a triggered change.
var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'}; // ES5 version of passing in state = {name: 'Anonymous'}
    return state;
};

// Store consists of search text, completed fields, todos array.
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);







































// function changeProp(obj) {
//     return {
//         ...obj,
//         name: 'Jen'
//     }
//     /** Causes both console.log to output Jen, which is not a pure fuction.*/
//     //obj.name = 'Jen';
//     //return obj;
// }

// var startingValue = {name: 'Andrew', age: 25};
// var res = changeProp(startingValue);

// console.log(startingValue);
// console.log(res);