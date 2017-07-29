var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectToDoSearch, {ToDoSearch} from 'ToDoSearch';

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should disptche SET_SEARCH_TEXT on input change', () => {
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Walk the dog'
        };

        toDoSearch.refs.search.value = 'Walk the dog';
        TestUtils.Simulate.change(toDoSearch.refs.search);

        expect(spy).toHaveBeenCalled(action);
    });

    it('should disptche TOGGLE_SHOW_COMPLETEd when checkbox checked', () => {
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        toDoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalled(action);
    });
});