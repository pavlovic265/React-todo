var React = require('react');

var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({

    getInitialState: function(){
        return {
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
        alert('new todo ', text);
    },

    render: function(){
        var {todos} = this.state;



        return (
            <div>
                <ToDoList todos={todos}/>
            </div>
        );
    }
});

module.exports = ToDoApp;