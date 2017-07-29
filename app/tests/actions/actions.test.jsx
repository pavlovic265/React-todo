var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate serach text actions', () => {
        var action  = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });
    it('should generate add todo actions', () => {
        var action  = {
            type: 'ADD_TODO',
            text: 'Walk Lory'
        };

        var res = actions.addToDo(action.text);

        expect(res).toEqual(action);
    });
    it('should generate toggle show completed actions', () => {
        var action  = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });
    it('should generate toggle todo actions', () => {
        var action  = {
            type: 'TOGGLE_TODO',
            id: '123'
        };

        var res = actions.toggleToDo(action.id);

        expect(res).toEqual(action);
    });
});