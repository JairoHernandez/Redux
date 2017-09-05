// 1 Change the search text call it CHANGESEARCHTEXT
// 2 Create reducer that handles CHANGESEARCHTEXT action type. It should update searchText property.
// 3 Dispatch the action and console.log the new state.

var redux = require('redux');

console.log('Starting todo redux example')

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};



var reducer = (state=stateDefault, action) => {

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {...state, searchText: action.searchText};
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
store.subscribe(() => {
    var state = store.getState(); // Fires everytime state changes.

    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState:', store.getState());

// Triggers action to change state.
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'work'});
// console.log('Searchtext should be Funny boy', store.getState());
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'dog'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'Something else'});




