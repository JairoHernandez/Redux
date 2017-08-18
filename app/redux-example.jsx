var redux = require('redux');

console.log('Starting redux example');

// state passed is the value before a triggered change.
var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'}; // ES5 version of passing in state = {name: 'Anonymous'}
    
    // console.log('New action:', action); // 1) New action: Object {type: "@@redux/INIT"} 3) New action: Object {type: "CHANGE_NAME", name: "Andrew"}
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.name};
        default:
            return state;
    }
};

// Store consists of search text, completed fields, todos array.
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes to your state. Function called everytime state changes.
var unsubscribe = store.subscribe(() => {
    var state = store.getState(); // Fires everytime state changes.

    console.log('Name is', state.name); // 4) Name should be andrew Object {name: "Anonymous"}
    document.getElementById('app').innerHTML = state.name;
});

var currentState = store.getState();
console.log('currentState', currentState); // 2) currentState Object {name: "Anonymous"}

// Triggers action to change state.
store.dispatch({type: 'CHANGE_NAME', name: 'Andrew'});
// unsubscribe();
store.dispatch({type: 'CHANGE_NAME', name: 'Emily'});




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