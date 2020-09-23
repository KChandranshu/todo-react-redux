import {ADD_TODO, DELETE_TODO, GET_TODOS} from './types';

let next_id = 11

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: {
            id: next_id++,
            title
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}

const getTodos = (todos) => {
    return{
        type: GET_TODOS,
        payload: todos
    }
}

export const fetchTodos = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(todos => dispatch(getTodos(todos)))
        .catch(err => console.log(err))
    }
}