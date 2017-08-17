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

var store = redux.createStore(reducer);

console.log('currentState:', store.getState());

// Triggers action
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'work'});
console.log('Searchtext should be Funny boy', store.getState());



