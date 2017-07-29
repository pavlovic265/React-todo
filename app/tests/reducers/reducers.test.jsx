var expect = require('expect');
var df = require('deep-freeze-strict')
var moment = require('moment');

var reducers = require('reducers');


describe('Reducer', () => {
    describe('serachTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Some test'
            };

            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompleted', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducers(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todos', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk Lory'
            };

            var res = reducers.todosReducers(df(false), df(action));

            expect(res.length).toBe(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should add todos', () => {
        var todos = [
            {
                id: '123',
                text: 'Walk Lory',
                completed: false,
                createdAt: null,
                completedAt: '125'
            }
        ];
            var action = {
                type: 'ADD_TODOS',
                todos: todos
            };

            var res = reducers.todosReducers(df([]), df(action));

            expect(res.length).toBe(1);
            expect(res[0]).toEqual(todos[0]);
        });
        it('should toggle todo', () => {
            var todos = [
                {
                    id: '123',
                    text: 'Walk Lory',
                    completed: true,
                    createdAt: '123',
                    completedAt: '125'
                }
            ];
            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };

            var res = reducers.todosReducers(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(null);
        });
    });

});