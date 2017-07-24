var React = require('react');


var AddToDo = React.createClass({

    getInitialState: function(){
        return {
            text: ''
        }
    },

    handleSubmit: function(e){
        e.preventDefault();
        var valueTodo = this.refs.todo.value;

        if(valueTodo.length > 0 ) {
            this.refs.todo.value = '';
            this.props.onAddToDo(valueTodo);
        } else {
            this.refs.todo.focus();
        }

    },

    render: function() {
        
        return (
            <div>
                <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
                    <input type="text" ref="todo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add ToDo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddToDo;