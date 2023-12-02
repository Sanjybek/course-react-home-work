function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}

function editTodo (todo) {
    return {
        type: 'EDIT_TODO',
        payload: todo,
    }
}
function onDoneTodo (data) {
    return {
        type: 'ON_DONE',
        payload: data
    }
}
function onCheckBox (id) {
    return {
        type: 'ON_CHECKBOX',
        payload: id
    }
}

export { addTodo, deleteTodo, editTodo ,  onDoneTodo, onCheckBox};