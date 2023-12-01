import { createStore } from "redux"

const initialState = {
    todoList:  [],

    posts: [],
    users: []
}
const todoReducer =  (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return{
            ...state,
            todoList: [...state.todoList, action.payloud]
        }
        case 'DELETE_TODO':
        return {
            ...state,
            todoList: state.todoList.filter((i) => i.id !== action.payloud)
        }
        case 'EDIT_TODO':
        return {
            ...state,
            todoList: state.todoList.map((todo) => todo.id === action.payloud.id ? action.payloud  : todo)
        }
        default: 
            return state
    }
    
}

function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payloud: todo
    }
}
function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payloud: id

    }
}
function editTodo (todo) {
    return {
        type: 'EDIT_TODO',
        payloud: todo
    }
}

export {addTodo, deleteTodo, editTodo}


export const store = createStore(todoReducer)