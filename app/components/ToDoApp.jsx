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
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Finish tutorial'
                },
                {
                    id: uuid(),
                    text: 'Start learning React Nativ'
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
                    text: text
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

    render: function(){
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch} />
                <ToDoList todos={todos}/>
                <AddToDo onAddToDo={this.handleAddToDo} />
            </div>
        );
    }
});

module.exports = ToDoApp;