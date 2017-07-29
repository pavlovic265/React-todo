var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddToDo = React.createClass({

    getInitialState: function(){
        return {
            text: ''
        }
    },

    handleSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var valueTodo = this.refs.todo.value;

        if(valueTodo.length > 0 ) {
            this.refs.todo.value = '';
            dispatch(actions.addToDo(valueTodo))
        } else {
            this.refs.todo.focus();
        }

    },

    render: function() {
        
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
                    <input type="text" ref="todo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add ToDo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddToDo);