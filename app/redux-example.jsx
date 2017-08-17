var redux = require('redux');

console.log('Starting redux example');

// state passed is the value before a triggered change.
var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'}; // ES5 version of passing in state = {name: 'Anonymous'}
    
    console.log('New action:', action); // 1) New action: Object {type: "@@redux/INIT"} 3) New action: Object {type: "CHANGE_NAME", name: "Andrew"}
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.name};
        default:
            return state;
    }
};

// Store consists of search text, completed fields, todos array.
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState', currentState); // 2) currentState Object {name: "Anonymous"}

// Triggers action
store.dispatch({type: 'CHANGE_NAME', name: 'Andrew'});

console.log('Name should be andrew', store.getState()); // 4) Name should be andrew Object {name: "Anonymous"}





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