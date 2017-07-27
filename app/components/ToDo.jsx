var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({

    handleToggle: function(id){
        return () => {
            this.props.onToggle(id);
        };
    },

    render: function(){
        var {id, text, completed, createdAt, completedAt} = this.props;
        var toDoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = function () {
            var message = 'Created ';
            var timestamp = createdAt;
            if(completed) {
                message = 'Completed: ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm A');
        }

        return (
            <div onClick={this.handleToggle(id)} className={toDoClassName}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo_subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = ToDo;