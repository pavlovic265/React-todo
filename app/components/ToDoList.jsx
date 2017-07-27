var React = require('react');

var ToDo = require('ToDo');

var ToDoList = React.createClass({
    render: function(){

        var {todos, onToggle} = this.props;

        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">
                        Nothing ToDo
                    </p>
                );
            }
            return todos.map(function(todo){
                return (
                    <ToDo key={todo.id} {...todo} onToggle={onToggle} />
                );
            })
        }

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = ToDoList;