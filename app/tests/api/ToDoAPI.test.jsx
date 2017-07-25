var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });
    describe('setToDos', () => {
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
    describe('getToDos', () => {
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
    describe('filterToDos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        },{
            id: 2,
            text: 'Other text here',
            completed: false
        },{
            id: 3,
            text: 'Some other text here',
            completed: true
        }];

        it('should return all todos if showCopleted is true', () => {
            var filterToDos = ToDoAPI.filterToDos(todos, true, '');

            expect(filterToDos.length).toBe(3);
        });

        it('should return todos that are not completed', () => {
            var filterToDos = ToDoAPI.filterToDos(todos, false, '');

            expect(filterToDos.length).toBe(1);
        });

        it('should sorted by completed status', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, true, '');

            expect(filteredToDos[0].completed).toBe(false);
        });
        it('should filter todos todos by searched text', () => {
            var filterToDos = ToDoAPI.filterToDos(todos, true, 'some');

            expect(filterToDos.length).toBe(2);
        });

        it('should filter return all todos if searchText is empty', () => {
            var filterToDos = ToDoAPI.filterToDos(todos, true, '');

            expect(filterToDos.length).toBe(3);
        });
    });

});