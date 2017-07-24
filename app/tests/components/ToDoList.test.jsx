var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
    it('should exist', () => {
        expect(ToDoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something'
            }, {
                id: 2,
                text: 'Check mail'
            }
        ];

        var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    })
});