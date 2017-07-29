export var searchTextReducer = (state = '', action) => {
    switch(action.type) {
        case 'SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

export var showCompleted = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

