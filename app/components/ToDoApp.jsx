var React = require('react');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({

    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Finish tutorial',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Start learning React Nativ',
                    completed: false
                }
            ]
        };
    },

    handleAddToDo: function(text){
        var {todos} = this.state;
        this.setState({
            todos: [
                ...todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowarCase()
        })
    },

    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((item) => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        this.setState({todos: updatedTodos});
    },

    render: function(){
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos} onToggle={this.handleToggle}/>
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        );
    }
});

module.exports = ToDoApp;