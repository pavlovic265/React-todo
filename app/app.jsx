var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load fundation
//css! so that it can read css file
//style! loader so that it can inject it in html
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


var ToDoApp = require('ToDoApp');


var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addToDo('Study React Nativ'));
store.dispatch(actions.setSearchText('React'));
store.dispatch(actions.toggleShowCompleted());


ReactDOM.render(
  <ToDoApp/>,
  document.getElementById('app')
);
