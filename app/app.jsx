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


ReactDOM.render(
  <p>Bilerplate 3 Project</p>,
  document.getElementById('app')
);
