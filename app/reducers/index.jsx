// state passed is the value before a triggered change.

// Name reducer and action generators
// --------------------
export var nameReducer = (state='Anonymous', action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return action.name; // state is no longer an object like in oldReducer it's now an array so no attributes needed.
        default:
            return state;
    }
};

// Hobbies reducer and action generators
// --------------------
var nextHobbyId = 1;
export var hobbiesReducer = (state=[], action) => { // Simplified since no need to care about properties in an array unlike an object.
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

// Movies reducer and action generators
// --------------------
var nextMovieId = 1;
export var moviesReducer = (state=[], action) => {
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

// Map reducer and action generators
// --------------------
export var mapReducer = (state={isFetching: false, url: undefined}, action) => {
    switch(action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};
