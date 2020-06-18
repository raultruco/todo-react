
import { actionTypes } from './actions';
import { addTodoSorted, updateTodoSorted } from '../services/utils';

export const initialState = {
    todos: [],
    initializing: true,
    error: ''
}

export function todoReducer(state, action) {
    switch (action.type) {
        case actionTypes.GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: addTodoSorted(state.todos, action.payload)
            }
        case actionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: updateTodoSorted(state.todos, action.payload)
            }
        case actionTypes.INITIALIZING:
            return {
                ...state,
                initializing: !!action.payload
            }
        case actionTypes.FETCHING:
            return {
                ...state,
                fetching: !!action.payload
            }
        case actionTypes.SAVING:
            return {
                ...state,
                saving: !!action.payload
            }
        case actionTypes.ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: {
            return { ...state };
        }
    }
}
