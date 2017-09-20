var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes to your state. Function called everytime state changes.
var unsubscribe = store.subscribe(() => {
    var state = store.getState(); // Fires everytime state changes.

    console.log('Name is', state.name); // 4) Name should be andrew Object {name: "Anonymous"}
    // document.getElementById('app').innerHTML = state.name;
    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';    
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
    }
});

var currentState = store.getState();
console.log('currentState:', currentState); // 2) currentState Object {name: "Anonymous"}

actions.fetchLocation();

// Triggers action to change state.
store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('RunninG'));
store.dispatch(actions.addHobby('WalkinG'));
store.dispatch(actions.removeHobby(2));

// unsubscribe();
store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad MaX', 'ActioN'));
store.dispatch(actions.addMovie('The NotebooK', 'RomancE'));
store.dispatch(actions.removeMovie(1));


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