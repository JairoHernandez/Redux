var redux = require('redux');

console.log('Starting redux example');

// state passed is the value before a triggered change.

// Name reducer and action generators
// --------------------
var nameReducer = (state='Anonymous', action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return action.name; // state is no longer an object like in oldReducer it's now an array so no attributes needed.
        default:
            return state;
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    };
};

// Hobbies reducer and action generators
// --------------------
var nextHobbyId = 1;
var hobbiesReducer = (state=[], action) => { // Simplified since no need to care about properties in an array unlike an object.
    switch(action.type) {
        case 'ADD_HOBBY':
            return [ 
                ...state, // state is no longer an object with properties like in oldReducer it's now an array so no attributes needed.
                {
                    id: nextHobbyId++, // Creates brand new object with these properties. Assigns to id and then increments
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

// Movies reducer and action generators
// --------------------
var nextMovieId = 1;
var moviesReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
};

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

// Map reducer and action generators
// --------------------

var mapReducer = (state={isFetching: false, url: undefined}, action) => {
    switch(action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            }
        default:
            return state
    }
};

var startLocationFetch = () => {
    return { type: 'START_LOCATION_FETCH' }; // type is always required even if you're not passing in parameter.
};

var completeLocationFetch = (url) => {
    return {
        type: COMPLETE_LOCATION_FETCH,
        url 
    };
};

var fetchLocation = () => {
    // Let app know we've started fetching process
    store.dispatch(startLocationFetch);

    axios.get('http://ipinfo.io').then(function(res) {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.come?q=';

        store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};

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

// Subscribe to changes to your state. Function called everytime state changes.
var unsubscribe = store.subscribe(() => {
    var state = store.getState(); // Fires everytime state changes.

    console.log('Name is', state.name); // 4) Name should be andrew Object {name: "Anonymous"}
    document.getElementById('app').innerHTML = state.name;
    console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState:', currentState); // 2) currentState Object {name: "Anonymous"}

fetchLocation();

// Triggers action to change state.
store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('RunninG'));
store.dispatch(addHobby('WalkinG'));
store.dispatch(removeHobby(2));

// unsubscribe();
store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad MaX', 'ActioN'));
store.dispatch(addMovie('The NotebooK', 'RomancE'));
store.dispatch(removeMovie(1));


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