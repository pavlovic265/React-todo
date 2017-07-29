var React = require('React');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedAddToDo, {AddToDo} from 'AddToDo';

describe('AddToDo', () => {
    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'New Todo';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todo.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when valid todo text', () =>{
        var todoText = '';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDo));

        addToDo.refs.todo.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});