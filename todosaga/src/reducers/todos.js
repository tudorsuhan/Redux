import * as actions from '../actions/actionTypesTodo';

const todos = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_TODO_STATUS: 
            return { ...state, loading: true, }
        case actions.ADD_TODO_SUCCESS: 
            return [ ...state, { id: Date.now(), text: action.text, completed: false, } ]
        case actions.ADD_TODO_FAILURE: 
            return { ...state, error: action.error, }
        case 'TOGGLE_TODO': 
            return state.map(todo => 
                (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
            )
        default: 
            return state;
    }
}

export default todos;