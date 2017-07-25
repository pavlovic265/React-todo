var $ = require('jquery');

module.exports = {
    filterToDos: function(todos, showCompleted, searchText){
        var filterToDos = todos;

        filterToDos = filterToDos.filter(function(todo){
            return !todo.completed || showCompleted; 
        })
        .filter(function(todo){
            return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) !== -1;
        });
        filterToDos.sort(function(todo1, todo2){
            if(!todo1.completed && todo2.completed) {
                return -1;
            }else if(todo1.completed && !todo2.completed) {
                return 1;
            }else {
                return 0;
            }
        });

        return filterToDos;
    },
    setToDos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getToDos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
            todos = JSON.parse(stringTodos);
        }catch(e) {
            return [];
        }

        return $.isArray(todos) ? todos: [];
    }
}