var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });
    describe('setToDo', () => {
        it('should setToDo with valid array', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];

            ToDoAPI.setToDos(todos);

            var actualToDos = JSON.parse(localStorage.getItem('todos'));

            expect(actualToDos).toEqual(todos);
        });

        it('should not setToDo invalid todos array', () => {
            var todos = {a: 'b'};

            ToDoAPI.setToDos(todos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    describe('getToDo', () => {
        it('should return empty array for bad localstorage data', () => {
            var todos = ToDoAPI.getToDos();

            expect(todos).toEqual([]);
        });

        it('should return todos if valid array in localstorage data', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualToDos = ToDoAPI.getToDos();

            expect(actualToDos).toEqual(todos);
        });
    });

});