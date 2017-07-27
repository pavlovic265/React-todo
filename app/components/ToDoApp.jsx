var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({

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

    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((item) => {
            if(item.id === id) {
                item.completed = !item.completed;
                item.completedAt = item.completed ? moment().unix() : null;
            }
            return item;
        });
        this.setState({todos: updatedTodos});
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
                            <ToDoList todos={filterToDos} onToggle={this.handleToggle}/>
                            <AddToDo onAddToDo={this.handleAddToDo} /> 
                         </div> 
                     </div>
                  </div>
            </div>
        );
    }
});

module.exports = ToDoApp;