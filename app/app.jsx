var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load fundation
//css! so that it can read css file
//style! loader so that it can inject it in html
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

import ToDoApp from 'ToDoApp';


var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  ToDoAPI.setToDos(state.todos);
});

var initialToDos = ToDoAPI.getToDos();

store.dispatch(actions.addToDos(initialToDos));



ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
