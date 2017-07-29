var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

export var ToDoApp = React.createClass({

    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: ToDoAPI.getToDos()
        };
    },

    componentDidUpdate: function() {
        ToDoAPI.setToDos(this.state.todos);
    },

    handleAddToDo: function(text){
        var {todos} = this.state;
        this.setState({
            todos: [
                ...todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                }
            ]
        });
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    render: function(){
        var {todos, showCompleted, searchText} = this.state;
        var filterToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                 <div className="row root">
                      <div className="column">
                         <div className="container"> 
                            <ToDoSearch onSearch={this.handleSearch}/>
                            <ToDoList/>
                            <AddToDo onAddToDo={this.handleAddToDo} />
                         </div> 
                     </div>
                  </div>
            </div>
        );
    }
});

export default ToDoApp;