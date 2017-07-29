var React = require('react');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';

export var ToDoApp = React.createClass({
    render: function(){
        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                 <div className="row root">
                      <div className="column">
                         <div className="container"> 
                            <ToDoSearch/>
                            <ToDoList/>
                            <AddToDo />
                         </div> 
                     </div>
                  </div>
            </div>
        );
    }
});

export default ToDoApp;