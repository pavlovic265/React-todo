var React = require('react');

var ToDoSerach = React.createClass({

    handleSearch: function(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.serach.value;

        this.props.onSerach(showCompleted, searchText);
    },

    render: function() {
        return (
            <div>
                <div>
                    <input type="serach" ref="serach" placeholder="Search todos"
                        onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = ToDoSerach;