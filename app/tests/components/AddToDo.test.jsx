var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should call onAddToDo prop with valid data', () => {
        var todoText = 'New Todo';
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todo.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddToDo prop with invalid data', () =>{
        var todoText = '';
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todo.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});