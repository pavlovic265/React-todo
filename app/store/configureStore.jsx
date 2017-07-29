var redux = require('redux');

var {searchTextReducer, showCompletedReducers, todosReducers} = require('reducers');


export var configure = (initialState = {}) => {

    var reducers = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducers,
        todos: todosReducers
    })

    var store = redux.createStore(reducers, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};