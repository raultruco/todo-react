import axios from 'axios';
import { transformTodoResponse, transformTodoListResponse } from '../services/utils';

export const actionTypes = {
    GET_TODOS: 'GET_TODOS',
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    INITIALIZING: 'INITIALIZING',
    FETCHING: 'FETCHING',
    SAVING: 'SAVING',
    ERROR: 'ERROR'
}

const API_ENDPOINT = 'https://backend-test.pi-top.com/todo-test/v1';

export async function init(dispatch = null) {
    dispatch = dispatch || (() => { });
    dispatch({ type: actionTypes.INITIALIZING, payload: true });
    try {
        const todos = await axios.get(`${API_ENDPOINT}/todos`);
        dispatch({ type: actionTypes.GET_TODOS, payload: transformTodoListResponse(todos.data) });
    } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error })
    } finally {
        dispatch({ type: actionTypes.INITIALIZING, payload: false });
    }
}

export async function getTodos(dispatch) {
    dispatch = dispatch || (() => { });
    dispatch({ type: actionTypes.FETCHING, payload: true });
    try {
        const todos = await axios.get(`${API_ENDPOINT}/todos`);
        dispatch({ type: actionTypes.GET_TODOS, payload: transformTodoListResponse(todos.data) });
    } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error })
    } finally {
        dispatch({ type: actionTypes.FETCHING, payload: false });
    }
}

export async function getTodo(dispatch, id) {
    dispatch = dispatch || (() => { });
    dispatch({ type: actionTypes.FETCHING, payload: true });
    try {
        const todo = await axios.get(`${API_ENDPOINT}/todos/${id}`);
        dispatch({ type: actionTypes.GET_TODO, payload: transformTodoResponse(todo.data) });
    } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error })
    } finally {
        dispatch({ type: actionTypes.FETCHING, payload: false });
    }
}

export async function addTodo(dispatch, todo) {
    dispatch = dispatch || (() => { });
    dispatch({ type: actionTypes.SAVING, payload: true });
    try {
        const addedTodo = await axios.post(`${API_ENDPOINT}/todos`, todo);
        dispatch({ type: actionTypes.ADD_TODO, payload: addedTodo.data });
    } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error })
    } finally {
        dispatch({ type: actionTypes.SAVING, payload: false });
    }
}

export async function updateTodo(dispatch, todo) {
    dispatch = dispatch || (() => { });
    dispatch({ type: actionTypes.SAVING, payload: true });
    try {
        const updatedTodo = await axios.put(`${API_ENDPOINT}/todos/${todo.id}`, todo);
        dispatch({
            type: actionTypes.UPDATE_TODO, payload: updatedTodo.data
        });
    } catch (error) {
        dispatch({ type: actionTypes.ERROR, payload: error })
    } finally {
        dispatch({ type: actionTypes.SAVING, payload: false });
    }
}
