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
            <div onClick={this.handleToggle(id)}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = ToDo;