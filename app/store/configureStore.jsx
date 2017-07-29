var redux = require('redux');

var {searchTextReducer, showCompletedReducers, todosReducers} = require('reducers');


export var configure = () => {

    var reducers = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducers,
        todos: todosReducers
    })

    var store = redux.createStore(reducers, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};