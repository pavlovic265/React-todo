var expect = require('expect');
var df = require('deep-freeze-strict')

var reducers = require('reducers');


describe('Reducer', () => {
    describe('serachTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SEARCH_TEXT',
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

            var res = reducers.showCompleted(df(false), df(action));

            expect(res).toEqual(true);
        });

    })
})