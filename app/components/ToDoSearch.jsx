var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ToDoSearch = React.createClass({

    handleSearch: function(){
        var searchText = this.refs.search.value;
        var {dispatch} = this.props;

        dispatch(actions.setSearchText(searchText));
    },

    handleShowCompleted: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var {dispatch} = this.props;
        dispatch(actions.toggleShowCompleted());
    },

    render: function() {
        var {showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="search" placeholder="Search todos"
                        onChange={this.handleSearch} value={searchText}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted"
                            onChange={this.handleShowCompleted} checked={showCompleted}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }

)(ToDoSearch);