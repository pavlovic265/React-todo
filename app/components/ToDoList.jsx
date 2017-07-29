var React = require('react');
var {connect} = require('react-redux');

import ToDo from 'ToDo';

export var ToDoList = React.createClass({
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
                    <ToDo key={todo.id} {...todo} />
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

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(ToDoList);