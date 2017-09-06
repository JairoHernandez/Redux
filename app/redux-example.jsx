var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

// state passed is the value before a triggered change.
var reducer = (state=stateDefault, action) => {
    //state = state || {name: 'Anonymous'}; // ES5 version of passing in state = {name: 'Anonymous'}
    
    // console.log('New action:', action); // 1) New action: Object {type: "@@redux/INIT"} 3) New action: Object {type: "CHANGE_NAME", name: "Andrew"}
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.name};
        case 'ADD_HOBBY':
            return {
                ...state, // Grabs all properties from existing state
                hobbies: [ // then overrides properties in hobbies array.
                    ...state.hobbies, // Grabs properties from existing hobbies array using ES6 spread.
                    {
                        id: nextHobbyId++, // Creates brand new object with these properties.
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id) 
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
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
    console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState:', currentState); // 2) currentState Object {name: "Anonymous"}

// Triggers action to change state.
store.dispatch({type: 'CHANGE_NAME', name: 'Andrew'});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

// unsubscribe();
store.dispatch({type: 'CHANGE_NAME', name: 'Emily'});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Mad Max',
    genre: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'The Notebook',
    genre: 'Romance'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});

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