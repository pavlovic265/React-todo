var React = require('react');


var ToDo = React.createClass({

    handleToggle: function(id){
        return () => {
            this.props.onToggle(id);
        };
    },

    render: function(){
        var {id, text, completed} = this.props;

        return (
            <div onClick={this.handleToggle(id)}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
});

module.exports = ToDo;