var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should call onSearch with enterd input text', () => {
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        toDoSearch.refs.search.value = 'Walk the dog';
        TestUtils.Simulate.change(toDoSearch.refs.search);

        expect(spy).toHaveBeenCalled(false, 'Walk the dog');
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        toDoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalled(true, '');
    });
});