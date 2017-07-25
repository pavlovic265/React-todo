var React = require('react');

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
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Finish tutorial'
                },
                {
                    id: 4,
                    text: 'Start learning React Nativ'
                }
            ]
        };
    },

    handelAddToDo: function(text){
        var {todos} = this.state;
        todos.push({
            id: todos.length+1,
            text: text
        });
        this.setState({todos: todos});
    },

    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowarCase()
        })
    },

    render: function(){
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch} />
                <ToDoList todos={todos}/>
                <AddToDo onAddToDo={this.handelAddToDo} />
            </div>
        );
    }
});

module.exports = ToDoApp;