var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export var configure = () => {

    var reducer = redux.combineReducers({
    name: nameReducer, // name state to be manged by nameReducer
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
});

// Store consists of search text, completed fields, todos array.
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

return store;
};