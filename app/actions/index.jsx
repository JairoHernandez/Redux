export var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    };
};

export var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

export var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

export var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};

export var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

export var startLocationFetch = () => {
    return { type: 'START_LOCATION_FETCH' }; // type is always required even if you're not passing in parameter.
};

export var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url 
    };
};

export var fetchLocation = () => {
    // Let app know we've started fetching process
    // If u forget toe call startLocationFetch() without paranthesis you see this error.
    // Actions must be plain objects. Use custom middleware for async actions
    store.dispatch(startLocationFetch()); 

    axios.get('http://ipinfo.io').then(function(res) {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q=';

        store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};