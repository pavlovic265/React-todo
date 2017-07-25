var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exist', () => {
        expect(ToDoApp).toExist();
    });

    it('should add todo to todos state on handleAddToDo', () => {
        var todoText = 'Drink coffee';
        var toDoApp = TestUtils.renderIntoDocument(<ToDoApp />);

        toDoApp.setState({todos: []});
        toDoApp.handleAddToDo(todoText);

        expect(toDoApp.state.todos.length).toBe(1);
        expect(toDoApp.state.todos[0].text).toBe(todoText);
        expect(toDoApp.state.todos[0].completed).toBe(false);
    });
    it('should toggle completed value when toggle called', () => {
        var toDoData = {
            id: 11,
            text: 'Test text',
            completed: false
        };
        var toDoApp = TestUtils.renderIntoDocument(<ToDoApp />)
        toDoApp.setState({todos: [toDoData]});

        expect(toDoApp.state.todos[0].completed).toBe(false);
        toDoApp.handleToggle(11);
        expect(toDoApp.state.todos[0].completed).toBe(true);
    });
});