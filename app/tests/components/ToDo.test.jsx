var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {
    it('should exist', () => {
        expect(ToDo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var spy = expect.createSpy();
        var toDoData = {
            id: 199,
            text: 'Write todo test',
            completed: true
        };
        var toDo = TestUtils.renderIntoDocument(<ToDo {...toDoData} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(toDo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalled(199);
    });
});